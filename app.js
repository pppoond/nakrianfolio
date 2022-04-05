const express = require('express');
// const expressValidator = require('express-validator');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const flash = require('express-flash');
// const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
const path = require('path');
const methodOverride = require('method-override');
// const moment = require('moment');

let PORT = process.env.PORT || 3000;

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser('keyboard cat'));

// app.locals.moment = moment;
// app.locals.shortDateFormat = "MM/DD/YYYY";
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
// app.use(expressValidator());
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }));
// app.use(methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//     }
// }))
// app.use(flash());

// app.use(cors()); 

app.use('/', routes);

// app.get('/', async function (req, res) {
//     res.send('Home');
// })

// app.post('/create', async function (req, res) {
//     console.log(req.body);
//     res.send('Home');
// })



app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

