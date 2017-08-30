console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  cb(null, {
    request: {
      headers: {
        "x-hello-from-lambda": "hello"
      },
      body: "yoooo"
    }
  })
}
