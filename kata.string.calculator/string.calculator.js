const StringCalculator = {
    add: (delimitedString) => {
        if(!delimitedString) return 0

        let sum = 0
        const negatives = []

        delimitedString = delimitedString.split("\n").join(",")
        const delimitedStringItems = delimitedString.split(",")
        
        delimitedStringItems.map((item) => {
            if(Number(item)<0) negatives.push(parseFloat(item))
            sum = sum + Number(item)
        })

        if(negatives.length>0) throw new Error('negatives not allowed: ' + negatives.join(","))
        return sum
    }
}

module.exports = StringCalculator