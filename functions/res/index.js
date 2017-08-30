console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  cb(null, {
    response: {
      body: JSON.stringify(JSON.parse(e.response.body), null, '\t')
    }
  })
}
