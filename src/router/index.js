import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/view/Home.vue'
import App from '../App.vue'
import '../assets/reset.css'


Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'App',
		redirect:'/home/welcome',
		component: App,
		children: [{
			path: '/home',
			name: 'Home',
			component: Home,
			children:[
				{
					path:'manage',
					name:'manage',
					component:() => import('../components/special/SpecialManage.vue')
				},
				{
					path:'welcome',
					name:'welcome',
					component:() =>import('../components/special/Welcome.vue')
				},
				{
					path:'order',
					name:'order',
					component:() => import('../components/special/SpecialOrder.vue')
				},
				{
					path:'create',
					name:'create',
					component:() => import('../components/special/SpecialCreate.vue')
				},{
					path:'report',
					name:'report',
					component:() => import('../components/special/SpecialReport.vue')
				},
				{
					path:'page',
					name:'page',
					component:() => import('../components/special/SpecialPage.vue')
				},
				{
					path:'order-manage',
					name:'order-manage',
					component:() => import('../components/special/SpecialOrderManage.vue')
				}
			]
		},
		{
			path:'small-screen',
			name:'small-screen',
			component:() => import('../components/special/SpecialSmallScreen.vue')
		}]
	},

]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
