import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import DetailPage from '../pages/DetailPage.vue'
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/vehicle/:id',
            component: DetailPage,

        }
    ]
})