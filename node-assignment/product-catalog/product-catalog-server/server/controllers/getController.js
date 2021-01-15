const getController = ( Model, searchKey ) => ({
    getAll: function( req, res ) {
        const searchValue = req.query.search;

        Model
            .find( searchKey && searchValue ? { [searchKey] : new RegExp( searchValue, 'i' ) } : {} )
            .exec(function( error, docs ) {
                if( error ) {
                    return res.status( 500 ).json({
                        message: error.message
                    });
                }

                return res.status( 200 ).json( docs );
            });
    },
    get: function( req, res ) {
        const id = req.params.id;

        Model
            .findById( id )
            .exec(function( error, doc ) {
                if( error ) {
                    return res.status( 500 ).json({
                        message: error.message
                    });
                }

                return res.status( 200 ).json( doc );
            });
    },
    post: function( req, res ) {
        const doc = req.body;

        Model
            .create( doc, function( error, updatedDoc ) {
                if( error ) {
                    return res.status( 404 ).json({
                        message: error.message
                    });
                }

                return res.status( 200 ).json( updatedDoc );
            });
    },
    put: function( req, res ) {
        const doc = req.body;
        const id = req.params.id;

        Model
            .findByIdAndUpdate( id, doc, { new : true, runValidators: true } )
            .exec(function( error, updatedDoc ) {
                if( error ) {
                    return res.status( 404 ).json({
                        message: error.message
                    });
                }

                return res.status( 200 ).json( updatedDoc );
            });
    },
    delete: function( req, res ) {
        const id = req.params.id;

        Model
            .findByIdAndDelete( id )
            .exec(function( error ) {
                if( error ) {
                    return res.status( 404 ).json({
                        message: error.message
                    });
                }

                return res.status( 204 ).end();
            });
    }
});

module.exports = getController;