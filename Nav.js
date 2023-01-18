
import { RootComponent } from './lib/lsxdom.js'

export function Navigation () {
    RootComponent("nav")
        .put(
            "<div>",
                `<a href="/" class="logo">
                    <img src='lsx.webp'> <span>LearnScript XML </span>
                </a>`,
                "<a href='/lib/lsxdom.js' rel='nofollow' download>Download</a>",
            "</div>"
        )
    return ""
} 