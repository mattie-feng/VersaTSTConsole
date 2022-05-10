layui.use(['form', 'layedit', 'laydate', 'element'], function() {
	var form = layui.form, layer = layui.layer, layedit = layui.layedit, laydate = layui.laydate;
    var $ = layui.jquery, element = layui.element;
	form.verify({
	  ip: [/^((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})(\.((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})){3}$/,'请填写正确的 IP 格式'],
	  not_require_number: function(value){
	    if(value && !new RegExp("^[0-9]+$").test(value)) return "填写数字"
	},
  });
});