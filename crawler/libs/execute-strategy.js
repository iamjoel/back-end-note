var SingleQueue = function(queueArr) {
  this.queue = queueArr
  this.retryMax = 2
  this.retryInfo = {}
  this.failArr = []
  this.execute()
}

SingleQueue.prototype = {
  execute: function(executeIndex) {
    executeIndex = executeIndex || 0
    if(executeIndex >= this.queue.length) {
      console.log(`完成。失败列表:${this.failArr.join()} `)
      return
    }
    if(this.retryInfo[executeIndex] && this.retryInfo[executeIndex] >= this.retryMax) {
      console.log(`重试${executeIndex+1}次数太多`)
      this.failArr.push(executeIndex)
      this.execute(executeIndex + 1) // 下一个
      return
    }

    this.queue[executeIndex]().then(function () {
      return this.execute(executeIndex + 1)
    }.bind(this), function () {
      this.retryInfo[executeIndex] = this.retryInfo[executeIndex] || 0
      this.retryInfo[executeIndex]++
      // 重试
      console.log(`第${this.retryInfo[executeIndex]}次 重试${executeIndex}`)
      return this.execute(executeIndex)
    }.bind(this))
  }
}

module.exports = { SingleQueue }
