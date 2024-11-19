import { useEffect, useRef, useState } from "react"

const DateTimeViewer = () => {
    const [time, setTime] = useState(formatTime());
    const IntervalRef = useRef();
    function formatTime() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        const formattedDate = new Date().toLocaleString('en-US', options);
        return formattedDate;
    }

    useEffect(() => {
        IntervalRef.current = setInterval(() => {
            const formattedDate = formatTime();
            setTime(formattedDate);
        }, 1000);
        return () => {
            clearInterval(IntervalRef.current);
        }
    }, []);


    return (
        <div className="datetime-text">
            <text>{time}</text>
        </div>
    )
}

export default DateTimeViewer