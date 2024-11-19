import { back } from 'nock'
import * as path from 'path'

declare namespace jasmine {
  const testPath: string
}

let done: null | Function = null

beforeAll(() => {
  const name = path.parse(jasmine.testPath).name
  back.fixtures = __dirname + '/nockFixtures'
  back.setMode('record')
  back(`${name}.json`, {}, function (nockDone) {
    done = nockDone
  })
})

afterAll(() => {
  if (done) {
    done()
  }
})
