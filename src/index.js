import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

/*TODO: 
-Split the envelope component/subcomponents into its own file and import, 
then do the same for the rest of the exercises
-add propTypes to each component
*/

//CREDIT CARD
function CreditCard({ cardInfo }) {
	return(
		<div className="credit-card">
			

		</div>
	);
}





var testCardInfo = {
	name: "K.K. Slider",
	expirationDate: "12/19",
	cardNumber: "1234 5678 8765 4321",
	bankName: "Best Bank"
}







//ENVELOPE
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
AddressLabel.propTypes = {
	person: PropTypes.shape(
	{
		name: PropTypes.string.isRequired,
		address: PropTypes.shape({
			street: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
			state: PropTypes.string.isRequired,
			zipCode: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
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
		zipCode: '00000'
	}
}

var testFromPerson = {
	name: "Old Buddy",
	address: {
		street: "909 Dub Ct.",
		city: "Los Angeles",
		state: "CA",
		zipCode: '99999'
	}
}


ReactDOM.render(
	<Envelope toPerson = {testToPerson} fromPerson={testFromPerson}/>,
	document.querySelector('#root'));





