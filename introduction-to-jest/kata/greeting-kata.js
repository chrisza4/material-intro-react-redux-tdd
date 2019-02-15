function greeting (person) {
  if(isPersons(person)) {
    let upperCaseName = person.filter(p =>isUpperCase(p))
    let lowerCaseName = person.filter(p =>!isUpperCase(p))

    let string = "Hello, " + lowerCaseName.slice(0,lowerCaseName.length-1).join(", ").concat(" and ",lowerCaseName[lowerCaseName.length-1], ".")

    if(upperCaseName.length>0)
      string += " AND HELLO " + upperCaseName.slice(0,upperCaseName.length-1).join(", ").concat(upperCaseName[upperCaseName.length-1],"!")

    return `${string}`
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

isPersons = (persons) => {
  return isNull(persons) && Array.isArray(persons) && persons.length > 0
}

isNull = (word) => {  
  return word === null ? false : true
}

module.exports = {
  greeting
}
