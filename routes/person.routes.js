const express = require('express');
const router = express.Router();
const personModel = require('../db/models/person');

router.get('/', (req, res) => {
    res.send("Hello world");
})

router.get('/read', async (req, res) => {
    let allPerson = await personModel.find();
    res.status(200).json(allPerson);

})

router.get('/read/:work', async (req, res) => {
    const workBase = req.params.work;
    const response = await personModel.find({ work: workBase });
    res.status(200).json(response);
})

router.put('/update/:id', async (req, res) => {
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await personModel.findByIdAndUpdate(personId, updatePersonData, {
        new: true,
        runValidator: true
    })

    if (!response) {
        res.status(404).json({
            message: "UserId is not found"
        })
    }
    res.status(200).json(response);
})

router.post('/send', async (req, res) => {
    const { name, age, work, mobile, email, address } = req.body;

    const newPerson = await personModel.create({
        name,
        age,
        work,
        mobile,
        email,
        address
    })

    res.send(newPerson);
})

router.delete('/deleteUser/:id', async (req, res) => {
    
        const personId = req.params.id;
        const response = await personModel.findOneAndDelete(personId);
        if (!response) {
            res.status(404).json({
                message: "Person not found"
            })
        }
        res.json({
            message: "person deleted successfully"
        })

})

// comment added for testing github

module.exports = router;

