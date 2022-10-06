const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes/main')
const Detail = require("./models/detail")
const Slider = require("./models/slider")
const bodyParser = require("body-parser")
const Services = require("./models/service");
const Contact = require("./models/contact")
const { urlencoded } = require("body-parser");

// body parser for form 
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/static', express.static("public"));
app.use('', routes)

// body parser for form 

// set partials 
hbs.registerPartials("views/partials")
// hbs template engine
app.set('view engine', 'hbs')
app.set("views", "views");
mongoose.connect("mongodb://localhost/tech_website", () => {
    console.log("mongodb connected");
    // Services.create([
    //     {
    //         cardIcon:'fa-brands fa-accusoft',
    //         cardTitle:'Provide Best Course',
    //         cardDesc:'WE provide best courses that helps us our student and leaning and placement',
    //         linkText:'Check',
    //         link:'https://www.learncodewithdurgesh.com'
    //     },
    //     {
    //         cardIcon:'fa-brands fa-accusoft',
    //         cardTitle:'Learn Project',
    //         cardDesc:'we can provide you a best services according to us',
    //         linkText:'Learn',
    //         link:'https://www.learncodewithdurgesh.com'
    //     },
    //     {
    //         cardIcon:'fa-brands fa-accusoft',
    //         cardTitle:'be creator with us',
    //         cardDesc:'we are create a world like you ',
    //         linkText:'Check',
    //         link:'https://www.learncodewithdurgesh.com'
    //     }
        
    // ])
    // Slider.create([
    //     {
    //         title: "Learn with thebadal",
    //         subtitle: "Java is the one of the best programming languge for app developer",
    //         imageUrl: "/static/img/slider-1.jpg"
    //     },
    //     {
    //         title: ":Learn django with python",
    //         subtitle: "django is the famus web framewrk",
    //         imageUrl: "/static/img/slider-1.jpg"
    //     },
    //     {
    //         title: "Learn javascript with us",
    //         subtitle: "make javascript specail for you and you can mae human indo",
    //         imageUrl: "/static/img/slider-1.jpg"
    //     }
    // ])
    // Detail.create({
    //     brandName: "Info Technical Solution",
    //     brandIconUrl: "/static/img/logo.png",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         }
    //     ]
    // })
})

app.listen(process.env.PORT | 80, () => {
    console.log("Server has been started");
})