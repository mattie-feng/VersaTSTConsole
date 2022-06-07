var serverIp = get_vlpx_ip()

layui.use(['form', 'layer', 'table'], function () {
  var form = layui.form,
    layer = layui.layer,
    table = layui.table
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  form.on('submit(spof)', function (data) {
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/reliability/spof/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })
})
