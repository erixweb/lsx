import { LSXRoot } from './lib/lsxdom.js'
import { Header } from './Header.js'
import { Navigation } from './Nav.js'

LSXRoot("span#root")
    .put(
        Navigation(),
        Header()
    )
    .styles('display', 'block')
    .styles('width', '100%')
    
    