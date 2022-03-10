const items =  [
    {
        content: {
            id: 1,
            description: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            count: 1,
            size: "M",
            color: "Vizon",
            colorCode:"#414744",
            price: 2299.0,
        },
        image:
            "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
    },
    {
        content: {
            id: 2,
            description: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            count: 1,
            size: "M",
            color: "Vizon",
            colorCode:"#414744",
            price: 2399.0,
        },
        image:
            "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
    },
]

const cart = {
    id: 1,
    items: [
        {
            content: {
                id: 1,
                description: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
                count: 2,
                size: "M",
                color: "Vizon",
                colorCode:"#414744",
                price: 2399.0,
                totalPrice: 4698.0,
            },
            image:
                "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
        },
    ],
    total: 4798.0,
    shipping: 30.0,
    discount: 20.0
}

export const dummyItems = items;
export const dummyCart = cart;
