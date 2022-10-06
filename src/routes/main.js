const express = require("express");
const {route} = require('express/lib/application')
// const detail = require("../models/detail");
const Slider = require("../models/slider")
const Services = require("../models/service")
const Contact = require("../models/contact")
const routes = express.Router();
const Detail = require("../models/detail");
const { request } = require("express");
routes.get("/",async (req,res)=>{
    const details = await Detail.findOne({"_id":"631a391aec740908dad0103f"})
    const slides = await Slider.find()
    const services = await Services.find()
    // console.log(slides);
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id":"631a391aec740908dad0103f"})
    res.render("gallery",{
        details:details
    })
})
routes.post("/process-contact-form",async(req,res)=>{
    console.log("form is submitted");
    // save the data 
    try {
        const data =await Contact.create(req.body)
        res.redirect("/")
    }catch (error) {
        console.log(error);
        res.redirect("/")
    }
})
module.exports = routes;