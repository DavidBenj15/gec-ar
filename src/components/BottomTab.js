import React, { useState } from 'react';
import BottomTabContent from './BottomTabContent';

const BottomTab = ({ updateModel }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTab = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`fixed bottom-0 left-0 w-full shadow-lg transition-all ease-in-out rounded-lg
                        bg-gradient-to-tr from-darkOrange to-lightOrange
                        ${isExpanded ? 'h-64' : 'h-16'}`}>
            <div className='flex justify-around py-4'>
                <button onClick={toggleTab}>
                    <p className='font-bold text-lg text-slate-900 underline decoration-2'>
                        {isExpanded ? 'Hide styles' : 'View more styles'}
                    </p>
                </button>
            </div>
            <BottomTabContent visible={isExpanded} updateModel={updateModel}/>
        </div>
    );
}

export default BottomTab;