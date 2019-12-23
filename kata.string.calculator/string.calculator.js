const StringCalculator = {
    add: (delimitedString) => {
        if(!delimitedString) return 0
        if(!delimitedString.includes(",")) return parseInt(delimitedString)
        return delimitedString.split(",").reduce((total, element) => parseInt(total) + parseInt(element))
    }
}

module.exports = StringCalculator