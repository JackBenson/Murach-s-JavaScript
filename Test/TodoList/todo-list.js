var $ = function (id) {
	return document.getElementById(id);
}

var create_todo = function () {
	debugger;
	document.writeln( $("newTodo").value );
	$("newTodo").value = "";
}

window.onload = function () {
	$("submit").onclick = create_todo;
}
