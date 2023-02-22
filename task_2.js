// create a parent object
const obj = {
    a: 1,
    b: 2,
}

// create a related object
const obj2 = Object.create(obj)
obj2.c = 3
obj2.d = 4

const prop1 = 'a'
const prop2 = 1

function getName(str, obj) {
    let flag = 'false'

    for (let key in obj) {
        if (key === str) {
            flag = 'true'
            break
        } else {
            flag = 'false'
        }
    }
    console.log(flag)
}

getName(prop1, obj2) //true
getName(prop2, obj) //false
