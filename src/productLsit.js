
const product_list =  [
    {
        id: 1,
        title: "TVs",
        description: "Explore your dreams via samsung",
        price: 12999,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Samsung",
        category: "TVs",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images:"https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/h/8/n/proart-display-pa247cv-professional-full-hd-23-8-90lm03y1-b01310-original-imagg9nc8nv8qb88.jpeg?q=70"
    },
    {
        id: 2,
        title: "Fashion",
        description: "it gives a new look",
        price:99,
        quantity:1,
        discountPercentage: 13.94,
        rating: 4.44,
        stock: 34,
        brand: "Petter England",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/g/1/s-frml-st2-vebnor-original-imagqww4acg7jnvy.jpeg?q=70"
    },
    {
        id: 3,
        title: "Iron Box",
        description: "new variant which goes beyond Galaxy to the Universe",
        price: 499,
        quantity:1,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "NOVA",
        category: "Iron boxes",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/l2p23rk0/iron/9/t/l/-original-imagdz3j6wany4dh.jpeg?q=70"
    },
    {
        id: 4,
        title: "Watches",
        description: "set your own time",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "TITAN",
        category: "clocks",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/xif0q/wall-clock/a/a/x/beautiful-designer-decorative-attractive-wall-elegant-premium-original-imagrwjdjdemdh3f.jpeg?q=70"
    },
    {
        id: 5,
        title: "sports",
        description: "Play with buddies",
        price: 499,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "MRF",
        category: "sports",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/kv8fbm80/kit/o/y/q/mrf-grand-edition-vk-18-full-size-ideal-for-15-21-years-complete-original-imag86qh9m2spjhp.jpeg?q=70"
    },
    {
        id: 6,
        title: "Pigeon",
        description: "cook with pigeon",
        price: 1399,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.6,
        stock: 94,
        brand: "Pigeon",
        category: "Induction cook",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/xif0q/induction-cook-top/z/y/y/-original-imagqhpkgjdzsu2e.jpeg?q=70"
    },
    {
        id: 7,
        title: "Shoes",
        description: "walk every where",
        price: 1099,
        quantity:1,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 35,
        brand: "NIKE",
        category: "shoes",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/w/t/6-brd-406-brd-466-6-birde-grey-orange-green-original-imag5ccyzzwrwwfh.jpeg?q=70"
    },
    {
        id: 8,
        title: "Kids",
        description: "best seller",
        price: 849,
        quantity:1,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "BUMTUM",
        category: "diaper",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/xif0q/diaper/y/r/g/-original-imagvdzzkxvq2g8r.jpeg?q=70"
    },
    {
        id: 9,
        title: "cloths",
        description: "sleep well",
        price: 280,
        quantity:1,
        discountPercentage: 17.91,
        rating: 3,
        stock: 123,
        brand: "new",
        category: "cloths",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: "https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70"
    },
    {
        id: 10,
        title: "Bags",
        description: "Take anythink inside",
        price: 399,
        quantity:1,
        discountPercentage: 10.58,
        rating: 3,
        stock: 32,
        brand: "Rubben",
        category: "bags",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: "https://m.media-amazon.com/images/I/61egMfcDWlL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 11,
        title: "Helmets",
        description: "safty ride",
        price: 549,
        quantity:1,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Vega",
        category: "helmets",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: "https://m.media-amazon.com/images/I/61eEetcCb9L._SX522_.jpg"
    },
    {
        id: 12,
        title: "samsung",
        description: "freez anything",
        price: 21899,
        quantity:1,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "samsung",
        category: "Refgirator",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: "https://m.media-amazon.com/images/I/61pZR4rv-WL._AC_UL480_FMwebp_QL65_.jpg"
    },
    
];



export { product_list};
