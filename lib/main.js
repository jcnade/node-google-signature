//
// by Jean-Charles Nade
// August 2014
//
// MIT Licence

"use strict";

/* Generate a Google Entreprise Signature in Node.js  */


var crypto = require('crypto');
var URLSafeBase64 = require('urlsafe-base64');


/*
 * Generate a google entreprise signature
 *
 * in : a google entreprise private key in url-safe-modified-base64 format
 * in : the query string
 * out : one HMAC SHA1 Hash
 *
 */

function generate(privateKeyInModifiedBase64, theString,callback) {

    // 1)
    // Google Entreprise provide the key is a URL Safe Base64 format,
    // and we need a buffer to use it

    var privateKeyInABuffer = URLSafeBase64.decode(privateKeyInModifiedBase64)

    // 2)
    // We can generate an hash from any string, but it's for the web so it will be in ASCII UTF-8
    // we don't provide a disgest format to get the response in a buffter too

    var hashInABuffer = crypto.createHmac('sha1', privateKeyInABuffer).update(theString).digest()

    // 3)
    // We need to provide the key for the web we should
    // comvert it in a modified Base64 for the web

    var hashEncodedWebSafe = URLSafeBase64.encode(hashInABuffer)

    // Done

    if (callback) {
        callback({ signature : hashEncodedWebSafe });
    }
    else {
        return hashEncodedWebSafe
    }

}

exports.generate = generate;


