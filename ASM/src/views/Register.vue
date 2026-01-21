<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card p-4 shadow-sm" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng Ký Thành Viên</h3>
      <form>
        <div class="mb-3">
          <label class="form-label">Họ và Tên</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input type="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-success w-100">Đăng Ký</button>
      </form>
      <div class="text-center mt-3">
        <router-link to="/login">Đã có tài khoản? Đăng nhập</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>v