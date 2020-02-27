import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	container_Home: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button_Home: {
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
	MarcoPersona_Personas: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#292b98',
		backgroundColor: 'transparent',
		borderRadius: 5,
		height: 70,
		width: 310,
		marginBottom: 20
	},
	scrollArea: {
		width: Dimensions.get('window').width
	},
	contenedorPersonas: {
		alignItems: 'center'
	},
	contenedorTitulo: {
		display: 'flex'
	},
	goBack: {
		width: 40
	},
	textError: {
		textAlign: 'center',
		fontSize: 20,
		color: '#FFA9A9'
	},
	container_Personas: {
		flex: 1,
		justifyContent: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	},
	verMas: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 100,
		backgroundColor: '#68B1FF',
		borderRadius: 5,
		position: 'absolute',
		right: 15
	},
	textVerMas: {
		color: 'white',
		fontWeight: 'bold'
	},
	nombrePersona: {
		fontWeight: 'bold'
	},
	nombreVehiculo: {
		fontWeight: 'bold'
	},
	contenedorTop_HeaderList: {
		alignItems: 'center'
	},
	buttonAñadir: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#292b98',
		backgroundColor: 'transparent',
		borderRadius: 25,
		height: 50,
		width: 230,
		marginBottom: 35
	},
	text_HeaderList: {
		fontSize: 40,
		fontWeight: 'bold',
		paddingTop: 40,
		paddingBottom: 10,
		textAlign: 'center'
	},
	texto_info_vehiculos: {
		textAlign: 'center',
		marginBottom: 40
	},
	contenedo_info_vehiculo: {
		position: 'absolute',
		left: 15
	},
	inputText: {
		height: 50,
		borderColor: 'gray',
		borderWidth: 2,
		borderRadius: 5,
		marginBottom: 15,
		marginTop: 5,
		padding: 10
	},
	contenedorFormulario: {
		padding: 40,
		paddingTop: 0,
		marginTop: 20
	},
	buttonAñadirPersona: {
		borderRadius: 5,
		height: 50,
		width: 200,
		backgroundColor: '#8DFFAE',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15
	},
	contenedorBotonNPersona: {
		alignItems: 'center'
	}
})

export default styles
