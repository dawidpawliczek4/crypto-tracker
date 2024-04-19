"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { addCoin } from "~/server/queries";

interface AddTransactionProps {}

const AddTransaction: React.FC<AddTransactionProps> = ({}) => {
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState("btc");
  const handleTransaction = () => {
    addCoin(id, quantity);
  };
  return (
    <div className="flex w-full justify-end p-4">
      <Dialog.Root>
        <Dialog.Trigger>
          <span className="shadow-blackA4 hover:bg-primaryBlue/90 bg-primaryBlue inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Add transaction
          </span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-seco data-[state=open]:animate-overlayShow bg-blackA6 fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow bg-secondaryDark fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] focus:outline-none">
            <Dialog.Title className="m-0 text-[17px] font-medium text-white">
              Add transaction
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
              Make changes to your transaction here. Click save when you're
              done.
            </Dialog.Description>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-white"
                htmlFor="name"
              >
                Id
              </label>
              <input
                className="bg-primaryDark shadow-mauve11 inline-flex  h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                value={id}
                onChange={(e) => setId(e.target.value)}
                defaultValue="btc"
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-white"
                htmlFor="username"
              >
                Quantity
              </label>
              <input
                className="shadow-mauve11 bg-primaryDark  inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                defaultValue="1"
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  onClick={handleTransaction}
                >
                  Save changes
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default AddTransaction;
