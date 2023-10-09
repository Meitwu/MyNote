import { observable, action, makeObservable } from 'mobx'

class CounterStore {
  count = 10
  id = Math.random()

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound
    })
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

const counterStore = new CounterStore()
export default counterStore
