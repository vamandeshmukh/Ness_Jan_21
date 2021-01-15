const { exec } = require( 'child_process' );
const mongoose = require( 'mongoose' );
const async = require( 'async' );

const DB = {
    drop: function( cb ) {
        exec( 'mongo amazekart --eval "db.dropDatabase()"', cb );
    },
    start: function( cb ) {
        mongoose.connect( 'mongodb://localhost:27017/amazekart',  { useNewUrlParser: true } );

        mongoose.connection.once( 'open', function() {
            console.log( 'connected to lms db' );
            cb( null );
        });

        mongoose.connection.on( 'error', function( error ) {
            console.log( 'error connecting to db : ', error.message );
            cb( error );
        });
    },
    loadModels: function( cb ) {
        require( '../models/Product' );
        require( '../models/Member' );
        require( '../models/Review' );
        cb( null );
    },
    loadData: function( cb ) {
        const Product = mongoose.model( 'Product' );
        const Member = mongoose.model( 'Member' );

        async.parallel(
            [
                done => Product.insertMany( require( './data/products.json' ), done ),
                done => Member.insertMany( require( './data/members.json' ), done )
            ],
            cb
        );
    },
    init: function( cb ) {
        async.series(
            [
                done => this.drop( done ),
                done => this.start( done ),
                done => this.loadModels( done ),
                done => this.loadData( done )
            ],
            cb
        );
    }
}

module.exports = DB;