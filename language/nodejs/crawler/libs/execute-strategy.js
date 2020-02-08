// 按顺序将队列的事执行完,同时只执行一个
const RETRY_MAX = 3
var SingleQueue = function(queueArr, opts) {
  this.opts = Object.assign({
    retryMax: RETRY_MAX,
    callback: () => {}
  }, opts)
  this.queue = queueArr
  this.retryMax = this.opts.retryMax
  this.retryInfo = {}
  this.failArr = []
  this.execute()
}

SingleQueue.prototype = {
  execute: function(executeIndex) {
    executeIndex = executeIndex || 0
    if (executeIndex >= this.queue.length) {
      console.log(`完成。失败列表:${this.failArr.join()} `)
      this.opts.callback(this.failArr)
      return
    }
    if (this.retryInfo[executeIndex] && this.retryInfo[executeIndex] >= this.retryMax) {
      console.log(`执行${executeIndex+1}失败`)
      this.failArr.push(executeIndex)
      this.execute(executeIndex + 1) // 下一个
      return
    }
    // console.log(`开始执行${executeIndex+1}个`)
    this.queue[executeIndex]().then(function() {
      return this.execute(executeIndex + 1)
    }.bind(this), function() {
      this.retryInfo[executeIndex] = this.retryInfo[executeIndex] || 0
      this.retryInfo[executeIndex]++
        // 重试
        console.log(`第${this.retryInfo[executeIndex]}次 重试${executeIndex}`)
      return this.execute(executeIndex)
    }.bind(this))
  }
}

// 按顺序将队列的事执行完,同时只执行一个
var MultiQueue = function(queueArr, opts) {
  this.opts = Object.assign({
    retryMax: RETRY_MAX,
    parallelNum: 20,
    callback: () => {}
  }, opts)
  this.undoneQueue = queueArr
  this.nowDoingNum = 0
  this.retryQueue = []
  this.executeDone = false
  this.execute()
}

MultiQueue.prototype = {
  execute: function() {
    if(this.executeDone) {
      return
    }
    if (this.undoneQueue.length === 0) {
      if (this.nowDoingNum === 0) {
        this.executeDone = true
        if (this.retryQueue.length > 0) {
          new SingleQueue(this.retryQueue, this.opts)
        } else {
          this.opts.callback()
        }
      } else {
        // 过段时间检查正在执行的有没结束
        setTimeout(function() {
          this.execute()
        }.bind(this), 2000)
      }
      return
    }
    if (this.nowDoingNum < this.opts.parallelNum) {
      var doThing = this.undoneQueue.shift()
      this.nowDoingNum++
      doThing().then(function() {
        this.nowDoingNum--
          this.execute()
      }.bind(this), function() {
        this.nowDoingNum--
          this.retryQueue.push(doThing)
      }.bind(this))
      this.execute()
    }
  }
}


module.exports = { SingleQueue, MultiQueue }
