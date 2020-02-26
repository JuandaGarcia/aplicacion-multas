import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

export default function Home({ history }) {
	return (
		<View style={styles.container}>
			<Image
				style={{ width: 300, height: 300 }}
				source={require('../assets/img/logo.png')}
			/>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button}
				onPress={() => history.push('/personas')}
			>
				<Text> Personas </Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button}
				onPress={() => history.push('/multas')}
			>
				<Text> Multas </Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.button}
				onPress={() => history.push('/vehiculos')}
			>
				<Text> Vehiculos </Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#292b98',
		backgroundColor: 'transparent',
		borderRadius: 25,
		height: 50,
		width: 230,
		marginBottom: 20
	}
})
