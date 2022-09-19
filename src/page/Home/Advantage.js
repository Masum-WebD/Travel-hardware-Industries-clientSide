import React from 'react';

const Advantage = () => {
    return (
        <div className="bg-[#0842A6] mt-10">
            <h1 className='text-white font-bold text-3xl py-10 '> Our company fulfillment advantage:</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 py-5'>
                <div>
                    <h2 className='text-2xl font-bold text-white'>TECHNOLOGY</h2>
                    <p className='text-white'>With seamless shopping cart integration and top-of-the-line Warehouse Management System (WMS), you can easily manage your inventory and ship your products</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-white'>DELIVERY</h2>
                    <p className='text-white'>Our strategically placed fulfillment centers offer If it is inside the country then within 4 days and in other countries it is within 15 days  delivery to 99% of the United States, reduced transit costs, and industry-leading accuracy</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-white'>TRANSPORTATION</h2>
                    <p className='text-white'>Our carrier-agnostic shipping helps us secure the lowiest costs for your order</p>
                </div>
            </div>
        </div>
    );
};

export default Advantage;