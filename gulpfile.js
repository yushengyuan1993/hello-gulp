// // yarn gulp foo
// exports.foo = (done) => {
//   console.log('foo 任务执行了')
//   done()
// }

// // yarn gulp
// exports.default = done => {
//   console.log('默认任务完成了')
//   done()
// }

/**
const gulp = require('gulp')

gulp.task('bar', done => {
  console.log('bar任务完成了')
})
 */

//////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
  ...require('./gulp')
}
