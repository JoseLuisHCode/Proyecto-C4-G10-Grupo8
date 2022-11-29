const express = require("express");
const usuario = require("../models/Usuario");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.post(
    "/", usuariosController.crearUsuario
);

/*
router.get("/", (req, res)=> {
    res.json({msg: "get desde usuaraio router"})
});

router.post("/", (req, res)=> {
    res.json({msg: "post desde usuaraio router"})
});

router.put("/", (req, res)=> {
    res.json({msg: "put desde usuaraio router"})
});

router.delete("/", (req, res)=> {
    res.json({msg: "delete desde usuaraio router"})
});
*/

module.exports = router;


