// the use of 'require' is a common JS module due to the lack of support currently by express, different from REACT that uses the 'import' function
const  express = require('express');
const app = express();

// Express route handler
app.get('/', (req, res) => {
    
    // json response to request
    res.send({ hi: 'there' });
});

CONST = process.env.PORT || 5000;
app.listen(PORT);