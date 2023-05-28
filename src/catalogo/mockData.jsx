const products = [
    {
        "id": "1",
        "nombre": "Aspirina 500mg",
        "precio": 5.99,
        "descripcion": "Medicamento analgésico y antipirético para aliviar el dolor y reducir la fiebre.",
        "stock": 100,
        "categoria": "Medicamentos",
        "img": "https://www.farmaciaevacontreras.com/wp-content/uploads/2015/07/Aspirina-500-mg-20-Comprimidos.jpg"
    },
    {
        "id": "2",
        "nombre": "Paracetamol 500mg",
        "precio": 4.99,
        "descripcion": "Medicamento analgésico y antipirético para aliviar el dolor y reducir la fiebre.",
        "stock": 150,
        "categoria": "Medicamentos",
        "img": "data:image/jpeg;base64,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"

    },
    {
        "id": "3",
        "nombre": "Multivitamínico",
        "precio": 12.99,
        "descripcion": "Suplemento alimenticio que aporta una amplia variedad de vitaminas y minerales.",
        "stock": 50,
        "categoria": "Suplementos",
        "img": "https://farmaciazentner.com.ar/wp-content/uploads/2021/11/7794640172793.jpg"

    },
    {
        "id": "4",
        "nombre": "Crema hidratante para manos",
        "precio": 6.99,
        "descripcion": "Crema hidratante que protege y suaviza la piel de las manos.",
        "stock": 80,
        "categoria": "Cuidado-personal",
        "img": "https://farmacityar.vteximg.com.br/arquivos/ids/183290-1000-1000/121024_crema-suavizante-para-manos-hidratante-x-50-gr_imagen-1.jpg?v=636832605153970000"

    },
    {
        "id": "5",
        "nombre": "Antiséptico en spray",
        "precio": 8.50,
        "descripcion": "Spray desinfectante para tratar heridas y prevenir infecciones.",
        "stock": 30,
        "categoria": "Medicamentos",
        "img": "data:image/jpeg;base64,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"

    },
    {
        "id": "6",
        "nombre": "Jabón de aloe vera",
        "precio": 3.99,
        "descripcion": "Jabón suave y nutritivo que contiene aloe vera.",
        "stock": 120,
        "categoria": "Cuidado-personal",
        "img": "https://farmavip.com.ar/wp-content/uploads/2021/03/7798339190105.jpg"

    }
]

export const getProducts =()=>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productosId => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=>prod.id === productosId))
        }, 500)
    })
})

export const getProductsByCategory = (productosCategoria => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=>prod.categoria === productosCategoria))
        }, 200)
    })
})