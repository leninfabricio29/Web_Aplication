const express = require ('express');

const router = express.Router();

const {signup,signin, signout, list} = require('../controllers/authControllers')

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/list',list);


module.exports = router;
