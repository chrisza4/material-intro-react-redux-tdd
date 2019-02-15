function greeting(person) {
    if (Array.isArray(person)) {
        var n = '';
        var s = '';
        var n_arr = [];
        var s_arr = [];
        if (person.length > 1) {
            person.forEach((p, i, array) => {
                if (isUpperCase(p)) {
                    s_arr.push(p)
                } else {
                    n_arr.push(p)
                }

            })
            if (n_arr.length > 0) {
                n += 'hello'
                if (n_arr.length === 1) {
                    n += ', ' + n_arr[0]
                } else {
                    n_arr.forEach((n_item, i, array) => {
                        if (i === array.length - 1) {
                            n += " and " + n_item + '.'
                        } else {
                            n += ', ' + n_item
                        }
                    })
                }
            }
            if (s_arr.length > 0) {
                s += 'HELLO'
                if (s_arr.length === 1) {
                    s += ' ' + s_arr[0] + '!'
                } else {
                    s_arr.forEach((s_item, i, array) => {
                        if (i === array.length - 1) {
                            s += ' AND ' + s_item + '!'
                        } else {
                            s += ', ' + s_item + '!'
                        }
                    })
                }
            }
            if (n !== '' && s !== '') {
                return n + ' AND ' + s
            }
            return n + s
        } else if (person.length === 1) {
            if (isUpperCase(person[0])) {
                return 'HELLO' + person[0] + '!'
            } else {
                return 'hello,' + person[0] + '.'
            }
        }
    }

    if (isUpperCase(person)) {
        return `HELLO ${person}!`
    }
    const name = person || 'my friend'
    return `Hello, ${name}`
}

function isUpperCase(word) {
    if (!word) return false
    return word.toUpperCase() === word
}

module.exports = {
    greeting
}