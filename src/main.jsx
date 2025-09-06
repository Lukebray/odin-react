import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Greeting from "./Greeting.jsx"
import Food from "./Food.jsx"
import TodoList from "./ToDo.jsx"
import ButtonTest from "./Button.jsx"
import Person from "./Person.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Greeting />
		<Person />
	</StrictMode>
)
