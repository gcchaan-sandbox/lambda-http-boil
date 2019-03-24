import { setting } from 'common'

export { setting } from 'common'
export const functionConf = {
  distDir: `.dist/${setting.env}`,
}
export const checkArgs = () => {
  if (!process.argv[2]) {
    console.log(`Usage: npx ts-node ${process.argv[1]} [functionName]`)
    throw Error()
  }
}
