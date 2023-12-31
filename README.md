# eslint-plugin-path-control

This is a plugin for checking and fixing paths according to the FSD architecture

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-path-control`:

```sh
npm install eslint-plugin-path-control --save-dev
```

## Usage

Add `path-control` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "path-control"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "path-control/fsd-path": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


