function greeting (person) {
  if (isUpperCase(person)) {
    return `HELLO ${person}!`
  }
  const name = person || 'my friend'
  return `Hello, ${name}`
}

function greeting (persons) {
  if(isPersons(persons))
    return "555"
}

function isUpperCase (word) {
  if (!word) return false
  return word.toUpperCase() === word
}

function isPersons(persons) {
  if(!persons) return false
  return persons.length > 0
}

module.exports = {
  greeting
}
