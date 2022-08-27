import Layout from '@/layout'

export default {
  path: '/node',
  name: 'node',
  component: Layout,
  redirect: '/region',
  meta: { title: '点位管理', icon: 'dianwei' },
  children: [{
    path: 'region',
    name: 'region',
    component: () => import('@/views/a_node/a'),
    meta: { title: '区域管理' }
  }, {
    path: 'node',
    name: 'node',
    component: () => import('@/views/a_node/b'),
    meta: { title: '点位管理' }
  }, {
    path: 'partner',
    name: 'partner',
    component: () => import('@/views/a_node/c'),
    meta: { title: '合作商管理' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
