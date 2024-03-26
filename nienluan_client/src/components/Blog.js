import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {

    const [blog, setBlog] = useState()

    useEffect(() => {
        getBlog()
    }, []);

    const getBlog = async () => {
        try {
            const response = await fetch(`http://localhost:4000/blog`);
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
            <div className="box__content-3 mb_86">
                <div className="box__content-3__title">
                    <h1>Blog</h1>
                </div>
                <div className="box__content-3_blog">
                    {blog && blog.map(item => (<div className="content__blog">
                        <Link to={`/Blog/${item.id}`}>
                            <div className="content__blog-1">
                                <img src={item.hinhAnh} alt="blog1" />
                                <h2>{item.tieuDe}</h2>
                                <p>{item.noiDung}</p>
                                <span>Xem ngay<i className="blog__arrow fa-solid fa-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </main>

    )
}