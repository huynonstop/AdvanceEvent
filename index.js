function Event() {
  //your implementation goes here
  let handlers = [];
  this.subscribe = function (...args) {
    args.forEach(cb => {
        if (cb instanceof Function)
          handlers.push(cb)
      })
  };
  this.unsubscribe = function (...args) {   
    args.forEach(cb => {      
      if (cb instanceof Function) {
        let index = handlers.lastIndexOf(cb)
        if(index !== -1)  handlers.splice(index,1)
      }
    })
  };
  this.emit = function (...args) {
    let emit = handlers.slice()
    emit.forEach(cb => cb.apply(this, args));
  };
}