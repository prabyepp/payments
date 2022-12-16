import { PaymentMode } from "@components/sidebar"
import './paymentInformation.style.scss'
import Footer from '../footer'
import Timer from '../timer'
import OrderDetails from '../order-details'
import { Route, Routes } from "react-router-dom"
import CreditCardForm from "components/credit-card-form"
import UPIForm from "components/upi-form/upiForm.component"
import NetBankingForm from "components/net-banking-form/netBankingForm.component"
import PaymentModeSelector from "components/payment-mode-selector"
import WalletFrom from "components/wallet-from"



const PayementInformation=()=>{

    return <div className="main-content">
    <div className="payment-information__container">
        <div className="payment__modes">
            <PaymentModeSelector />
           <Timer initialMinutes={5} initialSeconds={59}/>
        </div>
        <div className="payment-information">
            <div className="payment-information__header">
                <h2 className="payment-information__heading">
                Payment Information

                </h2>
                <div className="payment-information__heading-timer">
                <Timer initialSeconds={20} />
                </div>
            </div>
            <Routes>
                <Route path={'cards'}  element={<CreditCardForm />}/>
                <Route path={'upi'}  element={<UPIForm />}/>
                <Route path={'wallet'}  element={<WalletFrom />}/>
                <Route path={'banking'}  element={<NetBankingForm />}/>
            </Routes>
            <div className="payment-information__footer">
                <p>
                    By clicking on Pay you agree to our <a href="https://www.frenzopay.com/terms-of-use" target='_blank' className="text-orange">Terms of Use</a> & <a href="https://www.frenzopay.com/privacy-policy" target='_blank' className="text-orange">Privacy Policy.</a>
                </p>
            </div>
            
        </div>
        <div className="order__details-container">
            <OrderDetails/>
        </div>
    </div>
        <Footer/>
    </div>
}

export default PayementInformation