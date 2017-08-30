console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  cb(null, {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": {"Content-Type": "application/json"},
    "body": JSON.stringify(e)
  })
}
