import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

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

export function OtpInput() {
    return (
        <InputOTP maxLength={5}>
            <OtpSlot index={0} />
            <OtpSlot index={1} />
            <OtpSlot index={2} />
            <OtpSlot index={3} />
            <OtpSlot index={4} />
        </InputOTP>
    );
}

export default OtpInput;
