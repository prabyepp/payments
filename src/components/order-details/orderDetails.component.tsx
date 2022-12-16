import { useLocation } from 'react-router-dom';

import cardIcon from '../../assets/images/payment/card.webp'
import bankIcon from '../../assets/images/payment/bank.webp'
import upiIcon from '../../assets/images/payment/upi.webp'
import walletIcon from '../../assets/images/payment/wallet.webp'

import './orderDetails.style.scss'





const OrderDetails=()=>{

    const {pathname}=useLocation();

    return <div className="order__details">
        <div className="order__logo-box">
           {pathname==='/payments/cards' && <img className="order__logo" src={cardIcon} alt='card'
           />}
           {pathname==='/payments/upi' && <img className="order__logo" src={upiIcon} alt='upi'
           />}
           {pathname==='/payments/wallet' && <img className="order__logo" src={walletIcon} alt='wallet'
           />}
           {pathname==='/payments/banking' && <img className="order__logo" src={bankIcon} alt='bank'
           />}
        </div>
        <div className="order__content">
            <div className="order-detail">
                <p className="order-detail__heading order-detail__item semi-bold">
                Order ID
                </p>
                <p className="text-right order-detail__item">
                CASH125479635794
                </p>
            </div>
            <div className="order-detail">
                <p className="order-detail__heading order-detail__item semi-bold">
                Company
                </p>
                <p className="text-right order-detail__item">
                Abc company
                </p>
            </div>
            <div className="order-detail">
                <p className="order-detail__heading order-detail__item semi-bold">
                Product
                </p>
                <p className="text-right order-detail__item">
                xyz
                </p>
            </div>
            <div className="order-detail">
                <p className="order-detail__heading order-detail__item semi-bold">
                Amount
                </p>
                <p className="order-detail__item text-right">
                ₹ 1099.00
                </p>
            </div>
        </div>
        <div className="order__price-detail">
            <p className="order__price-text">
            You have to pay
            </p>
            <h3 className="order__price">
            &#8377; 1099.00
            </h3>

        </div>
        

    </div>


}

export default OrderDetails