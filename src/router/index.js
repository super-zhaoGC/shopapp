import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import("views/home/Home.vue")
const Login = () => import("views/login/Login.vue")
const Register = () => import("views/register/Register.vue")
const Search = () => import("views/search/Search.vue")
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isShow: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isShow: false
    }
  },
  {
    name: 'search',
    path: '/search/:keyword',
    component: Search,
    meta: {
      isShow: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router