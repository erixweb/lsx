
import { RootComponent } from './lib/lsxdom.js'

export function Navigation () {
    RootComponent("nav")
        .put(
            "<div>",
                `<a href="/" class="logo">
                    <img src='lsx.webp'> <span>LearnScript XML </span>
                </a>`,
                "<a href='/lib/lsxdom@latest.js' rel='nofollow' download>Download</a>",
                "<a href='/README.md' rel='nofollow' target='_blank'>Tutorial</a>",
            "</div>",
        )
    return ""
} 