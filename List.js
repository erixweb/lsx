
import { Component } from './lib/lsxdom.js'

export function List () {
    Component("span#root")
        .put([
            "xd",
            "s<br>"
        ])
        .styles('display', 'none')
    return ""
} 