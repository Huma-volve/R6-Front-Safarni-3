import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

type ErrorMsgProps = {
    msg: string;
};

function ErrorMsg({ msg }: ErrorMsgProps) {
    return (
        <Alert
            variant="destructive"
            className="border-0 bg-transparent w-fit mx-auto my-0"
        >
            <AlertCircleIcon />
            <AlertTitle>{msg}</AlertTitle>
        </Alert>
    );
}

export default ErrorMsg;
