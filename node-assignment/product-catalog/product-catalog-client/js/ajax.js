/**
 * Function to execute an Ajax request
 * 
 * @param config {object}
 * config.url {string} URL to which Ajax call is to be made
 * config.method {string} HTTP method to make the call. GET | POST | PUT | DELETE | ...
 * config.success {function} Callback function which is called when HTTP call resulted in successful response
 * config.error {function} Callback function which is called when HTTP call resulted in a failure
 * config.data {object} Data to be sent to the server
 */
function ajax( config ) {
    var url = config.url;
    var method = config.method;
    var success = config.success;
    var error = config.error;
    var data = config.data;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener( 'readystatechange', function( event ) {
        if( xhr.readyState === 4 ) {
            if( xhr.status < 400 ) {
                success( JSON.parse( xhr.responseText ) );
            } else {
                error( xhr );
            }
        }
    });

    xhr.open( method, url, true );
    
    const token = localStorage.getItem( 'token' ) && JSON.parse( localStorage.getItem( 'token' ) );
    if( token ) {
        xhr.setRequestHeader( 'Authorization', `Bearer ${token}` );
    }

    if( method.toLocaleUpperCase() == 'POST' || method.toLocaleUpperCase() == 'PUT' ) {
        xhr.setRequestHeader( 'Content-type', 'application/json' );
        xhr.send( JSON.stringify( data ) );
    } else {
        xhr.send();
    }
}