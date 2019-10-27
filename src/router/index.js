import Vue from 'vue'
import Router from 'vue-router'

const Home =()=> import('@/components/Home');
const List =()=> import('@/components/List');
const Shop =()=> import('@/components/Shop');
const Detail =()=> import('@/components/Detail');
const Login =()=> import('@/components/Login');
const Single =()=> import('@/components/Single');
const Mess1 =()=> import('@/components/detail/Mess1');
const Mess2 =()=> import('@/components/detail/Mess2');
const Mess3 =()=> import('@/components/detail/Mess3');
const Mess4 =()=> import('@/components/detail/Mess4');
const Mess5 =()=> import('@/components/detail/Mess5');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')==='root') {
          next()
        }else {
          alert('您还没有登录，请先登录');
          next('/login')
        }
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      beforeEnter: (to, from, next) => {
        console.log(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')==='root') {
          next()
        }else {
          alert('您还没有登录，请先登录');
          next('/login')
        }
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      beforeEnter: (to, from, next) => {
        console.log(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')==='root') {
          next()
        }else {
          alert('您还没有登录，请先登录');
          next('/login')
        }
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      beforeEnter: (to, from, next) => {
        console.log(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')==='root') {
          next()
        }else {
          alert('您还没有登录，请先登录');
          next('/login')
        }
      },
      children:[{
        path:'/mess1',
        component:Mess1
      }, {
          path:'/mess2',
          component:Mess2
        }, {
          path:'/mess3',
          component:Mess3
        }, {
          path:'/mess4',
          component:Mess4
        }, {
          path:'/mess5',
          component:Mess5}]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    }
  ]
})
