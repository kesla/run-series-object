var run = require('./run-series-object')
  , stream = require('stream').PassThrough({ objectMode: true })
  , obj = {
        beep: {
            boop: {
              foo: function (done) { done(null, 'bar') }
            }
          , bong: 'king kong'
        }
      , hello: function (done) { done(null, 'world') }
      , stream: stream
    }

stream.write({ key: 'this is from a stream' })
stream.end()

run(obj, function (err, result) {
  console.log(result)
})