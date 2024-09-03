import React, { useState } from "react";

const ProductButton = ({ name, model, image, updateProduct, currentProduct, scale }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true);
        updateProduct({
            "name": name,
            "modelSource": model,
            "scale": scale
        });
        setTimeout(() => {
            setClicked(false);
        }, 300);
    };

    const productsMatch = (currentProduct, name, model) => {
        if (currentProduct.name === name && currentProduct.modelSource === model) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className='mb-10 mx-2'>
            <img src={image} className={`size-28 rounded-2xl bg-slate-900 shadow-md p-2
                transition-all ease-in-out duration-150
                ${productsMatch(currentProduct, name, model) ? 'shadow-productGlow' : 'shadow-md'}`}
                onClick={handleClick}
                alt={name}
            />
            <p className={`flex justify-center font-semibold transition-all ease-in-out duration-150
                ${clicked? 'text-slate-100' : 'text-slate-900'}`}>{name}</p>
        </div>

    );
}

export default ProductButton;