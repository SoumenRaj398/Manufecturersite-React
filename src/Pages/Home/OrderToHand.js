import React from 'react';

const OrderToHand = () => {
    return (
       <div className='text-center mb-24'>
           <h1 className='text-3xl mb-12 font-bold text-secondary'>How to Order?</h1>
            <ul className="steps steps-vertical lg:steps-horizontal w-1/2">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose Tools</li>
        <li className="step step-primary">Purchase</li>
        <li className="step step-primary">Receive Tools</li>
      </ul>
       </div>
    );
};

export default OrderToHand;