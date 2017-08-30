console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  if (e.request.headers["x-test"] == "testing") {
    return cb(null, {
      response: {
        status_code: 302,
        cookies: [
          {name: "hellocookie", value: "hola"}
        ],
        headers: {
          "location": "http://example.com"
        }
      }
    })
  }
  cb(null, {
    request: {
      headers: {
        "x-hello-from-lambda": "hello"
      },
      body: "yoooo"
    }
  })
}
