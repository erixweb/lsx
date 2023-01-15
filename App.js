import { LSXRoot } from './lib/lsxdom.js'
import { List } from './List.js'

LSXRoot("span#root")
    .put(
        `${ List() }`,
        "xd",
        "asd"
    )
    .ev("click", () => {
        console.log("asd")
    })
    .styles('display', 'block')