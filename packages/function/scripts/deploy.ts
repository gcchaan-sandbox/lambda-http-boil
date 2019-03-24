import { S3 } from 'aws-sdk'
import { functionConf } from './_config'

const s3 = new S3({apiVersion: '2006-03-01'})
const dist = functionConf('aaa').distDir
// aws s3 cp .dist/hello-world s3://${SERVICE}-${ENV}
