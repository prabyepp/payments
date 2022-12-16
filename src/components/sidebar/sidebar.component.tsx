import { NavLink } from 'react-router-dom'

import './sidebar.style.scss'
import {ReactComponent as BankLogo} from 'assets/images/bank.svg'
import {ReactComponent as Wallet} from 'assets/images/wallet.svg'
import {ReactComponent as UpiLogo} from 'assets/images/upi.svg'
import {ReactComponent as CreditCard} from 'assets/images/credit_card.svg'

export type PaymentMode='card'|'upi'|'net-banking'|'wallet'

export interface PayementSidebarProps{

    paymentMode?:PaymentMode
}

const PayementSidebar=()=>{

    return <div className="sidebar">
        <div className="logo__container">
                <img className='logo' height={'96px'} src={'https://onboarding.frenzopay.com/static/media/frenzopay%20logo.740f5587.svg'} alt="Frenzo pay logo" />
        </div> 
    
    <div className='payment'>
        <h3 className='payment__heading'>Choose Payment Method</h3>
        <div className="payment__options">
            <NavLink to={'/payments/cards'}  className={'payment__option'}>
                <CreditCard className='payment__option-icon' />
                <p className='payment__option-name'>Credit/ Debit Card</p>

            </NavLink>
            <NavLink to={'/payments/upi'}  className={'payment__option'}>
               <UpiLogo className='payment__option-icon'/>
                <p className='payment__option-name'>UPI</p>

            </NavLink>
            <NavLink to={'/payments/wallet'}   className={'payment__option'}>
               <Wallet className='payment__option-icon'/>
                <p className='payment__option-name'>Wallet</p>

            </NavLink>
            <NavLink to={'/payments/banking'}   className={'payment__option'}>
               <BankLogo className='payment__option-icon'/>
                <p className='payment__option-name'>Net Banking</p>

            </NavLink>
          
        </div>


    </div>


    </div>
}


export default PayementSidebar
