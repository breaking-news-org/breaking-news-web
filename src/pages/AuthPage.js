import React, {useEffect, useState, useContext} from "react";
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        userName: '',
        password: '',
        authorName: ''
    })

    useEffect(() =>  {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() =>  {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            // api1/auth/register
            const data = await request('/api1/user/register', 'POST', {...form})
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            // api1/auth/login
            delete form.authorName
            const data = await request('/api1/user/login', 'POST', {...form})
            auth.login(data.Right.refreshToken, data.Right.accessToken)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Breaking News</h1>
                <div className="card blue">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Enter username"
                                    id="userName" type="text" name="userName"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                    value={form.userName}
                                />
                                <label htmlFor="userName"></label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter authorname"
                                    id="authorName" type="text" name="authorName"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                    value={form.authorName}
                                />
                                <label htmlFor="authorName"></label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter password"
                                    id="password" type="password" name="password"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                    value={form.password}
                                />
                                <label htmlFor="password"></label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Login
                        </button>
                        <button 
                            className="btn yellow darken-2"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
