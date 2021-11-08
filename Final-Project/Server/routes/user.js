const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys').secret;
const passport = require('passport');


const User = require('../Models/User');


router.post('/signup',(req,res)=>{
    let {email,
        password,
        confirmpassword 
        } = req.body
    console.log(req.body)
    if(password != confirmpassword){
        return res.status(400).json({
            message:"Password do not match"
        });
    }

    //check unique email

    User.findOne({
        email:email
    }).then(user =>{
        if(user){
            return res.status(400).json({
            message:"You Have already registered with this email."
            });
        }
    })
//Data is Valid and user can register
    let newUser = new User({
        email,
        password
    });
//Hash password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) console.log(err)
            newUser.password=hash;
            newUser.save().then(user=>{
                return res.status(201).json({
                    success:true,
                    message:"Successfully Registered."
                });
            });
        });
    });
});


router.post('/login',(req,res) =>{
    User.findOne({email:req.body.email}).then(user =>{
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false
            });
        }
        //if user exist
        bcrypt.compare(req.body.password,user.password).then(isMatch =>{
            if(isMatch){
                //password is correct,send json token
                const payload ={
                    _id:user._id,
                    email:user.email
                }
                jwt.sign(payload,key,{
                    expiresIn:604800},
                    (err,token)=>{
                        res.status(200).json({
                            success:true,
                            user:user,
                            token: `Bearer ${token}`,
                            message:"You are logged In"
                        })
                    }
                    )
            }
            else{
                return res.status(404).json({
                    message:"Incorrect Password",
                    success:false
                })
            }
        })
    });
});

//return users profile

router.get('/profile', passport.authenticate('jwt',{
    session:false
}),(req,res)=>{
    return res.json({
       user:req.user
    });
});


// router.post(`/signup`,async (req,res) =>{
// try{
//     let user = new User({
//         email:req.body.email,
//         password:bcrypt.hashSync(req.body.password,10),
//       });
      
//       user=await user.save();
//       if(user){
//         res.status(201).json({
//           Success:true,
//           message:"Account Created Successfully",
//           User:user
//         });
//       }else{
//         res.status(400).json({
//             Success:true,
//             message:"Account Created UnSuccessfully",
//             User:user
//           });
//       }
// }catch(err){
//     res.status(500).json({
//         message:"Something Went Wrong",
//         error:err.message
//       });
// }
// console.log(req.body);
// });




module.exports = router