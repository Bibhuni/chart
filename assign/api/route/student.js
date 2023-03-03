/*const express = require('express');
const router = express.Router();
const Student = require('../../models/student');

router.get('/',(req,res,next)=>{
        Student.find().then(result=>{
            res.status(200).json({
                studentData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
    })

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'This is student post request'
    })
})

module.exports = router;*/