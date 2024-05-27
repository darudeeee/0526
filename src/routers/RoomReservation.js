import { Link } from "react-router-dom";
import { useState } from 'react'; // useState 추가
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";

function RoomReservation() {
  // 상태 변수 정의
  const [reservationStatus, setReservationStatus] = useState(false); // 신청 여부
  const [approvalStatus, setApprovalStatus] = useState(false); // 승인 여부

  // 버튼 클릭 시 상태 변경 함수
  const handleReservation = () => {
    setReservationStatus(true); // 신청 완료로 변경
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        <div
          id="partition"
          style={{ display: "flex", width: "1000px", height: "600px" }}
        >
          <div
            style={{
              flex: 1,
              backgroundImage:
                "url(https://img.freepik.com/free-photo/school-supplies-kid-room_23-2148666107.jpg?t=st=1716771105~exp=1716774705~hmac=a963740e60ed9256656e3012d022723f9d7d703806d1a29a580e07ec815ed2d1&w=740)",
              alt: "자습실",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            {/* 좌측 영역 */}
          </div>

          <div style={{ flex: 2, justifyContent:"center", alignContent:"center" }}>
            {" "}
            {/* 우측 영역 */}
            <div>
              <table
                style={{
                  margin: "auto",
                  marginTop: "20px",
                  borderCollapse: "collapse",
                  textAlign: "center",
                }}
              >
                <tbody>
                  <tr
                    style={{
                      width: "600px",
                      height: "200px",
                      fontSize: "22pt",
                    }}
                  >
                    <td style={{ width: "300px", border: "1px solid black" }}>
                      신청 여부 :
                    </td>
                    <td style={{ width: "300px", border: "1px solid black" }}>
                      {reservationStatus ? '신청 완료' : '미신청'}
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "600px",
                      height: "200px",
                      fontSize: "22pt",
                    }}
                  >
                    <td style={{ width: "200px", border: "1px solid black" }}>
                      승인 여부 :
                    </td>
                    <td style={{ width: "200px", border: "1px solid black" }}>
                      {approvalStatus ? 'O' : 'X'}
                    </td>
                  </tr>
                  <tr
                    style={{ width: "600px", height: "100px", fontSize: "22pt" }}
                  >
                    <td
                      colSpan={2}
                      style={{ width: "200px", border: "1px solid black" }}
                    >
                      <button 
                        style={{width:"100px", fontSize:"18pt", backgroundColor:"#beb4f5", disabled: reservationStatus}}
                        onClick={handleReservation}
                        disabled={reservationStatus}
                      >
                        ㅎㅎ
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomReservation;
