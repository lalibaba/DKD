import Layout from '@/layout'

export default {
  path: '/report',
  component: Layout,
  children: [{
    path: '',
    name: 'report',
    component: () => import('@/views/h_report'),
    meta: { title: '对账统计', icon: 'duizhang' }
  }]
}

// mkdir a_task b_node c_vm d_device e_commodity f_Strategy g_order
