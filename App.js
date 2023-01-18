import { LSXRoot } from './lib/lsxdom-build@1.js'
import { Header } from './Header.js'
import { Navigation } from './Nav.js'


LSXRoot("span#root")
    .put(
        Navigation(),
        Header()
    )
    .styles('display', 'block')
    .styles('width', '100%')
    
    