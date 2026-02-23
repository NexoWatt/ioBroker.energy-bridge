const path = require('path');
const { tests } = require('@iobroker/testing');

// Run unit tests

tests.unit(path.join(__dirname, '..'));
