var SingleQueue = require('./execute-strategy.js').SingleQueue
var thing = (name, isSucc) => {
  return ()=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`do ${name} ${isSucc ? 'succ' : 'fail'}` )
        isSucc ? resolve() : reject()
      }, 200)
    })
  }
}


new SingleQueue([thing('thing1', true), thing('thing2', true), thing('thing3', true), thing('thing4', true)])
// new SingleQueue([thing('thing1', false), thing('thing2', true), thing('thing3', false), thing('thing4', true)])
// new SingleQueue([thing('thing1', true), thing('thing2', false), thing('thing3', true), thing('thing4', true)])
// new SingleQueue([thing('thing1', true), thing('thing2', true), thing('thing3', true), thing('thing4', false)])
