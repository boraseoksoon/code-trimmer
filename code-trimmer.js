const space = " "
const tab = "\t"
const escapeCharacters = [space, tab]

const newLine = "\n"
const replaceTarget = ""

function RecurPrefixWhiteSpaceCount({ src, index }) {
	if (src.length == 0) {
		return 0
	}

	const c = src[index]
	if (c == undefined) {
		return index
	}

	return c.startsWith(space) ? RecurPrefixWhiteSpaceCount({ src, index: index + 1 }) : index
}

function RecurPrefixTabCount({ src, index }) {
	if (src.length == 0) {
		return 0
	}

	const c = src[index]
	if (c == undefined) {
		return index
	}

	return c.startsWith(tab) ? RecurPrefixTabCount({ src, index: index + 1 }) : index
}

function TrimPrefixWhiteSpace({ src }) {
	const count = RecurPrefixWhiteSpaceCount({ src: src, index: 0 })
	return src.split(newLine)
		.map((l) => {
			const whiteSpaces = [...Array(count).keys()].map(k => space).reduce(((s, c) => s += c), [])
			const res = l.replace(whiteSpaces, replaceTarget)
			return res
		})
		.join(newLine)
}

function TrimPrefixTab({ src }) {
	const count = RecurPrefixTabCount({ src: src, index: 0 })
	return src.split(newLine)
		.map((l) => {
			const tabs = [...Array(count).keys()].map(k => tab).reduce(((s, c) => s += c), [])
			const res = l.replace(tabs, replaceTarget)
			return res
		})
		.join(newLine)
}

function trim(src) {
	if (src == undefined) {
		return ""
	} else if (src.startsWith(tab)) {
		return TrimPrefixTab({ src: src })
	} else if (src.startsWith(space)) {
		return TrimPrefixWhiteSpace({ src: src })
	} else {
		return src
	}
}

if (
  typeof module !== 'undefined' &&
  typeof module.exports !== 'undefined'
) {
	module.exports = { trim }
} else {
	window.trimmer = { trim }
}