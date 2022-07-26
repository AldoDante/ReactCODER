let productos = [{
        id: '1',
        categoria: 'cerveza',
        nombre: "rubia",
        descripcion:"La malta, el trigo, los lúpulos aromáticos le otorgan un sabor no tradicional que la hacen muy particular. Resulta refrescante, ideal para calmar la sed.",
        precio: 500,
        stock: 18,
        foto: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg'
    },
    {
        id: '2',
        categoria: 'cerveza',
        nombre: "roja",
        descripcion:"Del tipo inglés, alta fermentación con 3 maltas seleccionadas y 2 lúpulos; una le da el amargor y otro le brinda el aroma intenso.",
        precio: 600,
        stock: 16,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RYMK8ZqPfKEnn5wvNrptETvYrbKKhYxa2w&usqp=CAU'
    },
    {
        id: '3',
        categoria: 'cerveza',
        nombre: "negra",
        descripcion:"Baja fermantación. Elaborada con granos de cebada tostada, con maltas de tostado medio y lúpulos de bajo amargor. Espuma de excepcional cremosidad",
        precio: 400,
        stock: 25,
        foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LYPHS6JF65FQ7GTXETIGIT6OTE.jpg'
    },
]

export const getFetch = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(prod => prod.id === id))
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}