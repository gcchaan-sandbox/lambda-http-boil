import S3 = require('aws-sdk/clients/s3')
import { setting } from 'common'

const param: S3.Types.CreateBucketRequest = {
  Bucket: setting.initial.s3Bucket
}

const s3 = new S3({ apiVersion: '2006-03-01' });

(async () => {
  try {
    await s3.createBucket(param).promise()
  } catch(err) {
    console.error(err)
  }
})()
