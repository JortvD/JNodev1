var jnode = require("../index")();
jnode.root += "specs/";
jnode.init();

// TEST //
var validator = jnode.helper("validator");
validator.add("not_null", function(obj) {
	return obj == null;
});
console.log(validator.validate("not_null", "TEST"));
