
let express = require ('express');
let app = express();

//routing section
app.get('/', (req, res) => res.send ('Heloo Mamun Bhai'));

app.get('/home', (req, res) => res.send ('Heloo Home'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));