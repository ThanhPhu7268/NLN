import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Trangchu(props) {

    const [level, setLevel] = useState()
    const [blog, setBlog] = useState()
    const { setShow } = props


    useEffect(() => {
        getLevel()
        getBlog()
        setShow(true)
    }, []);

    const getLevel = async () => {
        try {
            const response = await fetch(`http://localhost:4000/level`);
            const data = await response.json();
            if (data) {
                setLevel(data)
                console.log(data)
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }

    };
    const getBlog = async () => {
        try {
            const response = await fetch(`http://localhost:4000/blog/bloghome`);
            const data = await response.json();
            if (data) {
                setBlog(data)
                console.log(data)
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }

    };


    return (
        <main>
            <div className="box__content-2 mb_86">
                <h1>Học Tiếng Anh trực tuyến miễn phí cùng <h1 style={{ color: " #1E96bb" }}>BabieEnglish</h1></h1>
                <ul className="box__content-2__ul">
                    <li>Học Tiếng Anh căn bản cho người mới bắt đầu hoặc nâng cao trình độ cho người mất gốc.</li>
                    <li>Học Tiếng Anh giao tiếp, Tiếng Anh học thuật, học Tiếng Anh online mỗi ngày.</li>
                    <li>Dễ dàng sử dụng, vừa học vừa chơi, đồng bộ trên mọi thiết bị, ...</li>
                </ul>
                <Link to="/Study" className="start__btn">Bắt đầu ngay</Link>
            </div>
            <div className="box__content-1 mb_86">
                <div className="box1__title">
                    <h1>Lộ trình học</h1>
                    <p>Ứng dụng Học tiếng Anh online đáp ứng lộ trình học tập rõ ràng phù hợp với trình độ.</p>
                </div>
                <div className="box1__content">
                    {level && level.map(item => (
                        <div to="/Study" key={item.id} className="box1__content__ele">
                            <img src={item.hinhanh} />
                            <h3>{item.tenCapDo}</h3>
                            <p>{item.tieude}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="box__content-3 mb_86">
                <div className="box__content-3__title">
                    <h1>Blog</h1>
                </div>
                <div className="box__content-3_blog">
                    {blog && blog.map(item => (<div className="content__blog">
                        <a href="https://dinoenglish.app/blog/kham-pha-lo-trinh-hoc-tieng-anh-cho-nguoi-mat-goc">
                            <div className="content__blog-1">
                                <img src={item.hinhAnh} alt="blog1" />
                                <h2>{item.tieuDe}</h2>
                                <p>{item.noiDung}</p>
                                <span>Xem ngay<i className="blog__arrow fa-solid fa-arrow-right"></i></span>
                            </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </main>

    )
}