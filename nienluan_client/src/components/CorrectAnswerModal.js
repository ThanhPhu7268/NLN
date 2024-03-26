import React from 'react';
import Modal from 'react-modal';
import '../assets/css/learn.css'

const customStyles = {
    content: {
        width: '50%',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '5px',
        bottom: '0',
        animation: 'slideUp 1s ease-in-out',
        top: '70%'
    },
};

Modal.setAppElement('#root'); // Xác định phần tử root cho modal

function CorrectAnswerModal({ isOpen, nextClick, question }) {
    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
        >
            <h2 className='title__answer'>{question.dapAnTiengAnh}</h2>
            <p className='content__answer'>{question.dapAnTiengViet}</p>
            <div className='div__btn'>
                <button className='btn__answer' onClick={nextClick}>Đi tiếp</button>
            </div>
        </Modal>
    );
}

export default CorrectAnswerModal;
