import React, { Component } from 'react';
import InvoicePDF from './InvoicePDF';


export default class Popup extends React.Component {
	render() {
		return (
		  <div className='popup'>
		    <div className='popup_inner'>
		      	<InvoicePDF togglePopup={this.props.togglePopup}/>
		    </div>
		  </div>
		);
	}
}