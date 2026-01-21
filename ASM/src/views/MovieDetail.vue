<template>
  <div class="movie-detail" v-if="movie">
    <div class="row mt-4">
      <div class="col-md-4">
        <img :src="movie.image" class="img-fluid rounded shadow" :alt="movie.title">
      </div>
      
      <div class="col-md-8">
        <h2 class="mb-3">{{ movie.title }}</h2>
        <div class="badge bg-warning text-dark mb-3 me-2">{{ movie.genre }}</div>
        <div class="badge bg-secondary mb-3">{{ movie.duration }} phút</div>
        
        <p class="lead">{{ movie.description }}</p>
        
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-danger btn-lg me-2">
            <i class="bi bi-play-circle"></i> Xem Phim
          </button>
          <button class="btn btn-outline-secondary btn-lg">Trailer</button>
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="row">
      <div class="col-12">
        <h3>Bình luận</h3>
        <div class="card mb-3">
          <div class="card-body">
            <textarea class="form-control mb-2" rows="3" placeholder="Viết bình luận của bạn..."></textarea>
            <button class="btn btn-primary btn-sm">Gửi bình luận</button>
          </div>
        </div>
        
        <div class="list-group">
          <div class="list-group-item">
            <strong>Nguyễn Văn A:</strong> Phim hay quá!
          </div>
          <div class="list-group-item">
            <strong>Trần Thị B:</strong> Đoạn kết hơi buồn :(
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="text-center mt-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p>Đang tải phim...</p>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: null
    }
  },
  mounted() {
    // Giả lập lấy dữ liệu dựa trên ID từ URL
    const id = this.$route.params.id; // Lấy ID từ router
    
    // Mock data (thực tế sẽ gọi API ở đây)
    this.movie = {
      id: id,
      title: "Mai (Demo Movie " + id + ")",
      genre: "Tình cảm",
      duration: 120,
      description: "Đây là mô tả chi tiết của phim. Phim kể về cuộc đời của nhân vật chính với nhiều sóng gió...",
      image: "https://via.placeholder.com/400x600?text=Movie+Detail"
    }
  }
}
</script>