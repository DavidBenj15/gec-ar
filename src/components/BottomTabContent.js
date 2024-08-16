import React from 'react';

const BottomTabContent = ({ visible }) => {
    if (!visible) {
        return <></>;
    }

    return (
        <div className='overflow-hidden transition-all duration-300 ease-in-out'>
            <p>Hello bro</p>
        </div>
    );
}

export default BottomTabContent;