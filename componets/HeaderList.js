import React from 'react'
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native'
import styles from '../modulos/styles'

export default function HeaderList(props) {
	return (
		<View style={styles.contenedorTop_HeaderList}>
			<Text style={styles.text_HeaderList}>{props.titulo}</Text>
			<TouchableHighlight
				underlayColor="rgba(0,0,0,0.1)"
				style={styles.buttonAñadir}
				onPress={() => props.history.push(`/${props.url}`)}
			>
				<Text> Añadir {props.textoBoton} </Text>
			</TouchableHighlight>
		</View>
	)
}
