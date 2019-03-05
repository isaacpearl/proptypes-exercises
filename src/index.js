import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

//TODO: Split the envelope into its own file and import, 
//do the same for the rest of the exercises

function Envelope({ toPerson, fromPerson}) {
	return(
		<div className='envelope'>
			<div className='from-person'><AddressLabel person={fromPerson}/></div>
			<div className='to-person'><AddressLabel person={toPerson}/></div>
			<Stamp/>
		</div>
	);
}

function AddressLabel({ person }) {
	return(
		<div className='address-label'>
			<div>{person.name}</div>
			<div>{person.address.street}</div>
			<div>{person.address.city}, {person.address.state} {person.address.zipCode}</div>
		</div>
	);
}

function Stamp() {
	return(
		<span className='stamp'></span>
	)
}


var testToPerson = {
	name: "Good Friend",
	address: {
		street: "808 Beet St.",
		city: "Wendell",
		state: "MA",
		zipCode: "00000"
	}
}

var testFromPerson = {
	name: "Old Buddy",
	address: {
		street: "909 Dub Ct.",
		city: "Los Angeles",
		state: "CA",
		zipCode: "99999"
	}
}


ReactDOM.render(
	<Envelope toPerson = {testToPerson} fromPerson={testFromPerson}/>,
	document.querySelector('#root'));