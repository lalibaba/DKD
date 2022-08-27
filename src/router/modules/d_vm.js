import Layout from '@/layout'

export default {
  path: '/vm',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuan' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/c_vm/a'),
    meta: { title: '人员列表' }
  }, {
    path: 'status',
    name: 'status',
    component: () => import('@/views/c_vm/b'),
    meta: { title: '人效统计' }
  }, {
    path: 'list',
    name: 'list',
    component: () => import('@/views/c_vm/c'),
    meta: { title: '工作量列表' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
