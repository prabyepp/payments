import React from "react";
import masterCard from '../../assets/images/partner/master_card.webp'
import visa from '../../assets/images/partner/visa.webp'
import rupay from '../../assets/images/partner/rupay.webp'
import norton from '../../assets/images/partner/norton.webp'
import dinnerClub from '../../assets/images/partner/dinner_club.webp'
import safeKey from '../../assets/images/partner/safe_key.webp'

import './footer.style.scss'

const Footer=()=>{

    return <footer className="footer">
        <div className="partners">
           <div className="partner">
           <img src={masterCard} alt="Master Card" className="partner__logo" />
           </div>
           <div className="partner">
           <img src={visa} alt="visa" className="partner__logo" />
           
           </div>
           <div className="partner">
           <img src={rupay} alt="rupay" className="partner__logo" />
           
           </div>
           <div className="partner">
           <img src={norton} alt="norton" className="partner__logo" />
           </div>
           <div className="partner">
            
           <img src={dinnerClub} alt="dinner club" className="partner__logo" />
           </div>
           <div className="partner">
           <img src={safeKey} alt="american express safe key" className="partner__logo" />
           </div>
         
           
        </div>
        <div className="tnc">
            <p>By continuing this page, you agree to our Terms of Services, Cookies Policy, Privacy policy and Content policies. All trademarks are properties of their respective owners. 2020 - 2021 &copy; Hound pay Ltd. All rights reserved.</p>
        </div>
    </footer>

}

export default Footer