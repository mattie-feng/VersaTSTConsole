function iqn_format(iqn){
    var iqn_match_regular = /^iqn\.\d{4}-\d{2}\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[a-zA-Z0-9.:-]+)?$/;
	match_result = iqn_match_regular.test(iqn)
	return match_result
}

function name_format(name){
    var host_name_match_regular = /^[a-zA-Z]\w*$/;
	match_result = host_name_match_regular.test(name)
	return match_result
}

function iqn_myfunction2() {
	document.getElementById("iqn_format").hidden = "hidden";
	var input_result = $('#node').val();
	var match_result = iqn_format(input_result)
	if (!input_result) {
		$("#host_iqn_hid").val("0");
		document.getElementById("iqn_format").hidden = "hidden";
	} else {
		if (!match_result) {
			$("#host_iqn_hid").val("0");
			document.getElementById("iqn_format").hidden = "";
		} else {
			$("#host_iqn_hid").val("1");
		}
	}
}




