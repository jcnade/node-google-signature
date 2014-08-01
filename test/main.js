
"use strict";

var should = require('should');

var signature = require('../lib/main');


describe('signature.generate()', function() {

    //
    // signature.generate() - Without Any Argument
    //
    it('without any argument', function(done) {
           signature.generate('','',function(signature){
                signature.should.eql({ signature : '-9sdGxiqbAgyS31ktx-3Y3BpDh0' });
                done();
            });
    });

    //
    // signature.generate() - Without test test
    //
    it('with test test', function(done) {
        signature.generate('test','test',function(signature){
            signature.should.eql({ signature : 'me50L1BneaefWlbvb_XpsaIclo0' });
            done();
        });
    });


});

