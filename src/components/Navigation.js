import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

/* 지정한 경로로 페이지 이동 및 값보내기( 링크 == 라우터 )
*/
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;