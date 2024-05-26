import React, { useState, useEffect } from "react";
import "./stylesheet/Editor.css";

function Editor() {
  const [user, setUser] = useState([
    { key: 1, name: '유저1', phone: '010-1234-5678', id: "user1", pw: '1234' }, 
    { key: 2, name: '유저2', phone: '010-8765-4321', id: "user2", pw: '1234' }
  ]);

  // 현재 로그인된 아이디
  const currentUserId = "user2";

  // 현재 로그인된 아이디와 일치하는 정보 찾기
  const currentUserInfo = user.find(userInfo => userInfo.id === currentUserId);

  const [name, setName] = useState(currentUserInfo.name);
  const [phone, setPhone] = useState(currentUserInfo.phone);
  const [id, setId] = useState(currentUserInfo.id);
  const [pw, setPw] = useState(currentUserInfo.pw);

  const [previousInfo, setPreviousInfo] = useState(null);

  useEffect(() => {
    // 이전 정보 저장
    setPreviousInfo(currentUserInfo);
  }, []);

  const handleCancel = () => {
    // 이전 정보로 돌아가기
    if (previousInfo) {
      setName(previousInfo.name);
      setPhone(previousInfo.phone);
      setId(previousInfo.id);
      setPw(previousInfo.pw);
    }
  };

  const handleEdit = () => { 
    // 수정해서 내정보 페이지로 돌아가기 
    const updatedUser = user.map(userInfo =>
      userInfo.id === currentUserId
        ? { ...userInfo, name, phone, id, pw }
        : userInfo
    );
    setUser(updatedUser);
    alert("수정되었습니다.");
    // 내정보로 돌아가는 로직
  };

  return (
    <div className="editor-container">
      <div className="title">
        <h2>정보 조회</h2>
      </div>
      <div className="table-container">
        <table className="my-table">
          <tbody>
            <tr>
              <td>이름 :</td>
              <td>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>핸드폰 번호 :</td>
              <td>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>아이디 :</td>
              <td>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>비밀번호 :</td>
              <td>
                <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />
              </td>
            </tr>
            <tr className="button-container">
              <td className="right-align">
                <button onClick={handleCancel}>취소</button>
              </td>
              <td className="left-align">
                <button onClick={handleEdit}>수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Editor;
