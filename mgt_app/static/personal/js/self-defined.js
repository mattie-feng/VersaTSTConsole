layui.use(['form', 'layedit', 'laydate','element'], function(){
	  var form = layui.form, layer = layui.layer, layedit = layui.layedit, laydate = layui.laydate;
	  var $ = layui.jquery, element = layui.element;
	  var serverIp = get_vlpx_ip();
	  console.log(serverIp)
      form.on('submit(selfDefined)', function(data){
          data.field.rw = data.field.select;
          delete data.field.select;
          create_data = JSON.stringify(data.field);
//          $.ajax({
//                url : vplxIp +'/performance/self-defined/create',
//                type : "get",
//                dataType : "json",
//                data : {
//                    data : create_data,
//                },
//                async : true,
//                success : function(result) {
//                    console.log(result);
//                }
//            });
      });
});