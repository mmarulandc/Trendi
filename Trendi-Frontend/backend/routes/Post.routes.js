const express = require("express");
const auth = require('../controllers/auth.controller');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();
const Commentary = require('../models/Comment.Model');

router.post('/', checkAuth, async (req, res) => {
    try {
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
    } catch (err) {
        console.log(`Ha ocurrido un error ${err}`)
        return res.status(500).json({
            success:false,
            message:`Ha ocurrido un error`
        });
    }

});

router.get('/',checkAuth,async (req, res) => {
    const commentaries = await Commentary.find();
    res.json(commentaries);
});

router.delete('/:id',checkAuth, async (req, res) => {
    await Commentary.findByIdAndDelete(req.params.id);
    res.json({ message: 'comment deleted' });
});

router.put('/:id',checkAuth, async (req, res) => {
    await Commentary.findByIdAndUpdate(req.params.id, {
        trend: req.body.trend,
        commentary: req.body.commentary
    })
    res.json({
        message: 'Comment updated'
    })
}
);

router.get('/:trend', async (req, res) => {
    const commentaries = await Commentary.find({ "trend": req.params.trend })
    res.json(commentaries)
});

module.exports = router;