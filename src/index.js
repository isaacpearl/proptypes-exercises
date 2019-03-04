import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function AddressLabel({ person }) {
	return(
		<div className='address-label'>This is the label.</div>
	);
}


ReactDOM.render(
	<AddressLabel/>,
	document.querySelector('#root'));