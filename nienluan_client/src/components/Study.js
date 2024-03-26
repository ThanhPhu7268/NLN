import React, { useEffect, useState } from "react";
import '../assets/css/learn.css'
import ListStudy from "./ListStudy";

export default function Study(props) {
    const [level, setLevel] = useState()

    const { setShow } = props


    useEffect(() => {
        getLevel()
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




    return (
        <main>
            <div className="box__topic">
                <h1>Chủ đề</h1>
                {level && level.map(item => (
                    <div key={item.id}>
                        <h2 className="basic">
                            {item.tenCapDo}
                            <img className="img__basic" src={item.hinhanh} alt="level1" />
                        </h2>
                        <div>
                            <ListStudy levelId={item.id} />
                        </div>
                    </div>
                ))
                }
            </div>
        </main>
    )
}