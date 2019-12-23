class Greeter {
    constructor(name) {
        this.name = name
    }

    greet(){
        let strOutput = ""
        strOutput += this.formatGreeting()
        strOutput += this.formatName(this.name)
        return strOutput
    }

    formatName(name) {
        name = name.trim()
        name = name.charAt(0).toUpperCase() + name.slice(1)
        return name
    }

    formatGreeting() {
        const datetime = new Date()
        const hours = datetime.getHours()
        let greeting = "Hello "
        if(hours>=6 && hours<12 ) greeting = "Good morning "
        if(hours>=18 && hours<22 ) greeting = "Good evening "
        if(hours>=22 ) greeting = "Good night "
        if(hours>=0 && hours<6) greeting = "Good night "
        return greeting
    }
 }

module.exports = Greeter