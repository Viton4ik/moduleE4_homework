// Class ElectroDevice
class ElectroDevice {
    constructor(name) {
        this.name = name
    }

    turnOn() {
        console.log(`The '${this.name}' has been plugged to a socket`)
        this.isOn = true
    }

    turnOff() {
        console.log(`The '${this.name}' has been unplugged from a socket`)
        this.isOn = false
    }
            
    setPowerConsuption(power) {
        this.power = power
    }

    getPowerConsuption() {
        console.log(`The '${this.name}' consumes ${this.power} W`)
    }

    setBrand(brand) {
        this.brand = (brand)
    }
}

// delegating relation
class ChargeableDevice extends ElectroDevice {
    constructor(name) {
        super(name),
        this.charged = true
    }

    turnOn() {
        console.log(`The '${this.name}' has been plugged to a socket`)
            console.log(`'${this.name}' is charging...`)
            this.isOn = true
    }

    turnOff() {
        console.log(`The '${this.name}' has been unplugged from a socket`)
        console.log(`'Charging stopped for ${this.name}'`)
        this.isOn = false
    }

    getType() {
        console.log(`'${this.name}' is chargeable device`)
    }
}

class NonchargeableDevice extends ElectroDevice {
    constructor(name) {
        super(name),
        this.condition = "new"
        }

    turnOn() {
        console.log(`The '${this.name}' has been plugged to a socket`)
        console.log(`'${this.name}' is on`)
        this.isOn = true
        }

    turnOff() {
        console.log(`The '${this.name}' has been unplugged from a socket`)
        console.log(`'${this.name}' is off`)
        this.isOn = false
        }

    setVotage(voltage=220) {
        this.voltage = (voltage)
    }

    getType() {
        console.log(`'${this.name}' is unchargeable device`)
    }
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
lamp.setPowerConsuption(55)
lamp.getPowerConsuption()
phone.getType()
laptop.setPowerConsuption(100)
phone.setPowerConsuption(125)
laptop.turnOn()
lamp.turnOff()
phone.turnOn()
calculatePower(laptop)
calculateTotalPower(allDevices) 
