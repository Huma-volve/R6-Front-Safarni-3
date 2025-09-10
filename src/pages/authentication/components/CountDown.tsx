import { useState } from "react";

function CountDown() {
    const [time, setTime] = useState(30);

    return <div>00:{time}</div>;
}

export default CountDown;
