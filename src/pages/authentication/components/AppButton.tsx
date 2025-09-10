import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<typeof Button>;

type AppButtonProps = {
    className: string;
    children: ReactNode;
    isSubmitting?: boolean;
} & ButtonProps;

function AppButton({
    className,
    children,
    isSubmitting = false,
    ...props
}: AppButtonProps) {
    const hoverStyle =
        props.variant === "outline"
            ? "hover:text-blue-800"
            : "hover:bg-blue-800";

    return (
        <Button
            className={`border-blue-700 w-full cursor-pointer focus:shadow-2xl focus:border-0 ${hoverStyle} ${className}`}
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
