import React, { useState } from "react";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import "./clock.scss";
const ClockTwo = ({ time, setTime, openClock, setOpenClock }) => {
  const initial = time;
  console.log(initial);
  const [staticTime, setStaticTime] = useState(dayjs(`2022-04-17T${time}`));
  const handleStaticTimeChange = (newTime) => {
    setStaticTime(newTime);
    setTime(newTime.format("HH:mm:ss"));
  };
  const handleOk = () => {
    setTime(initial);
    setOpenClock(!openClock);
  };

  return (
    <div className="cl_contetn">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "TimePicker",
            "MobileTimePicker",
            "DesktopTimePicker",
            "StaticTimePicker",
          ]}
        >
          <DemoItem>
            <StaticTimePicker
              value={staticTime}
              onChange={handleStaticTimeChange}
              componentsProps={{
                actionBar: { actions: [""] },
              }}
            />
          </DemoItem>
        </DemoContainer>
        <div className="clock_btns">
          <button onClick={handleOk}>OK</button>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default ClockTwo;
