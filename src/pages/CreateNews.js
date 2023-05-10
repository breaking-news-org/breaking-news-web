import React, { useContext, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [newsform, setNewsForm] = useState({
        title: '',
        text: '',
        category: '',
        images: [],
        isPublished: false
    })

    const changeHandlerForNews = event => {
        setNewsForm({ ...newsform, [event.target.name]: event.target.value})
    }

    const CreateHandler = async event => {
        // const body = {...newsform, [event.target.name]: [(!!event.target.name && event.target.name !== 'images')? event.target.value : [event.target.value, 'asfa']]}
        var final_body = {}
        for (const blabla in newsform) {
            if (blabla === 'images') {
                final_body[blabla] = [newsform[blabla],]
            } else if (blabla === 'category') {
                final_body[blabla] = Number(newsform[blabla])
            } else {
                final_body[blabla] = newsform[blabla]
            }
        }
        console.log(final_body)
        try {
            await request('/api1/news/create', 'POST', {...final_body}, {
                Authorization: `Bearer ${auth.accessToken}`
            })
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input placeholder="Enter title"
                    id="ntitle" type="text" name="title"
                    // value={newsform.title}
                    onChange={changeHandlerForNews}
                    />
                    <label htmlFor="ntitle"></label>
                </div>

                <div className="input-field">
                    <input placeholder="Enter text"
                    id="ntext" type="text" name="text"
                    // value={newsform.text}
                    onChange={changeHandlerForNews}/>
                    <label htmlFor="ntext"></label>
                </div>

                <div className="input-field">
                    <input placeholder="Enter category"
                    id="ncategory" type="number" name="category"
                    // value={newsform.category}
                    onChange={changeHandlerForNews}/>
                    <label htmlFor="ncategory"></label>
                </div>

                <div className="input-field">
                    <input placeholder="Enter image url"
                    id="images" type="text" name="images"
                    // value={newsform.images}
                    onChange={changeHandlerForNews}/>
                    <label htmlFor="images"></label>
                </div>

                {/* <div className="input-field">
                    <input placeholder="is it published"
                    id="isPublised" type="text" name="isPublised"
                    // value={newsform.isPublised}
                    onChange={changeHandlerForNews}/>
                    <label htmlFor="isPublised"></label>
                </div> */}


            </div>
            <div className="card-action">
                <button 
                    className="btn yellow darken-4"
                    style={{marginRight: 10}}
                    onClick={CreateHandler}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
