const rewire = require("rewire")
const index = rewire("./index")
const mapStateToProps = index.__get__("mapStateToProps")
const mapDispatchToProps = index.__get__("mapDispatchToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let param1 = ["Île-de-France", "Île-de-France", {}]
        let callFunction = () => {
            mapStateToProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [{}, {}, "Île-de-France"]
        let callFunction = () => {
            mapStateToProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [{}, "Île-de-France", "Île-de-France"]
        let callFunction = () => {
            mapStateToProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = ["Île-de-France", {}, "Île-de-France"]
        let callFunction = () => {
            mapStateToProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = ["Île-de-France", {}, {}]
        let callFunction = () => {
            mapStateToProps(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps(() => true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps(() => false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
