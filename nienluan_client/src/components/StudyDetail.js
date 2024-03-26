import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/css/learn_common.css'
import CorrectAnswerModal from './CorrectAnswerModal';

function StudyDetail(props) {
    const { id } = useParams();
    const { setShow } = props

    const [study, setStudy] = useState({})
    const [exam, setExam] = useState([])
    const [colorStyles, setColorStyles] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [targetId, setTargetId] = useState()
    const [checkedItems, setCheckedItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [sum, setSum] = useState(0)

    useEffect(() => {
        setShow(false)
        getStudyById(id)
        getExam(id)
    }, []);

    const getStudyById = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/study/${id}`);
            const data = await response.json();
            if (data) {
                setStudy(data[0])
                console.log(data[0])
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }
    };

    const getExam = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/study/exam/${id}`);
            const data = await response.json();
            if (data) {
                setExam(data.exam)
                setSum(data.sum[0].soCauHoi)
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }
    }

    const nextClick = () => {
        // Chuyển sang câu hỏi tiếp theo
        setCurrentQuestion(currentQuestion + 1);
        setShowModal(false)
        setCheckedItems([])
    };

    const handleAnswerClick = (selectedAnswer, id, index, dapAnTiengAnh, dapAnTiengViet) => {
        toggleAudio(index)
        if (selectedAnswer === 1) {
            setTargetId(id)
            const updatedCheckedItems = [...checkedItems];
            updatedCheckedItems[index] = { border: '2px solid green' };
            setCheckedItems(updatedCheckedItems);
            setColorStyles({ border: '2px solid green' })
            setTimeout(() => {
                setShowModal(true)
                correctAudio()
            }, 1000);
            setCorrectAnswer({
                dapAnTiengAnh,
                dapAnTiengViet
            })

        } else {
            setTargetId(id)
            const updatedCheckedItems = [...checkedItems];
            updatedCheckedItems[index] = { border: '2px solid red' };
            setCheckedItems(updatedCheckedItems);
            setColorStyles({ border: '2px solid red' })

        }
    };

    const toggleAudio = (index) => {
        const audioElement = document.getElementById(`audio_${index}`);
        audioElement.play()// Lấy phần tử audio bằng ID

    };

    const correctAudio = () => {
        const audioElement = document.getElementById(`corect-audio`);
        audioElement.play()// Lấy phần tử audio bằng ID

    };
    // Sử dụng giá trị `id` từ URL trong component này
    return (
        <div>
            <div className="box__commo">
                <div className="box__head">
                    <div className="box__head__title">{study.tieuDe}</div>
                    <div className="box__head__icon-common">
                        <div className='number'>{currentQuestion + 1}/{sum}</div>
                    </div>
                    <div className="box__head__icon">
                        <div className="box__head__icon-common">
                            <i className="menu__icon fa-solid fa-bars"></i>
                        </div>
                        <Link to='/' className="box__head__icon-common">
                            <i className="house__icon fa-solid fa-house"></i>
                        </Link>
                    </div>
                </div>
                {currentQuestion < exam.length ? (
                    <div>
                        <h1 className="box__body__title">{exam[currentQuestion].question}</h1>
                        <div className="box__body">
                            {exam[currentQuestion].answers && exam[currentQuestion].answers.map((i, index) => (
                                <button key={i.id} style={i.id === targetId ? colorStyles : checkedItems[index]} className="box__body__content-1 box__body__common"
                                    onClick={() => handleAnswerClick(i.dapAnDung, i.id, index, i.dapAnTiengAnh, i.dapAnTiengViet)}>
                                    <img src={i.hinhAnh} />
                                    <h3>{i.dapAnTiengAnh}</h3>
                                    <audio id={`audio_${index}`}>
                                        <source src={i.amThanh} type="audio/mpeg" />
                                    </audio>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='comple__img'>
                        <img alt='comple' src='/img/comple.png'></img>
                    </div>
                )}
                <CorrectAnswerModal isOpen={showModal} nextClick={nextClick} question={correctAnswer} />
                <audio id="corect-audio">
                    <source src="/audio/correct.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
}

export default StudyDetail;