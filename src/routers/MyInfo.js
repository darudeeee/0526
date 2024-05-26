import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import "./stylesheet/MyInfo.css";

function MyInfo() {
  const [user, setUser] = useState([
    { key: 1, name: "유저1", phone: "010-1234-5678", id: "user1", pw: "1234" },
    { key: 2, name: "유저2", phone: "010-8765-4321", id: "user2", pw: "1234" },
  ]);

  // 현재 로그인된 아이디
  const currentUserId = "user2";

  // 현재 로그인된 아이디와 일치하는 정보 찾기
  const currentUserInfo = user.find(
    (userInfo) => userInfo.id === currentUserId
  );

  // 탈퇴 버튼 클릭 시
  const DeleteUser = () => {
    // 확인 메시지 표시
    const confirmWithdrawal = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirmWithdrawal) {
      // 탈퇴 실행
      const updatedUser = user.filter(
        (userInfo) => userInfo.id !== currentUserId
      );
      setUser(updatedUser);
      alert("탈퇴되었습니다.");
    } else {
      // 취소
      alert("탈퇴를 취소했습니다.");
    }
  };

  return (
    <div className="myinfo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
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
      <div className="title">
        <h2>내 정보 조회</h2>
      </div>
      <div className="table-container">
        <table className="my-table">
          <tbody>
            <tr>
              <td>이름 :</td>
              <td>{currentUserInfo.name}</td>
            </tr>
            <tr>
              <td>핸드폰 번호 :</td>
              <td>{currentUserInfo.phone}</td>
            </tr>
            <tr>
              <td>아이디 :</td>
              <td>{currentUserInfo.id}</td>
            </tr>
            <tr>
              <td>비밀번호 :</td>
              <td>{currentUserInfo.pw}</td>
            </tr>
            <tr className="button-container">
              <td>
                <Link to="/editor">
                  <button className="edit-button">수정</button>
                </Link>
              </td>
              <td>
                <Link to="/">
                  <button className="delete-button" onClick={DeleteUser}>
                    탈퇴
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyInfo;
