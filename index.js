var pHash = require("phash");

var samples = [
  "samples/lena.jpg",
  "samples/lena-small.jpg",
  "samples/lena-sepia.jpg",
  "samples/lena-mosaic.jpg",
  "samples/lena-cut.jpg",
  "samples/lena-cut2.jpg",
  "samples/lena-horizonal-flip.jpg"
];

var hash = [];
samples.forEach(function(sample) {
  hash.push(pHash.imageHashSync(sample));
});


/*
hash.push(pHash.imageHashSync("samples/sky1.jpg"));
hash.push(pHash.imageHashSync("samples/sky2.jpg"));
*/

for(var i=0; i<hash.length; i++) {
  console.log("Hash No." + i + " : " + parseInt(hash[i]).toString(16));
  console.log("File:" + samples[i]);
  console.log("Haming distance (vs hash[0]) = " + pHash.hammingDistance(hash[0], hash[i]));
  console.log("-----");
}


