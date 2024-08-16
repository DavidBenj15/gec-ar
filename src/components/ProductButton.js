import React from "react";

const ProductButton = ({ name, model, image }) => {
    return (
        <div className='mb-10 mx-2'>
            <div className='border-1 size-28 rounded-2xl bg-black m-0'>
                <img src={'/models/' + image} className='size-full rounded-2xl'/>
            </div>
            <p className='flex justify-center font-semibold text-slate-900'>{name}</p>
        </div>

    );
}

export default ProductButton;