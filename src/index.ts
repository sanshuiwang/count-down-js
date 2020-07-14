class Countdown {
  timer: any
  count: number | null
  constructor() {
    this.timer = null
    this.count = null
  }

  clear() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
      this.count = null
    }
  }

  start(c: number = 60, d: number = 0, callback?: (c: number) => void) {
    if (c < d) {
      throw new Error('count-down-ts start(c, d, callback?) function c must be greater than d.')
    }

    this.carry(c, d, callback)
  }

  carry(c: number, d: number, callback?: (c: number) => void) {
    this.clear()
    if (c >= d) {
      this.count = c
      callback && callback(c)
      this.timer = setTimeout(() => {
        this.carry(c - 1, d, callback)
      }, 1000)
    }
  }
}

export default new Countdown()
