const { login,signup, getCountries,validate } = require('../controllers/user.controller');

const router = require('express').Router();

router.post("/login",login)
router.post("/signup",signup)
router.get("/getcountries",getCountries)

module.exports = router;