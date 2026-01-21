<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-5">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Thêm Phim Mới (Admin)</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="addMovie">
              <div class="mb-3">
                <label class="form-label">Tên phim</label>
                <input v-model="newMovie.title" type="text" class="form-control" placeholder="Nhập tên phim...">
              </div>
              <div class="mb-3">
                <label class="form-label">Link hình ảnh (Poster)</label>
                <input v-model="newMovie.image" type="text" class="form-control" placeholder="URL hình ảnh...">
              </div>
              <div class="mb-3">
                <label class="form-label">Thể loại</label>
                <select v-model="newMovie.genre" class="form-select">
                  <option selected disabled value="">Chọn thể loại</option>
                  <option>Hành động</option>
                  <option>Tình cảm</option>
                  <option>Kinh dị</option>
                  <option>Hoạt hình</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Mô tả ngắn</label>
                <textarea v-model="newMovie.description" class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-success w-100">Đăng Phim</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <div class="card shadow-sm">
          <div class="card-header bg-dark text-white">
            <h5 class="mb-0">Danh Sách Phim Đang Chiếu</h5>
          </div>
          <div class="card-body p-0">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên Phim</th>
                  <th scope="col">Thể loại</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(movie, index) in movies" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ movie.title }}</td>
                  <td><span class="badge bg-secondary">{{ movie.genre }}</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary me-2">Sửa</button>
                    <button class="btn btn-sm btn-outline-danger">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMovie',
  data() {
    return {
      newMovie: { title: '', genre: '', image: '', description: '' },
      movies: [
        { title: 'Mai', genre: 'Tình cảm' },
        { title: 'Đào, Phở và Piano', genre: 'Lịch sử' },
        { title: 'Kung Fu Panda 4', genre: 'Hoạt hình' }
      ]
    }
  },
  methods: {
    addMovie() {
      // Giả lập thêm phim vào danh sách
      if(this.newMovie.title) {
        this.movies.push({...this.newMovie});
        alert("Đã thêm phim thành công!");
        this.newMovie = { title: '', genre: '', image: '', description: '' }; // Reset form
      } else {
        alert("Vui lòng nhập tên phim!");
      }
    }
  }
}
</script>