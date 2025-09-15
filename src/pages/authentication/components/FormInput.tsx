import type { LucideIcon } from "lucide-react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { InputHTMLAttributes } from "react";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    fieldName: Path<T>;
    Icon: LucideIcon;
    label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "form">;

function FormInput<T extends FieldValues>({
    form,
    fieldName,
    Icon,
    label,
    ...props
}: FormInputProps<T>) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="relative">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Icon
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                            />
                            <Input className="pl-8" {...field} {...props} />
                        </div>
                    </FormControl>
                    <FormMessage className="absolute -bottom-1 translate-y-full text-xs" />
                </FormItem>
            )}
        />
    );
}

export default FormInput;
