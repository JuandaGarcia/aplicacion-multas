import React, { useState, useEffect } from 'react'
import {
	Text,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator,
	TextInput,
	TouchableHighlight,
	Alert,
	Picker
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import styles from '../modulos/styles'
import axios from 'axios'

export default ({ history }) => {
	const [fecha, setFecha] = useState('')
	const [observacion, setObservacion] = useState('')
	const [total_pagar, setTotal_pagar] = useState('')
	const [id_persona, setId_persona] = useState('')
	const [placa_carro, setPlaca_carro] = useState('')

	const [personas, setPersonas] = useState([])
	const [vehiculos, setVehiculos] = useState([])

	const [loading, setLoading] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		handleAndroidBackButton(() => history.push('/multas'))
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
			await axios.get(`http://157.245.245.214/vehiculos/`).then(res => {
				setVehiculos(res.data)
			})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	const PostData = async () => {
		setLoading(true)
		setError(null)

		try {
			const data = {
				fecha: fecha,
				observacion: observacion,
				total_pagar: total_pagar,
				id_persona: id_persona,
				placa_carro: placa_carro
			}

			const headers = {
				'Content-Type': 'application/json'
			}

			axios
				.post(`http://157.245.245.214/multas/`, data, {
					headers: headers
				})
				.then(response => {
					AlertaPOST()
				})
				.catch(error => {})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	const AlertaPOST = () => {
		Alert.alert(
			'Se agrego correctamente',
			'Oprima Aceptar para continuar',
			[
				{
					text: 'Aceptar',
					onPress: () => {
						history.push('/multas')
					}
				}
			],
			{ cancelable: false }
		)
	}

	if (loading) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Añadir Persona</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	if (error) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Añadir Persona</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<Text style={styles.textError}>Algo salió mal!</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<Text style={styles.text_HeaderList}>Añadir multa</Text>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorFormulario}>
					<Text>Fecha</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setFecha(text)}
						value={fecha}
						placeholder="AAAA-MM-DD"
						maxLength={40}
					/>
					<Text>Observación</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setObservacion(text)}
						value={observacion}
						placeholder="ingresa la observación"
						maxLength={200}
					/>
					<Text>Total a pagar</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setTotal_pagar(text)}
						value={total_pagar}
						placeholder="ingresa el total a pagar"
						keyboardType="numeric"
						maxLength={15}
					/>
					<Text>Identificacion de la persona</Text>
					<Picker
						selectedValue={id_persona}
						style={{ height: 50, width: 300 }}
						onValueChange={text => setId_persona(text)}
					>
						{personas.map(persona => {
							return (
								<Picker.Item
									label={`${persona.identificacion} - ${persona.nombre}`}
									value={persona.identificacion}
								/>
							)
						})}
					</Picker>
					<Text>Placa del carro</Text>
					<Picker
						selectedValue={placa_carro}
						style={{ height: 50, width: 300 }}
						onValueChange={text => setPlaca_carro(text)}
					>
						{vehiculos.map(vehiculo => {
							return (
								<Picker.Item
									label={`${vehiculo.placa} - ${vehiculo.modelo}`}
									value={vehiculo.placa}
								/>
							)
						})}
					</Picker>

					<View style={styles.contenedorBotonNPersona}>
						<TouchableHighlight
							underlayColor="rgba(0,0,0,0.1)"
							style={styles.buttonAñadirPersona}
							onPress={() => {
								PostData()
							}}
						>
							<Text style={styles.textVerMas}>Añadir multa</Text>
						</TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
