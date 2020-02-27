import React, { useState, useEffect } from 'react'
import {
	Text,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator,
	TextInput,
	TouchableHighlight,
	Alert
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import styles from '../modulos/styles'
import axios from 'axios'
import { useHistory } from 'react-router-native'

export default function EditarPersona(props) {
	const [nombre, setNombre] = useState('')
	const [identificacion, setIdentifiacion] = useState('')
	const [telefono, setTelefono] = useState('')
	const [direccion, setDireccion] = useState('')
	const [ciudad, setCiudad] = useState('')

	const [persona, setPersona] = useState('')

	const [loading, setLoading] = useState('')
	const [error, setError] = useState('')

	const id_parametros = props.match.params.identificacion
	const history = useHistory()

	useEffect(() => {
		fetchData()
		handleAndroidBackButton(() => history.push('/personas'))
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	useEffect(() => {
		setNombre(persona.nombre)
		setTelefono(persona.telefono)
		setDireccion(persona.direccion)
		setCiudad(persona.ciudad)
	}, [persona])

	const AlertaPUT = id => {
		Alert.alert(
			'Se actualizo correctamente',
			'Oprima Aceptar para continuar',
			[
				{
					text: 'Aceptar',
					onPress: () => {
						history.push('/personas')
					}
				}
			],
			{ cancelable: false }
		)
	}

	const fetchData = async () => {
		setLoading(true)
		setError(null)

		try {
			await axios
				.get(`http://157.245.245.214/personas/${id_parametros}`)
				.then(res => {
					setPersona(res.data)
				})
			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	const PutData = async () => {
		setLoading(true)
		setError(null)

		try {
			const data = {
				identificacion: id_parametros,
				nombre: nombre,
				telefono: telefono,
				direccion: direccion,
				ciudad: ciudad
			}

			const headers = {
				'Content-Type': 'application/json'
			}

			axios
				.put(`http://157.245.245.214/personas/${id_parametros}`, data, {
					headers: headers
				})
				.then(response => {
					AlertaPUT()
					/* dispatch({
						type: FOUND_USER,
						data: response.data[0]
					}) */
				})
				.catch(error => {
					/* dispatch({
						type: ERROR_FINDING_USER
					}) */
				})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	if (loading) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Editar Persona</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<Text style={styles.textoidentificacion}>
							Identificación: {id_parametros}
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
				<Text style={styles.text_HeaderList}>Editar Persona</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorFormulario}>
						<Text style={styles.textoidentificacion}>
							Identificación: {id_parametros}
						</Text>
						<Text style={styles.textoidentificacion}>Error</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<Text style={styles.text_HeaderList}>Editar Persona</Text>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorFormulario}>
					<Text style={styles.textoidentificacion}>
						Identificación: {id_parametros}
					</Text>
					<Text>Nombre</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setNombre(text)}
						value={nombre}
						placeholder="ingresa el nombre"
						maxLength={40}
					/>
					<Text>Teléfono</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setTelefono(text)}
						value={telefono}
						maxLength={10}
						placeholder="ingresa el teléfono"
						keyboardType="numeric"
					/>
					<Text>Dirección</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setDireccion(text)}
						value={direccion}
						placeholder="ingresa la dirección"
						maxLength={40}
					/>
					<Text>Ciudad</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setCiudad(text)}
						value={ciudad}
						placeholder="ingresa la ciudad"
						maxLength={40}
					/>
					<View style={styles.contenedorBotonNPersona}>
						<TouchableHighlight
							underlayColor="rgba(0,0,0,0.1)"
							style={styles.buttonAñadirPersona}
							onPress={() => {
								PutData()
							}}
						>
							<Text style={styles.textVerMas}>Guarda cambios</Text>
						</TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
