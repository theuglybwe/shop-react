const router = require("express").Router();

const paystack = require("react-paystack")(process.env.PAYSTACK_KEY)


router.post("/payment",(req,res)=>{
    paystack.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"zar",
    },(paystackErr, paystackRes)=>{
        if(paystackErr){
            res.status(500).json(paystackErr)
        }
        else{
            res.status(200).json(paystackRes)
        }
    });
});

module.exports = router;
