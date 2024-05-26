import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";

function RollCheckManage() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // 여기서 DB에서 정보를 가져오는 API 호출을 해야 합니다.
    // 데이터를 가져온 후 setAttendanceData를 통해 상태를 업데이트합니다.
    const fetchData = async () => {
      try {
        // API 호출 및 데이터 가져오기
        const response = await fetch("API_ENDPOINT");
        const data = await response.json();
        // 당일 데이터만 필터링하여 상태 업데이트
        const todayData = data.filter((entry) => isToday(new Date(entry.date)));
        setAttendanceData(todayData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  // 임의의 사용자 데이터
  const user1 = {
    name: "user1",
    attendanceTime: "08:22:22",
    departureTime: "18:01:33",
  };

  const user2 = {
    name: "user2",
    attendanceTime: "08:58:02",
    departureTime: "", // 하원 시간은 비어 있음
  };

  // 임의의 사용자 데이터를 기존 데이터와 병합
  const updatedAttendanceData = [...attendanceData, user1, user2];

  // 날짜가 오늘인지 확인하는 함수
  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div
      className="roll-check-container"
      style={{ backgroundColor: "#fff9ff", width: "100vw", height: "100vh" }}
    >
      {" "}
      {/* CSS 클래스를 추가 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100px",
        }}
      >
        <Link to="/mainadmin">
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
        <Link to="/mainadmin">
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
        className="attendance-table"
        style={{ display: "flex", justifyContent: "center", borderCollapse: "collapse" }}
      >
        {" "}
        {/* CSS 클래스를 추가 */}
        <tbody>
          <tr style={{ width: "600px", height: "50px", fontSize: "22pt" }}>
            <td style={{ width: "200px", border: "1px solid black" }}>이름</td>
            <td style={{ width: "200px", border: "1px solid black" }}>등원 시간</td>
            <td style={{ width: "200px", border: "1px solid black" }}>하원 시간</td>
          </tr>
          {/* updatedAttendanceData를 기준으로 테이블 행을 생성합니다. */}
          {updatedAttendanceData.map((user, index) => (
            <tr
              key={index}
              style={{ width: "600px", height: "50px", fontSize: "22pt" }}
            >
              <td style={{ width: "200px", border: "1px solid black" }}>{user.name}</td>
              <td style={{ width: "200px", border: "1px solid black" }}>{user.attendanceTime}</td>
              {/* 하원 시간이 없는 경우 미등록을 출력합니다. */}
              <td style={{ border: "1px solid black" }}>{user.departureTime || "미등록"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RollCheckManage;
