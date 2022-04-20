const Transactions = (props) => {
	return (
		<div>
			Label : {props.transaction.label}
			<p>Value : {props.transaction.value}</p>
			<br></br>
		</div >
	)
}

export default Transactions;