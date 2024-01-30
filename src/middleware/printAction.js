const printActionMiddleware = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export { printActionMiddleware }
