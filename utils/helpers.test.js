const rewire = require("rewire")
const helpers = rewire("./helpers")
const createNotification = helpers.__get__("createNotification")
// @ponicode
describe("helpers.clearLocalNotifications", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.clearLocalNotifications()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.setLocalNotifications", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.setLocalNotifications()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createNotification", () => {
    test("0", () => {
        let callFunction = () => {
            createNotification()
        }
    
        expect(callFunction).not.toThrow()
    })
})
