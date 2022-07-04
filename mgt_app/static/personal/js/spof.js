var serverIp = get_vlpx_ip()

layui.use(['form', 'layer', 'table'], function () {
  var form = layui.form,
    layer = layui.layer,
    table = layui.table
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  var selectedid = 'down_host'
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
  form.on('select(test_action)', function (data) {
    document.getElementById(selectedid).hidden = true
    if (data.value == 'node_down') {
      document.getElementById('down_host').hidden = false
      selectedid = 'down_host'
    }
    if (data.value == 'switch_port_down') {
      document.getElementById('down_switch').hidden = false
      selectedid = 'down_switch'
    }
    if (data.value == 'interface_down') {
      document.getElementById('down_interface').hidden = false
      selectedid = 'down_interface'
    }
    if (data.value == 'manual') {
      document.getElementById('manual').hidden = false
      selectedid = 'manual'
    }
  })
})

layui.use('table', function () {
  var table = layui.table
  table.render({
    elem: '#spofTable',
    url: serverIp + '/reliablility/spof/show',
    page: true,
    cols: [
      [
        { field: 'Test_scenario', title: 'Test_scenario' },
        { field: 'Test_action', title: 'Test_action' },
        { field: 'Test_result', title: 'Test_result' },
        { field: 'Test_times', title: 'Test_times' },
        { field: 'Expected_times', title: 'Expected_times' },
        { field: 'Test_date', title: 'Test_date' },
        { field: 'Test_name', title: 'Test_name' }
      ]
    ]
  })
})
