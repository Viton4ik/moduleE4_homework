// Class ElectroDevice
function ElectroDevice() {
    this.turnOn = function () {
        console.log(`The '${this.name}' has been plugged to a socket`)
        if (ChargeableDevice.prototype.isPrototypeOf(this)) {
            console.log(`'${this.name}' is charging...`)
            this.isOn = true
        }
        else if (NonchargeableDevice.prototype.isPrototypeOf(this)) {
            console.log(`'${this.name}' is on`)
            this.isOn = true
        }
    }
    this.turnOff = function () {
        console.log(`The '${this.name}' has been unplugged from a socket`)
        if (ChargeableDevice.prototype.isPrototypeOf(this)) {
            console.log(`'Charging stopped for ${this.name}'`)
            this.isOn = false
        }
        else if (NonchargeableDevice.prototype.isPrototypeOf(this)) {
            console.log(`'${this.name}' is off`)
            this.isOn = false
        }
    }
}

// Class ChargeableDevice
function ChargeableDevice(name) {
    this.name = name,
    this.charged = true
}

// Class UnchargeableDevice
function NonchargeableDevice(name) {
    this.name = name
    this.condition = "new"
}

// delegating relation
ChargeableDevice.prototype = new ElectroDevice()
NonchargeableDevice.prototype = new ElectroDevice()

// additioanal methods for ElectroDevices
ElectroDevice.prototype.setPowerConsuption = function (power) {
    this.power = power
}

ElectroDevice.prototype.getPowerConsuption = function () {
    console.log(`The '${this.name}' consumes ${this.power} W`)
}

ElectroDevice.prototype.getType = function () {
    if (ChargeableDevice.prototype.isPrototypeOf(this)) {
        console.log(`'${this.name}' is chargeable`)
    }
    else if (NonchargeableDevice.prototype.isPrototypeOf(this)) {
        console.log(`'${this.name}' is unchargeable`)
    }
}

ElectroDevice.prototype.setBrand = function (brand) {
    this.brand = (brand)
}

NonchargeableDevice.prototype.setVotage = function (voltage=220) {
    this.voltage = (voltage)
}

// calculate power
function calculateTotalPower(instances) {
    let totalPower = 0;
    for (let i = 0; i < instances.length; i++) {
      if (instances[i].isOn) {
        totalPower += instances[i].power;
      }
    }
    console.log(`Total power consumption for all plugged device: ${totalPower} W`)
  }

function calculatePower(instance) {
    let power = 0;
    if (instance.isOn) {
        power += instance.power;
    }
    console.log(`Power consumption for '${instance.name}': ${power} W`)
  }

// Class instances
const lamp = new NonchargeableDevice('lamp')
const phone = new ChargeableDevice('phone')
const laptop = new ChargeableDevice('laptop')
const allDevices = [lamp, phone, laptop]

//console 
console.log(lamp, laptop, phone)

laptop.setBrand('IBM')
laptop.charged = false
lamp.condition = "false"
lamp.setVotage()
lamp.setPowerConsuption(155)
lamp.getPowerConsuption()
phone.getType()
laptop.setPowerConsuption(200)
phone.setPowerConsuption(125)
laptop.turnOff()
lamp.turnOn()
phone.turnOn()
calculatePower(lamp)
calculateTotalPower(allDevices) 
