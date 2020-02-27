import React, { useState, useEffect } from 'react'
import {
	Text,
	TouchableHighlight,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator,
	Alert
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import HeaderList from '../componets/HeaderList'
import axios from 'axios'
import styles from '../modulos/styles'

export default ({ history }) => {
	const [multas, setMultas] = useState([])
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
			await axios.get(`http://157.245.245.214/multas/`).then(res => {
				setMultas(res.data)
			})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	const AlertaEliminar = id => {
		Alert.alert(
			'Eliminar',
			'¿Está seguro que desea eliminar esta multa?',
			[
				{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{
					text: 'Eliminar',
					onPress: () => {
						DeleteMulta(id)
					}
				}
			],
			{ cancelable: false }
		)
	}

	const DeleteMulta = async id => {
		setLoading(true)
		setError(null)

		try {
			await axios.delete(`http://157.245.245.214/multas/${id}`).then(res => {})
			await axios.get(`http://157.245.245.214/multas/`).then(res => {
				setMultas(res.data)
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
					titulo={'Multas'}
					textoBoton={'multa'}
					url={'añadir-multas'}
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
					titulo={'Multas'}
					textoBoton={'multa'}
					url={'añadir-multas'}
				/>
				<ScrollView style={styles.scrollArea}>
					<Text style={styles.textError}>Algo salió mal!</Text>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<HeaderList
				history={history}
				titulo={'Multas'}
				textoBoton={'multa'}
				url={'añadir-multas'}
			/>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorPersonas}>
					{multas.map(multa => {
						return (
							<View
								key={multa.codigo}
								style={[
									styles.ItemMulta,
									styles.container_Personas,
									styles.horizontal
								]}
							>
								<View style={styles.contenedo_info_vehiculo}>
									<Text style={styles.nombrePersona}>
										Codigo: {multa.codigo}
									</Text>
									<Text style={styles.nombrePersona}>
										Persona: {multa.id_persona}
									</Text>
									<Text>Fecha: {multa.fecha}</Text>
									<Text style={styles.containerObservacion}>
										Observacion: {multa.observacion}
									</Text>
									<Text>Placa del carro: {multa.placa_carro}</Text>
									<Text style={styles.nombrePersona}>
										Total a pagar: {multa.total_pagar}
									</Text>
									{/* <Text style={styles.nombrePersona}>{persona.nombre}</Text>
									<Text>{persona.identificacion}</Text>
									<Text>Teléfono: {persona.telefono}</Text>
									<Text>Dirección: {persona.direccion}</Text>
									<Text>Ciudad: {persona.ciudad}</Text> */}
								</View>
								<View style={styles.contenedor_botones_persona}>
									<TouchableHighlight
										underlayColor="rgba(0,0,0,0.1)"
										style={styles.verMas}
										onPress={() => {
											/* history.push(`/editar-persona/${persona.identificacion}`) */
										}}
									>
										<Text style={styles.textVerMas}>Editar</Text>
									</TouchableHighlight>
									<TouchableHighlight
										underlayColor="rgba(0,0,0,0.1)"
										style={styles.Eliminar_persona}
										onPress={() => {
											AlertaEliminar(multa.codigo)
										}}
									>
										<Text style={styles.textVerMas}>Eliminar</Text>
									</TouchableHighlight>
								</View>
							</View>
						)
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
