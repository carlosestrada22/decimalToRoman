(function () {

    let input = document.querySelector("#input")
    let output = document.querySelector("#output")

    const listValues = []

    const Values = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }

    const makeArray = () => {
        for (var property in Values) {
            if (Values.hasOwnProperty(property)) {
                listValues.push(property)
            }
        }
        listValues.reverse()
        console.log(listValues)
    }
    makeArray()

    const changeOutput = value => output.value = value > 3999 ? "NUMBER TOO BIG" : Convertir2(value)


    input.addEventListener("input", () => changeOutput(input.value))


    const Convertir2 = (value, output = []) => {
        for (let i = 0; i < listValues.length; i++) {
            if (value < 1 && value > 0) {
                value = 0
                continue
            }
            if (value > listValues[i] - 1) {
                output.push(Values[listValues[i]])
                value -= listValues[i]
                i = listValues.length
            }
        }
        if (value > 0) Convertir2(value, output)
        return output.join("")
    }
    const Convertir = (value, output = []) => {
        console.log("init", value, output)
        if (value > 999) {
            output.push("M")
            value -= 1000
        }
        else if (value > 499) {
            output.push("D")
            value -= 500
        }
        else if (value > 99) {
            output.push("C")
            value -= 100
        }
        else if (value > 49) {
            output.push("L")
            value -= 50
        }
        else if (value > 9) {
            output.push("X")
            value -= 10
        }
        else if (value > 4) {
            output.push("V")
            value -= 5
        }
        else if (value > 0) {
            output.push("I")
            value--
        }
        console.log("ite")
        if (value > 0) Convertir(value, output)
        return output.join("")
    }

})()

