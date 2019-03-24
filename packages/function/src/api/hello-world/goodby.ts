import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda'

export async function handler(
    event: APIGatewayProxyEvent,
    context: Context,
    callback: APIGatewayProxyCallback): Promise<void> {
  callback(null, responseWithStatusCode(200))
}

function responseWithStatusCode(status: number, json?: object) {
  const body = json ? JSON.stringify(json) : ''
  return {statusCode: status, body: body}
}
// hoge()