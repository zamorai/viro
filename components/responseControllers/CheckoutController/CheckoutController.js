import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import SetupForm from './SetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

export default function CheckoutController({ clientSecret }) {
  console.log(clientSecret, typeof clientSecret)
  const options = {
    // passing the client secret obtained in step 3
    clientSecret: clientSecret,
    appearance: { theme: 'night'},
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm />
    </Elements>
  );
};

