function add(str){
    if(!str) return 0

    const negatives = []
    var regex = /[+-]?\d+(?:\.\d+)?/g;
    const values = str.match(regex);

    const valuesNumber = values.map((e) => {
        let number = parseFloat(e)
        if(number<0) negatives.push(number)
        if(number>1000) number = 0
        return number
    })
    
    if(negatives.length>0) throw new Error("Numbers can't be negative")
    return valuesNumber.reduce((total, num) => total + num)
}

module.exports = add