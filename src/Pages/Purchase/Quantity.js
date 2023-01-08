import React from 'react';

const Quantity = () => {
    return (
        <div>
            <h1 className='text-3xl text-secondary font-bold mb-5'>Tools Quantity Management</h1>
            <input type="number" placeholder="Update Quantity" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
    );
};

export default Quantity;