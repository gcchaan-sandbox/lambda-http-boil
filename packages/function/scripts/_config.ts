export { setting } from 'common/index'
export const functionConf = (name: string) => {
  return {
    distDir: `.dist/${name}`,
  }
}
