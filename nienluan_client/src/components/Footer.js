import React from "react";
import logo from '../assets/img/logo_title.png';

export default function Footer() {
    return (
        <footer>
            <div class="box__footer">
                <div class="d25">
                    <div>
                        <img id="logo__head" src={logo} alt="logo" />
                        <p class="mt_36">Vừa chơi vừa học tiếng Anh ngay với <b>Babie English</b>: Web Học tiếng Anh miễn phí cho tất cả mọi người</p>
                    </div>
                </div>
                <div class="d25">
                    <h2 class="mt_36">Chính sách</h2>
                    <a class="mt_36">Chính sách bảo mật</a>
                </div>
                <div class="d25">
                    <h2 class="mt_36">Liên hệ</h2>
                    <p class="mt_36">Kết nối với chúng tôi</p>
                    <i class="logo__infor fa-brands fa-facebook fa-spin"></i>
                    <i class="logo__infor fa-brands fa-instagram fa-bounce"></i>
                </div>
            </div >
        </footer >

    )
}