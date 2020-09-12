  Trim source code into the beauty if needed for [node](http://nodejs.org), and [autocomplete-me](http://autocomplete-me.com)

  [![NPM Version][npm-image]][npm-url]

```js
const trimmer = require("code-trimmer")

const res = trimmer.trim(source)

/* source => 
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

/* res 
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

## Installation

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

## Features

	* Do one thing well
	* Simple to use

## Contributing

[Contributing Guide](Contributing.md)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express