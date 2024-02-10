import { Dialog, DialogContent } from "../common/Dialog";

export const DialogResult = ({
  key,
  open,
  closeModal,
}: {
  key: number;
  open: boolean;
  closeModal: () => void;
}) => {
  console.log(key);

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white">
        <div className="p-10 flex flex-col items-center gap-6">
          <p>Your've acquired {key} keys</p>
          <div>
            <button>Check Dashboard</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
