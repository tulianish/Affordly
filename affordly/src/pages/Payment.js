import React from 'react';
import NavigationBar from '../components/navbar';
import PaymentComponent from '../components/Payment';
import Footer from '../components/Footer';

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
