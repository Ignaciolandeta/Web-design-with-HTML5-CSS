// codigo y funcion para exportar un Reporte Excel con los datos de la DB

const excelGenerator = (products, name, res) => {
    const xl = require('excel4node'); //'excel4node' es un paquete que permite exportar la data a Excel

    products = products.map((product) => {
        let id = product._id.toString();    // la base MongoDB devuelve un 'ObjectID("618412867be4114ee2870bc6") con el id adentro en string, con esta linea se extrae solo ese string
        delete product._id;
        return {
            id,
            ...product,
        };
    });

    let wb = new xl.Workbook(); //creacion de un 'wb workbook' en Excel
    let ws = wb.addWorksheet('inventario'); //genera una nueva hoja 'worksheet' dentro de ese Excel workbook

    for (let i = 1; i <= products.length; i++) {  // agregado de los datos (productos) dentro del Excel. //el Excel es una matriz de filas (i) y columas (j), un 'FOR' ira moviendose y completando las col (con el dato 'id') y el otro 'FOR' ira completando las filas
        for (let j = 1; j <= Object.values(products[0]).length; j++) {  
            let data = Object.values(products[i - 1])[j -1]; //almacenaje de datos en cada una de las celdas (comenzando desde 0 (i-1) )
            if (typeof data === 'string') {  //agregado del valor en la celda (verificando que el dato sea string ó numerico)
                ws.cell(i, j).string(data); //agrega finalmente el dato string en la fila i columna j
            } else {
                ws.cell(i, j).number(data);
            }
        } 
    }
    
    wb.write(`${name}.xlsx`, res)    //finalmente crea el archivo 'wb Workbook' con cierto nombre de archivo

}

module.exports.ProductsUtils = {
    excelGenerator
};