const trimmer = require("./code-trimmer")

const source = "\t\t\t\t\t\t\t(async () => {\n\t\t\t\t\t\t\t\tconst result = await fire(\n\t\t\t\t\t\t\t\t\t'trimmed!',\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t})()"

const res = trimmer.trim(source)

console.log(res);