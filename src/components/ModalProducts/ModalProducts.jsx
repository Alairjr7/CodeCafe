import "./ModalProducts.css";

import { MdOutlineShoppingBag } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function ModalProducts({ isOpen, onClose, dish }) {
  if (!isOpen) return null;

  return (
    <div className="modal_container">
      <div className="modal-content">
        <div className="close_container">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>

        <div className="modalImg_container">
          <img src={dish.img} alt={dish.alt} />
        </div>

        <h2 className="modalTitle">{dish.title}</h2>
        <div className="modalDescription_container">
          <p className="modalDescription">{dish.description}</p>
        </div>
        <div className="deadline_container">
          <div>
            <FaStar style={{ color: "#FFD700" }} />{" "}
            <span style={{ color: "#a52a2a" }}>5.0</span>
          </div>
          <p style={{ color: "#a52a2a" }}>Prazo de entrega: 20min</p>
        </div>

        <div className="price_container">
          <p className="price">R$ {dish.price},00</p>
          <div className="quantity_container">
            <button className="remover">-</button>
            <span className="quantity">1</span>
            <button className="adicionar">+</button>
          </div>
        </div>

        <div className="modalButton_container">
          <button className="buttonAdd">
            {" "}
            <MdOutlineShoppingBag /> ADICIONAR
          </button>

          <CiHeart className="heart"/>
        </div>
      </div>
    </div>
  );
}

export default ModalProducts;
