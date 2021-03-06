import thermostat from './thermostat'

module.exports = function register(homebridge) {
  const Service = homebridge.hap.Service
  const Characteristic = homebridge.hap.Characteristic

  homebridge.registerAccessory('homebridge-eq3ble', 'EQ3-Thermostat', thermostat({
    Service,
    Characteristic,
  }))
}
