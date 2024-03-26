import React, { useEffect, useState } from "react";
import '../assets/css/learn.css'
import { Link } from "react-router-dom";

export default function ListStudy(props) {
    const [list, setList] = useState()
    const { levelId } = props

    useEffect(() => {
        getListStudyByLevelId(levelId)
    }, []);


    const getListStudyByLevelId = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/study/list/${id}`);
            const data = await response.json();
            if (data) {
                setList(data)
                console.log(data)
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }
    };


    return (
        (list && list.map(item => (
            <div className="box__topic__basic" key={item.id}>
                <div className="box__topic__basic-farm">
                    <Link to={`/Study/${item.id}`} className="link__topic">
                        <h2>{item.tieuDe}</h2>
                        <img src={item.hinhAnh} />
                    </Link>
                </div>
            </div>
        )))
    )
}