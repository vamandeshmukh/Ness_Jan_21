var baseUrl = 'http://localhost:4201';

const reviewerEl = document.getElementById( 'reviewer-name' );
const ratingEl = document.getElementById( 'reviewer-rating' );
const titleEl = document.getElementById( 'review-title' );
const textEl = document.getElementById( 'review-text' );

function login() {
    const username = 
    $.ajax({
        url: baseUrl + '/products/' + id,
        method: 'get',
        success: function( product ) {
            document.querySelector( '#product-details' ).innerHTML = '';
            renderProductDetails( product );
        },
        error: function( xhr ) {
            alert( 'Error while fetching product details' );
            console.log( xhr );
        }
    });
}

document.querySelector( '#login-form' ).onsubmit = function( event ) {
    event.preventDefault();

    const username = document.querySelector( '#username' ).value.trim();
    const password = document.querySelector( '#password' ).value.trim();


    if( username === '' || password === ''  ) {
        alert( 'Both username and password must be filled in' );
        return;
    }

    $.ajax({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function( response ) {
            if( response.token ) {
                localStorage.setItem( 'token', JSON.stringify( response.token ) );
                location = './product-catalog.html';
            } else {
                alert( 'Invalid username or password' );
            }
        },
        error: function( xhr ) {
            alert( 'Some problem occured. Try again later' );
        }
    });
};