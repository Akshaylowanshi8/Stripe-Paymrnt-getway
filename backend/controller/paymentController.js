const stripe = require("stripe")("sk_test_51PEq1nSI8HbcvufsV8xyHdYuBy0qQ5eoomdQaBpAIyjJszi2S3hDIN0rOFsVwJFDQV7gvDHidvFiOMJZCWiKj1mc00f8vdtN1N")

const paycontroller= async (req,res)=>{


try {
  let product = await stripe.products.create({
    name: " Leptop",
  })
  let price = await stripe.prices.create({
    product: product.id,
    unit_amount: 100*100,
    currency: "inr",
  })
  const session = await stripe.checkout.sessions.create({
    line_items:[
      {
        price:price.id,
        quantity:1
      }
    ],
    mode:"payment",
    success_url:"http://localhost:3003/success",
    cancel_url:"http://localhost:3003/cancel",
    customer_email:"demo@gmail.com",
  })
  res.send({url:session.url})
} catch (error) {
  console.error("error",error);
  res.status(200).json({error:"internal error"})
}


   
}

module.exports ={
  paycontroller
}