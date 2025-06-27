export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean'>> = {
  user: {
    id: 'number',
    name: 'string',
    email: 'string',
    password: 'string',
    refresh_token: 'string',
    is_active: 'boolean'
  },
  product: {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number',
    stock: 'number',
    is_active: 'boolean',
  }
};