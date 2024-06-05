import { MdFavorite } from "react-icons/md"
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import PropTypes from 'prop-types';


import './Dish.css'

function Dish({ img, alt, title, description, price }) {
    return (
        <div className="dish">
            <div className="favorite_container">
                <MdFavorite />
            </div>
            <img src={img} alt={alt} className="dish_img" />
            <h4 className="dish_title">{title}</h4>
            <p className="dish_description">{description}</p>
            <div className="likes">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>(200+)</span>
            </div>
            <div className="dish_purchase">
                <p className="dish_price">R$ {price},00</p>
                <button className="bag"><MdOutlineShoppingBag /></button>
            </div>
        </div>
    )
}

Dish.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Dish