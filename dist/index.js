
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./password-rules-validator.cjs.production.min.js')
} else {
  module.exports = require('./password-rules-validator.cjs.development.js')
}
