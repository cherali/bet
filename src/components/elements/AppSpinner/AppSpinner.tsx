import { Loader2 } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/uiUtils";

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      xSmall: "!size-4",
      small: "!size-6",
      medium: "!size-8",
      large: "!size-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface SpinnerContentProps extends VariantProps<typeof loaderVariants> {
  className?: string;
}

function Spinner({ size, className }: SpinnerContentProps) {
  return <Loader2 className={cn(loaderVariants({ size }), className)} />;
}

export default Spinner;
