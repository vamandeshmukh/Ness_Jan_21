var baseUrl = 'http://localhost:4201';

function addReviewToList( review ) {
    var strTbody = '';

    strTbody = `
        <li class="review list-group list-group-item">
            <div class="reviewer">Review by <strong>${review.reviewer}</strong></div>
            <div class="review-title mt-2"><strong>${review.title}</strong></div>
            <div class="review-text">${review.text}</div>
        </li>
    `;
    
    document.querySelector( '.reviews' ).innerHTML += strTbody;
}

$( '.nav-tabs .nav-link' ).click(function() {
    $( this ).tab( 'show' );
});

function renderProductDetails( product ) {
    var strProductDetails = `
        <div class="col-4">
            <img class="img-responsive" src="${product.imageUrl}" />
        </div>
        <div class="col-8">
            <h2>${product.description}</h2>
            <small class="text-muted">${product.code}</small>
            <p class="my-4">
                <strong>Released on</strong>: ${product.releaseDate}
            </p>
            <p class="my-4">
                <strong>Price</strong>: $${product.price}
            </p>
            <p class="my-4">
                <strong>Rating</strong>: ${product.starRating} / 5
            </p>
        </div>
    `;

    document.querySelector( '#product-name' ).innerHTML = product.name;
    document.querySelector( '#product-details' ).innerHTML = strProductDetails;
}

var id = window.location.search.split( '?' )[1].split('=')[1];

ajax({
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

ajax({
    url: baseUrl + '/products/' + id + '/reviews',
    method: 'get',
    success: function( reviews ) {
        document.querySelector( '.reviews' ).innerHTML = '';
        reviews.forEach( addReviewToList );
    },
    error: function( xhr ) {
        alert( 'Error while fetching reviews' );
        console.log( xhr );
    }
});

const reviewerEl = document.getElementById( 'reviewer-name' );
const ratingEl = document.getElementById( 'reviewer-rating' );
const titleEl = document.getElementById( 'review-title' );
const textEl = document.getElementById( 'review-text' );

function checkValidity() {
    const errors = [];
    
    if( reviewerEl.value === '' ) {
        isValid = false;
        errors.push({
            element: reviewerEl,
            error: 'Your name is required'
        });
    }
    
    if( ratingEl.value === '' ) {
        isValid = false;
        errors.push({
            element: ratingEl,
            error: 'Choose a rating between 1 and 5'
        });
    }
    
    if( titleEl.value === '' ) {
        isValid = false;
        errors.push({
            element: titleEl,
            error: 'Please provide a title for your review'
        });
    }
    
    if( textEl.value.length < 20 ) {
        isValid = false;
        errors.push({
            element: textEl,
            error: 'Please provide a review with a minimum of 20 characters'
        });
    }

    return errors;
}

function showErrors( errors ) {
    document.querySelectorAll( '.invalid-feedback' ).forEach( element => element.innerHTML = '' );
    
    if( errors.length ) {
        errors.forEach( errorItem => {
            errorItem.element.classList.add( 'is-invalid' );
            errorItem.element.parentNode.querySelector( '.invalid-feedback' ).innerHTML += errorItem.error;
        });

        document.querySelector( '.add-review' ).classList.remove( 'needs-validation' );
        document.querySelector( '.add-review' ).classList.add( 'was-validated' );
    }
}

document.querySelector( '.add-review' ).onsubmit = function( event ) {
    event.preventDefault();

    let errors = checkValidity();

    if( errors.length ) {
        showErrors( errors );
        return;
    }

    ajax({
        url: `${baseUrl}/products/${id}/reviews`,
        method: 'POST',
        data: {
            reviewer: reviewerEl.value,
            starRating: ratingEl.value,
            title: titleEl.value,
            text: textEl.value
        },
        success: function( review ) {
            addReviewToList( review );
            $( '.toast-title' ).html( 'Success' );
            $( '.toast-body' ).html( 'Thanks for providing a review. Your review has been added successfully.' );
            $( '.toast' ).toast({
                autohide: true,
                delay: 3000
            });
            $( '.toast' ).toast( 'show' );
            $( '#reviews-tab-link' ).tab( 'show' );
        },
        error: function( xhr ) {
            $( '.toast-title' ).html( 'Error' );
            $( '.toast-body' ).html( 'Some problem occured. Your review has not been added.' );
            $( '.toast' ).toast({
                autohide: true,
                delay: 3000
            });
            $( '.toast' ).toast( 'show' );
            console.log( xhr );
        }
    });
};