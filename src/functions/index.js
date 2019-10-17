const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY),
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  }

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method",
      }),
    }
  }

  const data = JSON.parse(event.body)
  console.log(data)
  console.log(process.env.GATSBY_STRIPE_SECRET_KEY)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information",
      }),
    }
  }