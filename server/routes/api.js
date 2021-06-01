const router = require('express').Router()
const { body, validationResult } = require('express-validator');
const Subscribe = require("../models/Subscriber")

router.get('/', (req, res) => res.send("200"))


router.post('/subscribe',
    // email must be an email
    body('email').isEmail(),
    // channel must be at least 2 chars long
    body('channel').isLength({ min: 2 }), async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let New_subscribe = new Subscribe(req.body)
            await New_subscribe.save();
            return res.status(201).json(New_subscribe);
        } catch (error) {
            return res.status(400).json({ msg: "e-mail exist" });
        }



    })

router.get('/subscribers', async (req, res) => {
    try {
        let data = await Subscribe.find()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ msg: "No Subscribers " });
    }
})






module.exports = router