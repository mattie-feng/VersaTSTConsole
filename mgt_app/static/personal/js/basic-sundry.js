//var tid = Date.parse(new Date()).toString();// 获取到毫秒的时间戳，精确到毫秒
//var tid = tid.substr(0, 10);
//var mgtIp = get_mgt_ip();

//function get_mgt_ip(){
//	var obj = new Object();
//	$.ajax({
//		url : "/mgtip",
//		type : "GET",
//		dataType : "json",
//		async:false,
//		success : function(data) {
//			obj =  "http://"+data["ip"];
//		}
//	});
//	return obj;
//}

function get_vlpx_ip () {
  var obj = new Object()
  $.ajax({
    url: '/vplxip',
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function (data) {
      obj = 'http://' + data['ip']
    }
  })

  return obj
}

layui.use(['form', 'layedit', 'laydate', 'element'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  form.verify({
    ip: [
      /^((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})(\.((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})){3}$/,
      '请填写正确的 IP 格式'
    ],
    not_require_number: function (value) {
      if (value && !new RegExp('^[0-9]+$').test(value)) return '填写数字'
    }
  })
})
