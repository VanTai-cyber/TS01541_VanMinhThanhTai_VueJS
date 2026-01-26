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
        { 
        id: 1, 
        title: "Nhà Bà Nữ", 
        genre: "Gia đình/Hài", 
        description: "Câu chuyện về những mâu thuẫn thế hệ và áp lực vô hình trong một gia đình bán bánh canh cua.", 
        image: "https://via.placeholder.com/300x400?text=Poster+Nha+Ba+Nu" 
    },
    { 
        id: 2, 
        title: "Godzilla x Kong: The New Empire", 
        genre: "Hành động", 
        description: "Hai quái thú khổng lồ buộc phải hợp sức để chống lại một mối đe dọa mới từ Trái Đất Rỗng.", 
        image: "https://via.placeholder.com/300x400?text=Poster+Godzilla+Kong" 
    },
    { 
        id: 3, 
        title: "Kung Fu Panda 4", 
        genre: "Hoạt hình", 
        description: "Gấu Po trở thành Thủ lĩnh Tinh thần và bắt đầu hành trình tìm kiếm người kế thừa danh hiệu Thần Long Đại Hiệp.", 
        image: "https://via.placeholder.com/300x400?text=Poster+Kung+Fu+Panda" 
    },
    { 
        id: 4, 
        title: "Exhuma: Quật Mộ Trùng Ma", 
        genre: "Kinh dị", 
        description: "Những hiện tượng tâm linh bí ẩn xảy ra khi nhóm pháp sư khai quật một ngôi mộ cổ của gia đình giàu có.", 
        image: "https://via.placeholder.com/300x400?text=Poster+Exhuma" 
    }
      ]
    }
  }
}
</script>