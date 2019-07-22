// instantiation
class Player {
    // Constructor will run first and create properties on the player object
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}
// If we want to create a Wizard player
class Wizard extends Player {
    // Whenever we extend, we have to call the PLayer's constructor too using super(). Pass it (name, type)
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`Weeeeeee I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Lucy', 'Healer');
const wizard2 = new Wizard('Elige', 'Dark Magic');