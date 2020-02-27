import React, { useState, useEffect } from 'react'
import {
	Text,
	SafeAreaView,
	ScrollView,
	View,
	ActivityIndicator
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'
import styles from '../modulos/styles'
import axios from 'axios'

export default ({ history }) => {
	const [vehiculos, setVehiculos] = useState([])
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
			await axios.get(`http://157.245.245.214/vehiculos`).then(res => {
				setVehiculos(res.data)
			})

			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	if (loading) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Vehículos</Text>
				<Text style={styles.texto_info_vehiculos}>
					Lista de vehículos registrados en la región
				</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorPersonas}>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	if (error) {
		return (
			<SafeAreaView>
				<Text style={styles.text_HeaderList}>Vehículos</Text>
				<Text style={styles.texto_info_vehiculos}>
					Lista de vehículos registrados en la región
				</Text>
				<ScrollView style={styles.scrollArea}>
					<View style={styles.contenedorPersonas}>
						<Text style={styles.textError}>Algo salió mal!</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<Text style={styles.text_HeaderList}>Vehículos</Text>
			<Text style={styles.texto_info_vehiculos}>
				Lista de vehículos registrados en la región
			</Text>
			<ScrollView style={styles.scrollArea}>
				<View style={styles.contenedorPersonas}>
					{vehiculos.map(vehiculo => {
						return (
							<View
								key={vehiculo.placa}
								style={[
									styles.MarcoPersona_Personas,
									styles.container_Personas,
									styles.horizontal
								]}
							>
								<View style={styles.contenedo_info_vehiculo}>
									<Text style={styles.nombreVehiculo}>{vehiculo.modelo}</Text>
									<Text>Placa: {vehiculo.placa}</Text>
								</View>
							</View>
						)
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
