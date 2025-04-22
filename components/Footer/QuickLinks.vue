<template>
  <div class="grid grid-cols-2 gap-8">
    <!-- Danh mục sách -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Danh Mục Sách</h3>
      <ul class="space-y-2">
        <li><NuxtLink to="/sach-moi" class="text-gray-400 hover:text-white transition-colors duration-300">Sách Mới</NuxtLink></li>
        <li><NuxtLink to="/sach-ban-chay" class="text-gray-400 hover:text-white transition-colors duration-300">Sách Bán Chạy</NuxtLink></li>
        <li><NuxtLink to="/sach-giao-khoa" class="text-gray-400 hover:text-white transition-colors duration-300">Sách Giáo Khoa</NuxtLink></li>
        <li><NuxtLink to="/van-hoc" class="text-gray-400 hover:text-white transition-colors duration-300">Văn Học</NuxtLink></li>
        <li><NuxtLink to="/kinh-te" class="text-gray-400 hover:text-white transition-colors duration-300">Kinh Tế</NuxtLink></li>
        <li><NuxtLink to="/thieu-nhi" class="text-gray-400 hover:text-white transition-colors duration-300">Thiếu Nhi</NuxtLink></li>
      </ul>
    </div>

    <!-- Dịch vụ & Hỗ trợ -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Dịch Vụ & Hỗ Trợ</h3>
      <ul class="space-y-2">
        <li><NuxtLink to="/tai-khoan" class="text-gray-400 hover:text-white transition-colors duration-300">Tài Khoản</NuxtLink></li>
        <li><NuxtLink to="/theo-doi-don-hang" class="text-gray-400 hover:text-white transition-colors duration-300">Theo Dõi Đơn Hàng</NuxtLink></li>
        <li><NuxtLink to="/chinh-sach-doi-tra" class="text-gray-400 hover:text-white transition-colors duration-300">Chính Sách Đổi Trả</NuxtLink></li>
        <li><NuxtLink to="/khach-hang-than-thiet" class="text-gray-400 hover:text-white transition-colors duration-300">Khách Hàng Thân Thiết</NuxtLink></li>
        <li><NuxtLink to="/huong-dan-mua-hang" class="text-gray-400 hover:text-white transition-colors duration-300">Hướng Dẫn Mua Hàng</NuxtLink></li>
        <li><NuxtLink to="/faq" class="text-gray-400 hover:text-white transition-colors duration-300">Câu Hỏi Thường Gặp</NuxtLink></li>
      </ul>
    </div>
  </div>
</template> 