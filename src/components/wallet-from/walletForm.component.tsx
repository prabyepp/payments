
import './walletForm.style.scss'
import paytm from '../../assets/images/partner/paytm.svg'
import mobikwik from '../../assets/images/partner/mobikwik.svg'



const WalletForm=()=>{

    return <form className="upi-form form__container--md">
        <div className="form__control">
            <label htmlFor='upi-client' className="form__label">
            Pay Using
            </label>
            <p className='form__placeholder'>
            Select Your Digital Wallet
            </p>
           
            <div className="form__inputs">
                <div>
                    <input  hidden type="radio" name="wallet-client" id="paytm" value='paytm' />
                    <label htmlFor='paytm' className='form__input--upi'>
                        <img src={paytm} alt="paytm" className='upi-client__logo' />
                    </label>
                </div>
                <div>
                    <input  hidden type="radio" name="wallet-client" id="mobikwik" value='mobikwik' />
                    <label htmlFor='mobikwik' className='form__input--upi'>
                    <img src={mobikwik} alt=" mobikwik" className='upi-client__logo' />
                    </label>
                </div>
            </div>
           
        </div>
       <div className="form__control form__controls-item">
        <label htmlFor='upi-id' className="form__label">
        Enter Mobile Number
            </label>
            <p className='form__placeholder'>
            </p>
           <div className="d-flex align-center form__input--phone">
            <p className='phone-code'>+91</p>
           <input type="text" className='form__input text-center w-100'  name='upi-id' id='upi-id'
            placeholder='1234567890' /> 
           </div>
        </div>
       
    
       <div className="form__footer mt-auto">
        <button type='button' className='btn--submit w-100'>PAY</button>
       </div>
    
    </form>


}

export default WalletForm