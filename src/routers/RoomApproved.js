import { useState } from 'react'; // useState 추가
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from '@mui/icons-material/Reply';

function RoomApproved() {
  const [users, setUsers] = useState([ 
    { key: 1, name: '유저1', phone: '010-1234-5678', id: "user1", pw: '1234', status: '' }, 
    { key: 2, name: '유저2', phone: '010-8765-4321', id: "user2", pw: '1234', status: '' }
  ]);

  // 승인 상태 업데이트 함수
  const Approval = (userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, status: '승인' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // 거부 상태 업데이트 함수
  const Rejection = (userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, status: '거절' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="romm-approved-container" style={{height:"100vh", width:"100vw", backgroundColor: "#fff9ff", display:"flex", flexDirection: "column", justifyContent:"flex-start", alignItems:"center"}}>
      <div style={{ display: "flex" , justifyContent: "center", alignItems: "center", width: "100%", height: "50px"}}>
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
      <table className="user-table">
        <thead>
          <tr>
            <th>예약자 명</th>
            <th>신청 시간</th>
            <th>승인</th>
            <th>거부</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.key}>
              <td>{user.name}</td>
              <td>{/* 신청 시간 표시 */}</td>
              <td><button onClick={() => Approval(user.id)} disabled={user.status !== ''}>승인</button></td>
              <td><button onClick={() => Rejection(user.id)} disabled={user.status !== ''}>거절</button></td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomApproved;
