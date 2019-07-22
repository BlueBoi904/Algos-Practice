const { performance } = require('perf_hooks');

const everyone = ['nigel','dory','bruce','marlin','squrit','darla','hank','nemo','gill'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('FOUND NEMO!');
        }
    }
}


findNemo(large);