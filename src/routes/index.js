import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index',{ title: 'Inicio'}))
router.get('/servicios',(req, res) => res.render('servicios', {title: 'Servicios'}))
router.get('/testimonios',(req, res) => res.render('testimonios', {title: 'Acerca de nosotros'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'formulario contacto'}))

export default router