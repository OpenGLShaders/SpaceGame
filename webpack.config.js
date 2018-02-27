/**
 * Created by Samuel Kaessner on 2/26/2018.
 */
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};