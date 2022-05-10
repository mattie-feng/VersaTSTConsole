var vplxIp = get_vlpx_ip();
var tid = Date.parse(new Date()).toString();// 获取到毫秒的时间戳，精确到毫秒
var tid = tid.substr(0, 10);
var mgtIp = get_mgt_ip();

function get_mgt_ip(){
	var obj = new Object();
	$.ajax({
		url : "/mgtip",
		type : "GET",
		dataType : "json",
		async:false,
		success : function(data) {
			obj =  "http://"+data["ip"];
		}
	});
	return obj;
}

function get_vlpx_ip(){
	var obj = new Object();
	$.ajax({
		url : "/vplxip",
		type : "GET",
		dataType : "json",
		async:false,
		success : function(data) {
			obj =  "http://"+data["ip"];
		}
	});

	return obj;
}

layui.use(['form', 'layedit', 'laydate','element'], function(){
	  var form = layui.form, layer = layui.layer, layedit = layui.layedit, laydate = layui.laydate;
	  var $ = layui.jquery, element = layui.element;
		  form.on('submit(selfDefined)', function(data){
		      data.field.rw = data.field.select;
		      delete data.field.select;
			  create_data = JSON.stringify(data.field);
				$.ajax({
		    		url : vplxIp +'/performance/self-defined/create',
		    		type : "get",
		    		dataType : "json",
		    		data : {
		    			data : create_data,
		    		},
		    		async : true,
		    		success : function(result) {
		    		    console.log(result);
		    		}
		    	});
		  });
});