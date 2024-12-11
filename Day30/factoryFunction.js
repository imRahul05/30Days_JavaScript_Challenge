function iphone(modelName, strg, clr) {
    return {
        model: modelName,
        storage: strg,
        color: clr,
        getInfo() {
            return `Model: ${this.model}, Storage: ${this.storage}, Color: ${this.color}`;
        }
    };
}

const myIphone = iphone('Iphone12', '64GB', 'red');
console.log(myIphone.getInfo());