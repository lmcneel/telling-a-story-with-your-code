const myCharacter = {
    name: 'Latisha',
    moving: false,
    movementType: 'standing',
    direction: 'North',
    velocity: 0,
};

function greeting() {
    console.log(`Hello, world!`);
}

function move(character) {
    if(character.move) {
        console.log(`
            ${character.name} is ${character.movementType}
            ${character.direction} at
            ${character.velocity} miles per hour.
        `);
    }else {
        console.log(`
            ${character.name} is ${character.movementType} 
            facing ${character.direction}
        `);
    }
}

greeting(myCharacter);
move(myCharacter);

myCharacter.move = true;
myCharacter.movementType = 'walking';
myCharacter.velocity = 1;

move(myCharacter);