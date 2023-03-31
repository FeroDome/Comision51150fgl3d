import './ItemDetail.css';

import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__img" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                </div>

            </div>
        </div>
    );
}

export default ItemDetail;