(function () {

    let input = document.querySelector("#input")
    let output = document.querySelector("#output")

    const Values = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
    }

    const changeOutput = value => {
        output.value = Convertir(value)

        for (var property in Values) {
            if (Values.hasOwnProperty(property)) {
                console.log(property, Values[property])
            }
        }
    }

    input.addEventListener("input", () => changeOutput(input.value))

    // for (var property in Values) {
    //     if (Values.hasOwnProperty(property)) {
    //         console.log(property)
    //     }
    // }

    const Convertir2 = (value, output = []) => {
        for (let property in Values) {
            if (Values.hasOwnProperty(property)) {
                // if(value > property)
            }
        }
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

