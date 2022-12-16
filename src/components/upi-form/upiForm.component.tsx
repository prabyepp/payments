
import './upiForm.style.scss'
import gPay from '../../assets/images/partner/google-pay.svg'
import amazonPay from '../../assets/images/partner/amazon-pay.svg'
import phonepe from '../../assets/images/partner/phonepe.svg'


const UPIForm=()=>{

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
                    <input  hidden type="radio" name="upi-client" id="gpay" value='gpay' />
                    <label htmlFor='gpay' className='form__input--upi'>
                        <img src={gPay} alt="google pay" className='upi-client__logo' />
                    </label>
                </div>
                <div>
                    <input  hidden type="radio" name="upi-client" id="amazonpay" value='amazonpay' />
                    <label htmlFor='amazonpay' className='form__input--upi'>
                    <img src={amazonPay} alt="amazon pay" className='upi-client__logo' />
                    </label>
                </div>
                <div>
                    <input  hidden type="radio" name="upi-client" id="phonepe" value='phonepe' />
                    <label htmlFor='phonepe' className='form__input--upi'>
                    <img src={phonepe} alt="phone pe" className='upi-client__logo' />
                    </label>
                </div>
           
    

            </div>
           
        </div>
       <div className="form__control form__controls-item">
        <label htmlFor='upi-id' className="form__label">
            UPI ID
            </label>
            <p className='form__placeholder'>
            Enter Your UPI ID
            </p>
           <div className="d-flex align-center">
           <input type="text" className='form__input form__input--sm text-center'  name='upi-id' id='upi-id'
            placeholder='abcd' /> 
            <p className='month-separator'>
@
            </p>
            <input type='text' className='form__input form__input--sm text-center w-100 bg-white'  name="upi-bank" id="upi-bank" />
           </div>
        </div>
       
    
       <div className="form__footer mt-auto">
        <button type='button' className='btn--submit w-100'>PAY</button>
       </div>
    
    </form>


}

export default UPIForm