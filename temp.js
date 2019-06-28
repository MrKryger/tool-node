let a = {
  'jname': '43',
  'command': 'brestart',
  'cmd_status': 2,
  'data': {
    'pid': 36466,
    'status': 1,
    'astart': 1,
    'vm_cpus': 2,
    'vm_ram': 4294967296,
    'vnc_port': 5902,
    'bhyve_vnc_tcp_bind': '10.78.67.202'
  }
}
let sock = {
  'event': [
    {
      'jname': '43',
      'command': 'brestart',
      'cmd_status': 2,
      'data': {
        'pid': 36466,
        'status': 1,
        'astart': 1,
        'vm_cpus': 2,
        'vm_ram': 4294967296,
        'vnc_port': 5902,
        'bhyve_vnc_tcp_bind': '10.78.67.202'
      }
    },
    {
      'jname': '43',
      'command': 'brestart',
      'cmd_status': 2,
      'data': {
        'pid': 36466,
        'status': 1,
        'astart': 1,
        'vm_cpus': 2,
        'vm_ram': 4294967296,
        'vnc_port': 5902,
        'bhyve_vnc_tcp_bind': '10.78.67.202'
      }
    },
  ],
  'tasc': [
    {
      'name': 'Первый таск',
      'time': '24-06-2019',
      'status': 'ONLINE'
    },
    {
      'name': 'Второй таск',
      'time': '24-06-2019',
      'status': 'ONLINE'
    },
    {
      'name': 'Красный таск',
      'time': '24-06-2019',
      'status': 'ERROR'
    },
    {
      'name': 'Синий таск',
      'time': '24-06-2019',
      'status': 'ERROR'
    },
    {
      'name': 'Серый таск',
      'time': '24-06-2019',
      'status': 'OFFLINE'
    }
  ]
}
