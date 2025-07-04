const newman = require('newman');
require('dotenv').config();

newman.run({
    collection:`https://api.postman.com/collections/46141766-457ccb1c-425a-4d33-9df1-050155fd42d9?access_key=${[process.env.pmatkey]}`,
    //collection:require(''),
    reporters:'htmlextra',
    iterationCount:1,
    reporter:{
        htmlextra:{
            export:'./Reports/report.html',
        }
    }
},
    function (err) {
        if(err){throw err;}
        console.log('collection log complete');    
    }
);