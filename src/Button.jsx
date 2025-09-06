function Button({
	text = "Click me!",
	color = "blue",
	fontSize = "16",
	handleClick,
}) {
	const buttonStyle = {
		color: color,
		fontSize: fontSize + "px",
	}
	return (
		<button onClick={handleClick} style={buttonStyle}>
			{text}
		</button>
	)
}

export default function ButtonTest() {
	const handleButtonClick = (text) => {
		console.log(text)
	}
	return (
		<div>
			<Button handleClick={() => handleButtonClick("bla bla")} />
			<Button handleClick={() => handleButtonClick("spoopy")} />
			<Button
				text="hello"
				color="gray"
				fontSize={18}
				handleClick={() => handleButtonClick("whatever")}
			/>
		</div>
	)
}
