import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/shared/ui/tooltip";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ButtonConnectCustom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        const handelOpenModal = () => {
          if (!connected) {
            openConnectModal();
          }
          if (chain?.unsupported) {
            openChainModal();
          }
          openAccountModal();
        };
        if (!connected || chain?.unsupported) {
          return (
            <div
              onClick={handelOpenModal}
              className="z-50 relative bg-blue-500 flex flex-row justify-center items-center cursor-pointer gap-6 md:px-4 md:py-3 px-2 py-1 rounded-full md:gap-2.5 text-white md:text-paragraph-1 text-paragraph-2 font-bold"
            >
              {(() => {
                if (!connected) {
                  return (
                    <div className="text-base font-bold text-neutral-dark-1 font-inter z-20">
                      Connect Wallet
                    </div>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <div className="text-base font-bold text-neutral-dark-1 font-inter z-20">
                      Wrong network
                    </div>
                  );
                }
              })()}
            </div>
          );
        } else {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    onClick={handelOpenModal}
                    className="z-50 relative md:px-4 md:py-3 hover:cursor-pointer flex items-center justify-center rounded-full text-white md:gap-x-[10px] gap-x-1.5 bg-blue-500"
                  >
                    <div className="z-20 md:text-paragraph-1 text-paragraph-2 font-bold text-neutral-dark-1">
                      {account.address.substring(0, 6)}...
                      {account.address.substring(
                        account.address.length - 4,
                        account.address.length
                      )}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-white !px-7 !rounded-full text-lg">
                  <a href={`/kols/${account.address}`}>User Profile</a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        }
      }}
    </ConnectButton.Custom>
  );
};
