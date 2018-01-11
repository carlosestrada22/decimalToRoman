const main = () => {
    const input = document.querySelector("#input")
    const output = document.querySelector("#output")
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
    const changeOutput = value => output.value = value > 3999 ? "NUMBER TOO BIG" : Convertir2(value)
    const makeArray = () => {
        for (var property in Values) {
            if (Values.hasOwnProperty(property)) {
                listValues.push(property)
            }
        }
        listValues.reverse()
    }
    const Convertir2 = (value, output = []) => {
        for (let i = 0; i < listValues.length; i++) {
            if (value < 1 && value > 0) {
                value = 0
                i = listValues.length
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

    makeArray()

    input.addEventListener("input", () => changeOutput(input.value))
}

main()