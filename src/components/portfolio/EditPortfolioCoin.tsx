import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { addTransaction } from "~/server/queries";
import { toast } from "sonner";
import useCoin from "~/providers/useCoin";

interface EditPortfolioCoinProps {
  quantityOld: number;
  id: string;
}

const EditPortfolioCoin: React.FC<EditPortfolioCoinProps> = ({
  quantityOld,
  id,
}) => {
  const [quantity, setQuantity] = useState(quantityOld);
  const { coins } = useCoin();
  const handleTransaction = async () => {
    const price = coins.find((coin) => coin.id === id)?.current_price;
    if (!price) {
      toast.error("Coin not found");
      return;
    }
    try {
      await addTransaction(id, quantity, price);
      toast.success("Transaction added");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span className="">+</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-seco fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-secondaryDark p-[25px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-white">
            Add transaction
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal text-mauve11">
            Make changes to your transaction here. Click save when you&apos;re
            done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-white"
              htmlFor="username"
            >
              Quantity
            </label>
            <input
              className="inline-flex h-[35px]  w-full flex-1 items-center justify-center rounded-[4px] bg-slate-900 px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-mauve11 outline-none focus:shadow-[0_0_0_2px]"
              id="username"
              type="number"
              step="0.0000000001"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none"
                onClick={handleTransaction}
              >
                Save
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-white hover:bg-black/30 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditPortfolioCoin;
