function greeting (person) {
  if(Array.isArray(person)) {
    person = arrayUtil(person)
    if(person.length === 2) {
      return properPrint(person)
    } else if(person.length === 3 && person.filter((name) => isUpperCase(name)).length === 0) {
      return `Hello, ${person[0]}, ${person[1]} and ${person[2]}`
    } else if(person.length === 3 && (person.filter(name => isUpperCase(name)).length !== 0)) {
      return properPrint(person.filter(name => !isUpperCase(name))) 
        + '. AND ' 
        + properPrint(person.filter(name => isUpperCase(name))).toUpperCase()
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


function properPrint(names) {
  if(names.length === 1) {
    return `Hello ${names}`
  }
  else if(names.length === 2) {
    return `Hello, ${names[0]} and ${names[1]}`
  } else {
    return `Hello${names
      .slice(names.length - 1)
      .map(name => ', ' + name)
    } and ${name[name.length - 1]}`
  }
}

function arrayUtil(names) {
  return names
    .map(name => name.split(','))
    .reduce((a, b) => a.concat(b))
    .map(name => name.split('\"'))
    .reduce((a, b) => a.concat(b))
    .map(name => name.trim())
    .filter(name => name !== '')
}

module.exports = {
  greeting
}
