import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
	const [
		firstName,
		setFirstName,
	] = useState("");

	const [
		lastName,
		setLastName,
	] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({ html: "Please enter the first and last name" });
		}
		else {
			addTech({
				firstName,
				lastName,
			});
			M.toast({ html: `${firstName} ${lastName} has been added.` });

			// Clear Fields
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id='tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<input
						type='text'
						name='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor='firstName' className='active'>
						First Name
					</label>
				</div>
				<div className='row'>
					<input
						type='text'
						name='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<label htmlFor='lastName' className='active'>
						Last Name
					</label>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='add-tech-modal'
					onClick={onSubmit}
					className='modal-close waves-effect blue btn'>
					Enter
				</a>
			</div>
		</div>
	);
};

AddTechModal.propTypes = {
	addTech : PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
