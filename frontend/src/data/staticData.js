export const currentUser = {
  id: 1,
  name: 'Admin Reader',
  email: 'admin@bookshop.test',
  role: 'admin',
  isAuthenticated: true,
};

export const products = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming',
    price: 42,
    stock: 18,
    image: 'https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg',
    description:
      'A practical guide to writing readable, maintainable software with better naming, functions, formatting, and testing habits.',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    price: 24,
    stock: 27,
    image: 'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
    description:
      'A clear framework for building good habits, breaking bad ones, and making small changes that compound over time.',
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    price: 18,
    stock: 34,
    image: 'https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg',
    description:
      'A modern classic about a shepherd searching for treasure, purpose, and the courage to follow a personal legend.',
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    price: 26,
    stock: 21,
    image: 'https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg',
    description:
      'A focused look at distraction-free work, concentration, and the routines that help knowledge workers produce better results.',
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    author: 'Erich Gamma et al.',
    category: 'Programming',
    price: 52,
    stock: 11,
    image: 'https://covers.openlibrary.org/b/isbn/9780201633610-M.jpg',
    description:
      'The classic catalog of reusable object-oriented design patterns for solving common software architecture problems.',
  },
  {
    id: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    price: 22,
    stock: 16,
    image: 'https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg',
    description:
      'Short stories about wealth, greed, behavior, and the practical decisions that shape financial outcomes.',
  },
];

export const cartItems = [
  {
    productId: 'clean-code',
    quantity: 1,
  },
  {
    productId: 'the-alchemist',
    quantity: 2,
  },
];

export const orders = [
  {
    id: 'ORD-1042',
    customer: 'Admin Reader',
    email: 'admin@bookshop.test',
    date: '2026-04-18',
    status: 'Delivered',
    total: 78,
    items: ['Clean Code', 'The Alchemist'],
  },
  {
    id: 'ORD-1048',
    customer: 'Nadia Islam',
    email: 'nadia@example.com',
    date: '2026-04-25',
    status: 'Processing',
    total: 50,
    items: ['Atomic Habits', 'Deep Work'],
  },
  {
    id: 'ORD-1051',
    customer: 'Rafi Khan',
    email: 'rafi@example.com',
    date: '2026-04-27',
    status: 'Pending',
    total: 52,
    items: ['Design Patterns'],
  },
];

export const categories = ['All', 'Programming', 'Fiction', 'Productivity', 'Self Help', 'Finance'];

export function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export function getCartProducts() {
  return cartItems
    .map((item) => {
      const product = getProductById(item.productId);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}
