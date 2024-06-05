import Header from "../../components/Header/Header"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { LuGithub } from "react-icons/lu"


import Banner from '../../assets/image/banner.png'
import Omelet from '../../assets/image/dish1.png'
import CodeCrunch from '../../assets/image/dish2.png'
import Hamburguer from '../../assets/image/dish3.png'
import ByteBoost from '../../assets/image/dish4.png'
import Banner2 from '../../assets/image/banner2.png'
import perfil1 from '../../assets/image/perfil1.png'
import perfil2 from '../../assets/image/perfil2.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 




import './Home.css'
import Dish from "../../components/Dish/Dish"
import Testimony from "../../components/Testimony/Testimony"
import { useEffect } from "react"
function Home() {

    useEffect(()=>{
        AOS.init({
            duration: 3000
        });
    }, [])

    function MoreInformation() {
        const MoreInformationList = document.querySelector('.more_information')
        MoreInformationList.classList.toggle('active')


        const buttonMoreInformation = document.getElementById('more_information_button')
        buttonMoreInformation.classList.toggle('active')

        const buttonLessInformation = document.getElementById('less_information_button')
        buttonLessInformation.classList.toggle('active')
    }


    
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header')
        const scrollposition = window.scrollY - header.clientHeight

        if(scrollposition <= 0){
            header.style.boxShadow = 'none'
        }else{
            header.style.boxShadow = '0px 0px 14px 4px #cccc'
        }
    })
    


    return (
        <>
            <header>
                <Header />
            </header>
            <main className="container ">
                <section id="home" >
                    <div id="cta">
                        <h1>Combustível para codar, sabor para <span style={{ color: '#A52A2A' }}>viver</span></h1>


                        <p className="description">
                            A paixão pelo café se encontra com a arte da programação. Desfrute de bebidas exclusivas que são o combustível perfeito para codar e saborear a vida. Experimente o lugar onde o café e a tecnologia se encontram.
                        </p>

                        <div className="cta_buttons">
                            <a href="#" className="order_here ">Ver Cardápio</a>
                            <a href="">
                                <button className="button_phone">
                                    <  BsFillTelephoneFill />
                                    (31)99876-5432
                                </button>

                            </a>
                        </div>

                        <div className="social_buttons">
                            <a href="https://www.instagram.com/alaairjr_/" target="blank"> <FaInstagram /> </a>
                            <a href="https://www.linkedin.com/in/alair-junior-494260273/" target="blank"> <FaLinkedinIn /> </a>
                            <a href="https://github.com/Alairjr7" target="blank"> <LuGithub />  </a>
                        </div>
                    </div>
                    <div id="banner">
                        <img src={Banner} alt="Banner CodeCafé" />
                    </div>
                </section>

                <section id="menu" data-aos="fade-up">
                    <h2>Cardápio</h2>
                    <h3>Nossos pratos especiais</h3>
                    <div className="dishes_container">

                        <Dish
                            img={Omelet}
                            alt="imagem omelete"
                            title="Omelete DevEspecial"
                            description="Omelete fofo recheado com espinafre, tomate e queijo feta, acompanhado de torradas integrais"
                            price={18} />
                        <Dish
                            img={CodeCrunch}
                            alt="Imagem CodeCrunch"
                            title="CodeCrunch"
                            description=" Dois ovos fritos perfeitamente acompanhados por tiras de bacon crocante, servidos com uma fatia de pão artesanal"
                            price={15} />
                        <Dish
                            img={Hamburguer}
                            alt="Imagem hamburguer"
                            title="Hambúrguer Simplex"
                            description="Hambúrguer simples com um suculento hambúrguer de carne, alface, tomate e queijo, servido em um pão macio com um toque de maionese."
                            price={22} />
                        <Dish
                            img={ByteBoost}
                            alt="Imagem ByteBoost"
                            title="ByteBoost"
                            description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
                            price={8} />


                    </div>
                </section>

                <section id="testimony" data-aos="fade-right">
                    <div className="testimony_container">
                        <div className="testimony_img">
                            <img src={Banner2} alt="banner2" />
                        </div>
                        <div className="testimony_description">
                            <h2>Depoimentos</h2>
                            <h3>O que os clientes falam sobre nós</h3>

                            <div className="testimony_card">
                                <Testimony
                                    img={perfil1}
                                    name="Fulana de tal"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, voluptate similique praesentium quisquam dolorum modi neque id, deserunt accusamus exercitationem tempore dolore quo impedit at porro, aut repudiandae totam." />

                                <Testimony
                                    img={perfil2}
                                    name="Fulano de tal"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, voluptate similique praesentium quisquam dolorum modi neque id, deserunt accusamus exercitationem tempore dolore quo impedit at porro, aut repudiandae totam." />

                                <div className="more_information">
                                    <Testimony
                                        img={perfil1}
                                        name="Fulana de tal"
                                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, voluptate similique praesentium quisquam dolorum modi neque id, deserunt accusamus exercitationem tempore dolore quo impedit at porro, aut repudiandae totam." />

                                    <Testimony
                                        img={perfil2}
                                        name="Fulano de tal"
                                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, voluptate similique praesentium quisquam dolorum modi neque id, deserunt accusamus exercitationem tempore dolore quo impedit at porro, aut repudiandae totam." />
                                </div>
                                <button className="order_here " id="more_information_button" onClick={MoreInformation}>Mais Informações</button>
                                <button className="order_here " id="less_information_button" onClick={MoreInformation}>Menos Informações</button>
                            </div>
                        </div>

                    </div>
                </section>

                <footer>


                    <div className="copy">
                        <span>&copy; CodeCafé</span>
                    </div>
                    <div className="social_buttons">
                        <a href="https://www.instagram.com/alaairjr_/" target="blank"> <FaInstagram /> </a>
                        <a href="https://www.linkedin.com/in/alair-junior-494260273/" target="blank"> <FaLinkedinIn /> </a>
                        <a href="https://github.com/Alairjr7" target="blank"> <LuGithub />  </a>
                    </div>

                </footer>
            </main>
        </>
    )
}

export default Home