# ebabel-keyboard-controls
[![Build Status](https://travis-ci.org/ebabel-games/ebabel-keyboard-controls.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel-keyboard-controls)

Update the position and rotation of the current player camera based on keyboard keys pressed up or down.

## Module install and usage in your game

### Install
```
npm install --save ebabel-keyboard-controls
```

### Usage
```
const { keyboardControls } = require('ebabel-keyboard-controls');

const result = keyboardControls(dataStore);
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
