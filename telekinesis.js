brain.read().done(function(data) {
	eval(data);
}).fail(function(tlkError, textStatus, errorThrown) {
	//TODO: deal with specific errors such as interference from microwaves
});