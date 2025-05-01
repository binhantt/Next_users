import { ref } from 'vue';

export const useCategories = () => {
  const categories = ref([
    { id: 1, name: 'Sách văn học', slug: 'van-hoc', icon: '/icons/book.svg' },
    { id: 2, name: 'Sách kinh tế', slug: 'kinh-te', icon: '/icons/economy.svg' },
    { id: 3, name: 'Sách thiếu nhi', slug: 'thieu-nhi', icon: '/icons/kids.svg' },
    { id: 4, name: 'Sách ngoại ngữ', slug: 'ngoai-ngu', icon: '/icons/language.svg' },
    { id: 5, name: 'Sách khoa học', slug: 'khoa-hoc', icon: '/icons/science.svg' },
    { id: 6, name: 'Sách kỹ năng', slug: 'ky-nang', icon: '/icons/skill.svg' }
  ]);

  return { categories };
};