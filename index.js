const express = require('express') ;
const app = express() ;
const  Logger = (req,res,next)=>{
    console.log('log')
    next() 
}
app.use(HeureDeTravail) ;
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/home',(req,res)=> {
    res.render('Home',{
        hom : 'Home',
        urlh : '/home',
        urls : '/services',
        ser : 'Services',
        con : 'Contact',
        urlc : '/contact'
    })
})
app.get('/services',(req,res)=> {
    res.render('Services',{
        hom : 'Home',
        urlh : '/home',
        urls : '/services',
        ser : 'Services',
        con : 'Contact',
        urlc : '/contact'
    }) 
})
app.get('/contact',(req,res)=> {
    res.render('Contact',{
        hom : 'Home',
        urlh : '/home',
        urls : '/services',
        ser : 'Services',
        con : 'Contact',
        urlc : '/contact'
    })
})
function HeureDeTravail (req,res,next) {
    let aujourdhui = new Date(Date.now()) ;
    let jour = aujourdhui.getDay();
    let heure = aujourdhui.getHours() ;
    if (jour > 5 | heure < 9 | heure > 17){
        res.send('Le site est momentanément indisponible') ;
        console.log('KO');
    }
    else
        next()
}
app.listen(4000,() => {
    console.log('serveur en cours d\'execution ...') })
    /* let aujourdhui = new Date(Date.now()) ;
    let jour = aujourdhui.getDay();
    let heure = aujourdhui.getHours() ;
    console.log(jour,heure) ;
     console.log(aujourdhui.toUTCString()) ; */
