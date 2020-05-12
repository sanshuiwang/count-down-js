interface CountDownType {
  timer: any
  count: number | null
  clear: () => void
  start: (c?: number, d?: number, callback?: (c: number) => void) => void
}

export const countdown: CountDownType = {
  timer: null,
  count: null,
  clear: function() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
      this.count = null
    }
  },
  start: function(c = 60, d = 0, callback) {
    this.clear()
    if (c >= d) {
      this.count = c
      callback && callback(c)
      this.timer = setTimeout(() => {
        this.start(c - 1, d, callback)
      }, 1000)
    }
  }
}
