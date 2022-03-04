const fs = require('fs');
const { TestWatcher } = require('jest');
window.document.body.innerHTML = fs.readFileSync('./index.html');


const { incrementCount, data}  = require('../main');

describe('incrementCount', ()=>{
    test('incrementing the count', ()=>{
        data.count = 0;
        incrementCount();
    expect(data.count).toBe(1);
});
});

require('../main')