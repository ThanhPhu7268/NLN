import React from 'react'
import { Input, Button, Form, message } from 'antd'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import '../assets/fontawesome/fontawesome-free-6.4.2-web/css/all.min.css'
import axios from 'axios'


export default function Login() {
    const handleLogin = (values) => {
        const data = { taiKhoan: values.username, matKhau: values.password };
        axios.post("http://localhost:4000/account/login", data)
            .then(res => {
                sessionStorage.setItem("user", JSON.stringify(res.data.user))
                console.log(res)
                message.success("Đăng nhập thành công")
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000)
            })
            .catch(err => message.error(err.response.data.message))
    }
    return (
        <div className='boxdk'>
            <div className='boxdk_container'>
                <div className='w50 mr4p'>
                    <img className='login__img' alt='login' src="/img/login.png"></img>
                </div>
                <div className='w50'>
                    <div className='box__min'>
                        <div className='box__min__icon'>
                            <i class="fa-solid fa-user"></i>
                        </div>

                        <h1 className='box__min__title'>Đăng Nhập</h1>
                    </div>
                    <div>
                        <Form onFinish={handleLogin} autoComplete='off'>
                            <Form.Item
                                name={"username"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập vào tài khoản của bạn",
                                    }
                                ]}
                                hasFeedback
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
                                        message: "Vui lòng nhập vào mật khẩu của bạn",
                                        whitespace: true
                                    }
                                ]}
                            >
                                <Input.Password
                                    className='input__dn'
                                    placeholder='Mat Khau'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    block
                                    className='btn__dn input__dn'
                                >
                                    <h3 className='text-white'>Đăng Nhập</h3>
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className='box__dn__content'>
                            <p className='ft18'>Bạn không có tài khoản?</p>
                            <Link to='/register' className='ft18 create__acc'>Tạo Tài Khoản</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
