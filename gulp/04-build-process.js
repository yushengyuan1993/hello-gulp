const fs = require('fs')
const { Transform } = require('stream')

exports.build_process = () => {
  // 文件读取流
  const readStream = fs.createReadStream('./src/normalize.css')

  // 文件写入流
  const writeStream = fs.createWriteStream('./src/normalize.min.css')

  // 文件转换流
  const transformStream = new Transform({
    // 核心转换过程
    // chunk => 读取流中读取到的内容（Buffer）
    transform: (chunk, encoding, callback) => {
      const input = chunk.toString()
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      callback(null, output)
    }
  })

  return readStream
    .pipe(transformStream) // 转换
    .pipe(writeStream) // 写入
}
