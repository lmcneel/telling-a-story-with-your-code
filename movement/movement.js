const NONE = 'none';
const WALK = 'walk';
const RUN = 'run';

const types = new Map();
types.set(NONE, 'standing');
types.set(WALK, 'walking');
types.set(RUN, 'running');


const NORTH = 'North';
const EAST = 'EAST';
const SOUTH = 'South';
const WEST = 'West';

const directions = new Map();
directions.set(NORTH, 'North');
directions.set(EAST, 'East');
directions.set(SOUTH, 'South');
directions.set(WEST, 'West');

const velocity = new Map();

velocity.set(NONE, 0);
velocity.set(WALK, 1);
velocity.set(RUN, 3);

module.exports = {
    types,
    directions,
    velocity,
};
