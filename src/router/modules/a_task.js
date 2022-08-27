import Layout from '@/layout'

export default {
  path: '/task',
  name: 'task',
  component: Layout,
  redirect: '/business',
  meta: { title: '工单管理', icon: 'gondan' },
  children: [{
    path: 'business',
    name: 'business',
    component: () => import('@/views/a_task/a'),
    meta: { title: '运营工单' }
  }, {
    path: 'operation',
    name: 'operation',
    component: () => import('@/views/a_task/b'),
    meta: { title: '运营工单' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
