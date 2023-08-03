type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    id: number
    images: string
}

const productArray: Product[] = [
    {
        id: 1,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '32',
        price: 500,
        images: '/images/iphone-xs.jpg',
    },
    {
        id: 2,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: '64',
        price: 1000,
        images: '/images/iphone-x.jpg',
    },
    {
        id: 3,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '128',
        price: 1500,
        images: '/images/iphone-11.jpg',
    },
    {
        id: 4,
        title: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: '256',
        price: 2000,
        images: '/images/iphone-12.jpg',
    },
    {
        id: 5,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '512',
        price: 2500,
        images: '/images/iphone-13.jpg',
    },
    {
        id: 6,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '1024',
        price: 3000,
        images: '/images/iphone-14.jpg',
    },
]

export default productArray
