function greeting (person) {
	if (Array.isArray(person)) {
		let name = ''
		const cntPerson = person.length
		if (cntPerson > 2) {
			if (person.find(checkStr) !== undefined) {
				let p = person.find(checkStr)
				let index = person.indexOf(p)
				person.splice(index, 1)
				return `Hello, ${person.join(', ')} and HELLO ${p}!`
			} else {
				name = formatArray(person)
				return `Hello, ${name}`
			}
		} else {
			return `Hello, ${person[0]} and ${person[1]}`
		}
	} 
	
	
	if (isUpperCase(person)) {
		return `HELLO ${person}!`
	}
	
	const name = person || 'my friend'
	return `Hello, ${name}`
}

function isUpperCase (word) {
	if (!word) return false
	return word.toUpperCase() === word
}

function formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
    }
    return outStr;
}

function checkStr(arr) {
	if (isUpperCase(arr)) return arr
}

module.exports = {
  greeting
}
