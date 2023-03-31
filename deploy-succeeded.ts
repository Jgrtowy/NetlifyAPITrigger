import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions"
import axios from "axios"
import { config } from "dotenv"
config()

const handler: Handler = async (
     event: HandlerEvent,
     context: HandlerContext
) => {
     try {
          await axios.post(
               `${process.env.API_URL}`,
               {
                    eventType: "deploy-success",
                    eventBody: JSON.parse(event.body || "{}"),
               },
               {
                    headers: {
                         "Content-Type": "Application/json",
                    },
               }
          )
     } catch (e) {
          return {
               statusCode: 500,
          }
     }

     return {
          statusCode: 200,
     }
}

export { handler }
