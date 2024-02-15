import { X } from "lucide-react";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { Textarea } from "../shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shared/ui/select";
import { Button } from "../shared/ui/button";
import { useState } from "react";
import { DatePicker } from "../shared/ui/datepicker";

export const DialogCreateOffer = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  const [budget, setBudget] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChangeBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;
    const valueAsNumber = Number(value);
    setBudget(valueAsNumber);
  };

  const handleSelectCurrency = (value: string) => {
    setCurrency(value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setDescription(value);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Collab Offer Creation</p>
            <button>
              <X />
            </button>
          </div>

          <div>
            <p>Collab Description:</p>
            <Textarea value={description} onChange={handleChangeDescription} />
          </div>

          <div className="flex items-end justify-around">
            <div>
              <p>Budget</p>
              <input
                value={budget}
                onChange={handleChangeBudget}
                className="border border-input rounded-md px-4 py-1.5"
              />
            </div>
            <Select onValueChange={handleSelectCurrency}>
              <SelectTrigger className="max-w-[200px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem value="K3">K3</SelectItem>
                <SelectItem value="USDT">USDT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p>Deadline</p>
            <DatePicker />
          </div>

          <Button>
            Deposit {budget} {currency} to create offer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
