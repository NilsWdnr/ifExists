'use strict'

const ifExists = (selector, callback) => {
    if(document.querySelector(selector)){
        callback();
    }
}

module.exports = { ifExists };