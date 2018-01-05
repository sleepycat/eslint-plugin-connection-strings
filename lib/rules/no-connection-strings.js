/**
 * @fileoverview detects database credentials in database connection strings.
 * @author Mike Williamson
 */
'use strict'
const parse = require('connection-string')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'detects database connection strings with in your code',
      category: 'Possible Errors',
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create: context => {
    return {
      Literal: node => {
        const suspect = parse(node.value)
        if (suspect.user && suspect.password)
          context.report(
            node,
            'Database connection string contains user credentials.',
          )
      },
    }
  },
}
