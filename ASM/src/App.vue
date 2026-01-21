<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Poly Movie</router-link>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Trang chủ</router-link>
          <router-link class="nav-link" to="/admin/movie">Quản lý (Admin)</router-link>
          <router-link class="nav-link" to="/profile">Tài khoản</router-link>
          <router-link class="nav-link" to="/login">Đăng xuất</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>