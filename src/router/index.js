import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Page from '@/components/page/page'
import child1 from '@/components/page/page1'
import child2 from '@/components/page/page2'
import child3 from '@/components/page/page3'
import Menu from '@/components/page/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '首頁',
      component: Home
    },
    {
      path: '/page',
      components:{
        default:Page,
        menu: Menu,
      },
      children:[
        {
          path: '',
          name: '分頁1',
          component: child1,
        },
        {
          path: 'page2',
          name: '分頁2',
          component: child2,
        },
        {
          path: 'page3',
          name: '分頁3',
          component: child3,
        },
      ]

    }
  ]
})


