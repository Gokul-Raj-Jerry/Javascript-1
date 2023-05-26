const fs = require('fs');

fs.readFile('user.txt', (err, data) => {
    if(err) {
        console.log("Error in reading file")
    } else {
        console.log(data.toString());
    }
})

fs.writeFile('user.txt', 'username="Max"', err => {
    if(err) {
        console.log(err);
    } else {
        console.log("Wrote to file");
    }
});