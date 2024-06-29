import { IoIosCafe } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";

import BannerMenu from "./assets/bannerMenu.png";
import Coffe from "./assets/coffe.png";
import Lanches from "./assets/Lanches.png";
import Panificacao from "./assets/panificacao.png";
import Sobremesas from "./assets/Sobremesas.png";
import Omelet from "../../assets/image/dish1.png";
import CodeCrunch from "../../assets/image/dish2.png";
import Hamburguer from "../../assets/image/dish3.png";
import ByteBoost from "../../assets/image/dish4.png";

import { Link } from "react-router-dom";
import "./Menu.css";
import Dish from "../../components/Dish/Dish";
import ModalProducts from "../../components/ModalProducts/ModalProducts";
import React, { useState } from "react";

function Menu() {
  // const itens = {
  //   title: 'Titulo de teste',
  //   description: 'Descrição de teste'
  // }

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    openModal();
  };

  return (
    <>
      <header id="headerMenu">
        <h1 className="logoMenu">
          <IoIosCafe /> CodeCafé
        </h1>

        <div className="header_options">
          <div className="buttons_options">
            <Link to="/">
              {" "}
              <IoArrowBackCircle className="backMenu" />{" "}
            </Link>
            <IoBagHandle className="bagMenu" />
          </div>
          <div className="header_perfil">
            <img src="" alt="" />
          </div>
        </div>
      </header>

      <div className="banner_container">
        <img src={BannerMenu} alt="Banner Menu" />
      </div>

      <section className="category">
        <h2>O que está em sua mente?</h2>

        <div className="category_container">
          <div className="drinks_container">
            <a href="#drinks">
              <div className="ProductsMenuImg_container">
                <img src={Coffe} alt="Bebidas" className="productsMenu" />
              </div>
              <p>Bebidas</p>
            </a>
          </div>
          <div className="bread_container">
            <a href="#bread">
              <div className="ProductsMenuImg_container">
                <img src={Panificacao} alt="Paes" className="productsMenu" />
              </div>
              <p>Panificação</p>
            </a>
          </div>
          <div className="snack_container">
            <a href="#snack">
              <div className="ProductsMenuImg_container">
                <img src={Lanches} alt="Lanches" className="productsMenu" />
              </div>
              <p>Lanches</p>
            </a>
          </div>
          <div className="dessert_container">
            <a href="#dessert">
              <div className="ProductsMenuImg_container">
                <img src={Sobremesas}   alt="Sobremesas"   className="productsMenu"/>
              </div>
              <p>Sobremesas</p>
            </a>
          </div>
        </div>
      </section>

      <div id="menu_container">
        <ModalProducts
          isOpen={modalOpen}
          onClose={closeModal}
          dish={selectedDish}
        />

        <section id="bestSellers">
          <h3>Mais vendidos</h3>
          <div className="products_container">
            <Dish
              openModal={openModal}
              img={Omelet}
              alt="imagem omelete"
              title="Omelete DevEspecial"
              description="Omelete fofo recheado com espinafre, tomate e queijo feta, acompanhado de torradas integrais"
              price={18}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={CodeCrunch}
              alt="Imagem CodeCrunch"
              title="CodeCrunch"
              description=" Dois ovos fritos perfeitamente acompanhados por tiras de bacon crocante, servidos com uma fatia de pão artesanal"
              price={15}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Hamburguer}
              alt="Imagem hamburguer"
              title="Hambúrguer Simplex"
              description="Hambúrguer simples com um suculento hambúrguer de carne, alface, tomate e queijo, servido em um pão macio com um toque de maionese."
              price={22}
              onClick={handleDishClick}
            />
            <Dish
              img={ByteBoost}
              alt="Imagem ByteBoost"
              title="ByteBoost"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
          </div>
        </section>

        <section id="drinks">
          <h3>Bebidas</h3>

          <div className="products_container">
            <Dish
              openModal={openModal}
              img={Coffe}
              alt="imagem café"
              title="café"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Coffe}
              alt="Imagem café"
              title="café"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Coffe}
              alt="Imagem café"
              title="café"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Coffe}
              alt="Imagem café"
              title="café"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
          </div>
        </section>

        <section id="bread">
          <h3>Panificação</h3>
          <div className="products_container">
            <Dish
              openModal={openModal}
              img={Omelet}
              alt="imagem omelete"
              title="Omelete DevEspecial"
              description="Omelete fofo recheado com espinafre, tomate e queijo feta, acompanhado de torradas integrais"
              price={18}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={CodeCrunch}
              alt="Imagem CodeCrunch"
              title="CodeCrunch"
              description=" Dois ovos fritos perfeitamente acompanhados por tiras de bacon crocante, servidos com uma fatia de pão artesanal"
              price={15}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Hamburguer}
              alt="Imagem hamburguer"
              title="Hambúrguer Simplex"
              description="Hambúrguer simples com um suculento hambúrguer de carne, alface, tomate e queijo, servido em um pão macio com um toque de maionese."
              price={22}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={ByteBoost}
              alt="Imagem ByteBoost"
              title="ByteBoost"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
          </div>
        </section>

        <section id="snack">
          <h3>Lanches</h3>
          <div className="products_container">
            <Dish
              openModal={openModal}
              img={Omelet}
              alt="imagem omelete"
              title="Omelete DevEspecial"
              description="Omelete fofo recheado com espinafre, tomate e queijo feta, acompanhado de torradas integrais"
              price={18}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={CodeCrunch}
              alt="Imagem CodeCrunch"
              title="CodeCrunch"
              description=" Dois ovos fritos perfeitamente acompanhados por tiras de bacon crocante, servidos com uma fatia de pão artesanal"
              price={15}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Hamburguer}
              alt="Imagem hamburguer"
              title="Hambúrguer Simplex"
              description="Hambúrguer simples com um suculento hambúrguer de carne, alface, tomate e queijo, servido em um pão macio com um toque de maionese."
              price={22}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={ByteBoost}
              alt="Imagem ByteBoost"
              title="ByteBoost"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
          </div>
        </section>

        <section id="dessert">
          <h3>Sobremesas</h3>
          <div className="products_container">
            {/* <Dish {...itens}/> */}

            <Dish
              openModal={openModal}
              img={Omelet}
              alt="imagem omelete"
              title="Omelete DevEspecial"
              description="Omelete fofo recheado com espinafre, tomate e queijo feta, acompanhado de torradas integrais"
              price={18}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={CodeCrunch}
              alt="Imagem CodeCrunch"
              title="CodeCrunch"
              description=" Dois ovos fritos perfeitamente acompanhados por tiras de bacon crocante, servidos com uma fatia de pão artesanal"
              price={15}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={Hamburguer}
              alt="Imagem hamburguer"
              title="Hambúrguer Simplex"
              description="Hambúrguer simples com um suculento hambúrguer de carne, alface, tomate e queijo, servido em um pão macio com um toque de maionese."
              price={22}
              onClick={handleDishClick}
            />
            <Dish
              openModal={openModal}
              img={ByteBoost}
              alt="Imagem ByteBoost"
              title="ByteBoost"
              description="Um espresso intenso e aromático, perfeito para dar aquele boost na sua manhã ou tarde"
              price={8}
              onClick={handleDishClick}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Menu;
