import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Home from './paginas/Home'
import Vehiculos from './paginas/Vehiculos'
import Personas from './paginas/Personas'
import Multas from './paginas/Multas'
import EditarPersona from './paginas/EditarPersona'
import AñadirPersona from './paginas/AñadirPersona'
import AñadirMultas from './paginas/AñadirMultas'

export default function App() {
	return (
		<NativeRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/personas" component={Personas} />
				<Route
					exact
					path="/editar-persona/:identificacion"
					component={EditarPersona}
				/>
				<Route exact path="/añadir-personas" component={AñadirPersona} />
				<Route exact path="/multas" component={Multas} />
				<Route exact path="/añadir-multas" component={AñadirMultas} />
				<Route exact path="/vehiculos" component={Vehiculos} />
			</Switch>
		</NativeRouter>
	)
}
