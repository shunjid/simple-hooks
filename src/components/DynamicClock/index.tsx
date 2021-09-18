import React, {useState, useEffect} from 'react';

const DynamicClock = (): JSX.Element => {
    const [time, setTime]: [
        time: Date,
        setTime: React.Dispatch<React.SetStateAction<Date>>
    ] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    }, [time, setTime]);

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Time now: {time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default DynamicClock;
