import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import "./stylesheet/SignUp.css";

function SignUp() {
  const [user, setUser] = React.useState({
    name: "",
    phone: "",
    id: "",
    pw: "",
    pwCheck: "",
    showPw: false,
  });

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const viewPw = () => {
    setUser({ ...user, showPw: !user.showPw });
  };

  const submit = () => {
    if (!user.name || !user.phone || !user.id || !user.pw || !user.pwCheck) {
      alert("모든 정보를 입력하세요.");
    } else {
      if (user.pw === user.pwCheck) {
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/mainuser";
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
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
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ display: "flex" }}>
        <Link to="/">
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
      <div // 회원가입 폼 테두리
        id="cover"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "550px",
          width: "500px",
          border: "3px solid black",
        }}
      >
        <div // 회원가입 글자
          style={{
            display: "flex",
            marginTop: "30px",
          }}
        >
          <Typography variant="h3">회원가입</Typography>
        </div>

        <div
          id="mg" // input 밀림 방지 묶어서 margin
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "40px",
            alignItems: "center",
          }}
        >
          <div
            // 이름
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
            >
              이름 :
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "200px", backgroundColor: "#fff9ff" }}
              value={user.name}
              onChange={handleChange("name")}
            />
          </div>

          <div // 전화번호
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
            >
              전화번호 :
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "200px", backgroundColor: "#fff9ff" }}
              value={user.phone}
              onChange={handleChange("phone")}
            />
          </div>

          <div // 아이디
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
            >
              아이디 :
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "200px", backgroundColor: "#fff9ff" }}
              value={user.id}
              onChange={handleChange("id")}
            />
          </div>

          <div // 비밀번호
            style={{
              display: "flex",
              marginTop: "30px",
              marginLeft: "60px", // 아이콘 픽셀
            }}
          >
            <Typography
              variant="h5"
              style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
            >
              비밀번호 :
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "200px", backgroundColor: "#fff9ff" }}
              type={user.showPw ? "text" : "password"}
              value={user.pw}
              onChange={handleChange("pw")}
            />
            <Button onClick={viewPw} style={{ color: "#beb4f5" }}>
              {user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Button>
          </div>

          <div // 비밀번호 확인
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              style={{ width: "170px", textAlign: "right", marginRight: "5px" }}
            >
              비밀번호 확인 :
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "200px", backgroundColor: "#fff9ff" }}
              type={user.showPw ? "text" : "password"}
              value={user.pwCheck}
              onChange={handleChange("pwCheck")}
            />
          </div>
        </div>

        <div // 회원가입 버튼
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            style={{ backgroundColor: "#beb4f5" }}
            onClick={submit}
          >
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
