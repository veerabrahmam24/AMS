const express = require('express')
const router =  express.Router()
const LoginTemplateCopy = require('./LoginModels')

router.post('/Login',(request,response)=>{
    const LoginUser = new LoginTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        confirm_password:request.body.confirm_password

    })
    LoginUser.save()
    .then(data=>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
})

router.get('/Login')
module.exports = router