import Layout from '@/layout'

export default {
  path: '/commodity',
  component: Layout,
  meta: { title: '商品管理', icon: 'shangpin' },
  children: [{
    path: 'index',
    name: 'index',
    component: () => import('@/views/e_commodity/a'),
    meta: { title: '商品类型' }
  }, {
    path: 'user-task-stats',
    name: 'user-task-stats',
    component: () => import('@/views/e_commodity/b'),
    meta: { title: '商品管理' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
