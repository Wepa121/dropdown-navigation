import React from "react";
import {Nav} from "./components/nav"
import {Main} from "./components/main"
import {GlobalStyles} from "./components/styles/global.styled"

const App = ()=> {
	
	return(
		<>
			<GlobalStyles/>
			<Nav/>
			<Main/>
		</>
	)  
}

export default App;