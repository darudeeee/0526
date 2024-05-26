import React, { useState } from "react";
import "./stylesheet/UserInfo.css";

function UserInfo() {
  const [user, setUser] = useState([
    { key: 1, name: '관리자', phone: '010-1234-5678', id: "admin", pw: '1234' }, 
    { key: 2, name: '유저', phone: '010-8765-4321', id: "user", pw: '1234' }
  ]);
  const message =""; 

  const DeleteUser = (id) => {
    setUser(user.filter(u => u.key !== id));
  };

  const Edit = (index, field, value) => {
    const updatedUser = [...user];
    updatedUser[index][field] = value;
    setUser(updatedUser);
  };

  const handleInputChange = (index, field, value) => {
    Edit(index, field, value); // Update the value in the user state
  };

  const handleEditClick = () => {
    alert("수정이 완료됐습니다.");
  };

  return (
    <div className="user-info-container">
      <div className="title">
        <h2>학생정보 조회</h2>
      </div>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>아이디</th>
              <th>비밀번호</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => (
              <tr key={u.key}>
                <td><input type="text" value={u.name} placeholder={message ? u.name : ''} onChange={(e) => handleInputChange(index, 'name', e.target.value)} /></td>
                <td><input type="text" value={u.phone} placeholder={message ? u.phone : ''} onChange={(e) => handleInputChange(index, 'phone', e.target.value)} /></td>
                <td><input type="text" value={u.id} placeholder={message ? u.id : ''} onChange={(e) => handleInputChange(index, 'id', e.target.value)} /></td>
                <td><input type="text" value={u.pw} placeholder={message ? u.pw : ''} onChange={(e) => handleInputChange(index, 'pw', e.target.value)} /></td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick()}>수정</button>
                </td>
                <td><button className="delete-button" onClick={() => DeleteUser(u.key)}>삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && <div>{message}</div>}
      </div>
    </div>
  );
}

export default UserInfo;
