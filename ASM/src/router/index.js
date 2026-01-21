import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// Import thêm 2 trang mới sắp tạo
import AdminMovie from '../views/AdminMovie.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/movie/:id', name: 'MovieDetail', component: MovieDetail },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  
  // Thêm route cho Admin và Profile
  { path: '/admin/movie', name: 'AdminMovie', component: AdminMovie },
  { path: '/profile', name: 'Profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router