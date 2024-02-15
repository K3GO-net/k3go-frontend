import { useModal } from "@/src/hooks/useModal";
import { Button } from "../shared/ui/button";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { DialogCreateOffer } from "./DialogCreateOffer";

export const DialogReject = ({
  open,
  closeModal,
  budget,
  currency,
}: {
  open: boolean;
  closeModal: () => void;
  budget: number;
  currency: string;
}) => {
  const {
    open: openCreateOffer,
    openModal: openModalCreateOffer,
    closeModal: closeModalCreateOffer,
  } = useModal();

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-4 rounded-lg p-2">
          <p className="font-semibold text-base mb-2">Offer Reject:</p>

          <p>Detail:</p>
          <p className="pl-2">
            - {budget} {currency} for 10,000 followers in 2 months
          </p>
          <p className="pb-4 pl-2">- Released on Collab completion</p>

          <div>
            Comment: we agrees on {budget + 1} {currency}
          </div>
          <div className="flex items-center justify-around">
            <Button onClick={openModalCreateOffer}>Renew Offer</Button>
            <Button className="bg-red-500 text-white" onClick={closeModal}>
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
      <DialogCreateOffer
        open={openCreateOffer}
        closeModal={closeModalCreateOffer}
      />
    </Dialog>
  );
};
