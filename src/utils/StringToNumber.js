export default function stringToNumber (obj) {
	let newObject = {};
	for(let key in obj) {
		newObject[key] = +obj[key]
	}
	
	return newObject;
}