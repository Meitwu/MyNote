//定义了一个EventBus类
/**
 * 主要有三个方法
 * on(eventName, callback): 用于订阅事件，将事件名和回调函数关联起来。
 * off(eventName, callback): 用于取消订阅事件，将指定事件名和回调函数解除关联。
 * emit(eventName, data): 用于触发事件，将事件名和数据传递给订阅该事件的所有回调
 * */
class EventBus {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      console.log(this.events, this.events[eventName])
      this.events[eventName] = this.events[eventName].filter(
        (eventCallback) => eventCallback !== callback
      )
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((eventCallback) => {
        eventCallback(data)
      })
    }
  }
}

const eventBus = new EventBus()
export default eventBus
