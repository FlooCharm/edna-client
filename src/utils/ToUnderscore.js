export default function toUnderscore (obj) {
	let newObject = {};
	let keys = Object.keys(obj)
	keys.forEach(key => {
		let newKey = key.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase()
		newObject[newKey] = obj[key]
	})
	
	return newObject;
}