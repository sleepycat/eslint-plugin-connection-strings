/**
 * @fileoverview detects database connection strings in your code
 * @author Mike Williamson
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-connection-strings'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-connection-strings', rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: `var foo = "bar"` },
  ],

  invalid: [
    {
      code: `var url = "mongodb+srv://username:password@example.com"`,
      errors: [
        {
          message:
            'Database connection string contains user credentials.',
          type: 'Literal',
        },
      ],
    },
  ],
})
