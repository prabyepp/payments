
import './netBankingForm.style.scss'

import sbi from '../../assets/images/sbi.webp'
import kotak from '../../assets/images/kotak.webp'
import icici from '../../assets/images/icici.webp'
import axis from '../../assets/images/axis.webp'
import hdfc from '../../assets/images/icici.webp'



const NetBankingForm=()=>{

    return <form className="banking-form form__container--md">
        <div className="form__control">
            <label htmlFor='bank-client' className="form__label">
            Pay Using
            </label>
            <p className='form__placeholder'>
            Select Your Net Banking
            </p>
            <div className="form__inputs bank">
                <div>
                    <input  hidden type="radio" name="bank-client" id="sbi" value='sbi' />
                    <label htmlFor='sbi' className='form__input--upi'>
                        <img src={sbi} alt="sbi" className='bank-client__logo' />
                    </label>
                </div>
                <div>
                    <input  hidden type="radio" name="bank-client" id="icici" value='icici' />
                    <label htmlFor='icici' className='form__input--upi'>
                        <img src={icici} alt="icici" className='bank-client__logo' />
                    </label>
                </div>
                
                <div>
                    <input  hidden type="radio" name="bank-client" id="kotak" value='kotak' />
                    <label htmlFor='kotak' className='form__input--upi'>
                        <img src={kotak} alt="kotak" className='bank-client__logo' />
                    </label>
                </div>
                
                <div>
                    <input  hidden type="radio" name="bank-client" id="axis" value='axis' />
                    <label htmlFor='axis' className='form__input--upi'>
                        <img src={axis} alt="axis" className='bank-client__logo' />
                    </label>
                </div>
                
                <div>
                    <input  hidden type="radio" name="bank-client" id="hdfc" value='hdfc' />
                    <label htmlFor='hdfc' className='form__input--upi'>
                        <img src={hdfc} alt="hdfc" className='bank-client__logo' />
                    </label>
                </div>
                
                
        
            </div>
           <select className='form__input bg-white form__input--md' name="bank-client" id="bank-client">
            <option value="idfc">Idfc</option>
           </select>
        </div>
      
    
       <div className="form__footer mt-auto">
        <button type='button' className='btn--submit w-100'>PAY</button>
       </div>
    
    </form>


}

export default NetBankingForm