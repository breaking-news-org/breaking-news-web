import React from "react";
import {Routes, Route} from 'react-router-dom'
import { CreatePage } from "./pages/CreateNews";
import { NewsPage } from "./pages/NewsPage";
import { DetailPage } from "./pages/NewsDetail";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" exact element={<NewsPage />}/>
                    
                <Route path="/create" exact element={<CreatePage />} />
                
                <Route path="/detail/:id" element={<DetailPage />}/>

                {/* <Redirect to="/create" /> */}
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthPage />}/>
            {/* <Redirect to="/" /> */}
        </Routes>
    )
}
