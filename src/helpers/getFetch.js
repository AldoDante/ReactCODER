

let productos = [
    { id: '1' ,categoria: 'cerveza', nombre: "rubia", precio: 500, stock: 18, foto:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/26/16458586559431.jpg'},
    { id: '2' ,categoria: 'cerveza', nombre: "roja", precio: 600, stock: 16, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RYMK8ZqPfKEnn5wvNrptETvYrbKKhYxa2w&usqp=CAU'},
    { id: '3' ,categoria: 'cerveza', nombre: "negra", precio: 400, stock: 25, foto:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LYPHS6JF65FQ7GTXETIGIT6OTE.jpg'},
]

export const getFetch = () => {   
    return new Promise(( resolve, reject )=>{
            setTimeout(()=>{
                resolve(productos)                
            }, 2000)            
        })       
    }