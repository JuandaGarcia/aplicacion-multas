import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Home from './paginas/Home'
import Vehiculos from './paginas/Vehiculos'
import Personas from './paginas/Personas'
import Multas from './paginas/Multas'

export default function App() {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/personas" component={Personas} />
					<Route exact path="/multas" component={Multas} />
					<Route exact path="/vehiculos" component={Vehiculos} />
				</Switch>
			</View>
		</NativeRouter>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
