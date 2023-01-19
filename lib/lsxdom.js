export function LSXRoot(arg = "span#root") {
    const elements = document.querySelectorAll(arg)

    // Write to DOM
    elements.put = (...text) => {

        if (typeof text === "string") {
            elements.forEach(element => {
                element.innerHTML = element.innerHTML + text
                return element
            })
            return elements
        } else if (typeof text === "object") {
            text.forEach(content => {
                elements.forEach(element => {
                    element.innerHTML = element.innerHTML + content
                    return element
                })
                return elements
            })
            return elements
        }
        return elements
    }
    // DOM Event handler
    elements.ev = (event, action) => {
        elements.forEach(element => {
            element.addEventListener(event, action)
            return element
        })
        return elements
    }
    // DOM Styles
    elements.styles = (...args) => {
        const [prop, value] = args

        elements.forEach(element => {
            element.style[prop] = value
            return element
        })

        return elements
    }

    return elements
}

// Components

export function RootComponent(arg = "component") {
    let totalContent = ""
    const root = document.querySelector("span#root")
    const element = document.createElement(arg)
    element.put = (...text) => {
        text.forEach(content => {
            totalContent = totalContent + content
        })
        element.innerHTML = totalContent
        return element
    }
    element.styles = (...styles) => {
        const [prop, value] = styles
        if (typeof prop === "string") {
            element.style[prop] = value
        } else if (typeof prop === "object") {
            let Obj = Object.entries(prop)

            Obj.forEach(([prop, value]) => {
                element.style[prop] = value
            })
        }
        return element
    }
    element.ev = (event, action) => {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelector(arg).addEventListener(event, action)
        })

        return element
    }
    root.append(element)

    return element
}
export class ClientLocalStorage {
    constructor() {
        this.localName = ""
        this.localValue = null
    }
    open (name) {
        this.localName = name
        if (window) {
            window.localStorage.setItem(name, null)
        }
    }
    set (text) {
        this.localValue = text
        if (window) {
            window.localStorage.setItem(this.localName, this.localValue)
        }
    }
    read () {
        if (window) {
            return window.localStorage.getItem(this.localName)
        }
    }

}