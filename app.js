const express = require ('express') ;
const path = require ('path');

const app = express() ;
const PORT = process.env.PORT || 5000;


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

const time = function (req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour =date.getHours();

    if(hour > 8 && hour < 17 && day > 0 && day < 6) {
        req.Time = true
    } else {req.Time = false} 
    console.log(req.Time);
    next();
};

app.use(Time);


app.get('/', (req,res) => {
    res.render('Home', { title: "Home", isOpen : req.Time })
})

app.get('/contact-us', (req,res) => {
    res.render('contact-us', { title: "Contact Us", isOpen : req.Time })
})

app.get('/our-services', (req,res) => {
    res.render('our-services', { title: "Our Services", isOpen : req.Time })
})


app.listen(PORT, () => console.log(`Server is on port ${PORT}`))