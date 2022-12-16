import { NavLink, useLocation } from 'react-router-dom'

import {ReactComponent as BankLogo} from 'assets/images/bank.svg'
import {ReactComponent as Wallet} from 'assets/images/wallet.svg'
import {ReactComponent as UpiLogo} from 'assets/images/upi.svg'
import {ReactComponent as CreditCard} from 'assets/images/credit_card.svg'
import './paymentModeSelector.style.scss'
import { useState } from 'react'

const PaymentModeSelector=()=>{
    const [isOpen,setIsOPen]=useState(false);

    const paymentModeClickHandler=()=>{
        setIsOPen(prev=>!prev)
    }
    const {pathname}=useLocation()


    return <div className="payment__modes-container">

        {!isOpen &&  <div className='payment__selector' onClick={paymentModeClickHandler}>
             <div   className={'payment__selected-container'}>
              
             { pathname==='/payments/cards' && <div   className={'payment__selected'}>
                 <CreditCard className='payment__mode-icon' />
                 <p>Credit/ Debit Card</p>
             </div>  }
             { pathname==='/payments/upi' && <div   className={'payment__selected'}>
             <UpiLogo className='payment__mode-icon'/>
                 <p>UPI</p>
             </div>  }
             { pathname==='/payments/wallet' && <div   className={'payment__selected'}>
             <Wallet className='payment__mode-icon'/>
                 <p >Wallet</p>
        
             </div>  }
             { pathname==='/payments/banking' && <div   className={'payment__selected'}>
             <BankLogo className='payment__mode-icon'/>
                 <p >Net Banking</p>
             </div>  }
                 
             </div>
             <p className='dropdown__icon'>
             &#709;    </p>
             </div>}
        { isOpen &&
             <div className="payment__modes-options" onClick={paymentModeClickHandler}>
             <div className='payment__mode--first'>
             <NavLink to={'/payments/cards'}  className={'payment__mode'}>
                 <CreditCard className='payment__mode-icon' />
                 <p className='payment__mode-name'>Credit/ Debit Card</p>
         
             </NavLink>
             <p className='dropdown__icon'>
             &#709;    </p>
             </div>
           
             <NavLink to={'/payments/upi'}  className={'payment__mode'}>
                <UpiLogo className='payment__mode-icon'/>
                 <p className='payment__mode-name'>UPI</p>
         
             </NavLink>
             <NavLink to={'/payments/wallet'}   className={'payment__mode'}>
                <Wallet className='payment__mode-icon'/>
                 <p className='payment__mode-name'>Wallet</p>
         
             </NavLink>
             <NavLink to={'/payments/banking'}   className={'payment__mode'}>
                <BankLogo className='payment__mode-icon'/>
                 <p className='payment__mode-name'>Net Banking</p>
         
             </NavLink>
           
         </div>
        }
       
    </div>

}

export default  PaymentModeSelector