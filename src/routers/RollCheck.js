import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";

function RollCheck() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalButtonDisabled, setArrivalButtonDisabled] = useState(false);
  const [departureButtonDisabled, setDepartureButtonDisabled] = useState(true); // 처음에 비활성화 상태

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleArrival = () => {
    setArrivalTime(currentTime);
    setArrivalButtonDisabled(true);
    setDepartureButtonDisabled(false); // 등원 시 하원 버튼 활성화
    setTimeout(() => setArrivalButtonDisabled(false), 12 * 60 * 60 * 1000); // 12시간 후에 버튼 활성화
  };

  const handleDeparture = () => {
    setDepartureTime(currentTime);
    setDepartureButtonDisabled(true);
    setTimeout(() => setDepartureButtonDisabled(false), 12 * 60 * 60 * 1000); // 12시간 후에 버튼 활성화
  };

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100px",
          }}
        >
          <Link to="/mainuser">
            <ReplyIcon
              sx={{
                fontSize: 40,
                color: "#beb4f5",
                "&:hover": {
                  color: "black",
                },
              }}
            />
          </Link>
          <Link to="/mainuser">
            <HomeIcon
              sx={{
                fontSize: 40,
                color: "#beb4f5",
                "&:hover": {
                  color: "black",
                },
              }}
            />
          </Link>
        </div>
        <table
          style={{
            margin: "auto",
            marginTop: "20px",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <tbody>
            <tr style={{ width: "600px", height: "50px", fontSize: "22pt" }}>
              <td style={{ width: "200px", border: "1px solid black" }}>
                현재 시간:
              </td>
              <td style={{ width: "200px", border: "1px solid black" }}>
                {currentTime}
              </td>
            </tr>
            <tr style={{ width: "600px", height: "50px", fontSize: "22pt" }}>
              <td style={{ width: "200px", border: "1px solid black" }}>
                등원 시간:
              </td>
              <td style={{ width: "200px", border: "1px solid black" }}>
                {arrivalTime}
              </td>
            </tr>
            <tr style={{ width: "600px", height: "50px", fontSize: "22pt" }}>
              <td style={{ width: "200px", border: "1px solid black" }}>
                하원 시간:
              </td>
              <td style={{ width: "200px", border: "1px solid black" }}>
                {departureTime}
              </td>
            </tr>
            <tr style={{ width: "600px", height: "50px", fontSize: "22pt" }}>
              <td style={{ width: "200px", border: "1px solid black" }}>
                <button
                  style={{
                    backgroundColor: "#beb4f5",
                    width: "100px",
                  }}
                  onClick={handleArrival}
                  disabled={arrivalButtonDisabled}
                >
                  등원
                </button>
              </td>
              <td style={{ width: "200px", border: "1px solid black" }}>
                <button
                  style={{
                    backgroundColor: "#beb4f5",
                    width: "100px",
                  }}
                  onClick={handleDeparture}
                  disabled={departureButtonDisabled}
                >
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

export default RollCheck;
