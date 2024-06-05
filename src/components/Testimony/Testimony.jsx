import { FaStar } from "react-icons/fa";

import PropTypes from 'prop-types';

import './Testimony.css'

function Testimony({ img, name, description }) {
    return (
        <div className='testimony'>
            <div className="testimony_title">
                <div className="testimony_perfil">
                    <img src={img} alt="perfil" />
                </div>
                <div>
                    <div className="perfil_name">
                        <h4>{name}</h4>
                        <div className='likes'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    
                    </div>
                    <p>{description} </p>
                </div>
            </div>



        </div>
    )
}

Testimony.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


export default Testimony