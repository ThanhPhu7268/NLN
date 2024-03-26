import React, { useState } from "react";
import '../assets/css/index.css'
import logo from '../assets/img/logo_title.png'
// import user from "../assets/img/user.png"
import { NavLink } from 'react-router-dom';
import { message } from "antd";

export default function Nav() {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    const handleLogout = () => {
        sessionStorage.removeItem('user')
        message.success("Logout is successfully")
        setTimeout(() => {
            setUser(sessionStorage.getItem('user'))
        }, 1000)

    }
    console.log(user)
    return (
        <>
            <header>
                <nav className="line__head">
                    <div><a><img id="logo__head" src={logo} alt="logo" /></a></div>
                    <ul className="line__head__list">
                        <NavLink className="navlink" to="/">
                            <i className="fa-solid fa-house" style={{ color: "#919191" }}></i>
                            Trang chủ
                        </NavLink >
                        <NavLink className="navlink" to="/Study">
                            <i className="fa-solid fa-book"></i>
                            Học tập
                        </NavLink>
                        <NavLink className="navlink" to="/Blog">
                            <i className="fa-solid fa-blog"></i>
                            Blog
                        </NavLink>


                    </ul>
                    {/* <div className="user__head">
                        <div className="user__head-logo">
                            <img src={user} alt="user" />
                        </div>
                        <div className="user__head__list">
                            <a href="/Info">Thông tin</a>
                            <a href="">Đăng xuất</a>
                        </div>
                    </div>
                    <ul className="signin_1">
                        <li className="signin">
                            Đăng nhập
                        </li>
                        <li className="signin">
                            Đăng ký
                        </li>
                    </ul> */}
                    <ul className="line__head__list">
                        {!user ?
                            (<>
                                <NavLink className="navlink" to="/register">
                                    Đăng kí
                                </NavLink >
                                <NavLink className="navlink" to="/login">
                                    Đăng nhập
                                </NavLink>
                            </>)
                            : (<>
                                <p className="navlink" onClick={handleLogout}>Đăng xuất</p>
                                <p className="navlink" style={{ color: "black", width: '234px' }}>Hi! {user.hoTen}</p>
                            </>
                            )
                        }
                    </ul>
                </nav>
            </header >

        </>

    )
}