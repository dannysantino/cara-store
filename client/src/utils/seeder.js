import { userRequest, setError } from './requestMethods'

userRequest.interceptors.request.use(config => {
    config.headers['token'] = `Bearer ${localStorage.getItem('userToken')}`
    return config;
});

export const seedDb = async images => {
    try {
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            const randomPrice = (Math.floor(Math.random() * (200 - 100 + 1) + 100)) - .01;
            const randomCount = Math.floor(Math.random() * (20 - 2 + 1) + 2);

            const product = {
                name: `Item ${i}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus harum magni animi placeat ratione, quia recusandae accusantium sint aut nobis, dolorum ipsum, sunt deleniti quidem impedit saepe? Corrupti, recusandae!',
                price: randomPrice,
                img: images.item(i),
                categories: ['beach-wear', 'casual'],
                size: ['XS', 'S', 'M'],
                color: ['red', 'blue'],
                countInStock: randomCount
            }

            for (let p in product) {
                ['categories', 'size', 'color'].includes(p)
                    ? product[p].forEach(e => formData.append(p, e))
                    : formData.set(p, product[p]);
            }

            await userRequest.post('/products/admin/add', formData);
        }
        console.log('Proudct database successfully seeded');
    } catch (err) {
        console.error('Error seeding database \n', setError(err));
    }
}