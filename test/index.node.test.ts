/**
 * @jest-environment node
 */
import { countdown } from '@/src'

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

describe('verification', function() {
  afterEach(() => {
    countdown.clear()
  })

  describe('[countdown.start()] start func use params defaults', function() {
    beforeEach(() => {
      countdown.start()
    })

    it('timmer > 0', function() {
      expect(countdown.timer).not.toBeNull()
    })

    it('0 <= countdown.count <= 60', async function() {
      expect(countdown.count).toBe(60)
      await sleep(3000)
      expect(countdown.count).toBe(58)
    })
  })

  describe('[countdown.start( , , callback)] callback return val', function() {
    it('0 <= val <= 60', function() {
      countdown.start(undefined, undefined, c => {
        expect(countdown.count).toBe(60)
      })
    })
  })

  describe('[countdown.start(30, 60)] countdown.count is null', function() {
    beforeEach(() => {
      countdown.start(30, 60)
    })

    it('30, 60, count is null', function() {
      expect(countdown.count).toBeNull()
    })
  })
})
