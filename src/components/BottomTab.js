import React, { useState } from 'react';
import BottomTabContent from './BottomTabContent';

const BottomTab = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTab = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`fixed bottom-0 left-0 w-full shadow-lg transition-all ease-in-out rounded-lg
                        bg-gradient-to-tr from-darkOrange to-lightOrange
                        ${isExpanded ? 'h-64' : 'h16'}`}>
            <div className='flex justify-around py-4'>
                <button className='tabItem' onClick={toggleTab}>
                    <span className='material-icons'>View more styles</span>
                </button>
            </div>
            <BottomTabContent visible={isExpanded}/>
        </div>
    );
}

export default BottomTab;