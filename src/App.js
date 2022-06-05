import './App.css';
import Footer from "./components/Footer/Footer";
import {Route, Routes, Navigate} from "react-router-dom";
import Mainpage from "./components/MainPage/Mainpage";
import Centre from "./components/Centre/Centre";
import Documents from "./components/Documents/Documents";
import Login from "./components/Login/login";
import News from "./components/News/News";
import Adminnews from "./components/AdminNews/Adminnews";
import Editnews from "./components/EditNews/Editnews";
import {useState} from "react";
import Add from "./components/AddNews/Add";


const ProtectedRoute = ({children}) => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
        return <Navigate to="/" replace/>;
    }
    return children;
};


function App() {
    return (
        <div className='app-wrapper'>
            <Routes>
                <Route exact path="/" element={<Mainpage/>}/>
                <Route exact path="/centre" element={<Centre/>}/>
                <Route exact path="/documents" element={<Documents/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/news" element={<News/>}/>
                <Route
                    path="admin-news"
                    element={
                        <ProtectedRoute>
                            <Adminnews/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="add-news"
                    element={
                        <ProtectedRoute>
                            <Add/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="news/edit/:newsId"
                    element={
                        <ProtectedRoute>
                            <Editnews/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;
