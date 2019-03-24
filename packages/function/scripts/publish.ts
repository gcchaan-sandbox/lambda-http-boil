import { Lambda } from 'aws-sdk'
import { setting } from './_config'

const functionName = process.argv[2]
if (!functionName) {
  console.log(`Usage: npx ts-node ${process.argv[1]} [functionName]`)
  throw Error()
}

const params = {
  FunctionName: functionName,
  S3Bucket: setting.initial.s3Bucket,
  S3Key: setting.initial.functions3Key,
}

const lambda = new Lambda({apiVersion: '2015-03-31'})

async () => {
  try {
    const res = await lambda.updateFunctionCode(params).promise()
    console.log(res)
  } catch(err) {
    console.error(err)
  }
}
