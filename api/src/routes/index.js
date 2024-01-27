const { Router } = require('express');

const router = Router();

router.get('/post', ()=>{
    console.log("rutas funcionando")
});

module.exports = router;
