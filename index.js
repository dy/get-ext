/**
 * @module  get-ext
 *
 * Return file extension from path string
 */

module.exports = extname;

//get extension of a file
function extname (str) {
	let slug = str.split(/\/|\\/).slice(-1)[0];
	let idx = slug.lastIndexOf('.');
	if (idx <= 0) return '';
	let ext = slug.slice(idx);
	return ext;
}