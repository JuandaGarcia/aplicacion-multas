import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import styles from '../modulos/styles'

export default function Home({ history }) {
	return (
		<View style={styles.container_Home}>
			<Image
				style={{ width: 300, height: 300 }}
				source={require('../assets/img/logo.png')}
			/>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button_Home}
				onPress={() => history.push('/personas')}
			>
				<Text> Personas </Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button_Home}
				onPress={() => history.push('/multas')}
			>
				<Text> Multas </Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button_Home}
				onPress={() => history.push('/vehiculos')}
			>
				<Text> Vehículos </Text>
			</TouchableHighlight>
		</View>
	)
}
