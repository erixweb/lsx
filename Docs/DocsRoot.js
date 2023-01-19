import { LSXRoot } from '../../lib/lsxdom-build@1.js'
import { Navigation } from '../../Nav.js'


LSXRoot("span#root")
    .put(
        Navigation(),
    )
    .styles('display', 'block')
    .styles('width', '100%')
    
    