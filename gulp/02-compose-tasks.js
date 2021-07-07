// 组合任务

const { series, parallel } = require('gulp')

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working!')
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 working!')
    done()
  }, 1000)
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 working!')
    done()
  }, 1000)
}

/**
 * series 串行任务
 */
exports.series1 = series(task1, task2, task3)

/**
 * paralle 并行任务
 */
 exports.parallel1 = parallel(task1, task2, task3)