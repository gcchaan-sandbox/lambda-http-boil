import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda'
import axios from 'axios'

const url = 'http://checkip.amazonaws.com/';

export const worldHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: APIGatewayProxyCallback
) => {
  try {
    const ret = await axios.get(url);
    const response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world',
        location: ret.data.trim()
      })
    }
    return callback(null, response)
  } catch (err) {
    console.log(err)
    return err
  }
}
