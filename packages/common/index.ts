const base = {
  service: 'lambda-http-boil',
  env: process.env.ENV || 'prod'
}

export const setting = {
    ...base,
    initial: {
      s3Bucket: `${base.service}`,
      functions3Key: 'function',
      template3Key: 'template'
    }
}
