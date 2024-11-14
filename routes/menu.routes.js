const express = require('express'); 
const router = express.Router(); 
const menuModel = require('../db/models/menu')

router.get('/all-dishes', async(req,res)=>{
    try{
        const response = await menuModel.find();
        res.status(200).json(response); 
    }catch(err){
        res.status(404).json({
            message: "404 Not Found"
        })
    }
})

router.post('/add-dish', async(req,res)=>{
    try{
        const {name,price,taste,ingrediantes} = req.body; 
        const newDish = await menuModel.create({
            name,
            price,
            taste,
            ingrediantes
        })
        res.send(newDish); 

    }catch(err){
        res.status(400).json({
            message: "Bad Request"
        })
    }
})

router.put('/update-dish/:id', async(req,res)=>{
    try {
        const dishId = req.params.id; 
        const updateDish = req.body;

        const response = await menuModel.findByIdAndUpdate(dishId, updateDish, {
            new: true,
            runValidator: true
        })

        if(!response){
            res.status(404).json({
                message: "404 not found"
            })
        }

        res.send(response); 
    } catch (error) {
        res.status(400).json({
            message: "400 bad request"
        })
    } 

})
 
router.delete('/delete-dish/:id' , async(req,res)=>{
    try {
        const dltId = req.params.id; 
        const response = await menuModel.findOneAndDelete(dltId); 
        if(!response){
            res.status(404).json({
                message: "404 not found"
            })
        }

        res.status(200).json({
            message: "deleted"
        }) 
    } catch (error) {
        res.status(400).json({
            message: "400 bad request"
        })
    }
})


module.exports = router;

