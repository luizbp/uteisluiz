'use strict';

var exec = require( 'child_process' ).exec;
var pkg = require( '../package.json' );
var uteisluiz = './uteisluiz.js';
require( 'should' );

describe( 'uteisluiz', function() {
  it( 'Should return version of uteisluiz', function( done ) {
    exec( uteisluiz + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.replace( '\n', '' ).should.be.equal( pkg.version );
      done();
    });
  });
  
  it( 'Command "uteisluiz sum 1 2" Should return 3', function( done ) {
  exec( uteisluiz + ' sum 1 2', function( err, stdout, stderr ) {
    if( err ) throw err;
    Number( stdout ).should.be.equal( 3 );
    done();
  });
});
});

