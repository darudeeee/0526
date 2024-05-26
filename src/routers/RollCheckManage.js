import React, { useEffect, useState } from 'react';
import './stylesheet/RollCheckManage.css'; // 외부 CSS 파일을 import

function RollCheckManage() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // 여기서 DB에서 정보를 가져오는 API 호출을 해야 합니다.
    // 데이터를 가져온 후 setAttendanceData를 통해 상태를 업데이트합니다.
    const fetchData = async () => {
      try {
        // API 호출 및 데이터 가져오기
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        // 당일 데이터만 필터링하여 상태 업데이트
        const todayData = data.filter(entry => isToday(new Date(entry.date)));
        setAttendanceData(todayData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  // 임의의 사용자 데이터
  const user1 = {
    name: 'user1',
    attendanceTime: '08:22:22',
    departureTime: '18:01:33',
  };

  const user2 = {
    name: 'user2',
    attendanceTime: '08:58:02',
    departureTime: '', // 하원 시간은 비어 있음
  };

  // 임의의 사용자 데이터를 기존 데이터와 병합
  const updatedAttendanceData = [...attendanceData, user1, user2];

  // 날짜가 오늘인지 확인하는 함수
  const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear();
  };

  return (
    <div className="roll-check-container"> {/* CSS 클래스를 추가 */}
      <div>
        <table className="attendance-table"> {/* CSS 클래스를 추가 */}
          <tbody>
            <tr>
              <td>이름</td>
              <td>등원 시간</td>
              <td>하원 시간</td>
            </tr>
            {/* updatedAttendanceData를 기준으로 테이블 행을 생성합니다. */}
            {updatedAttendanceData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.attendanceTime}</td>
                {/* 하원 시간이 없는 경우 빈 공백을 출력합니다. */}
                <td>{user.departureTime || ' '}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RollCheckManage;
