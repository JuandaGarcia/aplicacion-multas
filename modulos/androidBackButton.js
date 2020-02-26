import { BackHandler } from 'react-native'
/**
 * Attaches an event listener that handles the android-only hardware
 * back button
 * @param  {Function} callback
 */
const handleAndroidBackButton = callback => {
	BackHandler.addEventListener('hardwareBackPress', () => {
		callback()
		return true
	})
}

const removeAndroidBackButtonHandler = () => {
	BackHandler.removeEventListener('hardwareBackPress', () => {})
}

export { handleAndroidBackButton, removeAndroidBackButtonHandler }
