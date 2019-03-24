import * as Path from 'path'
import * as ParcelBundler from 'parcel-bundler'
import { functionConf } from './_config'

const entryFile = process.argv[2]
if (!entryFile) {
  console.log(`Usage: npx ts-node ${process.argv[1]} [src/path/to/file]`)
  throw Error()
}

const filePaths = entryFile.split('/')
const fileDir = filePaths.slice(0, -1).join('/')
const fileName = filePaths.pop()
const filePath = Path.join(__dirname, `../${entryFile}`);

const options: ParcelBundler.ParcelOptions = {
  outDir: `${functionConf.distDir}/${fileDir}`,
  outFile: `${fileName.replace('.ts', '.js')}`,
  target: 'node',
  sourceMaps: false,
  watch: false
};

(async () => {
  const bundler = new ParcelBundler(filePath, options);
  try {
    await bundler.bundle()
  } catch (err) {
    console.error(err)
  }
})()
