<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-info text-white d-flex justify-content-between align-items-center">
            <h4 class="mb-0">Hồ Sơ Của Tôi</h4>
            <button @click="isEditing = !isEditing" class="btn btn-light btn-sm">
              {{ isEditing ? 'Hủy bỏ' : 'Chỉnh sửa' }}
            </button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <img src="https://via.placeholder.com/150" class="rounded-circle img-thumbnail mb-2" alt="Avatar">
                <br>
                <button v-if="isEditing" class="btn btn-sm btn-outline-secondary mt-2">Đổi ảnh</button>
              </div>

              <div class="col-md-8">
                <form @submit.prevent="saveProfile">
                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label fw-bold">Họ tên:</label>
                    <div class="col-sm-9">
                      <input v-if="isEditing" v-model="user.name" type="text" class="form-control">
                      <p v-else class="form-control-plaintext">{{ user.name }}</p>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label fw-bold">Email:</label>
                    <div class="col-sm-9">
                      <input v-if="isEditing" v-model="user.email" type="email" class="form-control">
                      <p v-else class="form-control-plaintext">{{ user.email }}</p>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label fw-bold">Mật khẩu:</label>
                    <div class="col-sm-9">
                      <input v-if="isEditing" type="password" class="form-control" value="******">
                      <p v-else class="form-control-plaintext">******</p>
                    </div>
                  </div>

                  <div v-if="isEditing" class="text-end">
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      isEditing: false, // Trạng thái: đang xem hay đang sửa
      user: {
        name: 'Nguyễn Văn A',
        email: 'sinhvien@fpt.edu.vn',
        role: 'Thành viên'
      }
    }
  },
  methods: {
    saveProfile() {
      this.isEditing = false;
      alert("Đã cập nhật thông tin thành công!");
    }
  }
}
</script>