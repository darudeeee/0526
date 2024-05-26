import React from "react";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from '@mui/icons-material/Home';
import "./stylesheet/LogIn.css";

function LogIn() {
  const [user, setUser] = React.useState({
    id: "",
    pw: "",
    showPw: false,
  });

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const viewPw = () => {
    setUser({ ...user, showPw: !user.showPw });
  };

  const submit = () => {
    const { id, pw } = user;
    const validId = "user";
    const validPw = "1234";

    if (id === 'admin' && pw === '1234') {
      alert("관리자로 로그인 성공!");
      window.location.href = "/mainadmin";
    } else if (id === validId && pw === validPw) {
      alert(id + "님 로그인 성공!");
      window.location.href = "/mainuser";
    } else {
      alert("유효하지 않은 아이디입니다.");
      window.location.href = "/login";
    }
  };

  return (
    <div
      id="back"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1900px",
        minWidth: "600px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{display:"flex"}}>
        <Link to="/"><HomeIcon sx={{ fontSize: 40, color: '#beb4f5',
          '&:hover': {
            color: 'black', 
          }, }} /></Link>
      </div>
      <div
        id="cover"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "500px",
          border: "3px solid black",
          backgroundColor: "ffecfc",
        }}
      >
        <div style={{ display: "flex", height: "100px" }}>
          <Typography variant="h3">로그인</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
          >
            아이디 :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "200px", backgroundColor: "#fff9ff", marginRight: "60px" }}
            value={user.id}
            onChange={handleChange("id")}
          />
        </div>
        <div style={{ display: "flex", alignItems:"flex-end" }}>
          <Typography
            variant="h5"
            style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
          >
            비밀번호 :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            style={{ width: "200px", backgroundColor: "#fff9ff", marginTop:"20px" }}
            type={user.showPw ? "text" : "password"}
            value={user.pw}
            onChange={handleChange("pw")}
          />
          <Button onClick={viewPw} style={{ color: "#beb4f5", marginTop: "15px" }}>
            {user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Button>
        </div>
        <div style={{marginTop: "40px"}}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            style={{ backgroundColor: "#beb4f5" }}
            onClick={submit}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
