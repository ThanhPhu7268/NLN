import React, { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import axios from 'axios'

export default function Register() {

    const handleRegister = (values) => {
        const data = { taiKhoan: values.username, matKhau: values.password, email: values.email, hoTen: values.fullname };
        axios.post("http://localhost:4000/account/register", data)
            .then(res => {
                console.log(res)
                message.success("Tài khoản đã được tạo thành công!")
                setTimeout(() => {
                    window.location.href = '/login'
                }, 1000)
            })
            .catch(err => {
                message.error(err.response.data.message)
            })
    }
    return (
        <div className='boxdk'>
            <div className='boxdk_container'>
                <div className='w50 mr4p'>
                    <img className='login__img' alt='register' src='/img/dk.png'></img>
                </div>
                <div className='w50'>
                    <div className='box__min'>
                        <div className='box__min__icon'>
                            <i class="fa-solid fa-user"></i>
                        </div>

                        <h1 className='box__min__title-dk'>Tạo Tài Khoản</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <Form onFinish={handleRegister} autoComplete='off'>
                            <Form.Item
                                name={"fullname"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Bạn hãy nhập vào họ tên của bạn",
                                    }
                                ]}
                            >
                                <Input
                                    className='input__dn'
                                    placeholder='Họ tên'
                                />
                            </Form.Item>
                            <Form.Item
                                name={"email"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Bạn hãy nhập vào Email của bạn",
                                    }
                                ]}
                            >
                                <Input
                                    className='input__dn'
                                    placeholder='Email'
                                />
                            </Form.Item>
                            <Form.Item
                                name={"username"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Bạn hãy nhập vào tên tài khoản",
                                    }
                                ]}
                            >
                                <Input
                                    className='input__dn'
                                    placeholder='Ten Tai Khoan'
                                />
                            </Form.Item>
                            <Form.Item
                                name={"password"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Bạn chưa nhập vào mật khẩu nè!",
                                        whitespace: true
                                    }
                                ]}
                            >
                                <Input.Password
                                    placeholder='Mat Khau'
                                    className='input__dn'
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                                    title="Vui lòng nhập ít nhất 8 kí tự, bao gồm ít nhất 1 từ viết hoa, 1 từ viết thường và 1 số."
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    block
                                    className='btn__dk input__dn'
                                >
                                    <span className='text-white'>Tạo Tài Khoản</span>
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className='box__dn__content'>
                            <p className='ft18'>Bạn đã có tài khoản chưa?</p>
                            <Link to='/Login' className='ft18 create__acc'>Đăng Nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
