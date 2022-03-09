const findRemoveSync = require('find-remove')

setInterval(() => {
    var result = findRemoveSync('./lib/videos/ipcam', { age: { seconds: 30 }, extensions: '.ts' });
    console.log(result);
}, 5000);