export const EarningTabs = () => {
  return (
    <div className="flex flex-col gap-2 py-[60px]">
      <div className=" max-w-[400px] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Stake $K3 Rewards</p>
          <p className="text-lg font-medium">0.35 ETH</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Blast Native Yield</p>
          <p className="text-lg font-medium">0.5 ETH</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Collabs Revenue Share</p>
          <p className="text-lg font-medium">0.5 ETH</p>
        </div>
      </div>
      <div className="w-full h-[1px] border-t border-gray-500 border-dashed max-w-[500px]"></div>
      <div className="flex items-center justify-between max-w-[500px]">
        <p className="text-2xl font-semibold">Total</p>
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold">1.35 ETH</p>
          <button className="px-3 py-1 bg-purple-500 text-white">
            Claimable
          </button>
        </div>
      </div>
    </div>
  );
};
