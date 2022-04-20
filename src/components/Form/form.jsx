import { Component } from "react";


class Form extends Component {
	constructor() {
		super()

		this.state = {
			value: ''
		}
	}

	onSubmit = (e) => {
		e.preventDefault();

		this.props.onChange(this.state.value)
	}
	onChange = (e) => {
		const value = e.target.value;

		this.setState({
			value
		})

	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input onChange={this.onChange} value={this.state.value} name="balance" type="number" placeholder="Sum" />
				<button>Save</button>
			</form>
		)
	}
}

export default Form;