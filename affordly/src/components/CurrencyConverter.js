/*

Contribution : Tejasvi Vig
 
Name : Tejasvi Vig
Banner ID : B008337057
Email id : tj252001@dal.ca

Feature Name: Currency Converter

Feature Details: 

This file contains the front end code for the implementation of currency converter provided to the user. 
The method callAPI defined in the code hits the api https://api.exchangeratesapi.io/latest 
to fetch the exchange rates for different currencies and then getConvertedCurrency function converts the amount from CAD
to the desired currency and the final result is displayed to the user

*/


import React from 'react'
import '../stylesheets/CurrencyConverter.css'

class CurrencyConverter extends React.Component {
    constructor() {
      super();
      
      this.state = {
        baseCurrency:'CAD',
        convertToCurrency:'USD',
        baseAmount: 100,
        rates: [],
        currencies: []
      };
      
      this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
      this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
      this.changeBaseAmount = this.changeBaseAmount.bind(this);
      this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
      this.callAPI = this.callAPI.bind(this);
    }
    
    componentDidMount() {
     this.callAPI(this.state.baseCurrency)
    }
    
    changeBaseCurrency(e) {
      this.setState({ baseCurrency: 'CAD '});
      console.log(e.target.value)
      this.callAPI('CAD')
      
    }
    
   callAPI(base) {
     const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
      
      fetch(api)
       .then(results => {
          return results.json();
      }).then(data => this.setState({
        rates: data['rates'],
        currencies: Object.keys(data['rates']).sort()
      }));
     
   } 
    
    
    changeConvertToCurrency(e) {
      this.setState({
        convertToCurrency: e.target.value
      });
    }
    
    changeBaseAmount(e) {
    if(e.target.value >= 0) {
     this.setState({
       baseAmount: e.target.value
     });
    }
    }
    
    getConvertedCurrency(baseAmount,convertToCurrency,rates) {
        return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(3);
    }
    
    render() {
      const {currencies,rates,baseCurrency,baseAmount,convertToCurrency} = this.state;
      
      const currencyChoice = currencies.map(currency =>
        <option key={currency} value={currency}> {currency} </option>      
      );
                                            
      const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
      
      
      return(
        <div className="form-container">
          <form className='ui mini form'>
            <h3>Convert to: {convertToCurrency}</h3>
            <select value={convertToCurrency} onChange={this.changeConvertToCurrency}>
              {currencyChoice}
            </select>
            <br /><br />
           <h3>Amount:</h3>
             <input type='number' 
                    id='base-amount' 
                    defaultValue={baseAmount} 
                    onChange={this.changeBaseAmount}>
            </input>                             
         </form>      
         <br/>                 
         <h4 id='result-text'>{baseAmount} CAD is equal to {result} {convertToCurrency}</h4>
       </div>
      );
    }
  }
  
  
 export default CurrencyConverter;
