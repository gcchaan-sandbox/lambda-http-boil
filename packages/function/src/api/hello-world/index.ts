import axios from 'axios'

const url = 'http://checkip.amazonaws.com/';
let response;

export const lambdaHandler = async (event, context) => {
  try {
    const ret = await axios.get(url);
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world',
        location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
  return response
}
