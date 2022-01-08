import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../menu-item/menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate()
    return (
        <div className={`${size} menu-item`}
            onClick={() => navigate(linkUrl)}
        >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className="content">
                <h1 className="title"> {title.toUpperCase()}</h1>
                <Link to='/category' className="sub-title">Shop Now</Link>
            </div>
        </div>
    )
};

export default MenuItem;