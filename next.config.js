const withTM = require('next-transpile-modules')(['three'])

module.exports =
[
  {
  reactStrictMode: true,
  },
  withTM()
]
