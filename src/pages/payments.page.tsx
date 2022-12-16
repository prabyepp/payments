import React from 'react'
import './payments.styles.scss'
import Sidebar from '../components/sidebar'
import PaymentInformation from '../components/payment-information'



const PaymentPage=()=>{

    return <div className='payment-dashboard__container'>
        <div className="locale__changer">
            <select className='locale__selector' name="locale" id="locale">
                <option className='locale__option' value="en">English</option>
                <option className='locale__option' value="hi">Hindi</option>
            </select>
        </div>
        <div className='payment-dashboard' >
          <Sidebar />
          <PaymentInformation/>
        </div>
    </div>

}

export default PaymentPage