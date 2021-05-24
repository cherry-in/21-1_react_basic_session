import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Home_header">
      <div className="header_con1">
        <p className="con1_text">고려대학교 kucc</p>
        <div className="right">
          <button className="_button">로그인</button>
          <button className="_button">회원가입</button>
        </div>
      </div>
      <div className="header_con2"></div>
    </header>
  );
};

export default Header;
