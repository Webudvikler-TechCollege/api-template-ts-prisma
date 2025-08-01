export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  user: {
    id: 'number',
    name: 'string',
    email: 'string',
    password: 'string',
    image: 'string',
    refreshToken: 'string',
    isActive: 'boolean'
  },
  product: {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    stock: 'number',
    isActive: 'boolean',
  },
  favorite: {
    id: 'number',
    productId: 'number',
    userId: 'number'
  }
};