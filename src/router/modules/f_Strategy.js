import Layout from '@/layout'

export default {
  path: '/Strategy',
  component: Layout,
  children: [{
    path: '',
    name: 'Strategy',
    component: () => import('@/views/f_Strategy'),
    meta: { title: '策略管理', icon: 'chelv' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
