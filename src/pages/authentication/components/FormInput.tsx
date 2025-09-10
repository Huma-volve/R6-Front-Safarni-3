import type { LucideIcon } from "lucide-react";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    fieldName: Path<T>;
    label: string;
    placeholder: string;
    Icon: LucideIcon;
};

function FormInput<T extends FieldValues>({
    form,
    fieldName,
    label,
    placeholder,
    Icon,
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
                            <Input
                                type={fieldName}
                                placeholder={placeholder}
                                className="pl-8"
                                {...field}
                            />
                        </div>
                    </FormControl>
                    <FormMessage className="absolute -bottom-1 translate-y-full text-xs" />
                </FormItem>
            )}
        />
    );
}

export default FormInput;
