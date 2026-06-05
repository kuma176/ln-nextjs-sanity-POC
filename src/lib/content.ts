import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;

export function toButtonVariant(value: string | undefined): ButtonVariant {
  if (
    value === "default" ||
    value === "primary" ||
    value === "secondary" ||
    value === "tertiary" ||
    value === "dark" ||
    value === "outline" ||
    value === "ghost" ||
    value === "destructive" ||
    value === "link" ||
    value === "link-dark"
  ) {
    return value;
  }

  return "primary";
}