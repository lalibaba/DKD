import Layout from '@/layout'

export default {
  path: '/order',
  component: Layout,
  children: [{
    path: '',
    name: 'order',
    component: () => import('@/views/g_order'),
    meta: { title: '订单管理', icon: 'dindan' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
