import React, { useState, useEffect } from 'react'
import {
	Text,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator,
	TextInput,
	TouchableHighlight
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import styles from '../modulos/styles'

export default ({ history }) => {
	const [nombre, setNombre] = useState('')
	const [identificacion, setIdentifiacion] = useState('')
	const [telefono, setTelefono] = useState('')
	const [direccion, setDireccion] = useState('')
	const [ciudad, setCiudad] = useState('')

	const [loading, setLoading] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		handleAndroidBackButton(() => history.push('/personas'))
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	const PostData = async () => {
		setLoading(true)
		setError(null)

		try {
			const data = {
				identificacion: identificacion,
				nombre: nombre,
				telefono: telefono,
				direccion: direccion,
				ciudad: ciudad
			}

			await fetch('http://157.245.245.214/personas', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.catch(error => console.error('Error:', error))
				.then(response => console.log('Success:', response))

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	return (
		<SafeAreaView>
			<Text style={styles.text_HeaderList}>Añadir Persona</Text>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorFormulario}>
					<Text>Nombre</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setNombre(text)}
						value={nombre}
						placeholder="ingresa el nombre"
						maxLength={40}
					/>
					<Text>Identificación</Text>
					<TextInput
						style={styles.inputText}
						onChangeText={text => setIdentifiacion(text)}
						value={identificacion}
						placeholder="ingresa la identificación"
						keyboardType="numeric"
						maxLength={15}
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
							onPress={() => PostData()}
						>
							<Text style={styles.textVerMas}>Añadir persona</Text>
						</TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
