import React from 'react';
import NavigationBar from '../components/navbar';
import PaymentComponent from '../components/Payment';
import Footer from '../components/Footer';

//adding header, footer, and payment component

function Payment() {
  return (
  	<>
  	<NavigationBar/>
  	<PaymentComponent />
    <Footer />
    </>
  );
}

export default Payment;
