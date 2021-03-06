module.exports = {
  "extends": [
    require('./default')
  ],

  "indent": {
    "value": "\t",
    "IfStatementConditional": 2,
    "SwitchStatement": 0,
    "TopLevelFunctionBlock": 0
  },

  "lineBreak": {
    "before": {
      "ObjectExpressionOpeningBrace": -1,
      "ObjectExpressionClosingBrace": -1,
      "Property": -1,
      "VariableDeclarationWithoutInit": 0
    },

    "after": {
      "AssignmentOperator": -1,
      "ObjectExpressionOpeningBrace": -1,
      "ObjectExpressionClosingBrace": -1,
      "Property": -1
    }
  },

  "whiteSpace": {
    "before": {
      "ArgumentList": 1,
      "ArrayExpressionClosing": 1,
      "CatchParameterList": 1,
      "ExpressionClosingParentheses": 1,
      "ForInStatementExpressionClosing": 1,
      "ForOfStatementExpressionClosing": 1,
      "ForStatementExpressionClosing": 1,
      "IfStatementConditionalClosing": 1,
      "IIFEClosingParentheses": 1,
      "MemberExpressionClosing": 1,
      "ObjectExpressionClosingBrace": 1,
      "ParameterList": 1,
      "SwitchDiscriminantClosing": 1,
      "WhileStatementConditionalClosing": 1
    },
    "after": {
      "ArgumentList": 1,
      "ArrayExpressionOpening": 1,
      "CatchParameterList": 1,
      "ExpressionOpeningParentheses": 1,
      "ForInStatementExpressionOpening": 1,
      "ForOfStatementExpressionOpening": 1,
      "ForStatementExpressionOpening": 1,
      "IfStatementConditionalOpening": 1,
      "IIFEOpeningParentheses": 1,
      "MemberExpressionOpening": 1,
      "ObjectExpressionOpeningBrace": 1,
      "ParameterList": 1,
      "PropertyValue": -1,
      "SwitchDiscriminantOpening": 1,
      "WhileStatementConditionalOpening": 1
    }
  }
};
