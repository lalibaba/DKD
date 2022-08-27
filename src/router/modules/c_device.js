import Layout from '@/layout'

export default {
  path: '/device',
  component: Layout,
  meta: { title: '设备管理', icon: 'shebei' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/d_device/a'),
    meta: { title: '设备管理' }
  }, {
    path: 'status',
    name: 'status',
    component: () => import('@/views/d_device/b'),
    meta: { title: '状态管理' }
  }, {
    path: 'type',
    name: 'type',
    component: () => import('@/views/d_device/c'),
    meta: { title: '设备类型管理' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
