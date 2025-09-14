import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { OTP_LENGTH } from "@/constants";
import type { ControllerRenderProps } from "react-hook-form";

type OtpSlotProps = {
    index: number;
};

function OtpSlot({ index }: OtpSlotProps) {
    return (
        <InputOTPGroup>
            <InputOTPSlot index={index} className="border-blue-700" />
        </InputOTPGroup>
    );
}

type OtpInputProps = {
    field: ControllerRenderProps<
        {
            otp: string;
        },
        "otp"
    >;
    time: number;
};

export function OtpInput({ field, time }: OtpInputProps) {
    return (
        <InputOTP maxLength={OTP_LENGTH} {...field} disabled={time === 0}>
            {Array.from({ length: OTP_LENGTH }, (_, i) => (
                <OtpSlot index={i} key={i} />
            ))}
        </InputOTP>
    );
}

export default OtpInput;
