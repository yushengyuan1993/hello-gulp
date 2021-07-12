const { src, dest } = require('gulp')
const cleanCSS = require('gulp-clean-css') // 压缩CSS代码
const rename = require('gulp-rename') // 重命名文件

exports.files_api = () => {
  return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
