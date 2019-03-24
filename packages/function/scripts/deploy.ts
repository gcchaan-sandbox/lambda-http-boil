import * as fs from 'fs'
import S3 = require('aws-sdk/clients/s3')
import { setting, functionConf } from './_config'

const filePath = process.argv[2]
if (!filePath) {
  console.log(`Usage: npx ts-node ${process.argv[1]} [src/path/to/file]`)
  throw Error()
}

const params: S3.PutObjectRequest = {
	Bucket: setting.initial.s3Bucket,
	Key: `${setting.initial.functions3Key}/${filePath}`,
	Body: fs.readFileSync(`${functionConf.distDir}/${filePath.replace('.ts', '.js')}`)
}

const s3 = new S3({ apiVersion: '2006-03-01' });

// aws s3 cp .dist/${ENV}/src/hello/world.ts s3://${SERVICE}/function/**/world.ts
(async () => {
	try {
		await s3.putObject(params).promise()
	} catch(err) {
		console.error(err)
	}
})()
