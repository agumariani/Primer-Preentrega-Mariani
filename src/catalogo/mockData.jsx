const products = [
    {
        "id": "1",
        "nombre": "Aspirina 500mg",
        "precio": 5.99,
        "descripcion": "Medicamento analgésico y antipirético para aliviar el dolor y reducir la fiebre.",
        "stock": 100,
        "categoria": "Medicamentos",
        "img": "src/images/aspirina.png"
    },
    {
        "id": "2",
        "nombre": "Paracetamol 500mg",
        "precio": 4.99,
        "descripcion": "Medicamento analgésico y antipirético para aliviar el dolor y reducir la fiebre.",
        "stock": 150,
        "categoria": "Medicamentos",
        "img": "src/images/paracetamol.png"

    },
    {
        "id": "3",
        "nombre": "Multivitamínico",
        "precio": 12.99,
        "descripcion": "Suplemento alimenticio que aporta una amplia variedad de vitaminas y minerales.",
        "stock": 50,
        "categoria": "Suplementos",
        "img": "src/images/multivitaminico.png"

    },
    {
        "id": "4",
        "nombre": "Crema hidratante para manos",
        "precio": 6.99,
        "descripcion": "Crema hidratante que protege y suaviza la piel de las manos.",
        "stock": 80,
        "categoria": "Cuidado-personal",
        "img": "src/images/creama.png"

    },
    {
        "id": "5",
        "nombre": "Antiséptico en spray",
        "precio": 8.50,
        "descripcion": "Spray desinfectante para tratar heridas y prevenir infecciones.",
        "stock": 30,
        "categoria": "Medicamentos",
        "img": "src/images/antiseptico.png"

    },
    {
        "id": "6",
        "nombre": "Jabón de aloe vera",
        "precio": 3.99,
        "descripcion": "Jabón suave y nutritivo que contiene aloe vera.",
        "stock": 120,
        "categoria": "Cuidado-personal",
        "img": "src/images/jabon.png"

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