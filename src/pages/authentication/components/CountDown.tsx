import { useEffect, type Dispatch, type SetStateAction } from "react";

type CountDownProps = {
    time: number;
    setTime: Dispatch<SetStateAction<number>>;
};

function CountDown({ time, setTime }: CountDownProps) {
    useEffect(() => {
        const timer = setInterval(
            () => setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0)),
            1000
        );

        return () => clearInterval(timer);
    }, [time]);

    return <div>00:{time.toString().padStart(2, "0")}</div>;
}

export default CountDown;
