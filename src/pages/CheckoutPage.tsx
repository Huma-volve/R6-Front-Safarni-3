import cardImg from "@/assets/images/cardImg.png";
import {
    BankCardForm,
    PaymentMethodForm,
    PaypalForm,
} from "@/components/shared";

import { useState } from "react";
import paypalIcon from "@/assets/icons/paypal.svg";
import masterIcon from "@/assets/icons/mastercard.svg";
import visaIcon from "@/assets/icons/visa.svg";
import { useLocation } from "react-router";

const paymentOptionsArr = [
    { label: "Paypal", val: "paypal", icon: paypalIcon },
    { label: "Mastercard", val: "mastercard", icon: masterIcon },
    { label: "Visa", val: "visa", icon: visaIcon },
];

const CheckoutPage = () => {
    const [formType, setFormType] = useState("");
    const location = useLocation();

    // You will find here booking data that comes from different booking pages (tour or flight or car)
    console.log(location.state);

    let content = (
        <PaymentMethodForm
            setFormType={setFormType}
            paymentOptionsArr={paymentOptionsArr}
        />
    );
    if (formType == "mastercard" || formType == "visa") {
        content = (
            <BankCardForm
                paymentOptionsArr={paymentOptionsArr}
                cardType={formType}
            />
        );
    } else if (formType == "paypal") {
        content = <PaypalForm paymentOptionsArr={paymentOptionsArr} />;
    }

    return (
        <>
            <div>
                <img src={cardImg} alt="A bank card" className="m-auto" />
            </div>
            <div className="w-full max-w-[510px] mx-auto">
                <h2 className="font-medium text-[26px] text-gray-900 text-center mb-8">
                    Payment Methed
                </h2>
                <p className="font-medium text-lg mb-6 text-gray-700">
                    Add You Payment Methed
                </p>
                {content}
            </div>
        </>
    );
};

export default CheckoutPage;
