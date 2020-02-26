import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
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
		<View>
			<Text>Vehiculos</Text>
			<Button title="change page" onPress={() => history.push('/')} />
		</View>
	)
}
