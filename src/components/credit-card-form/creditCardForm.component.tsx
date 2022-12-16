
import { ChangeEvent, useState } from 'react'
import './creditCardForm.style.scss'


const CreditCardForm=()=>{

     const [cardNumber,setCardNumber] =useState('')

    const creditCardChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let value=e.target.value;
        let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        let matches = v.match(/\d{4,16}/g);
        let match = matches && matches[0] || ''
        let parts = []
    
        for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
    
        if (parts.length) {
            setCardNumber( parts.join(' '))
        } else {
            return setCardNumber(value)
        }
    }

    return <form className="credit__card-form form__container--md">
        <div className="form__control">
            <label htmlFor='card-number' className="form__label">
            Card Number
            </label>
            <p className='form__placeholder'>
            Enter the 16-digit card number on the card
            </p>
            <div className="form__input--card">
            <input onChange={creditCardChangeHandler} value={cardNumber} type="text" className='form__input w-100'  name='card-number' id='card-number'
            placeholder='XXXX - XXXX - XXXX - XXXX' />
            <span className='icon'>
                <img src="https://onboarding.frenzopay.com/static/media/frenzopay%20logo.740f5587.svg" alt="card" className="icon__img" />
            </span>

            </div>
        </div>
       <div className='d-flex'>
       <div className="form__control form__controls-item">
            <label htmlFor='expiry-date' className="form__label">
            Expiry Date
            </label>
            <p className='form__placeholder'>
            Enter the expiry date of the card
            </p>
           <div className="d-flex align-center">
           <input type="text" className='form__input form__input--xs'  name='expiry-date' id='expiry-date'
            placeholder='08' /> 
            <p className='month-separator'>
/
            </p>
            <input type="text" className='form__input form__input--xs'  name='expiry-date' id='expiry-date'
            placeholder='22' />
           </div>
        </div>
        <div className="form__control ml-auto form__controls-item">
            <label htmlFor='cvv-number' className="form__label">
            CVV Number
            </label>
            <p className='form__placeholder'>
            Enter the 3 digit CVV.
            </p>
            <input type="text" className='form__input form__input--md'  name='cvv-number' id='cvv-number'
            placeholder='000' />
        </div>
       </div>
       <div className="form__control">
            <label htmlFor='name' className="form__label">
            Name
            </label>
            <p className='form__placeholder'>
            Enter the name on the card
            </p>
            <input type="text" className='form__input w-100 text-center'  name='name' id='name'
            placeholder='Name' />
       </div>
       <div className="form__footer mt-auto">
        <button type='button' className='btn--submit w-100'>PAY</button>
       </div>
    
    </form>


}

export default CreditCardForm