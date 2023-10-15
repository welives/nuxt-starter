export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne: function (): number {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment: function () {
      this.count++
    },
    reset: function () {
      this.count = 0
    },
  },
})
