## code-trimmer

Trim source code into the beauty if needed for [node](http://nodejs.org), and [autocomplete-me](http://autocomplete-me.com).

code-trimmer will indent a given chunk of source code, started with unnecessarily added whitespaces or tabs, by trimming the tabs and white-spaces in a consistent way, scanning through line by line as following : 

[![NPM Version][npm-image]][npm-url]

```js
const trimmer = require("./code-trimmer")

const source = "\t\t\t\t\t\t\t(async () => {\n\t\t\t\t\t\t\t\tconst result = await fire(\n\t\t\t\t\t\t\t\t\t'trimmed!',\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t})()"

const res = trimmer.trim(source)

console.log(res)
```

origin source =>

```js
/*
        (async () => {
            const result = await Swal.fire(
                'Success',
                'Your code is saved!',
                'success'
            )

            if (result) {
                window.location = `${BASE_URL}/main`
            }
        })()
*/
```

into =>

```js
/* 
(async () => {
    const result = await Swal.fire(
        'Success',
        'Your code is saved!',
        'success'
    )

    if (result) {
        window.location = `${BASE_URL}/main`
    }
})()
*/
```

## Installation for Node.js

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install code-trimmer
```

## Installation for Web Browser 

CDN

```
<script src="https://cdn.jsdelivr.net/npm/code-trimmer@0.0.5/code-trimmer.js"></script>

<script>
const trimmer = require("./code-trimmer")

const source = "\t\t\t\t\t\t\t(async () => {\n\t\t\t\t\t\t\t\tconst result = await fire(\n\t\t\t\t\t\t\t\t\t'trimmed!',\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t})()"

const res = trimmer.trim(source)

console.log(res)
</script>
```

## Features

	* Do one thing well
	* Simple to use

## Contributing

[Contributing Guide](Contributing.md)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express