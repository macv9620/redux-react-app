const prefixPokeMiddleware = (store) => (next) => (performAction) => {
  const namesAdded = performAction.action.payload?.map((poke) => {
    return ({
      ...poke,
      name: 'Poke: ' + poke.name
    })
  })

  const updatedAction = {
    ...performAction,
    action: {
      ...performAction.action,
      payload: namesAdded
    }
  }

  console.log(updatedAction)
  next(updatedAction)
}

export { prefixPokeMiddleware }
