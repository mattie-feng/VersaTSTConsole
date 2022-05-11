layui.use(['form', 'layedit', 'laydate', 'element'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  var serverIp = get_vlpx_ip()
  form.on('submit(selfDefined)', function (data) {
    if (!data.field.rw) {
        layer.msg('请选择 rw 选项', {icon: 5}); 
        return false
    }
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/performance/self-defined/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true,
      success: function (result) {
        layer.msg(result, {icon: 1}); 
      },
      error: function () {
        layer.alert('ERROR', {icon: 5}); 
      }
    })
  })
})
