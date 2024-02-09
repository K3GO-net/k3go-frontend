export const renderAddress = (address: `{0x${string}}` | any) => {
  return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
};
