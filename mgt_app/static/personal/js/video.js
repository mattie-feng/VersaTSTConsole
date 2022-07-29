var serverIp = get_vlpx_ip()
var secondary_head_data = [
  { field: 'dev_fs', title: 'dev_fs' },
  { field: '64k', title: '64k' },
  { field: '128k', title: '128k' },
  { field: '256k', title: '256k' },
  { field: '512k', title: '512k' },
  { field: '1M', title: '1M' }
]

layui.use(['form', 'layer', 'upload'], function () {
  var form = layui.form,
    layer = layui.layer,
    upload = layui.upload
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(video)', function (data) {
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/performance/video/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true
      // success: function (result) {
      //   layer.msg(result, { icon: 1 })
      //   table.reload('videoTableRI')
      //   table.reload('videoTableRM')
      //   table.reload('videoTableWI')
      //   table.reload('videoTableWM')
      // },
      // error: function () {
      //   layer.alert('ERROR', { icon: 5 })
      // }
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })

  upload.render({
    elem: '#uploadVideo',
    url: 'https://httpbin.org/post',
    accept: 'file',
    done: function (res) {
      console.log(res)
      if (res.code > 0) {
        return layer.msg('上传失败')
      }
      return layer.msg('上传成功')
    },
    error: function () {
      return layer.msg('File upload failed, please try again')
    }
  })
})

function getHeadRM () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/video/show/read/mbps',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    head_data.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: secondary_head_data.length
      }
    ])
  })
  head_data.push(secondary_head_data)
  return head_data
}

function getHeadWM () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/video/show/write/mbps',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    head_data.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: secondary_head_data.length
      }
    ])
  })
  head_data.push(secondary_head_data)
  return head_data
}

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadRM()
  table.render({
    elem: '#videoTableRM',
    url: serverIp + '/performance/video/show/read/mbps',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadWM()
  table.render({
    elem: '#videoTableWM',
    url: serverIp + '/performance/video/show/write/mbps',
    page: true,
    cols: headData
  })
})
