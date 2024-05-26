import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet/Main.css";

function MainAdmin() {
  return (
    <div id="container">
      {/* Header */}
      <header>
        <div id="top">
          <div id="category">
            <ol id="category-list">
              <li>
                <Link to="/rollCheckManage">출석 현황</Link>
              </li>
              <li>
                <Link to="/calendaradmin">캘린더</Link>
              </li>
              <li>
                <Link to="/">자습실 결재</Link>
              </li>
            </ol>
          </div>
          <div id="user">
            <ol id="user-list">
              <li>
                <Link to="/userinfo">학생정보</Link>
              </li>
              <li>
                <Link to="/">로그아웃</Link>
              </li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main>
        <div id="middle">
          <div id="acaBox">
            Korea
            <br />
            IT
            <br />
            Academy
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer>
        <div id="bottom">
          <div id="inquiryBox">
            코리아IT코딩아카데미학원 인천점
            <br />
            주소 : 인천광역시 부평구 부평동 194-23 5층
            <br />
            전화 : 032 - 262 - 5890
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainAdmin;
