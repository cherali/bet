import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/basics/select";
import React from "react";

type Option = {
  value: string;
  label: string;
};

interface AppSelectProps {
  placeholder?: string;
  options: Option[];
  className?: string;
  defaultValue?: string;
}

function AppSelect({
  placeholder,
  options,
  className,
  defaultValue = undefined,
}: AppSelectProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppSelect;
