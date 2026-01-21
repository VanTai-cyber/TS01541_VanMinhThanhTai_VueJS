<template>
  <div class="home-page">
    <div class="p-5 mb-4 bg-dark text-white rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Phim Hot Tuần Này</h1>
        <p class="col-md-8 fs-4">Chào mừng đến với Poly Movie. Nơi cập nhật những bộ phim bom tấn mới nhất.</p>
        <button class="btn btn-primary btn-lg" type="button">Khám phá ngay</button>
      </div>
    </div>

    <h3 class="mb-3">Phim Đề Cử</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="movie in movies" :key="movie.id">
        <div class="card h-100 shadow-sm">
          <img :src="movie.image" class="card-img-top" :alt="movie.title" style="height: 300px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text text-muted">Thể loại: {{ movie.genre }}</p>
            <p class="card-text">{{ movie.description }}</p>
          </div>
          <div class="card-footer bg-white border-top-0">
            <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }" class="btn btn-outline-primary w-100">
              Xem Ngay
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // Dữ liệu giả lập (Mock Data)
      movies: [
        { id: 1, title: "Mai", genre: "Tình cảm", description: "Bộ phim tình cảm sâu lắng...", image: "https://via.placeholder.com/300x400?text=Poster+Mai" },
        { id: 2, title: "Đào, Phở và Piano", genre: "Lịch sử", description: "Câu chuyện hào hùng...", image: "https://via.placeholder.com/300x400?text=Poster+Dao+Pho" },
        { id: 3, title: "Lật Mặt 7", genre: "Gia đình", description: "Một điều ước...", image: "https://via.placeholder.com/300x400?text=Poster+Lat+Mat" },
        { id: 4, title: "Dune: Part Two", genre: "Viễn tưởng", description: "Cuộc chiến giữa các vì sao...", image: "https://via.placeholder.com/300x400?text=Poster+Dune" },
      ]
    }
  }
}
</script>