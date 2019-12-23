const StringCalculator = {
    add: (delimitedString) => {
        if(!delimitedString) return 0
        delimitedString = delimitedString.replace("\n", ",")
        const sumStr = delimitedString.split(",").reduce((total, element) => parseInt(total) + parseInt(element))
        return parseInt(sumStr)
    }
}

module.exports = StringCalculator