import { RootComponent } from './lib/lsxdom-build@1.js'

export function Header() {
    RootComponent("header")
        .put(
            `<div>`,
                `<h1 style='text-align: center; width: 100%'>
                    LearnScript XML
                </h1>`,
                `<p>
                    Start building JavaScript apps starting with less than 3.5kB JavaScript.
                </p>
                `,
            `</div>`
        )
        .styles('color', 'white')
        .styles('text-align', 'start')
        .styles('width', '95%')
        .styles('display', 'flex')
        .styles('justify-content', 'center')
        .styles('align-items', 'center')
        .ev("click", () => {
            console.log("Easter egg ;D")
        })
    return ""
} 