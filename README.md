# phash-study


## 実際に試してみた結果
いくつかサンプル画像を用意して試してみる。利用した画像は ```samples``` 以下に置いてある。

### 結果

| No | 画像 | ハッシュ値 | No.0とのハミング距離 |
|----|------|------------|----------------------|
|0 |  | c91cb262775a9800 | - |

### サンプルプログラム

```javascript
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

for(var i=0; i<hash.length; i++) {
  console.log("Hash No." + i + " : " + parseInt(hash[i]).toString(16));
  console.log("File:" + samples[i]);
  console.log("Haming distance (vs hash[0]) = " + pHash.hammingDistance(hash[0], hash[i]));
  console.log("-----");
}

```

```
Hash No.0 : c91cb262775a9800
File:samples/lena.jpg
Haming distance (vs hash[0]) = 0
-----
Hash No.1 : c91cb262775a9800
File:samples/lena-small.jpg
Haming distance (vs hash[0]) = 0
-----
Hash No.2 : c914b262775a9800
File:samples/lena-sepia.jpg
Haming distance (vs hash[0]) = 2
-----
Hash No.3 : c98cb022375ad800
File:samples/lena-mosaic.jpg
Haming distance (vs hash[0]) = 8
-----
Hash No.4 : c9acb866635a9800
File:samples/lena-cut.jpg
Haming distance (vs hash[0]) = 8
-----
Hash No.5 : cb8cba66535a9800
File:samples/lena-cut2.jpg
Haming distance (vs hash[0]) = 8
-----
Hash No.6 : dc69f7330287e000
File:samples/lena-horizonal-flip.jpg
Haming distance (vs hash[0]) = 34
-----
```


