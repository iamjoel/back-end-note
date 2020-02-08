exports.keys = 'cookie-save-str'
exports.logger = {
  level: 'DEBUG',
}

exports.security = {
  // domainWhiteList: [ 'http://localhost:3000' ],
  csrf: {
    enable: false,
    // ignore: ctx => true,
  },
}