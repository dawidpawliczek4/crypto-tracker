"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { addCoin } from "~/server/queries";
import useCoin from "~/providers/useCoin";
import SelectItem from "./SelectItem";
import { toast } from "sonner";

const AddTransaction: React.FC = ({}) => {
  const { coins } = useCoin();

  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState("bitcoin");

  const handleTransaction = async () => {
    try {
      await addCoin(id, quantity);
      toast.success("Transaction added");
    } catch (error) {
      toast.error("Failed to add transaction");
    }
  };

  return (
    <div className="flex w-full justify-end">
      <Dialog.Root>
        <Dialog.Trigger>
          <span className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-primaryBlue px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-primaryBlue/90 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Add transaction
          </span>
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
                htmlFor="name"
              >
                Id
              </label>
              <Select.Root
                value={id}
                onValueChange={(value) => {
                  setId(value);
                }}
              >
                <Select.Trigger className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded border-[1px] border-mauve11 bg-slate-900 px-[15px] text-[13px] font-semibold leading-none text-white shadow-[0_2px_10px] shadow-black/10  outline-none data-[placeholder]:text-mauve11">
                  <Select.Value />
                  <Select.Icon className="text-white">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden rounded-md bg-slate-900 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-white">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                      <Select.Group>
                        {coins.map((coin) => (
                          <SelectItem key={coin.id} value={coin.id}>
                            {coin.name}
                          </SelectItem>
                        ))}
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </fieldset>
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
    </div>
  );
};

export default AddTransaction;
