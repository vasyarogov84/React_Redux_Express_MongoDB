import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux'; 
import { handleToken } from '../actions';

class Payment extends Component {
    
  render() {
    return (
     
        <StripeCheckout
          name="App"
          description="Pay money"
          amount={500}
          token={token => {
            this.props.handleToken(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE}
        >
          <button className="ui right floated button red">Add Credits</button>
        </StripeCheckout>
     
    );
  }
}

export default connect(null, { handleToken })(Payment);
