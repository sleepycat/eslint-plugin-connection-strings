# eslint-plugin-connection-strings

detects connection strings in your code

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-connection-strings`:

```
$ npm install eslint-plugin-connection-strings --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-connection-strings` globally.

## Usage

Add `connection-strings` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "connection-strings"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "connection-strings/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





