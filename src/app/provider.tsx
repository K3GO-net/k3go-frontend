"use client";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { merge } from "lodash";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  bsc,
  optimism,
  optimismGoerli,
  polygon,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { argentWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import {
  RainbowKitProvider,
  Theme,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";

const { publicClient, webSocketPublicClient, chains } = configureChains(
  [
    mainnet,
    bsc,
    arbitrum,
    polygon,
    optimism,
    avalanche,
    arbitrumGoerli,
    optimismGoerli,
  ],
  [publicProvider()]
);

const projectId = "11d5e7584f34946e8763edad9c3b7e4f";

const { wallets } = getDefaultWallets({
  appName: "KOL3 App",
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
    ],
  },
]);

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const customTheme = merge(darkTheme(), {
  colors: {
    modalBackground: "#0E111B",
  },
  radii: {
    modal: "16px",
  },
  shadows: {
    dialog: "0px 0px 16px 0px rgba(105, 91, 255, 0.50)",
    selectedWallet: "0px 0px 30px 0px rgba(161, 145, 243, 0.10)",
  },
} as Theme);

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={chains}
        theme={customTheme}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
