import { IoIosCafe } from "react-icons/io";
import { PiList } from "react-icons/pi";


import './Header.css'

function Header() {

   function menuMobile(){
    const MenuMobile = document.getElementById('mobile_menu')

    MenuMobile.classList.toggle('active')
 
   }

   function buttonsHeader(event){

    const navItems = document.querySelectorAll('.nav_item')
    navItems.forEach(item => item.classList.remove('active'));



    const navItem = event.target.closest('.nav_item');
    navItem.classList.add('active')
   }

    return (
        <>
            <nav id="navbar">

                <div className="logo"> <IoIosCafe/> <h1>CodeCafé</h1></div>

                <ul id="nav_list">
                    <li className="nav_item active">
                        <a href="#home" onClick={buttonsHeader}>Inicio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#menu" onClick={buttonsHeader}>Cardápio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#testimony" onClick={buttonsHeader}>Avaliações</a>
                    </li>
                </ul>

                <button className="order_here">Peça aqui</button>
                <button className="button_Mobile" onClick={menuMobile}><PiList/> </button>
            </nav>

            <div id="mobile_menu">
                <ul id="mobile_nav_list">
                    <li className="nav_item" >
                        <a href="#home" onClick={buttonsHeader}>Inicio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#menu" onClick={buttonsHeader}>Cardápio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#testimony" onClick={buttonsHeader}>Avaliações</a>
                    </li>
                </ul>
                <button className="order_here">Peça aqui</button>
            </div>
            
        </>
    )
}

export default Header