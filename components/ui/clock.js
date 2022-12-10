import { Fragment, useState, useEffect } from "react";
import classes from "./clock.module.css";
const Clock = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  let interval;

  const countDown = () => {
    const destination = new Date("December 31, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      destination < 0 ? clearInterval(interval.current) : setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <Fragment>
      <div className={`${classes.clockWrapper} d-flex align-item-center gap-3`}>
        <div className={`${classes.clockData} d-flex align-items-center gap-3`}>
          <div className="text-center">
            <h2 className="fs-3 mb-2">{days}</h2>
            <h5 className="fs-6">Ngày</h5>
          </div>
          <span className="fs-3">:</span>
        </div>
        <div className={`${classes.clockData} d-flex align-items-center gap-3`}>
          <div className="text-center">
            <h2 className="fs-3 mb-2">{hours}</h2>
            <h5 className="fs-6">Giờ</h5>
          </div>
          <span className="fs-3">:</span>
        </div>
        <div className={`${classes.clockData} d-flex align-items-center gap-3`}>
          <div className="text-center">
            <h2 className="fs-3 mb-2">{minutes}</h2>
            <h5 className="fs-6">Phút</h5>
          </div>
          <span className="fs-3">:</span>
        </div>
        <div className={`${classes.clockData} d-flex align-items-center gap-3`}>
          <div className="text-center">
            <h2 className="fs-3 mb-2">{seconds}</h2>
            <h5 className="fs-6">Giây</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Clock;
