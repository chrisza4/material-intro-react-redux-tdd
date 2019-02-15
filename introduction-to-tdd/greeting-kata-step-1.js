function greeting (person) {
  if (isUpperCase(person)) {
    return `HELLO ${person}!`
  }
  if(Array.isArray(person)){
    var name = `Hello, `
    var nameUppercase = `AND HELLO `
    var namearr = [];
    var nameUppercasearr = []; 
    var checkUppercase = false;
    for(let i=0; i < person.length; i++){
      if(isUpperCase(person[i])){
        nameUppercasearr.push(person[i])
        checkUppercase = true;
      }else{
        namearr.push(person[i])
      }
    }

    name += formatarrayNames(namearr);
    nameUppercase += formatarrayNames(nameUppercasearr)
    return !checkUppercase ? name : name+ ' ' +nameUppercase;
  }
  name = person || 'my friend'
  return `Hello, ${name}`
}

function isUpperCase (word) {
  if (!word) return false
  if (Array.isArray(word)) return false
  return word.toUpperCase() === word
}

function formatarrayNames(person){
  if(person.length > 1){
    var name = person.pop();
    return person.join(', ')+' and '+name;
  }
  return person.pop();
}

module.exports = {
  greeting
}
