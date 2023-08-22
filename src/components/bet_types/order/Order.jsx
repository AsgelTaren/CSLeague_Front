import React from 'react';
import './Order.css';
import * as Components from '../../../components';

const Order = ({ text }) => {
    return (
        <div className='order-container'>
            <p>{text}</p>
            <div className='arrows'>

                <div className='up-arrow'>
                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L2.69146 13.8399C2.3097 14.2396 2.32459 14.8732 2.72471 15.2545L14 26" stroke="var(--color-secondary)" stroke-width="3" />
                    </svg>
                </div>

                <div className='down-arrow'>
                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L2.69146 13.8399C2.3097 14.2396 2.32459 14.8732 2.72471 15.2545L14 26" stroke="var(--color-secondary)" stroke-width="3" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export { Order }