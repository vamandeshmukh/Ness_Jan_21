var baseUrl = 'http://localhost:4201';

function rowClickHandler( id ) {
    window.location = './product-detail.html?id=' + id;
}

function addProductToTable( product ) {
    var tr = document.createElement( 'tr' );
    
    tr.innerHTML = `
        <tr data-id="${product._id}" title="Click to read reviews">
            <td><img src="${product.imageUrl}" class="product-image" /></td>
            <td>${product.name}</td>
            <td>${'$' + product.price}</td>
            <td>${product.starRating}</td>
        </tr>
    `;
    
    document.querySelector( '#tbl-products tbody' ).appendChild( tr );
    tr.addEventListener( 'click', rowClickHandler.bind( null, product._id ) );
}

ajax({
    url: baseUrl + '/products',
    method: 'get',
    success: function( products ) {
        document.querySelector( '#tbl-products tbody' ).innerHTML = '';
        products.forEach( addProductToTable );
    },
    error: function( xhr ) {
        alert( 'Error while fetching products' );
        console.log( xhr );
    }
});