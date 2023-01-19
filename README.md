# LSXRoot

```import { LSXRoot } from 'https://erixweb.github.io/lsx/lib/lsxdom@latest.js'```

LSXRoot es la base de tu proyecto.
Utilizara el elemento span#root, es importante que en tu HTML se encuentre el elemento span con un id de root, si no, no funcionara.
LSXRoot no requiere argumentos (v2^).

*.put()*
Put es la forma de escribir en el DOM.
texto: String

e.g 
```js
    LSXRoot()
    .put(
        "<div>",
            "Hola!",
        "</div>"
    )
```
*.ev*
```js
    LSXRoot()
    .put(
        "<div>",
            "Hola!",
        "</div>"
    )
    .ev("click", function () {
        console.log("Click Ev")
    })
```
*.styles*
```js
    LSXRoot()
    .put(
        "<div>",
            "Hola!",
        "</div>"
    )
    .styles('color-scheme', 'black')
    .styles('background', '#333')
```

# RootComponent

```import { RootComponent } from 'https://erixweb.github.io/lsx/lib/lsxdom@latest.js'```

Los RootComponent tienen las mismas funciones que el LSXRoot.
En cambio, los RootComponent se usan usan para crear Componentes LSX.

RootComponent() puede recibir un argumento, el nombre del elemento html, es decir, si pones como argumento "nav", el codigo creara el elemento HTML nav.

Es importante poner return "" después de tu Componente para no recibir mensajes no deseados.

# ClientLocalStorage

```import { ClientLocalStorage } from 'https://erixweb.github.io/lsx/lib/lsxdom@latest.js'```

Simplemente un LocalStorage mas fácil de usar.

```js
    const LocalStorage = new ClientLocalStorage()

    LocalStorage.open("exemple gratia") // Crear un nuevo LocalStorage
    LocalStorage.set("Esto es un ejemplo") // Darle un valor al LocalStorage
    
    cosnole.log(LocalStorage.read()) // Leer el LocalStorage y dar un output en la consola
```