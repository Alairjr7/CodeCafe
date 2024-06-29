import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu"
import Login from "./pages/Login/Login";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/menu" element = {<Menu/>}/>
        </Routes>
    )
}

export default MainRoutes