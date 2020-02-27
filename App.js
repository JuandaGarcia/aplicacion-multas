import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Home from './paginas/Home'
import Vehiculos from './paginas/Vehiculos'
import Personas from './paginas/Personas'
import Multas from './paginas/Multas'
import VerMasPersona from './paginas/VerMasPersona'
import AñadirPersona from './paginas/AñadirPersona'

export default function App() {
	return (
		<NativeRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/personas" component={Personas} />
				<Route
					exact
					path="/ver-mas-persona/:identificacion"
					component={VerMasPersona}
				/>
				<Route exact path="/añadir-personas" component={AñadirPersona} />
				<Route exact path="/multas" component={Multas} />
				<Route exact path="/vehiculos" component={Vehiculos} />
			</Switch>
		</NativeRouter>
	)
}
