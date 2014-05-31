var run = require('./run-series-object')
  , test = require('tape')

test('empty object', function (t) {
  run({}, function (err, result) {
    t.deepEqual(result, {})
    t.end()
  })
})

test('object without callbacks', function (t) {
  var obj = { beep: 'boop' }

  run(obj, function (err, result) {
    t.deepEqual(result, { beep: 'boop' })
    t.end()
  })
})

test('object with simple callback', function (t) {
  var obj = {
        beep: function (done) {
          setTimeout(function () {
            done(null, 'boop')
          }, 1)
        }
      }

  run(obj, function (err, result) {
    t.deepEqual(result, { beep: 'boop' })
    t.end()
  })
})