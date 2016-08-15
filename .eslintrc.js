// env:
//     node: true
//     es6: true
//
// rules:
//     strict:
//         - 2
//         - "global"

module.exports = {
    "env": {
       "es6": true,
       "node": true
    },
    "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module"
   },
    "rules": {
        // enable additional rules
        "strict": [2, "global"],
    }
}