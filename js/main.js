const main = () => {
    const input = document.querySelector("#input")
    const output = document.querySelector("#output")
    const listOfEquivalencies = []
    const Equivalencies = {
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
    // the maximum number currently supported is 3999 because of the lack of characters in extended ascii that represent the roman simbols.
    const changeOutput = value => output.value = value > 3999 ? "NUMBER TOO BIG" : Convert(value)
    const makeArray = () => {
        // For more efficency the object needs to be converted to an array ( only the decimal value)
        for (var property in Equivalencies) {
            if (Equivalencies.hasOwnProperty(property)) {
                listOfEquivalencies.push(property)
            }
        }
        // It need to be sorted from major to minor 
        listOfEquivalencies.reverse()
    }
    const Convert = (value, output = []) => {
        for (let i = 0; i < listOfEquivalencies.length; i++) {
            // Dealing with decimals...
            if (value < 1 && value > 0) {
                value = 0
                // if the value is zero, then the cicle gets broken
                i = listOfEquivalencies.length
                continue
            }
            if (value > listOfEquivalencies[i] - 1) {
                output.push(Equivalencies[listOfEquivalencies[i]])
                value -= listOfEquivalencies[i]
                // if we found wich roman number is equal to the decimal, then we break the cicle
                i = listOfEquivalencies.length
            }
        }
        // if we still have numbers to convert, then we call the function again, if not, we return the result
        if (value > 0) Convert(value, output)
        // converting an array of strings into a big string
        return output.join("")
    }

    makeArray()

    input.addEventListener("input", () => changeOutput(input.value))
}

main()