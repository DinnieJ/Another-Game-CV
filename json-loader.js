module.exports = function(source) {
	// this.cacheable && this.cacheable();
    // console.log(source);
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
    // console.log(value);
	return "export default " + JSON.stringify(value) + ";";
}