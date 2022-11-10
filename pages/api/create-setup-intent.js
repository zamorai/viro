import initStripe from 'stripe'
// import supabase from '../../utils/supabase'

const handler = async (req, res) => {

  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)

  const setupIntent = await stripe.setupIntents.create({
    customer: req.query.customerId,
    payment_method_types: ['card']
  })  

  // await supabase
  //   .from('profiles')
  //   .update({ stripeCustomer: customer.id })
  //   .match({ id: req.body.record.id })

  res.send({ client_secret: setupIntent.client_secret })

}

export default handler