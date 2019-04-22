const movement = require('./movement.js');

// preferred version
const character = {
    name: 'Latisha',
    isMoving: false,
    movementType: movement.types.get('none'),
    direction: movement.directions.get('North'),
    velocity: movement.velocity.get('none'),
};

function giveGreeting() {
    console.log(`Hello, reader!`);
}

function describeMovement(character) {
    if(character.isMoving) {
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

giveGreeting(character);
describeMovement(character);

character.isMoving = true;
character.movementType = movement.types.get('walk');
character.velocity = movement.velocity.get('walk');

describeMovement(character);