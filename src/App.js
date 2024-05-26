import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./routers/Main";
import SignUp from "./routers/SignUp";
import LogIn from "./routers/LogIn";
import MainAdmin from "./routers/MainAdmin";
import MainUser from "./routers/MainUser";
import UserInfo from "./routers/UserInfo";
import MyInfo from "./routers/MyInfo";
import Editor from "./routers/Editor";
import RollCheck from "./routers/RollCheck";
import RollCheckManage from "./routers/RollCheckManage";
import CalendarAdmin from "./routers/CalendarAdmin";
import CalendarUser from "./routers/CalendarUser";




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/mainadmin" element={<MainAdmin />} />
      <Route path="/mainuser" element={<MainUser />} />
      <Route path="/userinfo" element={<UserInfo />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/rollCheck" element={<RollCheck />} />
      <Route path="/rollCheckManage" element={<RollCheckManage />} />
      <Route path="/calendarAdmin" element={<CalendarAdmin />} />
      <Route path="/calendaruser" element={<CalendarUser />} />
    </Routes>
  </Router>
  );
}

export default App;
