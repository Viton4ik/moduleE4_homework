// create a parent object
const obj = {
    a: 1,
    b: 2,
}

// create a related object
const obj2 = Object.create(obj)
obj2.c = 3
obj2.d = 4

function getOwnKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`object's own keys: ${key}, object's own value: ${obj[key]}`)
        }
    }

}

getOwnKeys(obj2)
