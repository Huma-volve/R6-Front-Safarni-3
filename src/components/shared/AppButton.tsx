import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<typeof Button>;

type AppButtonProps = {
    children: ReactNode;
    isSubmitting?: boolean;
} & ButtonProps;

function AppButton({
    children,
    isSubmitting = false,
    ...props
}: AppButtonProps) {
    return (
        <Button
            className={`border-blue-700 w-full cursor-pointer ${
                props.variant === "outline"
                    ? "hover:text-blue-800 text-blue-700"
                    : "hover:bg-blue-800 bg-blue-700"
            }`}
            disabled={isSubmitting}
            {...props}
        >
            {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
            ) : (
                children
            )}
        </Button>
    );
}

export default AppButton;
