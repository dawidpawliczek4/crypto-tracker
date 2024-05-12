import { LegacyRef, forwardRef } from "react";
import classnames from "classnames";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";

type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-white data-[disabled]:pointer-events-none data-[highlighted]:bg-primaryBlue data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef as LegacyRef<HTMLDivElement>}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
