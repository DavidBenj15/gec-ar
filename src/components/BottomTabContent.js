import React, { useState, useEffect } from 'react';
import ProductButton from './ProductButton';


const BottomTabContent = ({ visible }) => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch('/models/modelInfo.json')
        .then(response => response.json())
        .then(data => setModels(data))
        .catch(error => console.error('Error fetching models:', error))
    }, []);

    if (!visible) {
        return <></>;
    }

    return (
        <div className='overflow-hidden transition-all duration-300 ease-in-out px-4 flex justify-center size-full items-center'>
            {models.map((model, index) => (
                <ProductButton name={model.name} model='chair1.glb' image='chair1.png'/>
            ))}
        </div>
    );
}

export default BottomTabContent;