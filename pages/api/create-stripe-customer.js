import initStripe from 'stripe'
import supabase from '../../utils/supabase'

const handler = async (req, res) => {

  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send("You are not authorized to call this API ")
  }
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)

  const customer = await stripe.customers.create({
    email: req.body.record.email
  })  

  await supabase
    .from('profiles')
    .update({ stripeCustomer: customer.id })
    .match({ id: req.body.record.id })

  res.send({ message: 'User Created!' })

}

export default handler