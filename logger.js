class Logger{
    constructor(){

        if (!Logger.instance) {
            this.logs = [];
            Logger.instance = this;
        }
   

        return Logger.instance
    }


    log(message){
        this.logs.push(message);
        console.log(`LOG: ${message}`);
    }

    printCount(){
        console.log(`${this.logs.length} logs printed.`);
    }
}

const logger = new Logger();
// coje el objeto y evita que le cambiemos cosas 
Object.freeze(logger);

export default logger;