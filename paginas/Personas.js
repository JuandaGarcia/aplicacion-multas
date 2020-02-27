import React, { useState, useEffect } from 'react'
import {
	Text,
	TouchableHighlight,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import HeaderList from '../componets/HeaderList'
import axios from 'axios'
import styles from '../modulos/styles'

export default ({ history }) => {
	const [personas, setPersonas] = useState([])
	const [loading, setLoading] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		handleAndroidBackButton(() => history.push('/'))
		fetchData()
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	const fetchData = async () => {
		setLoading(true)
		setError(null)

		try {
			await axios.get(`http://157.245.245.214/personas/`).then(res => {
				setPersonas(res.data)
			})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	if (loading) {
		return (
			<SafeAreaView>
				<HeaderList
					history={history}
					titulo={'Personas'}
					textoBoton={'Persona'}
					url={'añadir-personas'}
				/>
				<ScrollView style={styles.scrollArea}>
					<ActivityIndicator size="large" color="#0000ff" />
				</ScrollView>
			</SafeAreaView>
		)
	}
	if (error) {
		return (
			<SafeAreaView>
				<HeaderList
					history={history}
					titulo={'Personas'}
					textoBoton={'Persona'}
					url={'añadir-personas'}
				/>
				<ScrollView style={styles.scrollArea}>
					<Text style={styles.textError}>Algo salió mal!</Text>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<HeaderList
				history={history}
				titulo={'Personas'}
				textoBoton={'Persona'}
				url={'añadir-personas'}
			/>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorPersonas}>
					{personas.map(persona => {
						return (
							<View
								key={persona.identificacion}
								style={[
									styles.MarcoPersona_Personas,
									styles.container_Personas,
									styles.horizontal
								]}
							>
								<View style={styles.contenedo_info_vehiculo}>
									<Text style={styles.nombrePersona}>{persona.nombre}</Text>
									<Text>{persona.identificacion}</Text>
								</View>
								<TouchableHighlight
									underlayColor="rgba(0,0,0,0.1)"
									style={styles.verMas}
									onPress={() =>
										history.push(`/ver-mas-persona/${persona.identificacion}`)
									}
								>
									<Text style={styles.textVerMas}> Ver más </Text>
								</TouchableHighlight>
							</View>
						)
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
