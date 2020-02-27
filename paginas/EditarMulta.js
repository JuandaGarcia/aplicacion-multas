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
import { useHistory } from 'react-router-native'

export default props => {
	const [fecha, setFecha] = useState('')
	const [observacion, setObservacion] = useState('')
	const [total_pagar, setTotal_pagar] = useState('')
	const [id_persona, setId_persona] = useState('')
	const [placa_carro, setPlaca_carro] = useState('')

	const [personas, setPersonas] = useState([])
	const [vehiculos, setVehiculos] = useState([])
	const [multa, setMulta] = useState([])

	const [loading, setLoading] = useState('')
	const [error, setError] = useState('')

	const codigo_parametros = props.match.params.codigo
	const history = useHistory()

	useEffect(() => {
		handleAndroidBackButton(() => history.push('/multas'))
		fetchData()
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	useEffect(() => {
		setFecha(multa.fecha)
		setObservacion(multa.observacion)
		setTotal_pagar(multa.total_pagar)
		setId_persona(multa.id_persona)
		setPlaca_carro(multa.placa_carro)
	}, [multa])

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
			await axios
				.get(`http://157.245.245.214/multas/${codigo_parametros}`)
				.then(res => {
					setMulta(res.data)
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

	const AlertaPUT = id => {
		Alert.alert(
			'Se actualizo correctamente',
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

	const PutData = async () => {
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
				.put(`http://157.245.245.214/multas/${codigo_parametros}`, data, {
					headers: headers
				})
				.then(response => {
					AlertaPUT()
				})
				.catch(error => {})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	if (loading) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Editar multa</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<Text style={styles.textoidentificacion}>
							Codigo: {codigo_parametros}
						</Text>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	if (error) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Editar multa</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<Text style={styles.textoidentificacion}>
							Codigo: {codigo_parametros}
						</Text>
						<Text style={styles.textError}>Algo salió mal!</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<Text style={styles.text_HeaderList}>Editar multa</Text>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorFormulario}>
					<Text style={styles.textoidentificacion}>
						Codigo: {codigo_parametros}
					</Text>
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
					<Text>Total a pagar {`(Actual: ${total_pagar})`}</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setTotal_pagar(text)}
						value={total_pagar}
						placeholder="ingresa el total a pagar"
						keyboardType="numeric"
						maxLength={15}
					/>
					<Text>Identificacion de la persona</Text>
					<Text>{`(Actual: ${id_persona})`}</Text>
					<Picker
						selectedValue={id_persona}
						style={{ height: 50, width: 300 }}
						onValueChange={text => setId_persona(text)}
					>
						{personas.map(persona => {
							return (
								<Picker.Item
									key={persona.identificacion}
									label={`${persona.identificacion} - ${persona.nombre}`}
									value={persona.identificacion}
								/>
							)
						})}
					</Picker>
					<Text>Placa del carro</Text>
					<Text>{`(Actual: ${placa_carro})`}</Text>
					<Picker
						selectedValue={placa_carro}
						style={{ height: 50, width: 300 }}
						onValueChange={text => setPlaca_carro(text)}
					>
						{vehiculos.map(vehiculo => {
							return (
								<Picker.Item
									key={vehiculo.placa}
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
								PutData()
							}}
						>
							<Text style={styles.textVerMas}>Editar multa</Text>
						</TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
