node-google-signature
====================
Generate a HMAC-SHA1 signature for "Google Maps API for Business" in node.js


[![Build Status](https://travis-ci.org/jcnade/node-google-signature.png)](https://travis-ci.org/jcnade/node-google-signature)


Generate a signature from a private key and a string:


     var signature = require('node-google-signature');

     var key = 'abcd'                    // safe for the web modified base64 format
     var string = '/maps/api?blablabka'  // The URL string to sign

     signature.generate(key, string function(hash){
            console.log(hash) // { signature : 'me50L1BneaefWlbvb_XpsaIclo' }
     })



### URL Signing Debugger

https://m4b-url-signer.appspot.com/
