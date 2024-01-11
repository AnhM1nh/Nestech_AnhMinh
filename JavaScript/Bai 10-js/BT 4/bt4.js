let listProduct = [];

function addProduct() {
    let product = document.getElementById('product').value;
    listProduct.push(product);

    tableProduct();
}

function tableProduct() {
    let table_product = "";
    for (let i = 0; i < listProduct.length; i++) {
        table_product = table_product + "<tr><td>" + listProduct[i] + "</td><td><button onclick=" +
            "editProduct(" +
            i + ")" +
            ">Edit</button> </td><td><button onclick=" +
            "deleteProduct(" +
            i + ")" +
            ">Delete</button></td> </tr>";

        document.getElementById("quantity_product").innerHTML = i + 1;
    }
    document.getElementById("table_product").innerHTML = table_product;
}

function editProduct(i) {
    let edit_product = prompt('Nhập nội dung chỉnh sửa');

    listProduct.splice(i, 1, edit_product);
    tableProduct();
}

function deleteProduct(i) {
    listProduct.splice(i, 1);
    tableProduct();
}