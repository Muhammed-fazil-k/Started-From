import React, { useEffect, useState } from "react";

const Counter = ({ startFrom }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDiff = Math.abs(currentDate.getTime() - startFrom.getTime());
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // difference in days
      const hoursDiff = Math.floor((timeDiff / (1000 * 60 * 60)) % 24); // difference in hours
      const minsDiff = Math.floor((timeDiff / (1000 * 60)) % 60); // difference in minutes

      setDays(daysDiff);
      setHours(hoursDiff);
      setMins(minsDiff);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <h1>Day{days > 1 && "s"}</h1>
      <p>{days}</p>
      <h1>Hour{hours > 1 && "s"}</h1>
      <p>{hours}</p>
      <h1>Minute{mins > 1 && "s"}</h1>
      <p>{mins}</p>
    </div>
  );
};

export default Counter;
