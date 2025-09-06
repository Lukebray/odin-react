import React, { useState } from "react"

function Person() {
	const [person, setPerson] = useState({
		firstName: "",
		lastName: "",
		age: 100,
	})

	const handleIncreaseAge = () => {
		setPerson({ ...person, age: person.age + 1 })
	}

	const updateField = (fieldName) => {
		return (value) => {
			setPerson({ ...person, [fieldName]: value })
		}
	}

	return (
		<>
			<h1>
				{person.firstName} {person.lastName}
			</h1>
			<InputField
				value={person.firstName}
				fieldLabel="First Name"
				onChangeEvent={updateField("firstName")}
			/>
			<InputField
				value={person.lastName}
				fieldLabel="Last Name"
				onChangeEvent={updateField("lastName")}
			/>
			<h2>{person.age}</h2>
			<button onClick={handleIncreaseAge}>Increase age</button>
		</>
	)
}

function InputField({ value, fieldLabel, onChangeEvent }) {
	return (
		<>
			<label htmlFor={fieldLabel}>{fieldLabel}</label>
			<input
				name={fieldLabel}
				type="text"
				value={value}
				onChange={(event) => onChangeEvent(event.target.value)}
			/>
		</>
	)
}

export default Person
