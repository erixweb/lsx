
import { RootComponent } from './lib/lsxdom-build@1.js'

export function Navigation () {
    RootComponent("nav")
        .put(
            "<div>",
                `<a href="/" class="logo">
                    <img src='lsx.webp'> <span>LearnScript XML </span>
                </a>`,
                "<a href='/lib/lsxdom-build@1.js' rel='nofollow' download>Download</a>",
            "</div>"
        )
    return ""
} 