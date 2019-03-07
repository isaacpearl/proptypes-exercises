import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

/*TODO: 
-Split the envelope/credit card/poster component/subcomponents into their own files and import, 
then do the same for the rest of the exercises
-add propTypes
*/

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


//CREDIT CARD
function CreditCard({ cardInfo }) {
	return(
		<div className="credit-card">
			<BankName bankName={cardInfo.bankName}/>
			<CardNumber cardNumber={cardInfo.cardNumber}/>
			<ExpirationDate date={cardInfo.expirationDate}/>
			<CardholderName name={cardInfo.name}/>
		</div>
	);
}

function CardholderName({ name }) {
	return(
		<div className="cardholder-name">{name}</div>
	);
}

function BankName({ bankName }) {
	return(
		<div className="bank-name">{bankName}</div>
	);
}

function ExpirationDate({ date }) {
	return(
		<div className="expiration-date">
			<div className="expiration-date-prefix">
				<div>VALID</div>
				<div>THRU</div>
			</div>
			<div>{date}</div>
		</div>
	);
}

function CardNumber ({ cardNumber }) {
	return(
		<div className="card-number">
			<div>{cardNumber}</div>
			<div className="card-number-prefix">{cardNumber.slice(0, 4)}</div>
		</div>
	);
}

var testCardInfo = {
	name: "K.K. Slider",
	expirationDate: "12/19",
	cardNumber: "1234 5678 8765 4321",
	bankName: "Best Bank"
}


//POSTER
function Poster ({ image, title, text }) {
	return(
		<div className="poster">
			<PosterImage image={image}/>
			<PosterTitle title={title}/>
			<PosterText text={text}/>
		</div>
	);
}

function PosterImage({ image }) {
	return(
		<div className="poster-image">
			<img src={image} alt="code on screen"/>
		</div>
	)
}

function PosterTitle({ title }) {
	return(
		<div className="poster-title">{title}</div>
	)
}

function PosterText({ text }) {
	return(
		<div className="poster-text">{text}</div>
	)
}

var testPosterImage = "https://marketingweek.imgix.net/content/uploads/2017/05/12103909/Coding-body-image-.jpg";
var testPosterTitle = "PROGRAMMING"
var testPosterText = "Not even once."


//EMAIL

function Email({ email }) {
	return (
		<div className="email">
			<div className="info">
				<EmailSender sender={email.sender}/>
				<EmailSubject subject={email.subject}/>
				<EmailDate date={email.date}/>
			</div>
			<EmailMessage message={email.message}/>
			<div className="buttons">
				<CheckBox/>
				<PinIcon/>
			</div>
		</div>
	);
}

function EmailSender({ sender }) {
	return(
		<span className="sender">{sender}</span>
	);
}

function EmailSubject({ subject }) {
	return(
		<span className="subject">{subject}</span>
	);
}

function EmailDate({ date }) {
	return(
		<span className="date">{date}</span>
	);
}

function EmailMessage({ message }) {
	return(
		<span className="message">{message}</span>
	);
}

function CheckBox() {
	return(
		<input className="checkbox" type="checkbox"/>
	);
}

function PinIcon() {
	return(
		<span className="fas fa-thumbtack pin-icon"></span>
	);
}

var testEmail = {
	sender: "Your Friend",
	subject: "How are you?",
	date: "01-23-19",
	message: "It's been a while! I am emailing you."
}

ReactDOM.render(
	<div>
		<Envelope toPerson = {testToPerson} fromPerson={testFromPerson}/>
		<CreditCard cardInfo = {testCardInfo}/>
		<Poster image = {testPosterImage} title = {testPosterTitle} text = {testPosterText}/>
		<Email email={testEmail}/>
	</div>,
	document.querySelector('#root'));





