import { useModal } from "@/src/hooks/useModal";
import { DialogReject } from "../Dialog/DialogReject";
import { Button } from "../shared/ui/button";
import { DialogGigs } from "../Report/DialogGigs";

export const OfferMessage = ({
  description,
  budget,
  deadline,
  currency,
}: {
  description: string;
  budget: number;
  deadline: string;
  currency: string;
}) => {
  const {
    open: openReject,
    openModal: openModalReject,
    closeModal: closeModalReject,
  } = useModal();

  const {
    open: openFinish,
    openModal: openModalFinish,
    closeModal: closeModalFinish,
  } = useModal();

  return (
    <div className="flex justify-between">
      <div></div>
      <div className="max-w-[800px] flex flex-col gap-4 border border-gray-200 rounded-lg p-2">
        <p className="font-semibold text-base mb-2">Offer Created:</p>
        <p>
          {budget} {currency} for 10,000 followers {deadline}
        </p>
        <p>{description}</p>
        <div className="flex items-center justify-around">
          <Button onClick={openModalFinish}>Accept</Button>
          <Button className="bg-red-500 text-white" onClick={openModalReject}>
            Reject
          </Button>
        </div>
      </div>
      <DialogGigs
        open={openFinish}
        closeModal={closeModalFinish}
        budget={budget}
        currency={currency}
      />

      <DialogReject
        open={openReject}
        closeModal={closeModalReject}
        budget={budget}
        currency={currency}
      />
    </div>
  );
};
