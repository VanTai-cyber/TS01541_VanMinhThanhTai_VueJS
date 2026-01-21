<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card p-4 shadow-sm" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng Nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" placeholder="******">
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng Nhập</button>
      </form>
      <div class="text-center mt-3">
        <router-link to="/register">Chưa có tài khoản? Đăng ký ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      alert("Chức năng đăng nhập đang phát triển!");
      this.$router.push('/'); // Chuyển về trang chủ sau khi login
    }
  }
}
</script>