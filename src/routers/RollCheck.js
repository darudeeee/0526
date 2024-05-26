import React, { useState, useEffect } from "react";

function RollCheck() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalButtonDisabled, setArrivalButtonDisabled] = useState(false);
  const [departureButtonDisabled, setDepartureButtonDisabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleArrival = () => {
    setArrivalTime(currentTime);
    setArrivalButtonDisabled(true);
    setTimeout(() => setArrivalButtonDisabled(false), 12 * 60 * 60 * 1000); // 12시간 후에 버튼 활성화
  };

  const handleDeparture = () => {
    setDepartureTime(currentTime);
    setDepartureButtonDisabled(true);
    setTimeout(() => setDepartureButtonDisabled(false), 12 * 60 * 60 * 1000); // 12시간 후에 버튼 활성화
  };

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>현재 시간:</td>
              <td>{currentTime}</td>
            </tr>
            <tr>
              <td>등원 시간:</td>
              <td>{arrivalTime}</td>
            </tr>
            <tr>
              <td>하원 시간:</td>
              <td>{departureTime}</td>
            </tr>
            <tr>
              <td>
                <button onClick={handleArrival} disabled={arrivalButtonDisabled}>
                  등원
                </button>
              </td>
              <td>
                <button onClick={handleDeparture} disabled={departureButtonDisabled}>
                  하원
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

export default RollCheck;
