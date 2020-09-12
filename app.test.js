const trimmer = require("./code-trimmer")

const spaceSource = `            self.options.delegate?.valueWasEntered(query) { founds in
	self.matches = founds
	
	if self.matches.isEmpty {
			self.matches.append(
					CodeSnippet(
					id:"*19870922*",
					title: query,
					codeSnippet:
					"""
					""",
					programmingLanguageName: "Search the web",
					starSenderIdArray: []
			))
	}
	
	MainQ {
			self.reloadMatches(with: event)
	}
}`

const space = " "
const tab = "\t"
const res = trimmer.trim(spaceSource)

describe("Check if a given source has been trimmed well", () => {
  it("** white space trimming test **", done => {
    expect(!res.startsWith(space)).toEqual(true);
    done();
	});
	
	// it("** tab trimming test **", done => {
  //   expect(!res.startsWith(space)).toEqual(true);
  //   done();
	// });
});