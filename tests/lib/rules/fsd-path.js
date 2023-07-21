/**
 * @fileoverview This is rule for checking paths according to the FSD architecture
 * @author rauanio
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/fsd-path"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("fsd-path", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "asfasf",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
