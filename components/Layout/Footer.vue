<template>
  <footer class="bg-gray-900 text-white border-t border-gray-800">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Brand & Newsletter Section -->
        <div class="md:col-span-4 space-y-6">
          <div class="flex items-center space-x-3">
            <svg class="h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-2xl font-bold">Siêu Thị Sách</span>
          </div>
          <p class="text-gray-400">Nơi tri thức gặp gỡ đam mê đọc sách của bạn</p>
          
          <!-- Newsletter -->
          <div class="pt-4">
            <h3 class="text-sm font-semibold text-gray-300 mb-3">Đăng ký nhận thông tin sách mới</h3>
            <form class="flex gap-2">
              <input type="email" placeholder="Email của bạn" 
                class="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" 
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150">
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Danh Mục</h3>
          <ul class="space-y-2">
            <li><a href="/sach-moi" class="text-gray-400 hover:text-white transition-colors">Sách Mới</a></li>
            <li><a href="/sach-ban-chay" class="text-gray-400 hover:text-white transition-colors">Bán Chạy</a></li>
            <li><a href="/sach-giam-gia" class="text-gray-400 hover:text-white transition-colors">Khuyến Mãi</a></li>
            <li><a href="/combo-sach" class="text-gray-400 hover:text-white transition-colors">Combo Sách</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Thể Loại</h3>
          <ul class="space-y-2">
            <li><a href="/van-hoc" class="text-gray-400 hover:text-white transition-colors">Văn Học</a></li>
            <li><a href="/kinh-te" class="text-gray-400 hover:text-white transition-colors">Kinh Tế</a></li>
            <li><a href="/thieu-nhi" class="text-gray-400 hover:text-white transition-colors">Thiếu Nhi</a></li>
            <li><a href="/giao-khoa" class="text-gray-400 hover:text-white transition-colors">Giáo Khoa</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Hỗ Trợ</h3>
          <ul class="space-y-2">
            <li><a href="/huong-dan" class="text-gray-400 hover:text-white transition-colors">Hướng Dẫn</a></li>
            <li><a href="/doi-tra" class="text-gray-400 hover:text-white transition-colors">Đổi Trả</a></li>
            <li><a href="/van-chuyen" class="text-gray-400 hover:text-white transition-colors">Vận Chuyển</a></li>
            <li><a href="/faq" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Liên Hệ</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>123 Đường Sách, TP.HCM</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>contact@sieuthisach.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>(84) 123-456-789</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Links -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">YouTube</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-400 text-sm">&copy; 2024 Siêu Thị Sách. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Có thể thêm logic xử lý form đăng ký newsletter ở đây
const handleNewsletterSubmit = (e) => {
  e.preventDefault()
  // Xử lý logic đăng ký
}
</script>

<style scoped>
/* Các style cho footer nếu cần */
</style>