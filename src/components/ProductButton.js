import React, { useState } from "react";

const ProductButton = ({ name, model, image, updateModel }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true);
        updateModel(model);
        setTimeout(() => {
            setClicked(false);
        }, 300);
    };

    return (
        <div className='mb-10 mx-2'>
            <img src={'/models/' + image} className={`size-28 rounded-2xl bg-slate-900 shadow-md p-2
                ${clicked ? 'shadow-productGlow' : 'shadow-md'} transition-all ease-in-out duration-150`}
                onClick={handleClick}
                alt={name}
            />
            <p className={`flex justify-center font-semibold transition-all ease-in-out duration-150
                ${clicked? 'text-slate-100' : 'text-slate-900'}`}>{name}</p>
        </div>

    );
}

export default ProductButton;