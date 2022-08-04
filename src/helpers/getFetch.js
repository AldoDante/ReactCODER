let productos = [{
        id: '1',
        categoria: 'Cerveza Rubia',
        nombre: "Pale ale",
        descripcion:"Distinguida perfectamente por su sabor amargo, pero floral. Su tono es oro profundo. Contiene 8% de alcohol.",
        precio: 500,
        stock: 18,
        cantidad:0,
   
        foto: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg'
    },
    {
        id: '2',
        categoria: 'Cerveza Rubia',
        nombre: "Pilsner",
        descripcion:"Fresca y amarga, con un cuerpo ligero y cremoso. Tonos dorados y 4.4% de alcohol.",
        precio: 500,
        stock: 18,
        foto: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg'
    },
    {
        id: '3',
        categoria: 'Cerveza Rubia',
        nombre: "Golden Ale",
        descripcion:"La malta, el trigo, los lúpulos aromáticos le otorgan un sabor no tradicional que la hacen muy particular. Resulta refrescante, ideal para calmar la sed.",
        precio: 500,
        stock: 18,
        foto: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg'
    },
    {
        id: '4',
        categoria: 'Cerveza Roja',
        nombre: "Red ale",
        descripcion:"Del tipo inglés, alta fermentación con 3 maltas seleccionadas y 2 lúpulos; una le da el amargor y otro le brinda el aroma intenso.",
        precio: 600,
        stock: 16,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RYMK8ZqPfKEnn5wvNrptETvYrbKKhYxa2w&usqp=CAU'
    },
    
    {
        id: '5',
        categoria: 'Cerveza Roja',
        nombre: "Barley",
        descripcion:"Tiene un sabor fuerte y afrutado, muy coherente con su cuerpo intenso. Contiene un 11% de alcohol.",
        precio: 600,
        stock: 16,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RYMK8ZqPfKEnn5wvNrptETvYrbKKhYxa2w&usqp=CAU'
    },
    {
        id: '6',
        categoria: 'Cerveza Roja',
        nombre: "Scotch Ale",
        descripcion:"Predomina la malta caramelo y tostada, que refuerza su sabor dulce. La tipo Viena es una lager, que contiene baja fermentación y un color ámbar rojizo.",
        precio: 600,
        stock: 16,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RYMK8ZqPfKEnn5wvNrptETvYrbKKhYxa2w&usqp=CAU'
    },
    {
        id: '7',
        categoria: 'Cerveza Negra',
        nombre: "Stout",
        descripcion:"Baja fermantación. Elaborada con granos de cebada tostada, con maltas de tostado medio y lúpulos de bajo amargor. Espuma de excepcional cremosidad",
        precio: 400,
        stock: 25,
        foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LYPHS6JF65FQ7GTXETIGIT6OTE.jpg'
    },
    {
        id: '8',
        categoria: 'Cerveza Negra',
        nombre: "Porter",
        descripcion:"Tostados suaves y en ocasiones se pueden encontrar toques de regaliz, notas tostadas con un ligero carácter a chocolate, malta y un olor ahumado muy sutil.",
        precio: 400,
        stock: 25,
        foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LYPHS6JF65FQ7GTXETIGIT6OTE.jpg'
    },
    {
        id: '9',
        categoria: 'Cerveza Negra',
        nombre: "Black Lager",
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
        }, 1000)
    })
}