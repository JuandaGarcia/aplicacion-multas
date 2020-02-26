import React, { useState, useEffect } from 'react'
import {
	Text,
	TouchableHighlight,
	StyleSheet,
	SafeAreaView,
	ScrollView
} from 'react-native'
import {
	handleAndroidBackButton,
	removeAndroidBackButtonHandler
} from '../modulos/androidBackButton'

export default ({ history }) => {
	useEffect(() => {
		handleAndroidBackButton(() => history.push('/'))
		return () => {
			removeAndroidBackButtonHandler()
		}
	}, [])

	return (
		<SafeAreaView>
			<ScrollView>
				<Text style={styles.text}>Personas</Text>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="rgba(0,0,0,0.1)"
					style={styles.button}
					onPress={() => history.push('/')}
				>
					<Text> Multas </Text>
				</TouchableHighlight>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
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
	},
	text: {
		position: 'relative',
		top: 0
	}
})
