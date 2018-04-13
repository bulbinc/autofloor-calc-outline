const assert = require('assert');
const fs = require('fs')
const {constructWallOutline, constructOutline} = require('../dist/index')

const walls = [
  [[100,300],[350,300]],
  [[100,300],[120,80]],
  [[120,80],[350,80]],
  [[350,80],[550,80]],
  [[350,80],[350,30]],
  [[550,80],[550,300]],
  [[350,300],[550,300]]
]

describe('constructWallOutline', function() {
  it('should return outlines', function() {
    const outlines = constructWallOutline(walls)
    // fs.writeFileSync('./test/outlines.json', JSON.stringify(outlines, null, 2))
    const expected = JSON.parse(fs.readFileSync('./test/outlines.json'))
    assert.deepEqual(outlines, expected)
  })
})


describe('constructOutline', function() {
  it('should return outlines', function() {
    const windows = [
      {
        "location": [[250,80],[200,80]],
        "type": 1
      },
      {
        "location": [[400,80],[500,80]],
        "type": 1
      }
    ]
    const outlines = constructOutline(windows)
    // fs.writeFileSync('./test/window_outlines.json', JSON.stringify(outlines, null, 2))
    const expected = JSON.parse(fs.readFileSync('./test/window_outlines.json'))    
    assert.deepEqual(outlines, expected)
  })
})