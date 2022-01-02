import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KDDkYDhdfoYTdqpSo7LE4wkJ22qsl6HQPRg1s0x7VB81nu4Ay9VXvmOESG67sHXwtxFgNhYzODWh8AcEz3e6Jzz003yI6YeiJ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
