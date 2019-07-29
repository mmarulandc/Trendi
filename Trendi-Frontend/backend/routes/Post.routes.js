const express = require("express");
const auth = require('../controllers/auth.controller');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();
const Commentary = require('../models/Comment.Model');

router.post('/',async (req,res)=> {
    console.log(req.body);
    let Comment = new Commentary({
        username: req.body.username,
        trend: req.body.trend,
        commentary: req.body.commentary
    });
    await Comment.save()
    .then(result => {
        console.log("post exitoso ");
        console.log(result);
        res.status(201).json({
            message: 0
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 1,
            error: err
        });
    });
});

router.get('/',async(req,res)=>{
    const commentaries = await Commentary.find();
    res.json(commentaries);
})


module.exports = router;