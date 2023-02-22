function objCreate(obj = {}) {
    return obj = Object.create(null)
}

noProtoObj = objCreate()
console.log(noProtoObj)  // [Object: null prototype] {}
