function addAllBeers() {

var ret = [];
ret.push(App.Beer.create({
	name:'Black Sheep Ale',
	pct:4.4,
	desc:'Black and average',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485855_10151283325868745_1357546171_n.jpg?oh=04e606099970881c7822fc44c56629e9&oe=588E895F',
	link:'https://www.facebook.com/photo.php?fbid=10151283325868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg',
	pct:4.0,
	desc:'Standard British pub beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/536444_10151283326338745_1988442948_n.jpg?oh=911a1ffcc467b3702f51036d60c11ead&oe=58C61493',
	link:'https://www.facebook.com/photo.php?fbid=10151283326338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amstel',
	pct:5.0,
	desc:'Easier to drink and stronger than most beers you get in a British pub',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1027_10151283326853745_295569657_n.jpg?oh=b967c92caea42be644105b04bde05736&oe=5887FB5B',
	link:'https://www.facebook.com/photo.php?fbid=10151283326853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Webster\'s Bitter',
	pct:3.5,
	desc:'Shit bloke, shit beer',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65588_10151283327318745_1619592085_n.jpg?oh=1e4102f6b58ef666f0cb439f89e3cb85&oe=58CF9366',
	link:'https://www.facebook.com/photo.php?fbid=10151283327318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hürlimann lager',
	pct:5.0,
	desc:'Rather good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/375874_10151283327863745_1299694311_n.jpg?oh=8273b484e042df6d07a91fdc43c08f2a&oe=58C2459D',
	link:'https://www.facebook.com/photo.php?fbid=10151283327863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kronenbourg',
	pct:5.0,
	desc:'Standard fare',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/60247_10151283328373745_1855333949_n.jpg?oh=2cf08ffd6859f8b3ac87ff11bd1329d4&oe=58C541F3',
	link:'https://www.facebook.com/photo.php?fbid=10151283328373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Veltins',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/32339_10151296241778745_603957055_n.jpg?oh=c24fba9ba759818ebd3e26752dfb8a5e&oe=589129D7',
	link:'https://www.facebook.com/photo.php?fbid=10151296241778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Smith\'s Extra stout ',
	pct:4.5,
	desc:'Like Guinness with a taste of ashtray',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/317875_10151303867498745_1098897913_n.jpg?oh=e540967de30be7912a39e552e6a27202&oe=58D16FE7',
	link:'https://www.facebook.com/photo.php?fbid=10151303867498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ALEXIOS',
	pct:4.0,
	desc:'The beer telling me to go back to the Greek Islands',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16981_10151303885378745_1227406993_n.jpg?oh=c239105593e6d707a3d5c0e973f2e5b0&oe=58C28926',
	link:'https://www.facebook.com/photo.php?fbid=10151303885378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red stripe',
	pct:4.7,
	desc:'Brick lane special',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/378973_10151303950693745_516519003_n.jpg?oh=8665f189ea9c7657d10cf47978dec180&oe=58C00A56',
	link:'https://www.facebook.com/photo.php?fbid=10151303950693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'1892',
	pct:3.3,
	desc:'Warm, flat and nutty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/3705_10151315682573745_1414196769_n.jpg?oh=e2e25554f62cba66861d120516443cbb&oe=58BDDE1E',
	link:'https://www.facebook.com/photo.php?fbid=10151315682573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra',
	pct:4.8,
	desc:'Indian restaurant special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/557801_10151315682973745_793850180_n.jpg?oh=66edcffe6f0ca669c3ebc1e0c95412d2&oe=58C8DF40',
	link:'https://www.facebook.com/photo.php?fbid=10151315682973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king ipa',
	pct:3.6,
	desc:'Just tastes a bit wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/189043_10151315683658745_1443395751_n.jpg?oh=8dedcae912e825ab29b3c59aeb4cbdc7&oe=58CCDFB3',
	link:'https://www.facebook.com/photo.php?fbid=10151315683658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grolsch',
	pct:5.0,
	desc:'Crisp, refreshing, easily overlooked',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/60758_10151315684663745_854245528_n.jpg?oh=fbb0303212750d687e98e0db7e18d12d&oe=588A39A4',
	link:'https://www.facebook.com/photo.php?fbid=10151315684663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noble',
	pct:5.0,
	desc:'A confusing bunch of flavours',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/546983_10151331650653745_1841706536_n.jpg?oh=41e72d5b40532a5058194b196cff813c&oe=58869BAC',
	link:'https://www.facebook.com/photo.php?fbid=10151331650653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yankee',
	pct:4.3,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/550717_10151331657283745_2008475143_n.jpg?oh=0f103c819305671112c0d71eb2a4507a&oe=58CE9F92',
	link:'https://www.facebook.com/photo.php?fbid=10151331657283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Dog\'s Bollocks',
	pct:5.9,
	desc:'Tastes just like the name',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15111_10151331658713745_2003438525_n.jpg?oh=ce80d92659b63eaa0878ad986156f776&oe=588F4812',
	link:'https://www.facebook.com/photo.php?fbid=10151331658713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double maxim',
	pct:4.7,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/378563_10151331661023745_1836111728_n.jpg?oh=bc31f75e0900b7763c9c39dd4e11f723&oe=5888CCB4',
	link:'https://www.facebook.com/photo.php?fbid=10151331661023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Black',
	pct:4.7,
	desc:'',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/293855_10151331663163745_2099861357_n.jpg?oh=9ce263556a35e9044e91d604b07e01c3&oe=58CAD9C7',
	link:'https://www.facebook.com/photo.php?fbid=10151331663163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Rev. James',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542989_10151331668478745_1709226964_n.jpg?oh=30f16da01c1a829ae50b9df33740a9ff&oe=588F2F7E',
	link:'https://www.facebook.com/photo.php?fbid=10151331668478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double Dragon',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/148410_10151356728003745_1112766365_n.jpg?oh=e386cbcf4d5f409d4d30a4d339b7c7d4&oe=58889339',
	link:'https://www.facebook.com/photo.php?fbid=10151356728003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pride of Oxford',
	pct:5.0,
	desc:'Just a very average beverage',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/558943_10151356728198745_2042204432_n.jpg?oh=06abb644a7141a1105b7fbf7f1978a79&oe=58C849A2',
	link:'https://www.facebook.com/photo.php?fbid=10151356728198745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bishops finger',
	pct:5.4,
	desc:'Written on the back: At 5.4% It\'s near the knuckle. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533497_10151356728563745_544345125_n.jpg?oh=854f6727aaaba7a2d0a0eb8e753eb149&oe=5887DA91',
	link:'https://www.facebook.com/photo.php?fbid=10151356728563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Dark Ale',
	pct:4.5,
	desc:'Flavoursome',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521606_10151396303973745_830089732_n.jpg?oh=f984ed75a6a38992ab91f2fbeeb3cb22&oe=58922A76',
	link:'https://www.facebook.com/photo.php?fbid=10151396303973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Golden Ale',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480275_10151356728773745_1268031446_n.jpg?oh=28c0a39bcc5864e35a083db4b4b0ac50&oe=588EABD5',
	link:'https://www.facebook.com/photo.php?fbid=10151356728773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Stout',
	pct:4.5,
	desc:'Very smooth and mild with a hint of chocolate',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/16733_10151396304708745_66219487_n.jpg?oh=7fb99189af9025f622bb5524911103c5&oe=58D3CFA5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tesco Lager',
	pct:4,
	desc:'You get what you pay for',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530426_10151368077248745_1651993820_n.jpg?oh=24d893f4dff7e12196df271eb920209a&oe=588FC2A0',
	link:'https://www.facebook.com/photo.php?fbid=10151368077248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Abbey Beer',
	pct:6.5,
	desc:'Cool bottle. Terrible taste',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/424785_10151368077728745_484320810_n.jpg?oh=6d1391e35280e3f8215e32f86720581d&oe=588A8A7F',
	link:'https://www.facebook.com/photo.php?fbid=10151368077728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S Belgian Lager',
	pct:5.0,
	desc:'Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734776_10151461674018745_617552379_n.jpg?oh=fb1363ef4f5eb5c3b601a7beeb140765&oe=58CF1788',
	link:'https://www.facebook.com/photo.php?fbid=10151461674018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S French Lager',
	pct:4,
	desc:'Not as good as the Belgian one',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486557_10151563840963745_1674492557_n.jpg?oh=9a4a769fca641aa3fdc1d65c31a12c51&oe=58BFE281',
	link:'https://www.facebook.com/photo.php?fbid=10151563840963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennant\'s super',
	pct:9.0,
	desc:'If you\'re really drunk but want to be mike Stuart drunk then this is the beer for you',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/524743_10151649176508745_61534800_n.jpg?oh=45c772d347ceb5c68b520a929492dbc8&oe=58CEFE30',
	link:'https://www.facebook.com/photo.php?fbid=10151649176508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kestrel Super lager',
	pct:9.0,
	desc:'Must be consumer quickly. Before the taste sets in',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16679_10151428525733745_2106487431_n.jpg?oh=50c1f6bac439ee0dcc4e644ca93a6471&oe=58C9F1AA',
	link:'https://www.facebook.com/photo.php?fbid=10151428525733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg special',
	pct:9.0,
	desc:'Tennants super for the discerning bum',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/429525_10151356729088745_1307200238_n.jpg?oh=d258816e5bec8905e3ea441ce4f1b675&oe=58BF7412',
	link:'https://www.facebook.com/photo.php?fbid=10151356729088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crest Super',
	pct:10,
	desc:'As much as I like being able to drink half a bottle of wine in a single can of beer, this is just foul',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923052_10151649178723745_1627305958_n.jpg?oh=3622403b55c03fa80a7d7089a9dc8d86&oe=58CCF114',
	link:'https://www.facebook.com/photo.php?fbid=10151649178723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old empire',
	pct:5.7,
	desc:'Not at all an ipa ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/73511_10151356728858745_1899006793_n.jpg?oh=1014fc9a3be6b6ca0de875c355c88e1b&oe=588C8020',
	link:'https://www.facebook.com/photo.php?fbid=10151356728858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wainwrights',
	pct:4.1,
	desc:'Not too bad at all',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/401229_10151356729468745_228573429_n.jpg?oh=58fb9f696bb03450b3c60fb8fb88958a&oe=58D54568',
	link:'https://www.facebook.com/photo.php?fbid=10151356729468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hobgoblin',
	pct:5.2,
	desc:'An average ale',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484314_10151368077318745_996314221_n.jpg?oh=85ae8f4bf12577002c1982f08d28c5d7&oe=588C650A',
	link:'https://www.facebook.com/photo.php?fbid=10151368077318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'King goblin',
	pct:6.6,
	desc:'Better than the standard hobgoblin',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1656157_10152293086848745_1506561898_n.jpg?oh=62a202d1977c0d5ce5f7a1eaab2ab4fe&oe=58C00C8B',
	link:'https://www.facebook.com/photo.php?fbid=10152293086848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocking Rudolph',
	pct:4.2,
	desc:'Makes me feel all Christmasy',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/481704_10151368077713745_2078288487_n.jpg?oh=1c4d108d7f04b71287e673d2f54665e8&oe=588E6690',
	link:'https://www.facebook.com/photo.php?fbid=10151368077713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hopping Hare',
	pct:4.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/399346_10151380245588745_647361323_n.jpg?oh=0bcade075a5cd4725915dd0e6ca7669f&oe=588C38F3',
	link:'https://www.facebook.com/photo.php?fbid=10151380245588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Champion',
	pct:5.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/537673_10151380245638745_991276182_n.jpg?oh=f005799465dd9f5f875db86e390e32ab&oe=588DC59D',
	link:'https://www.facebook.com/photo.php?fbid=10151380245638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Glory',
	pct:4.5,
	desc:'Peach flavoured beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9160_10151380243323745_1001869256_n.jpg?oh=4ab0a1a5eb0256a07cac0dd3b0a844e3&oe=58C5E2AC',
	link:'https://www.facebook.com/photo.php?fbid=10151380243323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fursty Ferret',
	pct:4.4,
	desc:'The name is better than the taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/224528_10151303867818745_1700962680_n.jpg?oh=4de1647c8a343d8a9e573121fce91d39&oe=58BF698E',
	link:'https://www.facebook.com/photo.php?fbid=10151303867818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Tangle Foot',
	pct:5,
	desc:'A standard beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/379340_10151461671708745_1194104860_n.jpg?oh=c0f8a4f254e92bb1b2880a0d10a1a2be&oe=58886544',
	link:'https://www.facebook.com/photo.php?fbid=10151461671708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Firkin fox',
	pct:4.3,
	desc:'Firkin terrible',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542858_10151563945898745_1345565555_n.jpg?oh=08096f91d8c7c660c4d4fc9211584d5b&oe=58C6035F',
	link:'https://www.facebook.com/photo.php?fbid=10151563945898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Poacher\'s choice',
	pct:5.7,
	desc:'You can really taste the liquorice. Not sure why someone put liquorice in beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555262_10151461672288745_1320726068_n.jpg?oh=6329ab917b6be39796304e912127f599&oe=58D388F0',
	link:'https://www.facebook.com/photo.php?fbid=10151461672288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger blandford flyer',
	pct:5.2,
	desc:'Mild ginger',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74705_10151798802528745_954132420_n.jpg?oh=c93ec1a5461fa58d9fb522720a427faf&oe=589004B0',
	link:'https://www.facebook.com/photo.php?fbid=10151798802528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger First Gold',
	pct:4,
	desc:'Very hoppy. Too hoppy',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/995127_10151798803233745_1165661191_n.jpg?oh=3d11314a310a56446a310a1d98905787&oe=588DC77A',
	link:'https://www.facebook.com/photo.php?fbid=10151798803233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot Ale',
	pct:5.0,
	desc:'A nice solid ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261583_10151368077943745_1842191344_n.jpg?oh=e97145fa823dbdd0d5757c011463b4c3&oe=58BE9C1D',
	link:'https://www.facebook.com/photo.php?fbid=10151368077943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bass',
	pct:5.0,
	desc:'The smoothness of Guinness with a lager taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/18911_10151368078368745_1781250452_n.jpg?oh=772ade73e1d7921c02f4c38d5a8ed08d&oe=58882D5D',
	link:'https://www.facebook.com/photo.php?fbid=10151368078368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lech',
	pct:5.0,
	desc:'Just plain average',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/61451_10151380245533745_1375457790_n.jpg?oh=4698c42b8c61f219e2174ffc21706f07&oe=58D33E68',
	link:'https://www.facebook.com/photo.php?fbid=10151380245533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tatra',
	pct:6.0,
	desc:'Surprisingly good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/406821_10151315683338745_1515210431_n.jpg?oh=f0e6196da128618a3189c177f6b49774&oe=58C32DB0',
	link:'https://www.facebook.com/photo.php?fbid=10151315683338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zywiec',
	pct:5.6,
	desc:'Rather high on the list of polish beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482554_10151563946353745_976172500_n.jpg?oh=875c09ffaf19348083c6dd0595eeccb4&oe=58D0D004',
	link:'https://www.facebook.com/photo.php?fbid=10151563946353745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Debowe mocne',
	pct:7.0,
	desc:'A nice sweetness. Bogaty smak!',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923169_10151649174868745_1394415362_n.jpg?oh=9dd673eede70420dc547aa37d13109ad&oe=58CCBD6E',
	link:'https://www.facebook.com/photo.php?fbid=10151649174868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Warka',
	pct:5.7,
	desc:'Standard polish garbage',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522510_10151563946283745_279086474_n.jpg?oh=292d13bb20c96bf6ba0d7c4249af7fa9&oe=5895636D',
	link:'https://www.facebook.com/photo.php?fbid=10151563946283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wojak mocny',
	pct:7.0,
	desc:'Smooth and mild',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/321669_10151649177583745_849913582_n.jpg?oh=5fb0c7fb1ec2c757e7cd7cef06b0b5fe&oe=58CFCAEB',
	link:'https://www.facebook.com/photo.php?fbid=10151649177583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tyskie klasyczne',
	pct:5.0,
	desc:'The best polish beer I\'ve tasted',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1235025_10151888670293745_2077557673_n.jpg?oh=0bce5e274a8e27b8cae6036af442b523&oe=58D2EFD2',
	link:'https://www.facebook.com/photo.php?fbid=10151888670293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Whistable Bay organic Ale',
	pct:4.5,
	desc:'Leaves a horrible bitter after taste',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/282837_10151380245908745_185055294_n.jpg?oh=e0c49fe50e7f6f013afe4b53bb297c87&oe=5893EA49',
	link:'https://www.facebook.com/photo.php?fbid=10151380245908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Lager',
	pct:4.5,
	desc:'A decent Lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/547553_10151396304058745_42264123_n.jpg?oh=fc29a82e865380b88ab9468e29b1c013&oe=58CBD3DD',
	link:'https://www.facebook.com/photo.php?fbid=10151396304058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Isle of Arran blonde',
	pct:5.0,
	desc:'No idea why anyone would buy this twice',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/29588_10151396304143745_1361559358_n.jpg?oh=63735ddce0f2ade50fe0a01f96b01dcd&oe=58D14EE1',
	link:'https://www.facebook.com/photo.php?fbid=10151396304143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Edmunds',
	pct:4.5,
	desc:'A little bit too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521840_10151396304393745_1554011177_n.jpg?oh=d971227e59615be4ee15aa931607ceb0&oe=58D24392',
	link:'https://www.facebook.com/photo.php?fbid=10151396304393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs Back TEA',
	pct:4.2,
	desc:'Only has a hint of tea',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/282869_10151396304613745_908615539_n.jpg?oh=8780691c6a90ba01a3eaa6c9025194f2&oe=58C6EA82',
	link:'https://www.facebook.com/photo.php?fbid=10151396304613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holsten Pils',
	pct:5.0,
	desc:'Ok when it\'s really cold, otherwise very average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581508_10151396304968745_547445318_n.jpg?oh=88a5458bd73ebc83c52271a5bac47848&oe=58C4476C',
	link:'https://www.facebook.com/photo.php?fbid=10151396304968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Thumper',
	pct:5.6,
	desc:'Gave my taste buds a thumping',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62117_10151396305243745_1878047628_n.jpg?oh=68e7e7bb329f8f506591da4252b0a575&oe=5894BC6C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pacifico clara',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/382796_10151396306023745_1333802839_n.jpg?oh=253995079778cda07e1e8e932b6dcbe5&oe=5891006B',
	link:'https://www.facebook.com/photo.php?fbid=10151396306023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Christmas cracker',
	pct:4.3,
	desc:'Bitter and nutty',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/408606_10151428525743745_1997517717_n.jpg?oh=dc3fbfb45be6b6ce4f8b4f90e934ded5&oe=588E493F',
	link:'https://www.facebook.com/photo.php?fbid=10151428525743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deuchars IPA',
	pct:4.4,
	desc:'Gets better after a few sips',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603151_10151428525283745_670825446_n.jpg?oh=6092be1bd1201a3110504a387cc3f9c8&oe=58C7B8B0',
	link:'https://www.facebook.com/photo.php?fbid=10151428525283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser',
	pct:4.8,
	desc:'Beer flavoured water',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12558_10151356728378745_471931293_n.jpg?oh=18c00eafa2de7fb77a7951cfc29f6dc7&oe=58D1C919',
	link:'https://www.facebook.com/photo.php?fbid=10151356728378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada pale ale',
	pct:5.6,
	desc:'A quality strong flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/23377_10151428526143745_898774029_n.jpg?oh=4d3a40ea2ca52de0f47489c44d17b56c&oe=58882A1D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black chocolate stout',
	pct:10.0,
	desc:'Be ready for a kick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1001078_10151798818383745_544568245_n.jpg?oh=ae56b6d3e7a514e6a817e10f79b85c09&oe=58C1078F',
	link:'https://www.facebook.com/photo.php?fbid=10151798818383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Miller',
	pct:4.66,
	desc:'Good for an American beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603011_10151461681363745_1924966324_n.jpg?oh=59f33cc6f2901c8abc75c64b8868c308&oe=58CA8378',
	link:'https://www.facebook.com/photo.php?fbid=10151461681363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blue moon',
	pct:5.4,
	desc:'Tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603175_10151428525338745_1084934789_n.jpg?oh=d87209f0689b976fb8b35ec4de6e1735&oe=58CE9DE5',
	link:'https://www.facebook.com/photo.php?fbid=10151428525338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coors Light',
	pct:4.3,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/3398_10151428533958745_102290057_n.jpg?oh=df91503eac3a5b5cf9384e1d1c546ec8&oe=588CFCC4',
	link:'https://www.facebook.com/photo.php?fbid=10151428533958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red pig ale',
	pct:5.0,
	desc:'Tastes more like an american beer than a mexican one',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/67811_10151368077158745_1890584013_n.jpg?oh=c782899f4703acd2390cf9dc7baf5492&oe=588E57C3',
	link:'https://www.facebook.com/photo.php?fbid=10151368077158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lemongrass Saison',
	pct:5.0,
	desc:'A wheat beer taste but a little more fresh',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/534376_10152147730388745_345071070_n.jpg?oh=ef1c2b10400348e5e03d43fb188b5a96&oe=5892BFCD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coconut porter',
	pct:5.7,
	desc:'Can’t really taste the coconut and seems to curdle the stomach. Could just be fighting with the other beers. Or the fried rice',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1479322_10152147730723745_835775935_n.jpg?oh=53bee8eb00922f2d250babd5bc009096&oe=58CAED07',
	link:'https://www.facebook.com/photo.php?fbid=10152147730723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed Root brew',
	pct:4,
	desc:'Tastes like a ginger beer. But it\'s not',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/184446_10151428525538745_507755493_n.jpg?oh=9f77f3b0a6edd1e26506347f461a68a6&oe=58CAEF06',
	link:'https://www.facebook.com/photo.php?fbid=10151428525538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed',
	pct:4,
	desc:'Mike would drink this. It\'s not beer',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/409508_10151396305103745_1792863383_n.jpg?oh=d88878dc77997037f035ce6ea4f40469&oe=58D05BCF',
	link:'https://www.facebook.com/photo.php?fbid=10151396305103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Guinness',
	pct:4.3,
	desc:'Cannot be rated',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/230829_10151296241408745_792356720_n.jpg?oh=60f16983927c56b8bb9be7dba4e2019b&oe=5890ACC4',
	link:'https://www.facebook.com/photo.php?fbid=10151296241408745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gallway hooker',
	pct:4.3,
	desc:'A little bit off',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542152_10151428526223745_595487151_n.jpg?oh=a0b348cb6a3745fbe37032ab4a5d23fa&oe=58D52A9D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harp',
	pct:5,
	desc:'Described as harpic toilet cleaner but has a much nicer taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/426781_10151428526053745_1807147542_n.jpg?oh=5d95dc8124495e17a487010be9bb77af&oe=5890B3AF',
	link:'https://www.facebook.com/photo.php?fbid=10151428526053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Five lamps',
	pct:4.2,
	desc:'Bad to start, bad to finish',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486257_10151428526493745_65566473_n.jpg?oh=b6209e38ebd7ea798678aa04d8631181&oe=58BE6AFD',
	link:'https://www.facebook.com/photo.php?fbid=10151428526493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carrig',
	pct:4.3,
	desc:'An easy bev',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238989_10151888668133745_55669060_n.jpg?oh=251e1a1af77a89bc552a4dad4a0134c9&oe=588966E2',
	link:'https://www.facebook.com/photo.php?fbid=10151888668133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kilkenny',
	pct:4.3,
	desc:'A little too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603305_10151428526818745_310997790_n.jpg?oh=cdf11630ebf730772d7a6285abb17de1&oe=5886EC47',
	link:'https://www.facebook.com/photo.php?fbid=10151428526818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Smithwicks',
	pct:4.5,
	desc:'A smooth ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14944_10151428531923745_1130605177_n.jpg?oh=89f60826590d2e749d4b91c4e27e85ca&oe=58CC745F',
	link:'https://www.facebook.com/photo.php?fbid=10151428531923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caledonia smooth',
	pct:4.0,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150976_10151428531978745_744791164_n.jpg?oh=5e60d8eeba2b9fa9bbb10bf179090e3c&oe=58C1B431',
	link:'https://www.facebook.com/photo.php?fbid=10151428531978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'hara\'s Irish pale ale',
	pct:5.2,
	desc:'Kind of a mix between an IPA and a pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233480_10151888666808745_111746617_n.jpg?oh=67dfba01663481f4eca7823b561a02a9&oe=5888F1FC',
	link:'https://www.facebook.com/photo.php?fbid=10151888666808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'haras Irish red',
	pct:4.3,
	desc:'Maybe the worst beer ever',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150601_10151428532178745_1335701826_n.jpg?oh=32c61be4e72f59dfaabc8d15bd9fb0a9&oe=58CCFA6C',
	link:'https://www.facebook.com/photo.php?fbid=10151428532178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cyclone IPA',
	pct:7.0,
	desc:'Nice but way too heavy right now',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173698_10151888668208745_564925063_n.jpg?oh=db482c88847019ac6ab787a63af14917&oe=5893C2CC',
	link:'https://www.facebook.com/photo.php?fbid=10151888668208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brahma',
	pct:4.3,
	desc:'Easy bevving',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312335_10151428526733745_366386591_n.jpg?oh=9d85a03f39d4844ebd5a140e6d8f3d7b&oe=588E829F',
	link:'https://www.facebook.com/photo.php?fbid=10151428526733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Hardcore IPA',
	pct:9.2,
	desc:'A lot of flavour. Couldn\'t handle many',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537412_10151428532378745_1195699464_n.jpg?oh=6a39c99fe1cd1abd50931410a6f1fed5&oe=58CA2B3A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Punk IPA',
	pct:5.6,
	desc:'Quality IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954631_10151694534143745_666636865_n.jpg?oh=82f82aa83504e943fb51c9e1fd80b3d8&oe=588AACB6',
	link:'https://www.facebook.com/photo.php?fbid=10151694534143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Cocoa Psycho',
	pct:10,
	desc:'This beer won\'t stop punching me in the face',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1236502_10151929072183745_392721452_n.jpg?oh=c40f07b952016713118190bdf36423ab&oe=588BCE63',
	link:'https://www.facebook.com/photo.php?fbid=10151929072183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog 5am saint',
	pct:5,
	desc:'Quality amber',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970089_10151694532248745_1860752860_n.jpg?oh=d742cfff513febc47db462cccb859ed9&oe=58875305',
	link:'https://www.facebook.com/photo.php?fbid=10151694532248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Club',
	pct:3.8,
	desc:'A beer for anyone',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1003490_10151798796948745_2041837456_n.jpg?oh=9512d4248874acc731e4852be540dc7e&oe=588CEDD4',
	link:'https://www.facebook.com/photo.php?fbid=10151798796948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crew IPA',
	pct:6.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/63719_10151428532313745_813090694_n.jpg?oh=856ac721fcd4efea549288db55101114&oe=58BFDE8B',
	link:'https://www.facebook.com/photo.php?fbid=10151428532313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennents',
	pct:4.0,
	desc:'The standard in Scotland',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530689_10151428532548745_22366953_n.jpg?oh=93b1ae3d77489ff12f23366456a096c3&oe=58C8019A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trouble brewing golden ale',
	pct:4.3,
	desc:'Very malty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/397706_10151428533088745_22640063_n.jpg?oh=c3a0b4671d2a3bf9ba391210f5058027&oe=58C49222',
	link:'https://www.facebook.com/photo.php?fbid=10151428533088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wold top against the grain',
	pct:4.5,
	desc:'Too harsh',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555458_10151428533018745_1322698428_n.jpg?oh=1ab2d6600a499080acc5ee594bdc85d9&oe=58C2E88C',
	link:'https://www.facebook.com/photo.php?fbid=10151428533018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ginger beard',
	pct:4.2,
	desc:'A tasty ginger beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/184456_10151428533288745_183483934_n.jpg?oh=3453cf5d52cfa114a09b07e2d827c770&oe=58D15179',
	link:'https://www.facebook.com/photo.php?fbid=10151428533288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells banana bread beer',
	pct:5.2,
	desc:'You can really taste the banana',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/68598_10151428533853745_1576633844_n.jpg?oh=20d72379b3c1c387134115e0fd8e7828&oe=58C09B81',
	link:'https://www.facebook.com/photo.php?fbid=10151428533853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'KEO',
	pct:4.5,
	desc:'Takes a bit to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12605_10151428533818745_35949284_n.jpg?oh=ae13eca638d68a7f81a125810f595de6&oe=58D2DF4D',
	link:'https://www.facebook.com/photo.php?fbid=10151428533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mongoose',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/429123_10151428534248745_2064241641_n.jpg?oh=cde1e2ef27802fa583040f9ffbc46874&oe=58C860C1',
	link:'https://www.facebook.com/photo.php?fbid=10151428534248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flack Catcher',
	pct:4.4,
	desc:'Average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/19223_10151428534118745_318984545_n.jpg?oh=dabb6f8316b02230a4426e20598f9dda&oe=588D1375',
	link:'https://www.facebook.com/photo.php?fbid=10151428534118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedigree',
	pct:5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530655_10151461672258745_1106668421_n.jpg?oh=640bc8d9721dd65b647166824d7e467f&oe=58CDA9B4',
	link:'https://www.facebook.com/photo.php?fbid=10151461672258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fagins',
	pct:4.1,
	desc:'Gay',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/19212_10151461672388745_962581922_n.jpg?oh=54fb545ef8eef826be14110abcf7b826&oe=5891611B',
	link:'https://www.facebook.com/photo.php?fbid=10151461672388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London Pride',
	pct:4.1,
	desc:'The standard London Ale to measure against',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734258_10151461672898745_380826809_n.jpg?oh=f816cbd6d60340a60719972db0b83c8f&oe=58CDF579',
	link:'https://www.facebook.com/photo.php?fbid=10151461672898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kent\'s best',
	pct:4.1,
	desc:'Would hate to see the worst',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/539055_10151461672828745_520276173_n.jpg?oh=8d2d693172062bb0d4178adfcfd71868&oe=5888DC4A',
	link:'https://www.facebook.com/photo.php?fbid=10151461672828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Peroni',
	pct:5.1,
	desc:'Italian standard',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/37080_10151396305588745_415450314_n.jpg?oh=2008952a7c1f31fc92c6b56828889489&oe=58BEB154',
	link:'https://www.facebook.com/photo.php?fbid=10151396305588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Poretti',
	pct:5.4,
	desc:'Italian tasting',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/554278_10151461673508745_1407613949_n.jpg?oh=c7c61aa60354f1c3889dae50b3e83970&oe=5886AFDD',
	link:'https://www.facebook.com/photo.php?fbid=10151461673508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra moretti',
	pct:4.6,
	desc:'Nice and tasty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1187105_10151860442623745_1479905492_n.jpg?oh=b06c0bd5dacdd2ad0996bc5db1b2ddad&oe=58C0DADB',
	link:'https://www.facebook.com/photo.php?fbid=10151860442623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tetley smooth',
	pct:3.7,
	desc:'I much prefer this to tea',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/394796_10151461673368745_1651974167_n.jpg?oh=8b0605baf943183eff88b6da76ebc69e&oe=58BE6195',
	link:'https://www.facebook.com/photo.php?fbid=10151461673368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Frost',
	pct:4.5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/32180_10151461673683745_1033363252_n.jpg?oh=3be80ff9b05a1bcdf1a0f34d4a370620&oe=58904A71',
	link:'https://www.facebook.com/photo.php?fbid=10151461673683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staffordshire IPA',
	pct:5.5,
	desc:'A mild IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/535438_10151461674053745_360684095_n.jpg?oh=2149ea84403d9f0aa46c32a04cbcb44a&oe=58C104C7',
	link:'https://www.facebook.com/photo.php?fbid=10151461674053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John smiths extra smooth',
	pct:3.8,
	desc:'What it lacks in alcohol it makes up in foulness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/598767_10151461673913745_877248330_n.jpg?oh=d3824681f3694b850704b544f883cc25&oe=588ADB64',
	link:'https://www.facebook.com/photo.php?fbid=10151461673913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Pale Ale',
	pct:4.5,
	desc:'Tasty',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549950_10151461681523745_1486815544_n.jpg?oh=ff5dde0454b640cd79b7dd99c6300e3f&oe=58D1C3C6',
	link:'https://www.facebook.com/photo.php?fbid=10151461681523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers sparkling ale',
	pct:5.8,
	desc:'Not as good as the green, but has more kick',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/528845_10151602295348745_1649172027_n.jpg?oh=4fb9bd810ddfb1e9edd094b5e095b345&oe=589015D2',
	link:'https://www.facebook.com/photo.php?fbid=10151602295348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers extra stout',
	pct:6.3,
	desc:'Twice the stout taste of a regular stout',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484705_10151602292338745_274952911_n.jpg?oh=ea08f6d1fa4953c179147950d95e1750&oe=58C3FBB3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Lager',
	pct:4.8,
	desc:'Pretty average, but you get used to it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/421878_10151563839458745_1540530586_n.jpg?oh=9bb55b0e4e2e7e46e50ebe3f7170a036&oe=58D42EA3',
	link:'https://www.facebook.com/photo.php?fbid=10151563839458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Resch\'s',
	pct:5.0,
	desc:'A bit harsh',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484746_10151563946993745_129350151_n.jpg?oh=1b1d427b65447b49ae8765898cf94b6d&oe=58C3DDDC',
	link:'https://www.facebook.com/photo.php?fbid=10151563946993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little Creatures Pale Ale',
	pct:5.2,
	desc:'',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/543882_10151461681178745_1285845134_n.jpg?oh=4b52bb8051895e06eded210362061184&oe=58921FE5',
	link:'https://www.facebook.com/photo.php?fbid=10151461681178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boags',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734606_10151461683093745_1782530484_n.jpg?oh=ace7208ff4bbe84f1fa039f43902e7bc&oe=58924933',
	link:'https://www.facebook.com/photo.php?fbid=10151461683093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys Extra Dry',
	pct:4.6,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/543796_10151461681748745_852056112_n.jpg?oh=edef2880047379a6f46baa98016af984&oe=58C7AFA0',
	link:'https://www.facebook.com/photo.php?fbid=10151461681748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Victoria Bitter',
	pct:4.9,
	desc:'You either love it or hate it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521589_10151461681978745_514499327_n.jpg?oh=3ff9a7c62dfd2b73d7d68f621020d309&oe=58D00F98',
	link:'https://www.facebook.com/photo.php?fbid=10151461681978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown Lager',
	pct:4.9,
	desc:'A rich man\'s VB',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537401_10151461682783745_431486220_n.jpg?oh=c53cbc13b62ad45d1ac5d772bc4c2dd5&oe=58CC6CF6',
	link:'https://www.facebook.com/photo.php?fbid=10151461682783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys old',
	pct:4.4,
	desc:'Not a stout, not a lager. Some sort of strange crossbreed',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644421_10151563947083745_12453002_n.jpg?oh=1b59e5b4d14f4814bf60b8a098ad6366&oe=58C8D530',
	link:'https://www.facebook.com/photo.php?fbid=10151563947083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys New',
	pct:4.6,
	desc:'Not sure why I used to drink this all the time',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74164_10151461683923745_699202545_n.jpg?oh=67c743011b593ce2de869ea06f863a11&oe=58CD741B',
	link:'https://www.facebook.com/photo.php?fbid=10151461683923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:4.6,
	desc:'Decent',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602093_10151563947313745_1098411203_n.jpg?oh=6f75cd6baeb5668bbc3c7e08316889cf&oe=5888D879',
	link:'https://www.facebook.com/photo.php?fbid=10151563947313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Platinum blonde',
	pct:4.6,
	desc:'Meh',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/576008_10151563947183745_1748647687_n.jpg?oh=693dfcd0bb08d3ed1ba45eebdfca310d&oe=58CA8780',
	link:'https://www.facebook.com/photo.php?fbid=10151563947183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Three sheets Pale Ale',
	pct:4.9,
	desc:'A proper pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/431581_10151563947388745_1746265085_n.jpg?oh=2cac645f46a1b4e69349b54f01533079&oe=588D7360',
	link:'https://www.facebook.com/photo.php?fbid=10151563947388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hite',
	pct:4.5,
	desc:'Strange can, crisp taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530584_10151461684393745_825973740_n.jpg?oh=51897207c765cc0f4475451fe9a0734f&oe=589480C5',
	link:'https://www.facebook.com/photo.php?fbid=10151461684393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Helier',
	pct:5.0,
	desc:'Actually a cider, but it has a great name',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480687_10151461682768745_502482125_n.jpg?oh=0603cbb0225c8e1019bd5fb79085501b&oe=58CCD0E2',
	link:'https://www.facebook.com/photo.php?fbid=10151461682768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra King',
	pct:7.5,
	desc:'Nicer, stronger and bigger than it\'s crappy cousin. That\'s why it\'s the king',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374324_10151461684623745_844347532_n.jpg?oh=74734b35b595bd1d4e436273ac16cf65&oe=58CEC234',
	link:'https://www.facebook.com/photo.php?fbid=10151461684623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kingfisher',
	pct:4.8,
	desc:'The better Indian beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733981_10151563846938745_1548720674_n.jpg?oh=9415b40fe6d1d7942a11f353b1fa36d5&oe=58958917',
	link:'https://www.facebook.com/photo.php?fbid=10151563846938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cambridgeshire Golden Ale',
	pct:4.2,
	desc:'Plain',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/541370_10151563840993745_1315027570_n.jpg?oh=df042c507fcab8683785385412ce431f&oe=5895D4B2',
	link:'https://www.facebook.com/photo.php?fbid=10151563840993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'March of the Penguins',
	pct:4.9,
	desc:'An average stout',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/75028_10151563841203745_1533936884_n.jpg?oh=41ba5fd3bbe0007d837507a7a5b5313f&oe=58C696A9',
	link:'https://www.facebook.com/photo.php?fbid=10151563841203745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nils Oscar God Lager',
	pct:5.3,
	desc:'Not too bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485993_10151563842368745_684144336_n.jpg?oh=fbf3a67a656d20178f12f4ec60ef7bb9&oe=58C581D8',
	link:'https://www.facebook.com/photo.php?fbid=10151563842368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Star',
	pct:5.1,
	desc:'Smooth and cheap',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/601342_10151563843928745_511866900_n.jpg?oh=621a11b48f2837728aa4d40e031dc0fc&oe=58CFEBDD',
	link:'https://www.facebook.com/photo.php?fbid=10151563843928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Worthingtons White Shield',
	pct:5.6,
	desc:'Flavoursome',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/380993_10151563843448745_1342021225_n.jpg?oh=ef3332406793dbbac240d791e8b896e2&oe=58CBFA09',
	link:'https://www.facebook.com/photo.php?fbid=10151563843448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'British Bulldog',
	pct:4.3,
	desc:'Not bad for a bitter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/479882_10151563844403745_1566533959_n.jpg?oh=a61957d40991ee2c0b00640b68b4d954&oe=58C11239',
	link:'https://www.facebook.com/photo.php?fbid=10151563844403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Newcastle Brown Ale',
	pct:4.7,
	desc:'Looks kind of like the runoff from some industrial process. Really makes me wonder what I\'m drinking. Amazingly it doesn\'t taste that bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644361_10151563845228745_821469901_n.jpg?oh=20f888b92eeb93d5d770f0de215b70d1&oe=58BE89B6',
	link:'https://www.facebook.com/photo.php?fbid=10151563845228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrooks pale ale',
	pct:4.5,
	desc:'Another sock flavoured beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/545225_10151860439253745_1854856255_n.jpg?oh=75e3b9d9ee0e66e60ae58cd6d32feb78&oe=589026FB',
	link:'https://www.facebook.com/photo.php?fbid=10151860439253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrook\'s Brewery Junction',
	pct:4.5,
	desc:'Not sure what taste they\'re going for here… Maybe socks',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482628_10151563846178745_1536949417_n.jpg?oh=ce95ae0ef19d9c98d81c93dfde09df08&oe=58CDA736',
	link:'https://www.facebook.com/photo.php?fbid=10151563846178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duff',
	pct:4.7,
	desc:'Not sure how Homer Simpson drinks this stuff',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522569_10151563850998745_438604131_n.jpg?oh=4e7ae8c247b47a8c15373ef57f5a03b4&oe=58CC68DA',
	link:'https://www.facebook.com/photo.php?fbid=10151563850998745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Novomestsy Ležák',
	pct:4.5,
	desc:'A different taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/625446_10151563847698745_35732168_n.jpg?oh=4b47ce619f8463ef9e83856b7ab2ee4b&oe=58C6ED69',
	link:'https://www.facebook.com/photo.php?fbid=10151563847698745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Branik',
	pct:5.5,
	desc:'Consumed in a room full of smoke. May have influenced the rating',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486531_10151563848553745_1919030008_n.jpg?oh=5f7a51b35b3e9a65046eadbfc6e922d4&oe=58CCAEA7',
	link:'https://www.facebook.com/photo.php?fbid=10151563848553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'X33',
	pct:12.6,
	desc:'Too sweet. Have one and move on',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/578557_10151563849238745_550093869_n.jpg?oh=a5a0c370638c57194ccf539f3ed95ab3&oe=588989E4',
	link:'https://www.facebook.com/photo.php?fbid=10151563849238745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oldgott',
	pct:5.2,
	desc:'A mild taste of honey',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374397_10151563850303745_1875521604_n.jpg?oh=3f52b600a903d74d247f81b955ae7797&oe=588D6775',
	link:'https://www.facebook.com/photo.php?fbid=10151563850303745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pilsner Urquell',
	pct:4.4,
	desc:'Actually one of the worse Czech lagers',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/544330_10151563851598745_2141597246_n.jpg?oh=648d403cdf58f6d7ff23c7405a47b425&oe=588C2794',
	link:'https://www.facebook.com/photo.php?fbid=10151563851598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser Budvar',
	pct:5.0,
	desc:'Far better than its american cousin',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/165000_10151428534173745_615410288_n.jpg?oh=1f0d6a3721f6d96bf73015b65b9cb34c&oe=5887F42F',
	link:'https://www.facebook.com/photo.php?fbid=10151428534173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel Dark',
	pct:3.8,
	desc:'Smooth and flavoursome',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602178_10151563853043745_1776474012_n.jpg?oh=0ec30789d8de2afb5ce56f1004e17370&oe=58D46F4F',
	link:'https://www.facebook.com/photo.php?fbid=10151563853043745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gambrinus',
	pct:5.0,
	desc:'A poor mans beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/226421_10151563853523745_546548236_n.jpg?oh=8288a853f79d6559dd40a4b32301822b&oe=58BEC5B4',
	link:'https://www.facebook.com/photo.php?fbid=10151563853523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bernard',
	pct:5.1,
	desc:'Even tastes good after the second opening',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/44464_10151563938373745_1447128785_n.jpg?oh=119e51dc776e692be20f72e8524c789c&oe=58880B88',
	link:'https://www.facebook.com/photo.php?fbid=10151563938373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fenix',
	pct:4.7,
	desc:'Wheat beer with a hint of orange',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/625502_10151563944728745_168727372_n.jpg?oh=a7058e22c498401b337cac3e06ce815e&oe=58D3339B',
	link:'https://www.facebook.com/photo.php?fbid=10151563944728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533976_10151331665848745_1640769773_n.jpg?oh=37d12d958e7f13e67516c0488d9e4831&oe=5891BDD3',
	link:'https://www.facebook.com/photo.php?fbid=10151331665848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crakonos',
	pct:5.1,
	desc:'I need to know who this old bever is',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/487632_10151563944693745_625226538_n.jpg?oh=e801ef7d040d0a78b3ec99b627bf2c5c&oe=58BED2D4',
	link:'https://www.facebook.com/photo.php?fbid=10151563944693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birell',
	pct:0.49,
	desc:'Damn language barrier. I consider this a beer flavoured soft drink',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733744_10151563944413745_394586851_n.jpg?oh=1fee6e9414a2b4839402e04f3345c995&oe=58D5187F',
	link:'https://www.facebook.com/photo.php?fbid=10151563944413745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice 10',
	pct:4.2,
	desc:'Smooth with some sort of extra flavour. Caramel maybe',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549300_10151563944628745_804920715_n.jpg?oh=a8dc6712e87623857f40517ae3a3bf7c&oe=58C557E8',
	link:'https://www.facebook.com/photo.php?fbid=10151563944628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staropramen',
	pct:5.0,
	desc:'A nice lager',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/59324_10151368078418745_874127613_n.jpg?oh=dad83f9e30fde20aeb627b843977f8cf&oe=58906CAC',
	link:'https://www.facebook.com/photo.php?fbid=10151368078418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice musketyr',
	pct:4.5,
	desc:'Very similar to their other beer. Just a tad stronger',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480492_10151563944828745_302604960_n.jpg?oh=855e6d5cca9d6c32e070e3adada202d0&oe=58C23445',
	link:'https://www.facebook.com/photo.php?fbid=10151563944828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice cerne',
	pct:3.8,
	desc:'A nice amber ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482349_10151563944993745_189404530_n.jpg?oh=e52568e4f4552fec8c4ca84bdcac6c2e&oe=58D5AEE9',
	link:'https://www.facebook.com/photo.php?fbid=10151563944993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Master',
	pct:5.3,
	desc:'The master bev',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484682_10151563945163745_604451899_n.jpg?oh=3c96f2ad59bd8968e5f80eca7dca8960&oe=58BFA2C0',
	link:'https://www.facebook.com/photo.php?fbid=10151563945163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timothy Taylor Landlord',
	pct:4.3,
	desc:'Orangey tasting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/577972_10151563945378745_1586746946_n.jpg?oh=c058705ece5eedb672a67bd57e8e7d4a&oe=58C06083',
	link:'https://www.facebook.com/photo.php?fbid=10151563945378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Goose',
	pct:4.2,
	desc:'A complete mismatch of flavours',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555154_10151563945403745_1011654346_n.jpg?oh=2b13f361d2ddd78eec48539f146f0b16&oe=5895F7EF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oranjeboom',
	pct:5.0,
	desc:'Easy drinking fun',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/544204_10151563945568745_9282207_n.jpg?oh=36be80beded3a66e39f5d58f3713c1d3&oe=5888D841',
	link:'https://www.facebook.com/photo.php?fbid=10151563945568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viru',
	pct:5.0,
	desc:'Smooth and malty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482859_10151563945748745_1320031993_n.jpg?oh=af8892fbb91f13d9618eb736ed2ebe49&oe=58C15BEF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saku original',
	pct:4.6,
	desc:'Why was I served Estonian beer in a Lithuanian club?',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482209_10151602299593745_443741349_n.jpg?oh=4f3dc00609d378508d5ed5e2efb27139&oe=588925A3',
	link:'https://www.facebook.com/photo.php?fbid=10151602299593745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jaipur',
	pct:5.9,
	desc:'Like the bazar, needs to be removed from sale for public safety',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/582417_10151563946028745_982723381_n.jpg?oh=870a235fe25efe6b665fd7c152c081e2&oe=58D113C5',
	link:'https://www.facebook.com/photo.php?fbid=10151563946028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Almaza',
	pct:4.2,
	desc:'Tastes very familiar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/2501_10151563946143745_340977146_n.jpg?oh=c7f7c75b2f33c54c94b19aa5268cf128&oe=58D0F7CF',
	link:'https://www.facebook.com/photo.php?fbid=10151563946143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fire rock',
	pct:6.0,
	desc:'My first hawaiian beer. So far so good',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1002768_10151798817233745_47152190_n.jpg?oh=861f69cddd70f3c605e261de0cab2751&oe=5895B897',
	link:'https://www.facebook.com/photo.php?fbid=10151798817233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lion lager',
	pct:4.8,
	desc:'Nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/75581_10151563946433745_1440605873_n.jpg?oh=29a18462291800f283897176e1c83f24&oe=58C34BFE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946433745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sol',
	pct:4.5,
	desc:'Much better than corona',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/556881_10151563946938745_1909714508_n.jpg?oh=fcef0d8d58210a8a389d6172e1ef0c65&oe=5892B094',
	link:'https://www.facebook.com/photo.php?fbid=10151563946938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arvo brew 51',
	pct:4.9,
	desc:'Like an IPA gone wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9699_10151602278498745_506265925_n.jpg?oh=02315f14d850c0ecde0369a0f0fee50b&oe=58C83E29',
	link:'https://www.facebook.com/photo.php?fbid=10151602278498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson old admiral',
	pct:6.1,
	desc:'Too much bitterness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/575759_10151602281008745_1009725075_n.jpg?oh=90965af218027d6f929f0ee06235f90d&oe=5891CE82',
	link:'https://www.facebook.com/photo.php?fbid=10151602281008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Quayle ale',
	pct:4.0,
	desc:'Not as good as expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602158_10151602281568745_1269833032_n.jpg?oh=0b9cfe6c2a7d54b3998602b8eb942775&oe=58C56450',
	link:'https://www.facebook.com/photo.php?fbid=10151602281568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Trafalgar pale ale',
	pct:4.0,
	desc:'A nice tang',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/7969_10151602281553745_212370865_n.jpg?oh=fe9ed1b843d5fbbcbd05de3c2f570a26&oe=58D28571',
	link:'https://www.facebook.com/photo.php?fbid=10151602281553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Nelson\'s blood',
	pct:5.0,
	desc:'A nice stout taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64391_10151602282878745_784297964_n.jpg?oh=6a48d42ea3d36e221682f43fa8b0d1ff&oe=588BFCAB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'VB pale lager',
	pct:4.4,
	desc:'Not quite as bad as regular VB',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/559250_10151602286458745_792577618_n.jpg?oh=384e851972873cd6006c1e706171f1ea&oe=5891D626',
	link:'https://www.facebook.com/photo.php?fbid=10151602286458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds sunset ale',
	pct:4.6,
	desc:'Slightly fruity, have to get used to it before judgement',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484855_10151602282628745_1452325767_n.jpg?oh=13baa9b358869b222de2e7c2f5a3a3e4&oe=58C67C5F',
	link:'https://www.facebook.com/photo.php?fbid=10151602282628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale',
	pct:4.5,
	desc:'A slightly less fruity pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/599814_10151602286343745_870808186_n.jpg?oh=b36eb0f2ec737b15bf8347ab65246c11&oe=58C9A8D3',
	link:'https://www.facebook.com/photo.php?fbid=10151602286343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew pilsner',
	pct:5.0,
	desc:'Rather nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/483798_10151602282778745_989104715_n.jpg?oh=b5a6bf1be9b1bbd1e8dde48ceade8675&oe=58CABFDB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fat Yak',
	pct:4.7,
	desc:'A tasty bev',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/541362_10151602283703745_1951889238_n.jpg?oh=ba760e9a5093159e2c0f6412fd2eafdd&oe=58D3A288',
	link:'https://www.facebook.com/photo.php?fbid=10151602283703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The boxer red ale',
	pct:4.1,
	desc:'A mild red ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/562244_10151602284348745_1238517334_n.jpg?oh=605c805350d12fbda20754a3d17b69b4&oe=588A8CE3',
	link:'https://www.facebook.com/photo.php?fbid=10151602284348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hangman pale ale',
	pct:4.9,
	desc:'A tad bitter for a pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581543_10151602284093745_555930895_n.jpg?oh=d87f53ecdbd07729958598437a59672c&oe=58C3B501',
	link:'https://www.facebook.com/photo.php?fbid=10151602284093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The governor golden ale',
	pct:4.5,
	desc:'',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/488220_10151602285323745_1585387237_n.jpg?oh=3a0e2df3c30398930ebe17327ef13dad&oe=5893B523',
	link:'https://www.facebook.com/photo.php?fbid=10151602285323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red truck lager',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480840_10151602285148745_827571703_n.jpg?oh=35e422f2e425de701f53bda7cf1f21b4&oe=5894B526',
	link:'https://www.facebook.com/photo.php?fbid=10151602285148745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict lager',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/526421_10151602285463745_410487487_n.jpg?oh=644ae6747e64164ed8e64fd9ee13ae54&oe=588CB585',
	link:'https://www.facebook.com/photo.php?fbid=10151602285463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bighead no carb beer',
	pct:4.2,
	desc:'Tastes like a rusty nail left in a glass of water',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64725_10151602286543745_838192247_n.jpg?oh=4385dd7d6f03e3516f6637979d7921ca&oe=58D046AC',
	link:'https://www.facebook.com/photo.php?fbid=10151602286543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire one fifty lashes',
	pct:4.2,
	desc:'A good session beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482193_10151602292048745_375392297_n.jpg?oh=4aebca4f91f3c9e2545c4a5f6314cab8&oe=588EC7F4',
	link:'https://www.facebook.com/photo.php?fbid=10151602292048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire sun down',
	pct:4.4,
	desc:'A good amount of flavour but still easy to smash down',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/5556_10151602286983745_1392314300_n.jpg?oh=966e49c6b13439a5222d430d6c1372a3&oe=588CF826',
	link:'https://www.facebook.com/photo.php?fbid=10151602286983745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue',
	pct:4.9,
	desc:'Not as good as I remember',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733866_10151602292633745_1103549106_n.jpg?oh=1e46da055ec2ad62139e57cb4ed14b89&oe=5886C2A6',
	link:'https://www.facebook.com/photo.php?fbid=10151602292633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue pilsner',
	pct:4.5,
	desc:'Doesn\'t really taste like a pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/149243_10151602295168745_1910196412_n.jpg?oh=a55e6fd6c5ee6561d6c72141e5150f9d&oe=58D59EC7',
	link:'https://www.facebook.com/photo.php?fbid=10151602295168745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures bright ale',
	pct:4.5,
	desc:'Terrible photo, decent beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/488165_10151602292853745_953241846_n.jpg?oh=36c2c3bb025f4cfb404d03abe37fe7b5&oe=588ABBC3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pepperjack hand crafted ale',
	pct:4.7,
	desc:'Takes a while to get used to, even then it\'s average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579182_10151602294478745_1578225000_n.jpg?oh=2730a77b4f2612084c7b0ca24b76a221&oe=58C38CE9',
	link:'https://www.facebook.com/photo.php?fbid=10151602294478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ pure lager',
	pct:5.0,
	desc:'Something is wrong with this flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/181067_10151602294978745_1842165802_n.jpg?oh=2de3f29f109feeb379ab68e7d7acc3de&oe=588BD341',
	link:'https://www.facebook.com/photo.php?fbid=10151602294978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Keller door',
	pct:5.0,
	desc:'Just a little bit extra flavour than a standard lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/527734_10151602296568745_390928601_n.jpg?oh=5383c4bb7ca5eba17a8cd76fde0b928d&oe=5894F9B1',
	link:'https://www.facebook.com/photo.php?fbid=10151602296568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate roadtrip ipa',
	pct:5.8,
	desc:'Mild for an american IPA, easier to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/7254_10151602296908745_1398508952_n.jpg?oh=59fbd84b6e0a2a07f7906d5415044dca&oe=588A59F3',
	link:'https://www.facebook.com/photo.php?fbid=10151602296908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate mt Macedon ale',
	pct:4.5,
	desc:'Smooth and fruity',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/536215_10151602297528745_137791391_n.jpg?oh=d128c43947cb13c1b09ac97e529ced30&oe=58918130',
	link:'https://www.facebook.com/photo.php?fbid=10151602297528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Millenium Falcon',
	pct:10.0,
	desc:'A mild IPA for the booze content',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579366_10151602298783745_1455893061_n.jpg?oh=6ebab0a8eea973e626f6ab655d84d4fe&oe=58C1DE26',
	link:'https://www.facebook.com/photo.php?fbid=10151602298783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew Belgo',
	pct:4.5,
	desc:'Very belgian without the alcohol content to match',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522428_10151602297908745_1068926570_n.jpg?oh=c592a3dfe8f58f184b5df72787ca5ec7&oe=58C27943',
	link:'https://www.facebook.com/photo.php?fbid=10151602297908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murrays icon 2IPA',
	pct:7.5,
	desc:'Too much IPA flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/524217_10151602298053745_1174689076_n.jpg?oh=f9d34094d943eadd85db4deeb8742e4c&oe=58D1701B',
	link:'https://www.facebook.com/photo.php?fbid=10151602298053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boa\'s bind',
	pct:5.0,
	desc:'A bit of an IPA flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10102_10151602299658745_104134259_n.jpg?oh=8892aab27954ba885ebfc82857716dbb&oe=589429AF',
	link:'https://www.facebook.com/photo.php?fbid=10151602299658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Larks foot',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10055_10151602300248745_313412556_n.jpg?oh=aafa96d45e23abc3317d5523f877a72b&oe=58D0E5FB',
	link:'https://www.facebook.com/photo.php?fbid=10151602300248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton dry',
	pct:4.5,
	desc:'Decent Aussie beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600269_10151602300508745_808991925_n.jpg?oh=e14c68657a44af2a0d5ed316218c5331&oe=5895E943',
	link:'https://www.facebook.com/photo.php?fbid=10151602300508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pure blonde',
	pct:4.6,
	desc:'Easy drinking',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/157044_10151602300683745_1270951956_n.jpg?oh=9c3cfced2d967849211757759fc323ea&oe=588B8A0B',
	link:'https://www.facebook.com/photo.php?fbid=10151602300683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict strong ale',
	pct:7.2,
	desc:'A strong and average flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581629_10151602301103745_358423449_n.jpg?oh=75f4556f622aa031bfc5f6daba2f6a79&oe=58C96386',
	link:'https://www.facebook.com/photo.php?fbid=10151602301103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier burning gold',
	pct:4.7,
	desc:'Boring',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/551487_10151649173073745_178044172_n.jpg?oh=2d987a108595105f7322fbeddc903190&oe=588A2578',
	link:'https://www.facebook.com/photo.php?fbid=10151649173073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Korev',
	pct:4.8,
	desc:'Like an off becks',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/48034_10151649174363745_1551458446_n.jpg?oh=d39d3a3d7cb9c0d5ed953bb8a7944c20&oe=589108F2',
	link:'https://www.facebook.com/photo.php?fbid=10151649174363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply IPA',
	pct:5.0,
	desc:'Just awful. Not even an IPA',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/998582_10151860439493745_805468360_n.jpg?oh=a25ec75a497d89454794cd972788b586&oe=58C9F23D',
	link:'https://www.facebook.com/photo.php?fbid=10151860439493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious Brew',
	pct:4.7,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/575573_10151649174188745_1546947418_n.jpg?oh=eaafe34c7d8354f6e6461521ece07cc7&oe=58CDD1C5',
	link:'https://www.facebook.com/photo.php?fbid=10151649174188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven grand slam ale',
	pct:4.0,
	desc:'A mild and average flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644743_10151649174378745_793600072_n.jpg?oh=bb26c8a01efd7f7db06a8f6a4776d756&oe=58C59D97',
	link:'https://www.facebook.com/photo.php?fbid=10151649174378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old golden hen',
	pct:4.1,
	desc:'Wouldn\'t have another',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/48062_10151649174963745_1079824641_n.jpg?oh=46771afe704d018a3ba3be1cc6f344fb&oe=58CBD7AE',
	link:'https://www.facebook.com/photo.php?fbid=10151649174963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spitfire Kentish ale',
	pct:4.5,
	desc:'Not too hard to drink',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/389000_10151649175308745_1470630421_n.jpg?oh=4bb993f253a8712d4afd3f7d377a61d8&oe=58D20B15',
	link:'https://www.facebook.com/photo.php?fbid=10151649175308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier English',
	pct:4.7,
	desc:'I\'m a fan of this mild ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12402_10151649175493745_949451993_n.jpg?oh=8390cca8d59d55c95c81965c27e3e51e&oe=588E219F',
	link:'https://www.facebook.com/photo.php?fbid=10151649175493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murphy\'s draught',
	pct:4.0,
	desc:'Instantly gave me a headache and made my mouth taste like it was bleeding',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/310059_10151649175513745_267966869_n.jpg?oh=629cc862b359370ad1f0e0680dfe8ee5&oe=5891289E',
	link:'https://www.facebook.com/photo.php?fbid=10151649175513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Frederic Robinson ginger ale',
	pct:6.0,
	desc:'The worst ginger beer I\'ve tasted',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486778_10151649175643745_1984274110_n.jpg?oh=6a7636735e1e9aebaef3d5c0c898c6da&oe=58CDFED8',
	link:'https://www.facebook.com/photo.php?fbid=10151649175643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wiltshire rum beer',
	pct:5.0,
	desc:'Can\'t really taste the rum',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935047_10151649176048745_1239205144_n.jpg?oh=6b63778dbdc1c83d48fa7baddf969aa4&oe=588BC094',
	link:'https://www.facebook.com/photo.php?fbid=10151649176048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amigos',
	pct:5.5,
	desc:'Tastes like agave',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/58112_10151649175958745_191846166_n.jpg?oh=18ee197a79c11a416857da96f9d83bec&oe=5892A9B3',
	link:'https://www.facebook.com/photo.php?fbid=10151649175958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Früli',
	pct:4.1,
	desc:'Not usually served in a martini glass',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533653_10151396306263745_1857811158_n.jpg?oh=70744d179888cf98ee80901846009ccf&oe=58D2430D',
	link:'https://www.facebook.com/photo.php?fbid=10151396306263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans peche lambic beer',
	pct:4.0,
	desc:'Tastes just like peach, not beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/71413_10151649176248745_1243782720_n.jpg?oh=5df8eba38e0e6cb9112d48d3e7cde665&oe=58D001AA',
	link:'https://www.facebook.com/photo.php?fbid=10151649176248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans strawberry lambic beer',
	pct:4,
	desc:'Not too much strawberry',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537448_10151461684443745_989699337_n.jpg?oh=5c51b1850fba298a3dc500623f4d2b3f&oe=588E9B56',
	link:'https://www.facebook.com/photo.php?fbid=10151461684443745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vratislav',
	pct:5.0,
	desc:'There\'s a reason I never saw this in the Czech Republic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923443_10151649176573745_311313356_n.jpg?oh=7280117a099fd29733e0ec1edcccc47c&oe=58C5CBB3',
	link:'https://www.facebook.com/photo.php?fbid=10151649176573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Remus',
	pct:6.0,
	desc:'Pretty sure the guy on the label tea bagged this beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/401188_10151649176638745_2029777298_n.jpg?oh=459064dbfd8654e8b241214f107bba42&oe=588A26D7',
	link:'https://www.facebook.com/photo.php?fbid=10151649176638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king light ale',
	pct:3.0,
	desc:'Weak and tasteless. Pretty much a waste of my time',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/67496_10151649177163745_1520090166_n.jpg?oh=8588ad3064dafcbc4c14168f21e783ff&oe=58D0B373',
	link:'https://www.facebook.com/photo.php?fbid=10151649177163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old salt quay',
	pct:3.9,
	desc:'An easy drinking ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/407150_10151649177363745_297706272_n.jpg?oh=c9077f17f4338c3c9293f92cd1fec5f3&oe=58D0B8FE',
	link:'https://www.facebook.com/photo.php?fbid=10151649177363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser 66',
	pct:4.0,
	desc:'Slightly fruity',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62626_10151649177378745_981383908_n.jpg?oh=f937c2276b63a065835568a9c824f41a&oe=588E5772',
	link:'https://www.facebook.com/photo.php?fbid=10151649177378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Okocim mocne',
	pct:7.0,
	desc:'Sweet and a little bit wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/301917_10151649177953745_1459071565_n.jpg?oh=d9c112bb6a0b5753c43b89616b8e8661&oe=58C33845',
	link:'https://www.facebook.com/photo.php?fbid=10151649177953745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Desperados',
	pct:5.9,
	desc:'Kind of a girls beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/305829_10151649178053745_1663963670_n.jpg?oh=72ed48928d8fffaccf9e2128203d7e2a&oe=58C89537',
	link:'https://www.facebook.com/photo.php?fbid=10151649178053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corona',
	pct:4.5,
	desc:'Not sure why so many people drink this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484843_10151694516468745_911431623_n.jpg?oh=9ac42d430c4b1d88e29a85f866fbe3ae&oe=58CBE382',
	link:'https://www.facebook.com/photo.php?fbid=10151694516468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cuvana rum beer',
	pct:5.5,
	desc:'Like an over sweet tequila beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64844_10151798801973745_1700678415_n.jpg?oh=2c311c348c9d8ff237611aba4d49aba6&oe=58D37DD4',
	link:'https://www.facebook.com/photo.php?fbid=10151798801973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masquerido',
	pct:5.0,
	desc:'Yet another tequila beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374702_10151649178783745_739073810_n.jpg?oh=0d158b0d0041dc098bc46bf7764223e1&oe=58C7D223',
	link:'https://www.facebook.com/photo.php?fbid=10151649178783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wychwood brewery Goliath',
	pct:4.2,
	desc:'The beer to slay a mighty thirst',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/431886_10151649178733745_149102435_n.jpg?oh=e7a231a2d087ecd3094e5f06e2c2bb35&oe=5887D3AE',
	link:'https://www.facebook.com/photo.php?fbid=10151649178733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fuller\'s honey dew',
	pct:5.0,
	desc:'Needs more honey',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/969679_10151694516258745_1883640684_n.jpg?oh=fcc889cf80756519725759575dcfac0d&oe=58BF7EA2',
	link:'https://www.facebook.com/photo.php?fbid=10151694516258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales barnsey',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923297_10151694519768745_611137307_n.jpg?oh=726b4a395c5a32a32055ddef2b748a23&oe=58CDDCBC',
	link:'https://www.facebook.com/photo.php?fbid=10151694519768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales gem',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/423793_10151694518423745_774842906_n.jpg?oh=6a370a20f2016e4cc809f38bc6a718a4&oe=58CA25BF',
	link:'https://www.facebook.com/photo.php?fbid=10151694518423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales wild hare',
	pct:5.0,
	desc:'Lovely and sweet',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935469_10151694516713745_1078233688_n.jpg?oh=83b76cdb273ea8837992a980e0686a71&oe=58C81C45',
	link:'https://www.facebook.com/photo.php?fbid=10151694516713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales Dark Side',
	pct:4.0,
	desc:'A smooth dark ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/933900_10151694517968745_176829546_n.jpg?oh=3735c1facf40364d2b2317252b4f5f20&oe=588D7C05',
	link:'https://www.facebook.com/photo.php?fbid=10151694517968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modelo',
	pct:4.5,
	desc:'Alright',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/430992_10151694517623745_238159373_n.jpg?oh=854312a94cfbb6abf606270b99021aed&oe=588C1DE2',
	link:'https://www.facebook.com/photo.php?fbid=10151694517623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Madog\'s ale',
	pct:3.7,
	desc:'Almost like a mild IPA',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/931430_10151694519728745_1221673086_n.jpg?oh=3122f639cb24e2c3d6ab6846bb78a536&oe=58CD3B99',
	link:'https://www.facebook.com/photo.php?fbid=10151694519728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ysgawen',
	pct:4.0,
	desc:'Flowery',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935261_10151694519833745_1401778168_n.jpg?oh=e8bf34b032112b3a0429ea53325bf6d9&oe=58C5F4B1',
	link:'https://www.facebook.com/photo.php?fbid=10151694519833745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faxe',
	pct:5.0,
	desc:'It would take a long time to get used to this',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954667_10151694524273745_524236800_n.jpg?oh=c86e322b8e6c65999fd16acb19ee1e75&oe=58D52735',
	link:'https://www.facebook.com/photo.php?fbid=10151694524273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cwrw gwledd celebration ale',
	pct:4.2,
	desc:'I could enjoy a few of those',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954753_10151694532288745_1231818486_n.jpg?oh=9365168f54b217b166b6f0dfb294215f&oe=58D15F40',
	link:'https://www.facebook.com/photo.php?fbid=10151694532288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields Unfiltered lager',
	pct:4.1,
	desc:'A flavour I can\'t pick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/931410_10151694532138745_1297410335_n.jpg?oh=b687d92a70ef2c3bed75e953ff0ca624&oe=58C53C76',
	link:'https://www.facebook.com/photo.php?fbid=10151694532138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields wheat beer',
	pct:4.7,
	desc:'Very wheaty',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/947193_10151694532673745_349270642_n.jpg?oh=06c6e3764069e1209bfff6bd1ff6c835&oe=58D14F22',
	link:'https://www.facebook.com/photo.php?fbid=10151694532673745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam',
	pct:4.8,
	desc:'Like a mild IPA. Tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/983676_10151694533228745_78503103_n.jpg?oh=177352fd1697d2703e8e465721dc3d50&oe=58D1FDBF',
	link:'https://www.facebook.com/photo.php?fbid=10151694533228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields hackney hopster',
	pct:4.2,
	desc:'I should not have ordered this beer with only 15 minutes to drink it. Would be nice if I had more time to enjoy it',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1480719_10152147735493745_924183769_n.jpg?oh=1dc9da1abaa4d62893a13ec6a7a435e8&oe=5891D6D1',
	link:'https://www.facebook.com/photo.php?fbid=10152147735493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dragon stout',
	pct:7.5,
	desc:'So bad I can\'t believe they bottle this',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/968780_10151694532678745_1443848773_n.jpg?oh=de6a634375e12517fbc664f46164dbee&oe=588E9AA0',
	link:'https://www.facebook.com/photo.php?fbid=10151694532678745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St mungo',
	pct:4.9,
	desc:'Sweet sweet lager , but terrible warm',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942794_10151694532513745_577368504_n.jpg?oh=e9a03316c3ff8b66e64e419bf283db9a&oe=58D1ACB1',
	link:'https://www.facebook.com/photo.php?fbid=10151694532513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs back hop',
	pct:4.4,
	desc:'Throw up kind if awful',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/308392_10151694533218745_306927282_n.jpg?oh=9c750f5605d1192421977def4ad29c1b&oe=58CA3AC8',
	link:'https://www.facebook.com/photo.php?fbid=10151694533218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham citra',
	pct:4.6,
	desc:'Nice hops but otherwise average',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1237019_10151929068538745_647712352_n.jpg?oh=0d7f5ac6b4606b2704cb8e635a482d06&oe=58CC7CA5',
	link:'https://www.facebook.com/photo.php?fbid=10151929068538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham scarlet macaw',
	pct:4.8,
	desc:'Taught me the meaning of pugnacious',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238244_10151929068473745_105586790_n.jpg?oh=2344da7e2745a2c11de921ff9d9bfe30&oe=58C17C4E',
	link:'https://www.facebook.com/photo.php?fbid=10151929068473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham ales inferno',
	pct:4.4,
	desc:'I think a beer called inferno needs chilli',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942020_10151694533608745_2056877210_n.jpg?oh=5879c0e047e0438381b2e2301ba2e3a7&oe=58CD58D1',
	link:'https://www.facebook.com/photo.php?fbid=10151694533608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floris chocolat',
	pct:4.2,
	desc:'Fizzy bad chocolate',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/945065_10151694533818745_1511619525_n.jpg?oh=92d2a205b027528c8c66554b0eff152c&oe=5893D3B7',
	link:'https://www.facebook.com/photo.php?fbid=10151694533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Williams joker IPA',
	pct:5,
	desc:'Surprisingly good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935627_10151694535958745_491079820_n.jpg?oh=6ed6ed896103f0e9c5d27a47f0165214&oe=58D13ABA',
	link:'https://www.facebook.com/photo.php?fbid=10151694535958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber rambler',
	pct:4.8,
	desc:'Sweet, hoppy, average',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/969003_10151694535793745_176698104_n.jpg?oh=859ce2448a3095945c02a877af4f3ce4&oe=5888FAA9',
	link:'https://www.facebook.com/photo.php?fbid=10151694535793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruddles',
	pct:3.7,
	desc:'Never again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/263308_10151694535858745_1991147618_n.jpg?oh=ceadf87a8fba5515f275f561f75d5bae&oe=5894CEF0',
	link:'https://www.facebook.com/photo.php?fbid=10151694535858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great bustard',
	pct:4.8,
	desc:'Black and vomity',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485453_10151694536548745_106155626_n.jpg?oh=7e1e832ac587ec39a0b31155866f34e5&oe=58D32DA1',
	link:'https://www.facebook.com/photo.php?fbid=10151694536548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Efes',
	pct:5.0,
	desc:'The best turkey has to offer?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261692_10151694536343745_1620675105_n.jpg?oh=6b8f2981d82526aec139c4bfe5432f6d&oe=58CADC98',
	link:'https://www.facebook.com/photo.php?fbid=10151694536343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perge',
	pct:5.0,
	desc:'Much better than efes',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1005742_10151798801533745_634899063_n.jpg?oh=b0c02e7d27777019dea2a6d0963f5ba8&oe=588BA69F',
	link:'https://www.facebook.com/photo.php?fbid=10151798801533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Voll-damn doble Malta',
	pct:7.2,
	desc:'Quite malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/293097_10151694536623745_633779128_n.jpg?oh=856cbb0f60be80fb20419e26c1f9ac9e&oe=5892ED65',
	link:'https://www.facebook.com/photo.php?fbid=10151694536623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo',
	pct:4.8,
	desc:'Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/264403_10151694536708745_1298889096_n.jpg?oh=5b52e86d5eb4ebdf903f2b2a14b9e5a3&oe=58D2E3E3',
	link:'https://www.facebook.com/photo.php?fbid=10151694536708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella Galicia',
	pct:5.5,
	desc:'A bit more malty than the regular',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988265_10151798820448745_1825630126_n.jpg?oh=7bbcf273528e5d3e1f057b66eb82e80b&oe=58C16F43',
	link:'https://www.facebook.com/photo.php?fbid=10151798820448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella',
	pct:5.4,
	desc:'Tastes a little bit burnt',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/248044_10151694532898745_1441204919_n.jpg?oh=28374b200b50a33c610af42b9efed1c1&oe=58885F1A',
	link:'https://www.facebook.com/photo.php?fbid=10151694532898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mahou',
	pct:5.5,
	desc:'A very tasty lager. Could drink these all day',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150945_10151461683838745_503756954_n.jpg?oh=f773788653c1cc01c90955ed98807761&oe=58D02478',
	link:'https://www.facebook.com/photo.php?fbid=10151461683838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel',
	pct:5.4,
	desc:'A beer for all occasions',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/22402_10151315677898745_961047009_n.jpg?oh=11c14cfa45231d011c0e228f4a5f02b1&oe=58D55D54',
	link:'https://www.facebook.com/photo.php?fbid=10151315677898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keler',
	pct:null,
	desc:'Fantastic after a long day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64607_10151798820233745_1697119288_n.jpg?oh=3e972d84ffa5e5fe816f734369fe1306&oe=588969CF',
	link:'https://www.facebook.com/photo.php?fbid=10151798820233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ambar',
	pct:5.2,
	desc:'Session beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/540216_10151798819258745_1593913527_n.jpg?oh=59651229ea39d267ce25b6dce0c5a450&oe=58D4F384',
	link:'https://www.facebook.com/photo.php?fbid=10151798819258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo gran reserva',
	pct:6.4,
	desc:'A bit malty but mostly smooth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/944493_10151798819313745_233015169_n.jpg?oh=5c7f1803400baa28c71d0b213e528a06&oe=58C2B412',
	link:'https://www.facebook.com/photo.php?fbid=10151798819313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koenigsbier',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/983885_10151694536943745_1632093000_n.jpg?oh=ad22229b2773d838d8dbb5e914680d84&oe=58CD1A12',
	link:'https://www.facebook.com/photo.php?fbid=10151694536943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quilmes',
	pct:4.9,
	desc:'Average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65636_10151694536878745_1850782094_n.jpg?oh=139eb73fe33566edfa3023124482d959&oe=58C91277',
	link:'https://www.facebook.com/photo.php?fbid=10151694536878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blas trigo',
	pct:6.0,
	desc:'A strange taste. Almost like a lambic. Even enjoyed by non beer drinkers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1011466_10151798821318745_54743244_n.jpg?oh=318433435e34b9e29a8f5c731f6fbc0d&oe=58CB088C',
	link:'https://www.facebook.com/photo.php?fbid=10151798821318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faro Lambic',
	pct:4.5,
	desc:'A kind of tangy flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/252348_10151694537033745_65345877_n.jpg?oh=ede783997d4342c70a60b0a1f0b4ff53&oe=588BBADA',
	link:'https://www.facebook.com/photo.php?fbid=10151694537033745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skull splitter',
	pct:8.5,
	desc:'Every mouthful is like being punched in the neck. A mans bev',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/292440_10151694537253745_171550675_n.jpg?oh=d099265a3e8b9ab995d1ec4a48200b58&oe=58D31590',
	link:'https://www.facebook.com/photo.php?fbid=10151694537253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sagres Bohemia',
	pct:6.2,
	desc:'Easy drinking for the strength',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261740_10151694537308745_1696408161_n.jpg?oh=19b1939dbf6fe08624a3003a59ffb49b&oe=58CB2C75',
	link:'https://www.facebook.com/photo.php?fbid=10151694537308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious original pale ale',
	pct:3.9,
	desc:'Flowery',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/943639_10151798797268745_543942826_n.jpg?oh=b6a00ada0113150d5bf75adee051e27c&oe=58D10CF5',
	link:'https://www.facebook.com/photo.php?fbid=10151798797268745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Centennial IPA',
	pct:7.2,
	desc:'Slightly too strong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1070104_10151798797103745_60498930_n.jpg?oh=b2aed0d5ddb64adf73861edfb5379097&oe=588BC29F',
	link:'https://www.facebook.com/photo.php?fbid=10151798797103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wild beer epic saison',
	pct:5.0,
	desc:'Different but not very good',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/73345_10151798799468745_1877528478_n.jpg?oh=6cfc7063089384fc1f045cae97183ca6&oe=588A9FB0',
	link:'https://www.facebook.com/photo.php?fbid=10151798799468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The wild beer co Bliss',
	pct:6.0,
	desc:'Weird as hell. Is that ginger ?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1001179_10151798797773745_1783696922_n.jpg?oh=5cf11d89b2dc84a86aa7cde3fa6130b2&oe=58CEE5F3',
	link:'https://www.facebook.com/photo.php?fbid=10151798797773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Porter',
	pct:6.5,
	desc:'Unexpectedly smooth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1075890_10151798799218745_348684892_n.jpg?oh=5b787427c81d52d70eb08fc49d5fc2af&oe=5888E8E6',
	link:'https://www.facebook.com/photo.php?fbid=10151798799218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'01|02',
	pct:5.4,
	desc:'Plain',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64066_10151798799093745_1495677337_n.jpg?oh=e14ad59f76e798778191f7dd4895fdd3&oe=58CE6E83',
	link:'https://www.facebook.com/photo.php?fbid=10151798799093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu winterbier',
	pct:5.5,
	desc:'Not sure what it has to do with winter',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74388_10151428532683745_883935005_n.jpg?oh=c69e093adee82375676542ab700045b5&oe=58CE26C3',
	link:'https://www.facebook.com/photo.php?fbid=10151428532683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Benediktiner',
	pct:5.4,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/598459_10151331653573745_57128822_n.jpg?oh=18cdc415b85df8e872c47b6db321320e&oe=58C7CEBC',
	link:'https://www.facebook.com/photo.php?fbid=10151331653573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spaten',
	pct:5.2,
	desc:'Average German beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602999_10151798820463745_26311115_n.jpg?oh=ddb7cdf9b0a0724d1a1e5cc8e5d69ec6&oe=58CBCA69',
	link:'https://www.facebook.com/photo.php?fbid=10151798820463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paulaner',
	pct:4.5,
	desc:'Still not a fan of wheat beer. Also not happy when this doesn\'t come in a stein',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542113_10151428531848745_1285156274_n.jpg?oh=7ca34a5442957fc8c56ea202ad8faee1&oe=58CE2FB0',
	link:'https://www.facebook.com/photo.php?fbid=10151428531848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Erdinger',
	pct:5.3,
	desc:'A German classic',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312687_10151396304703745_1460506547_n.jpg?oh=afb71801ce258cde929693567bdbde22&oe=58C21FA4',
	link:'https://www.facebook.com/photo.php?fbid=10151396304703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lowenbräu',
	pct:5.2,
	desc:'An old favourite',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1006322_10151854990003745_1367385970_n.jpg?oh=7a57de7cb2585de96d1d1534bc411b32&oe=5895D92B',
	link:'https://www.facebook.com/photo.php?fbid=10151854990003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grafenwalder',
	pct:4.8,
	desc:'Plain and easy to drink. Also cheap',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/72182_10151649174918745_777169044_n.jpg?oh=dbdd0041fce01241426c2543fcc047de&oe=5895CE43',
	link:'https://www.facebook.com/photo.php?fbid=10151649174918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Köstritzer schwarzbier',
	pct:4.8,
	desc:'Milder than a dark beer normally is',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920083_10152293088098745_591597385_n.jpg?oh=74c7b5cb10b854074800725a21d09b4a&oe=58C7281A',
	link:'https://www.facebook.com/photo.php?fbid=10152293088098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rheinbacher',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644125_10151296241128745_1291306382_n.jpg?oh=197a17de9b6ad8ad2b6bdf2c951de128&oe=58CF5836',
	link:'https://www.facebook.com/photo.php?fbid=10151296241128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoegaarden blanche',
	pct:4.9,
	desc:'Not a white beer fan',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312594_10151396305888745_722386464_n.jpg?oh=f88fdaf2d8594578ce04ed177c8dc3fb&oe=5892495A',
	link:'https://www.facebook.com/photo.php?fbid=10151396305888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bitburger',
	pct:4.8,
	desc:'Not my favourite 1L beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/45381_10151798800163745_1715529842_n.jpg?oh=d91d9ca84b274048d2e72a682c139a65&oe=58CE4D56',
	link:'https://www.facebook.com/photo.php?fbid=10151798800163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fischer\'s stiftungbräu helles',
	pct:5.1,
	desc:'Could drink this all day',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1016879_10151798800588745_1406598038_n.jpg?oh=292298c812855d75f77d3318a111105b&oe=58C53722',
	link:'https://www.facebook.com/photo.php?fbid=10151798800588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rothaus Pils',
	pct:5.1,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/263281_10151428533418745_1142185316_n.jpg?oh=977238a1539d25d1b3f994c41802fbe9&oe=58906580',
	link:'https://www.facebook.com/photo.php?fbid=10151428533418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Konig pils',
	pct:4.9,
	desc:'Standard German',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1743537_10152293088048745_37653094_n.jpg?oh=f6dbabb502e9fffd82e838456bd7110d&oe=58929E87',
	link:'https://www.facebook.com/photo.php?fbid=10152293088048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau',
	pct:5.1,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/2771_10152001625293745_732438079_n.jpg?oh=da78fc436925da41fb07a83f2145c632&oe=58BE3555',
	link:'https://www.facebook.com/photo.php?fbid=10152001625293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hacker-Pschorr',
	pct:5.8,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1376515_10152001625798745_1787795583_n.jpg?oh=0ffc621834b178ea7e25914649a4e897&oe=58C57D4A',
	link:'https://www.facebook.com/photo.php?fbid=10152001625798745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'DAB',
	pct:5.0,
	desc:'Disappointing',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/525742_10151860439343745_1260154559_n.jpg?oh=4fdd50b5d7d792e15c86510aafa2b71a&oe=5890E9B5',
	link:'https://www.facebook.com/photo.php?fbid=10151860439343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Augustinerbrau',
	pct:5.2,
	desc:'Alright',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1375936_10152001624743745_1619318099_n.jpg?oh=004a582cd4c68b4fa745111965b74ad4&oe=58CB5192',
	link:'https://www.facebook.com/photo.php?fbid=10152001624743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxlrainer',
	pct:5.3,
	desc:'Not too bad',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1385612_10152001625738745_155180417_n.jpg?oh=c956724ef8dc1a3434f2d72726079929&oe=58C3899F',
	link:'https://www.facebook.com/photo.php?fbid=10152001625738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Yakima Red',
	pct:4.1,
	desc:'Pleasant',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/992917_10151798801088745_1382376594_n.jpg?oh=ce5bff95f51537f8bd443a4df1565a6e&oe=58BFC2EA',
	link:'https://www.facebook.com/photo.php?fbid=10151798801088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Stout',
	pct:4.5,
	desc:'I could have another',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069371_10151798801138745_1255664168_n.jpg?oh=4a8ee91ff2bdf4406d432ca8d54294d7&oe=58891F05',
	link:'https://www.facebook.com/photo.php?fbid=10151798801138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Pilsner',
	pct:4.4,
	desc:'Not my favourite pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/999024_10151798817478745_821421302_n.jpg?oh=cd3132a069105fe79c8fb1c1da1a4359&oe=58CC4148',
	link:'https://www.facebook.com/photo.php?fbid=10151798817478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Charlie\'s',
	pct:5.0,
	desc:'I think charlie may be homeless',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374377_10151798802143745_204094323_n.jpg?oh=389158464127693db9377eecac2f1428&oe=58D5A525',
	link:'https://www.facebook.com/photo.php?fbid=10151798802143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Spindrift',
	pct:5.0,
	desc:'Kind of a pale ale taste. The first time I\'ve seen a beer in a blue bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069901_10151798803058745_68050022_n.jpg?oh=5569ef780a2cce13e8fba36819e32cae&oe=58CFA987',
	link:'https://www.facebook.com/photo.php?fbid=10151798803058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hook pilsner',
	pct:5.3,
	desc:'A mild flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069935_10151798817208745_1577449594_n.jpg?oh=463804a11aee4e4b923457b137ef4f02&oe=589254DB',
	link:'https://www.facebook.com/photo.php?fbid=10151798817208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark Lord',
	pct:5.0,
	desc:'Really needs a lord of the rings reference on the label',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935039_10151798818428745_2074781709_n.jpg?oh=940507328af34d200cd5f662d21e56ac&oe=588BE394',
	link:'https://www.facebook.com/photo.php?fbid=10151798818428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moosehead',
	pct:5.0,
	desc:'Would take some getting used to',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1000219_10151798818558745_1372926994_n.jpg?oh=02b3f0747e547299ad76fc35485a082b&oe=58C0AFAC',
	link:'https://www.facebook.com/photo.php?fbid=10151798818558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Broadside',
	pct:4.7,
	desc:'The bitterness takes some time to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1006000_10151798819328745_2080424026_n.jpg?oh=e68a2405aa79bac3732d21bd24e2cea9&oe=58C87FE6',
	link:'https://www.facebook.com/photo.php?fbid=10151798819328745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstök Pale ale',
	pct:5.6,
	desc:'A nice pale ale with a hint of volcano',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/559118_10151798821313745_705644987_n.jpg?oh=3f418fe2aa2efa0009f4532189a95277&oe=58943F5E',
	link:'https://www.facebook.com/photo.php?fbid=10151798821313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstok toasted porter',
	pct:6.0,
	desc:'A good morning beer. With bacon and eggs. Also beer #300!',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069403_10151798927653745_683815255_n.jpg?oh=d3a187f391847a6fa4fcb3d3cdc3777a&oe=58C82D16',
	link:'https://www.facebook.com/photo.php?fbid=10151798927653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leo',
	pct:5.0,
	desc:'Easy drinking, great in hot weather',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1947644_10152280801063745_1171315228_n.jpg?oh=5b5bc0f5ac602a1a87991fcdd92b895e&oe=58D00CBB',
	link:'https://www.facebook.com/photo.php?fbid=10152280801063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tiger',
	pct:5.0,
	desc:'A good choice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549260_10151563946038745_1772775906_n.jpg?oh=b443a72654a5d22d387f2002efa618eb&oe=58C2D3AE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chang export',
	pct:5.0,
	desc:'Take the regular low quality chang and add way too much malt',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1969273_10152280801073745_1139224814_n.jpg?oh=4fc369826d68c782f8994a339e33014f&oe=588F19E5',
	link:'https://www.facebook.com/photo.php?fbid=10152280801073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Singha',
	pct:5.05,
	desc:'Served in the authentic Thai way. With a glass filled with ice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522410_10151602279523745_2144170744_n.jpg?oh=bf22e7b814229cc6f6bde48e3bf84758&oe=58C8A793',
	link:'https://www.facebook.com/photo.php?fbid=10151602279523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao',
	pct:5.0,
	desc:'Fairly standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/553908_10152001638218745_428160786_n.jpg?oh=7ca9991de09472d1cbb312358ff604ff&oe=58CFD3BD',
	link:'https://www.facebook.com/photo.php?fbid=10152001638218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tsingtao',
	pct:4.7,
	desc:'China standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/968819_10151798821173745_1903896463_n.jpg?oh=fa54234ebfbe8d702b3db9650b05f61f&oe=58961B3B',
	link:'https://www.facebook.com/photo.php?fbid=10151798821173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sapporo',
	pct:5.0,
	desc:'Solid can, solid beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1002989_10151798803018745_1022069808_n.jpg?oh=ea0b33caa40026580948b58d3a75379e&oe=58C0F827',
	link:'https://www.facebook.com/photo.php?fbid=10151798803018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino red rice',
	pct:7.0,
	desc:'A strange taste, takes a bit to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q82/p480x480/1157401_10151888670423745_99231248_n.jpg?oh=b557fc8dce105128390345c3dfc5dd18&oe=588B99EB',
	link:'https://www.facebook.com/photo.php?fbid=10151888670423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Ginger ale',
	pct:8.0,
	desc:'A mild ginger taste. The warming sensation makes me think this isn\'t meant for summer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942413_10151798927708745_1675671077_n.jpg?oh=71a6c1ff189220b5015f9f84ba15a085&oe=5895F0BD',
	link:'https://www.facebook.com/photo.php?fbid=10151798927708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino pale ale',
	pct:5.5,
	desc:'Surprisingly good. Wish I bought more than one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1011658_10151854990103745_2038671130_n.jpg?oh=8a152c60dbc0b56527c842bdc235f390&oe=58D21A08',
	link:'https://www.facebook.com/photo.php?fbid=10151854990103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi',
	pct:5.0,
	desc:'A classic',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537524_10151563945728745_1100203805_n.jpg?oh=ba77ea33d0cb640d35ce4a3379e8785f&oe=58C0BBF4',
	link:'https://www.facebook.com/photo.php?fbid=10151563945728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino japaneses classic ale',
	pct:7.0,
	desc:'Such a letdown after the pale ale',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185821_10151854990343745_429136882_n.jpg?oh=471a615b44b2927ec38453a854697939&oe=58C78905',
	link:'https://www.facebook.com/photo.php?fbid=10151854990343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Nest Commemorative Ale',
	pct:8,
	desc:'The perfect beer for new years. Or any other time',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970685_10151854991538745_1076029058_n.jpg?oh=a8b7f66ae97ef713c1c19b4fada62883&oe=588EFDD0',
	link:'https://www.facebook.com/photo.php?fbid=10151854991538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoopers Ginger brew',
	pct:4.0,
	desc:'Exactly how a ginger beer should taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185949_10151854991548745_379811355_n.jpg?oh=f84e85d88b7c27d84c789e09f094062c&oe=58955A13',
	link:'https://www.facebook.com/photo.php?fbid=10151854991548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Strongroom dark',
	pct:4.5,
	desc:'Rather creamy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1175248_10151860440378745_2027227367_n.jpg?oh=9b527f774ad3f41e1f7ff67dc2f3bd2f&oe=58CE83B4',
	link:'https://www.facebook.com/photo.php?fbid=10151860440378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boondoggle blonde ale',
	pct:5.0,
	desc:'Some sort of quasi good beer',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970910_10151860440438745_1474360215_n.jpg?oh=d46b6c10346b37984460d06cfc4c929f&oe=588B1F03',
	link:'https://www.facebook.com/photo.php?fbid=10151860440438745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Banks caribbean lager',
	pct:4.7,
	desc:'Mild and smooth',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1157507_10151860440488745_679128594_n.jpg?oh=6615036f14e2c8ede4a0dadc92c99f95&oe=58CBC191',
	link:'https://www.facebook.com/photo.php?fbid=10151860440488745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nutty black',
	pct:3.9,
	desc:'Not as awful as expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173809_10151860441013745_1894761382_n.jpg?oh=d536c605cd8faf95130523a778337eb4&oe=5891C223',
	link:'https://www.facebook.com/photo.php?fbid=10151860441013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ESB',
	pct:5.5,
	desc:'A tangy off flavour. Like someone dipped their balls in the keg',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/999589_10151860441473745_1970036928_n.jpg?oh=e0190b63f1cb43f612e79826d2df70b5&oe=58BE27EA',
	link:'https://www.facebook.com/photo.php?fbid=10151860441473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hylder Blonde',
	pct:4.2,
	desc:'A little bit too much flower',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542217_10151860441663745_480799893_n.jpg?oh=89091ec41e6ac0709580a76587cca29c&oe=58CAAE1D',
	link:'https://www.facebook.com/photo.php?fbid=10151860441663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The big inflatable cowboy hat',
	pct:10.5,
	desc:'Flavourful without being too strong',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970683_10151860442323745_1389595186_n.jpg?oh=7cb2dafb02ec96176e7f57aa364d7e7e&oe=58931B51',
	link:'https://www.facebook.com/photo.php?fbid=10151860442323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Long hammer IPA',
	pct:5.9,
	desc:'Smash the hammer!',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173745_10151860442463745_736142328_n.jpg?oh=10b9b70a0e8e69e7b0591aea7e7eb2c8&oe=58D20374',
	link:'https://www.facebook.com/photo.php?fbid=10151860442463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage light ale',
	pct:3.2,
	desc:'Why did I even buy this tiny weak beer?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1003533_10151860443063745_1669379479_n.jpg?oh=7d580e82c4c1693ce233a4378229d945&oe=58953BA9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden Hells',
	pct:4.6,
	desc:'Not too bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1469967_10152147735243745_1919940570_n.jpg?oh=e91a462e792ecc88358e029db648ba62&oe=58D43AA0',
	link:'https://www.facebook.com/photo.php?fbid=10152147735243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden gentlemans wit',
	pct:4.3,
	desc:'I remember nothing about this beer. Must have been a good night',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176312_10151860443023745_856797078_n.jpg?oh=004541b8e83d4ea646c86b33a64517e1&oe=58D0019D',
	link:'https://www.facebook.com/photo.php?fbid=10151860443023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point pale ale',
	pct:5.4,
	desc:'Pretty mundane',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185998_10151860443158745_158593717_n.jpg?oh=10ab9da2f1cb60a55fb82ebec2772849&oe=58CFECE9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caribbean scene',
	pct:null,
	desc:'Not worth getting a second one',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185783_10151860443868745_1132451963_n.jpg?oh=723db60e554fe1f0a4d13dc1794d0a4a&oe=58D07681',
	link:'https://www.facebook.com/photo.php?fbid=10151860443868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cusquena',
	pct:5.0,
	desc:'Goes badly with fajitas',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555522_10151860443808745_1012342431_n.jpg?oh=056a90e0cc411387f5c35939a34c03d1&oe=58C77591',
	link:'https://www.facebook.com/photo.php?fbid=10151860443808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Utenos classic',
	pct:5.2,
	desc:'Stock standard beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1175115_10151860444553745_1702342354_n.jpg?oh=93eae01df2e56e425949c7f5f0415dc4&oe=5889802F',
	link:'https://www.facebook.com/photo.php?fbid=10151860444553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk',
	pct:4.8,
	desc:'An all round average beer. But with a cool bottle',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185029_10151860445333745_1637600629_n.jpg?oh=9a02551afcf02af6544aba4c38562b34&oe=58C99178',
	link:'https://www.facebook.com/photo.php?fbid=10151860445333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu',
	pct:4.3,
	desc:'Windmills are awesome',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1235059_10151929073993745_1887796007_n.jpg?oh=f1cb7fdaf9f65b185c07a19e72ca5cdd&oe=58D028E4',
	link:'https://www.facebook.com/photo.php?fbid=10151929073993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Baltika 7',
	pct:5.5,
	desc:'Really hard to drink',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65647_10151694536248745_526286442_n.jpg?oh=4d6c205fd08068659ff7f58fc728dc04&oe=58D115AD',
	link:'https://www.facebook.com/photo.php?fbid=10151694536248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk Temhoe',
	pct:4.7,
	desc:'The purple label made me expect poison. But it\'s actually a decent beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1390556_10152001638343745_1466512598_n.jpg?oh=a09d935e682a3bd18bb2cdebd01d1079&oe=5889FBE6',
	link:'https://www.facebook.com/photo.php?fbid=10152001638343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'злашен даб',
	pct:4.5,
	desc:'An interesting flavour, but not one I really like',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9699_10151602279038745_1469910721_n.jpg?oh=361ad88416a7a9e0d36503baa393dbaf&oe=588A5AC9',
	link:'https://www.facebook.com/photo.php?fbid=10151602279038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zelta premium',
	pct:5.2,
	desc:'I like where this beer is going',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1151012_10151888666008745_854242907_n.jpg?oh=d2142fdc8f494fa0fe44434725e8b77d&oe=58C533D1',
	link:'https://www.facebook.com/photo.php?fbid=10151888666008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cesu premium',
	pct:5.2,
	desc:'A bit wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1174664_10151888665988745_1905015784_n.jpg?oh=55168c55bad58feb3e208045e9384f7e&oe=58925802',
	link:'https://www.facebook.com/photo.php?fbid=10151888665988745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams southwold innovation',
	pct:6.7,
	desc:'A nice pale but just a bit of wrongness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238809_10151888666788745_1212313484_n.jpg?oh=1e37695d4efca5095e755ddeb78e78f1&oe=58D10273',
	link:'https://www.facebook.com/photo.php?fbid=10151888666788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Czech Norris',
	pct:6.7,
	desc:'Not the roundhouse kick of awesome I expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176212_10151888667313745_1242801185_n.jpg?oh=f3c3d69ca2678386156f4c879a52f554&oe=58D2D56A',
	link:'https://www.facebook.com/photo.php?fbid=10151888667313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'F.X. Buckley',
	pct:3.8,
	desc:'Ges ugly really quick',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1174601_10151888668333745_2024277149_n.jpg?oh=562c913a6e7f4184fec2ee79f9537668&oe=58CFB44D',
	link:'https://www.facebook.com/photo.php?fbid=10151888668333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris pilzens',
	pct:4.2,
	desc:'Lacks any real flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/1238101_10151888670483745_714083820_n.jpg?oh=81e77042eed9644f3963dc7e791597df&oe=5891974A',
	link:'https://www.facebook.com/photo.php?fbid=10151888670483745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Butauty',
	pct:5.5,
	desc:'Malty crapness. Why make such a big bottle for a crap beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185491_10151888671543745_1781451969_n.jpg?oh=a34c22d56265535b1d7c9c2aab01e662&oe=588EDB66',
	link:'https://www.facebook.com/photo.php?fbid=10151888671543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brakspear Oxford gold',
	pct:4.6,
	desc:'Did not deliver what the label promised',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/76895_10151929068333745_1039559147_n.jpg?oh=315bdf45a4362c97a6469a55ee40cb57&oe=58C8B157',
	link:'https://www.facebook.com/photo.php?fbid=10151929068333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Betty Stogs',
	pct:4.0,
	desc:'Tastes pretty much as you would expect from the name',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13890_10151929069588745_726766227_n.jpg?oh=23681f7adde538e09e605d57ed2d40de&oe=58C52DF6',
	link:'https://www.facebook.com/photo.php?fbid=10151929069588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Golden Ale',
	pct:4.7,
	desc:'One of those brewing companies that thinks traditional means better',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/37805_10151929069633745_1476415530_n.jpg?oh=9689b933fda57a1f2f0c228516ea251f&oe=58912995',
	link:'https://www.facebook.com/photo.php?fbid=10151929069633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Best Bitter',
	pct:3.7,
	desc:'I\'ll never understand what people see in a bitter',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233387_10151929070703745_1019382535_n.jpg?oh=ad807e3a5c6bed6152b31ea34e9a7d66&oe=5888AFBB',
	link:'https://www.facebook.com/photo.php?fbid=10151929070703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Mild',
	pct:3.7,
	desc:'This company seems incapable of making a good beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185966_10151929070968745_2126426266_n.jpg?oh=28c81dd0a6193df82e44e14457a45218&oe=58D51E1D',
	link:'https://www.facebook.com/photo.php?fbid=10151929070968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s ruby red ale',
	pct:4.3,
	desc:'Probably the best of a bad bunch',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233970_10151929073588745_1740349447_n.jpg?oh=48407b0893691fbdd233548c501a902a&oe=5893D8E8',
	link:'https://www.facebook.com/photo.php?fbid=10151929073588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ekstra',
	pct:5.2,
	desc:'So much better than expected considering it\'s an extra',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1146736_10151860444768745_544406358_n.jpg?oh=8e2e0cb44829b1232b884e87830e95ec&oe=58BF83FF',
	link:'https://www.facebook.com/photo.php?fbid=10151860444768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys',
	pct:4.6,
	desc:'Finally found some Lithuanian beer. A very smooth lager',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185772_10151860443958745_1792378907_n.jpg?oh=3b980a98d07189261aeae1c6a7b68dc7&oe=58BF9B58',
	link:'https://www.facebook.com/photo.php?fbid=10151860443958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltijos',
	pct:5.8,
	desc:'A little bit too bitter for my taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1208565_10151929069708745_1120619541_n.jpg?oh=bb28d3d31c1078ec4c0191c9b6aeff53&oe=58C121E9',
	link:'https://www.facebook.com/photo.php?fbid=10151929069708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltas white',
	pct:5.0,
	desc:'Can\'t get over the bite of wheat beers',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/563535_10151929074098745_379750960_n.jpg?oh=70e6cd24aa8a5db42e7c189b7242cd38&oe=58C08182',
	link:'https://www.facebook.com/photo.php?fbid=10151929074098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys old port ale',
	pct:5.6,
	desc:'A lot smoother than expected',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1234836_10152293116538745_626754395_n.jpg?oh=015787c5078b1b44272585e76089db74&oe=58D06C42',
	link:'https://www.facebook.com/photo.php?fbid=10152293116538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Luksus',
	pct:5.2,
	desc:'Yep, it’s a lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1484218_10152147730358745_1572080029_n.jpg?oh=e8682a165f8371fea58675263e7f7ac9&oe=58C51E47',
	link:'https://www.facebook.com/photo.php?fbid=10152147730358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kanapinis',
	pct:5.3,
	desc:'Malty goodness in a great bottle',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1186120_10151860445063745_1601572346_n.jpg?oh=f5db7fc79063bef6e724d34f273f208c&oe=5894D44E',
	link:'https://www.facebook.com/photo.php?fbid=10151860445063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keptinis',
	pct:5.7,
	desc:'Not at all excited by this. Not even a semi',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1240201_10151929073793745_2035177594_n.jpg?oh=a81d821521b99f697570bf228efa785b&oe=58C32C5A',
	link:'https://www.facebook.com/photo.php?fbid=10151929073793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aladaris Gaisais',
	pct:5.0,
	desc:'Another quality baltic beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603023_10152001619908745_1091913425_n.jpg?oh=7b36cdd01f4a29cb8182ded2cabba79e&oe=58C05D02',
	link:'https://www.facebook.com/photo.php?fbid=10152001619908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Porteris',
	pct:6.8,
	desc:'Not a bad porter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1891209_10152293116448745_1394991978_n.jpg?oh=79737cec7faab1c6dab463a08189db70&oe=588B2FFD',
	link:'https://www.facebook.com/photo.php?fbid=10152293116448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas engleman',
	pct:5.2,
	desc:'Unimpressive',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176307_10151888665863745_1280335301_n.jpg?oh=c61806b1ffbcfb8b4717d8bd84c7178e&oe=58D513F2',
	link:'https://www.facebook.com/photo.php?fbid=10151888665863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Bravoro',
	pct:5.2,
	desc:'A little bit wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1236122_10151929070963745_949716381_n.jpg?oh=e36cfeee84b6e61b2c9ced94cc6291e5&oe=58CDA6FD',
	link:'https://www.facebook.com/photo.php?fbid=10151929070963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Jubiliejinis 160',
	pct:5.3,
	desc:'Nice and smooth, and in a cool bottle',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1385338_10152001620008745_462276383_n.jpg?oh=d34de12a6d60114cdc13360de016fc0c&oe=5895E4EC',
	link:'https://www.facebook.com/photo.php?fbid=10152001620008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deviant dales pale ale',
	pct:8,
	desc:'Light for the strength',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/526556_10151929072623745_428217529_n.jpg?oh=1d2184dfb8de06eb72f4baedad75f4f8&oe=58C8CF18',
	link:'https://www.facebook.com/photo.php?fbid=10151929072623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mama\'s Little Yella Pils',
	pct:5.3,
	desc:'An easy drinking pils',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1187248_10151929072773745_1085795541_n.jpg?oh=b268c349ce7a64ce780babf6f3e69dbe&oe=58D1EFD7',
	link:'https://www.facebook.com/photo.php?fbid=10151929072773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'McEwans Export',
	pct:4.5,
	desc:'Not as rubbish as the the can looks',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1384073_10152001619653745_1344996131_n.jpg?oh=e9c6d0bb49a8e3fcb38bd82dfdef3156&oe=58C31D38',
	link:'https://www.facebook.com/photo.php?fbid=10152001619653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cave creek chili beer',
	pct:4.2,
	desc:'A nice balance of chilli and beer. And yes that is a whole chilli in the bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1378394_10152001620853745_543682046_n.jpg?oh=789041aab0c08ecdbdb3b215171edd4e&oe=58D4E1D7',
	link:'https://www.facebook.com/photo.php?fbid=10152001620853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan dubbel',
	pct:6.4,
	desc:'Strong chocolate taste but takes a while to get used to',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/563194_10152001621188745_696002352_n.jpg?oh=2c12ad7718e4c2c38367a02eac38fdfc&oe=58C3AD4A',
	link:'https://www.facebook.com/photo.php?fbid=10152001621188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan strong golden belgian ale',
	pct:8.0,
	desc:'A bit harsh for what I would call a golden ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1497799_10152147732653745_1203656587_n.jpg?oh=ba5ee4d59d90697c45f74302881e2720&oe=58C3FF41',
	link:'https://www.facebook.com/photo.php?fbid=10152147732653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan Quad',
	pct:11.2,
	desc:'One of the strangest beers I’ve tasted. Like trying to cross a lambic with a stout',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1486770_10152147730063745_1162438061_n.jpg?oh=92839b52b8e8707ae7dd022c5e0d1873&oe=58C5B6FD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan single',
	pct:4.8,
	desc:'Nice label, shit beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1376370_10152001622893745_406801645_n.jpg?oh=8b3bc3f54b13f0cd1dfb7d8afa6a79f1&oe=58C33274',
	link:'https://www.facebook.com/photo.php?fbid=10152001622893745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The norseman',
	pct:5.0,
	desc:'An average ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1379331_10152001623128745_1319626583_n.jpg?oh=3ec94a9294dc0a3ca0ea7dc23b5e7e8a&oe=58BE2428',
	link:'https://www.facebook.com/photo.php?fbid=10152001623128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trident',
	pct:5.0,
	desc:'Like a red Guinness gone wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381987_10152001622888745_1624478487_n.jpg?oh=5e8005d1f1ae0094a8e355e42777fff9&oe=5887DABF',
	link:'https://www.facebook.com/photo.php?fbid=10152001622888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis Grand Select',
	pct:5.4,
	desc:'A bit of a hobo taste, but not terrible',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381183_10152001624088745_284273692_n.jpg?oh=87c32cdf9ec0e8f6587ee00a13bf2284&oe=5892067F',
	link:'https://www.facebook.com/photo.php?fbid=10152001624088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batemans Combined Harvest',
	pct:4.7,
	desc:'I\'m amazed that this doesn\'t taste like an absolute mess',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1383443_10152001624583745_873432820_n.jpg?oh=f5e16ef9eba071c143f2fc4305ded0cc&oe=5887F652',
	link:'https://www.facebook.com/photo.php?fbid=10152001624583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Dumaku',
	pct:null,
	desc:'Pretty nice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381516_10152001638348745_1868079701_n.jpg?oh=dc04d57a33751332f1324bc0bd260a5e&oe=58BEA2AC',
	link:'https://www.facebook.com/photo.php?fbid=10152001638348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Post road pumpkin ale',
	pct:5.0,
	desc:'Tastes like christmas',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1512830_10152147731138745_971828677_n.jpg?oh=746d06229b79553af64a2af80dad1ec4&oe=5888410A',
	link:'https://www.facebook.com/photo.php?fbid=10152147731138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burning Sky Aurora',
	pct:5.6,
	desc:'Not too bitter with a mild hoppy taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1476223_10152147732298745_333484722_n.jpg?oh=440553f8c3d669be9cee3867919ae272&oe=5887FA07',
	link:'https://www.facebook.com/photo.php?fbid=10152147732298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewmeister Armageddon',
	pct:65,
	desc:'Was supposedly the strongest beer in the world but that is a complete lie. This beer is max 20% abv. I\'ve never been lied too this badly in my life',
	score:0,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1521885_10152147732818745_1092668016_n.jpg?oh=d3f8bf5f02cc8273555d413f69fe72e7&oe=5892F7C3',
	link:'https://www.facebook.com/photo.php?fbid=10152147732818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Blonde',
	pct:4.8,
	desc:'Kind of tasty lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579360_10152147733223745_1201965133_n.jpg?oh=5a76ffe702b47f1d3000f0e4bcedb24e&oe=58C1AE14',
	link:'https://www.facebook.com/photo.php?fbid=10152147733223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harvey\'s Kiss',
	pct:4.8,
	desc:'Kind of warming. Better than the label suggests',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1482844_10152147733228745_1616012407_n.jpg?oh=92a628c01ba08035f3a406d283de075c&oe=588EEF8B',
	link:'https://www.facebook.com/photo.php?fbid=10152147733228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arany Aszok',
	pct:4.3,
	desc:'Easy drinking lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1458701_10152147733363745_127688331_n.jpg?oh=98c50000a8406852bba4ae47e892514f&oe=588BC53A',
	link:'https://www.facebook.com/photo.php?fbid=10152147733363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Borsodi',
	pct:4.6,
	desc:'Not much flavour at all',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513298_10152147733513745_1123080804_n.jpg?oh=c0a13831a3026016c20cdc2df4409aa2&oe=588D27D7',
	link:'https://www.facebook.com/photo.php?fbid=10152147733513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dreher',
	pct:5.2,
	desc:'Hungarian standard',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1479455_10152147733863745_266822035_n.jpg?oh=41f8d5608be1dc03126de53fc73c6951&oe=5892BC68',
	link:'https://www.facebook.com/photo.php?fbid=10152147733863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zlaty bazant',
	pct:5.0,
	desc:'A tasteless Slovakian lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1507155_10152147733883745_1859906756_n.jpg?oh=63169cbe5647f63e2f722879227276f6&oe=58C2A7D8',
	link:'https://www.facebook.com/photo.php?fbid=10152147733883745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Soproni',
	pct:4.5,
	desc:'Lager. Nothing more to say',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513718_10152147734013745_2012942673_n.jpg?oh=51dce5ddf2804c9a3346b6b3fccde334&oe=5890F61A',
	link:'https://www.facebook.com/photo.php?fbid=10152147734013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel smieth organic lager',
	pct:5.0,
	desc:'Nothing special',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1526342_10152147734658745_1378507161_n.jpg?oh=5d1e29f9cf940dc1a6b322da3e34efa1&oe=58C679BD',
	link:'https://www.facebook.com/photo.php?fbid=10152147734658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nicholson\'s pale ale',
	pct:4.0,
	desc:'A slightly tangly pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513323_10152147734918745_1271199559_n.jpg?oh=6daa8528ac14b1b876d676717250812d&oe=58C91B65',
	link:'https://www.facebook.com/photo.php?fbid=10152147734918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meteor',
	pct:4.0,
	desc:'Normal London lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1012810_10152147735373745_584437479_n.jpg?oh=0abc22dfebcb0862174bc70055705679&oe=58BF773F',
	link:'https://www.facebook.com/photo.php?fbid=10152147735373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Best',
	pct:4.0,
	desc:'Plain lager. Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1520804_10152147735848745_1884810076_n.jpg?oh=39586e69f5f5f1517334f26a5203deec&oe=58BFBFF4',
	link:'https://www.facebook.com/photo.php?fbid=10152147735848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknot Queboid',
	pct:8.0,
	desc:'A nice strong flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1520670_10152147736383745_1604295852_n.jpg?oh=9edbf3d11ba359a9c989ca6e2547492f&oe=58C3B417',
	link:'https://www.facebook.com/photo.php?fbid=10152147736383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harveys Georgian Dragon',
	pct:4.7,
	desc:'A mild ruby ale with a slightly sweet taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1531869_10152147736428745_246396192_n.jpg?oh=6cca21eb1d011bfc7ab46177d32e4ba0&oe=58C30FD8',
	link:'https://www.facebook.com/photo.php?fbid=10152147736428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monty\'s ding dong',
	pct:4.4,
	desc:'Light and festive and drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911822_10152280800298745_1797219050_n.jpg?oh=22553f28768afcbac534a48fe7e6f6e3&oe=588FE95D',
	link:'https://www.facebook.com/photo.php?fbid=10152280800298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Hop Studio Noel',
	pct:4.5,
	desc:'Some very strange hoppy flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1618610_10152280800288745_1862858046_n.jpg?oh=af5725e34ae1780de011e9a34498a15e&oe=58D04145',
	link:'https://www.facebook.com/photo.php?fbid=10152280800288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Woodlands Christmas special',
	pct:4.8,
	desc:'Very good for a British ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1623661_10152293086658745_850862784_n.jpg?oh=227ed57ef89733da62861f3884c5c0af&oe=58D24577',
	link:'https://www.facebook.com/photo.php?fbid=10152293086658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Uncle Scrooge',
	pct:4.5,
	desc:'No one was being cheap when making this one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1966869_10152293086653745_1230920015_n.jpg?oh=6a4ded3cfcd3badd71af0358bb995db3&oe=58D03428',
	link:'https://www.facebook.com/photo.php?fbid=10152293086653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheddar ales festive totty',
	pct:4.7,
	desc:'Not sure how totty applies in this context',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988380_10152293086573745_484773090_n.jpg?oh=18c34a42eb1b19136d245d54045de871&oe=5895A7A3',
	link:'https://www.facebook.com/photo.php?fbid=10152293086573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknott azimuth IPA',
	pct:5.8,
	desc:'An ok IPA',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1621734_10152293086743745_608289512_n.jpg?oh=777bb61ad9d50b06664a3fb2aa0f4068&oe=58BF96D1',
	link:'https://www.facebook.com/photo.php?fbid=10152293086743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog Atlantic lager',
	pct:4.7,
	desc:'Fruity and mild',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/993032_10152293086873745_958885686_n.jpg?oh=e46edbcf0991143e62aee7ef2c05955e&oe=5886A428',
	link:'https://www.facebook.com/photo.php?fbid=10152293086873745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog snake dog',
	pct:7.1,
	desc:'A little harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1982179_10152293086923745_434038155_n.jpg?oh=72f4f9d74ce078a76dd854d5a0812140&oe=5894E795',
	link:'https://www.facebook.com/photo.php?fbid=10152293086923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe Triple',
	pct:8.5,
	desc:'Stronger and nicer than the standard',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1625649_10152280800668745_1746325328_n.jpg?oh=c444afb5ae869ab9fcf7693525f86c32&oe=58D22186',
	link:'https://www.facebook.com/photo.php?fbid=10152280800668745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe dark',
	pct:7.5,
	desc:'More of a fuller Leffe than a dark beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902725_10152293087758745_569610046_n.jpg?oh=2acbea6439ab306dade4e105b7fa8d89&oe=58922461',
	link:'https://www.facebook.com/photo.php?fbid=10152293087758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe',
	pct:null,
	desc:'A strong Belgian taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/398737_10151396305948745_940904591_n.jpg?oh=16bb5a4eb7f3479d3a561fbe560a73fb&oe=5893AC1C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steen Brugge',
	pct:5.0,
	desc:'Not the biggest fan of this wheat beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911696_10152280800918745_1929684638_n.jpg?oh=e5e784d76132725dbdf33389781b1a89&oe=58D49B9F',
	link:'https://www.facebook.com/photo.php?fbid=10152280800918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium Christmas',
	pct:10.0,
	desc:'Stronger than the originals and a little less unique',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1623626_10152280800643745_1481530083_n.jpg?oh=1391fe53c1da556ba70da97eedb7785a&oe=588CBC3C',
	link:'https://www.facebook.com/photo.php?fbid=10152280800643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium nocturnum',
	pct:8.5,
	desc:'Not as nice as the tremens',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1901197_10152280800558745_1902963784_n.jpg?oh=1ade55f8cdad899f2fca5a4ad2d3d060&oe=58C564B5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Passchendaele',
	pct:5.1,
	desc:'A lager with a Belgian ale flavour. Very strange',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244_10152293087118745_389678283_n.jpg?oh=6ad44747b010a7d3a1c775044260c7c7&oe=58D07A10',
	link:'https://www.facebook.com/photo.php?fbid=10152293087118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Qantelaar',
	pct:9.0,
	desc:'Very flavoursome but not too sweet. Not worth the €18 I paid though',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1924797_10152293087133745_1742289591_n.jpg?oh=5139d1b5d5a7f748b2caf95f3b391d29&oe=58CB47CC',
	link:'https://www.facebook.com/photo.php?fbid=10152293087133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cookie Beer',
	pct:8.0,
	desc:'Not as much cookie flavour as I was hoping',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1932219_10152280800273745_138064221_n.jpg?oh=77e3b09da28c230ba4c26927b89721b1&oe=58C659A5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St bernardus',
	pct:10,
	desc:'Takes a bit to get used to but smooth after that',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902068_10152293087213745_1501844823_n.jpg?oh=f7683c83dfade396afd89699d69c29c9&oe=58BDF2B9',
	link:'https://www.facebook.com/photo.php?fbid=10152293087213745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm',
	pct:5.4,
	desc:'A mild Belgian beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988803_10152293087318745_73934001_n.jpg?oh=5456add8c65ddd2c72801ab7d15c96a5&oe=58CE26EB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grimbergen blonde',
	pct:6.7,
	desc:'An ok Trappist',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1517454_10152293087538745_1520731799_n.jpg?oh=ce020d013e0a2e7c23b118a00571d3a5&oe=58D438C6',
	link:'https://www.facebook.com/photo.php?fbid=10152293087538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chouffe',
	pct:8.0,
	desc:'Well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911857_10152293087523745_1264067765_n.jpg?oh=8c2706c647e2c10338d3dae730bf7691&oe=58D1E2C8',
	link:'https://www.facebook.com/photo.php?fbid=10152293087523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brugge tripel',
	pct:8.7,
	desc:'Like a lager that warms you up',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1662198_10152293087613745_1851257445_n.jpg?oh=b80e04fef5132c1507817789d088c1a1&oe=58D1F2BB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corsendonk',
	pct:7.5,
	desc:'Not as easy to drink as I was hoping',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1534405_10152147734558745_724921108_n.jpg?oh=ab0dae9999b8aaafef1783392d7e7781&oe=58BE0DD5',
	link:'https://www.facebook.com/photo.php?fbid=10152147734558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fonteinen oude geuze',
	pct:6.0,
	desc:'Not a particularly nice lambic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1382815_10152001621173745_208469765_n.jpg?oh=3c9b4170344e654f8ea048145008ad36&oe=58C4AF25',
	link:'https://www.facebook.com/photo.php?fbid=10152001621173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vedett',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486956_10151296240913745_1196071675_n.jpg?oh=f9b957d8d0b067ca0e71d865a02a27c2&oe=58951C62',
	link:'https://www.facebook.com/photo.php?fbid=10151296240913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carolus classic',
	pct:8.5,
	desc:'Dark but not heavy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1782108_10152293087803745_1558065696_n.jpg?oh=9f460a2f7e51e30b330aae77c57064de&oe=588B7185',
	link:'https://www.facebook.com/photo.php?fbid=10152293087803745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orval',
	pct:6.2,
	desc:'A bit too harsh',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603000_10151798800068745_508626500_n.jpg?oh=28ade094af8ad07ccd48d2c3bef83b10&oe=58CCB503',
	link:'https://www.facebook.com/photo.php?fbid=10151798800068745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pauwel Kwak',
	pct:8,
	desc:'A mild Belgian beer. +1 for the sweet glass',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1521828_10152147734533745_969043237_n.jpg?oh=01bc22c74d482fce24986982a4a89b62&oe=58BDEF9E',
	link:'https://www.facebook.com/photo.php?fbid=10152147734533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duvel',
	pct:8.5,
	desc:'Not as good as when you buy it in Belgium',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/6394_10151428524928745_265167117_n.jpg?oh=94726000ddbd0d90c6645f0b62c1cdd7&oe=58D4287A',
	link:'https://www.facebook.com/photo.php?fbid=10151428524928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Triple karmeliet',
	pct:8.4,
	desc:'I choose this above Delerium',
	score:10,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1654211_10152293087868745_1642505899_n.jpg?oh=289a831fd06cae052c6d4d134512394b&oe=5889F423',
	link:'https://www.facebook.com/photo.php?fbid=10152293087868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Co-operative Czech lager',
	pct:5.0,
	desc:'Piss water',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1976956_10152293116608745_971300903_n.jpg?oh=0918a85d9646854fe2ca5b5d7f2d1d8b&oe=58C21C75',
	link:'https://www.facebook.com/photo.php?fbid=10152293116608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fullers Bengal lancer',
	pct:5.3,
	desc:'A mild IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902717_10152293116728745_604384062_n.jpg?oh=ca4eb46cb36e5eb377540d5ce794233b&oe=5890C065',
	link:'https://www.facebook.com/photo.php?fbid=10152293116728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rivet lager',
	pct:4.7,
	desc:'Cheap Aldi lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1654215_10152293132398745_1156319319_n.jpg?oh=32d8ec070c3a5e5a7810e5af1199055e&oe=588B4BD8',
	link:'https://www.facebook.com/photo.php?fbid=10152293132398745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Itchy green pants cloudy ale',
	pct:4.7,
	desc:'A citrusy ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14516_10152293132388745_1804956545_n.jpg?oh=4fdbac017099c96d7c8a407549ef0156&oe=58BE3AB6',
	link:'https://www.facebook.com/photo.php?fbid=10152293132388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beez neez',
	pct:4.7,
	desc:'Nicer than other wheat beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1689028_10152293132393745_2076387915_n.jpg?oh=c56f456a382bbfc879dd70d2cefc2b08&oe=588F454F',
	link:'https://www.facebook.com/photo.php?fbid=10152293132393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big helga',
	pct:4.7,
	desc:'Not at all like a Munich beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911736_10152293132828745_389724707_n.jpg?oh=10ab830693eb4d601145d9135334cacb&oe=58952405',
	link:'https://www.facebook.com/photo.php?fbid=10152293132828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures original pilsner',
	pct:null,
	desc:'Doesn\'t have the flavour of their other brews',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1959613_10152293132738745_13261275_n.jpg?oh=a8f0e9564eac75b850d4472697887a31&oe=58D3C6A0',
	link:'https://www.facebook.com/photo.php?fbid=10152293132738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s real ale',
	pct:null,
	desc:'Strong ale flavour in a lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1797480_10152293132838745_183692179_n.jpg?oh=b4c5280420c1f564ac14e6ce8e53a68d&oe=58D05CE7',
	link:'https://www.facebook.com/photo.php?fbid=10152293132838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone and wood pacific ale',
	pct:null,
	desc:'Very nice',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1947926_10152293132973745_485396127_n.jpg?oh=9becf9903d678a16770b1d9d0d0af59d&oe=5893A521',
	link:'https://www.facebook.com/photo.php?fbid=10152293132973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s angry man',
	pct:5.0,
	desc:'Pretty good',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1975034_10152293133088745_313669023_n.jpg?oh=0b0bce72de5b8a11eb83269f83cf741f&oe=58CCBFB4',
	link:'https://www.facebook.com/photo.php?fbid=10152293133088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s whale ale',
	pct:4.5,
	desc:'The smell seems wrong to me since it\'s a wheat beer but the flavour is ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1622815_10152293133083745_1090580214_n.jpg?oh=84f7adaaff42126d8d216ad698495a73&oe=58952650',
	link:'https://www.facebook.com/photo.php?fbid=10152293133083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hopinator',
	pct:7.5,
	desc:'Hoppy as promised',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/577380_10152293133158745_1128439575_n.jpg?oh=49aa8d44299f5de1dfd2c4007d9f10b0&oe=58921CB5',
	link:'https://www.facebook.com/photo.php?fbid=10152293133158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brookvale union ginger beer',
	pct:null,
	desc:'Sweet sweet ginger',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1796708_10152293133278745_1592031312_n.jpg?oh=202b5bbf39ea788923bb6bf43ca17946&oe=58C66005',
	link:'https://www.facebook.com/photo.php?fbid=10152293133278745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bakalar',
	pct:null,
	desc:'A mild beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1620416_10152293133463745_1571056383_n.jpg?oh=1719b331d664e9c6e90023c40b8ee086&oe=58BF9A0A',
	link:'https://www.facebook.com/photo.php?fbid=10152293133463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Minimum chips',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1981912_10152293133693745_209766969_n.jpg?oh=26ee2f68e9aebd1ad8af8f1c13066778&oe=58D474C0',
	link:'https://www.facebook.com/photo.php?fbid=10152293133693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aguila',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1962592_10152293133843745_1037481465_n.jpg?oh=6c4b1ed60d26b186ddd99835fae7f939&oe=5895FF9C',
	link:'https://www.facebook.com/photo.php?fbid=10152293133843745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The grifter pale ale',
	pct:null,
	desc:'A nice pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1939940_10152293133933745_1195913989_n.jpg?oh=a416ebc69bf47bdbad4b024c4e059abf&oe=58CA1AF7',
	link:'https://www.facebook.com/photo.php?fbid=10152293133933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s pale ale',
	pct:4.6,
	desc:'Not at all a pale ale, just a crappy lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1234276_10152327616288745_1383768960_n.jpg?oh=0b129f87f9ff7e88bce97e328c7c0adc&oe=588F1021',
	link:'https://www.facebook.com/photo.php?fbid=10152327616288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale IPA',
	pct:5.5,
	desc:'Sweater than a normal IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1601320_10152327616293745_1926213057_n.jpg?oh=3d2cd5e0b1243d617fdf0e8a1c970849&oe=5891CCC4',
	link:'https://www.facebook.com/photo.php?fbid=10152327616293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zamkowe',
	pct:5.6,
	desc:'An average polish beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1148905_10152327616358745_1369255120_n.jpg?oh=16942cbe7dd495af432ca550b83a8f99&oe=58CBBA9B',
	link:'https://www.facebook.com/photo.php?fbid=10152327616358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road beechworth pale ale',
	pct:4.8,
	desc:'a nicely hopped pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920508_10152327616563745_674556830_n.jpg?oh=c25cdc26c8d75db046ecb9cc2c05b523&oe=588C02C8',
	link:'https://www.facebook.com/photo.php?fbid=10152327616563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lucky',
	pct:4.8,
	desc:'A little bit metallic',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1240436_10152327616598745_898539470_n.jpg?oh=898b632b41114bd2337f96f9224ad9a9&oe=58C4E5E7',
	link:'https://www.facebook.com/photo.php?fbid=10152327616598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray’s rudeboy',
	pct:4.8,
	desc:'Not quite sure what this beer is going for',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1506399_10152327616573745_36221798_n.jpg?oh=0c9b870a0f2e82a1eb5cb960e610084d&oe=58932DB5',
	link:'https://www.facebook.com/photo.php?fbid=10152327616573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viking',
	pct:4.4,
	desc:'An ok pilsner',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1948233_10152327616743745_932399934_n.jpg?oh=9616c1e028bd9000bb01728bff8b7c43&oe=58BFE888',
	link:'https://www.facebook.com/photo.php?fbid=10152327616743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines stout',
	pct:5.1,
	desc:'A mild easy drinking stout',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1503434_10152327617153745_1770406360_n.jpg?oh=841ce53b2dc85bc94d686d29ec9b4c19&oe=58BF2383',
	link:'https://www.facebook.com/photo.php?fbid=10152327617153745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tui',
	pct:4.0,
	desc:'A cheap NZ lager without much flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/971710_10152327616993745_1470932463_n.jpg?oh=ca9595b6e00da25503d5c43ca10b3a04&oe=58CB3E49',
	link:'https://www.facebook.com/photo.php?fbid=10152327616993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruby Tuesday',
	pct:4.7,
	desc:'A nice well balanced amber',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10003998_10152327617233745_190591734_n.jpg?oh=f3334be9976e33f93aa10dccafaa7922&oe=5890A5AC',
	link:'https://www.facebook.com/photo.php?fbid=10152327617233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little ripper',
	pct:4.7,
	desc:'A slightly zesty lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1958010_10152327617388745_1928464789_n.jpg?oh=041cdea9ee89e392d2b1a472f8850c04&oe=5890B298',
	link:'https://www.facebook.com/photo.php?fbid=10152327617388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton mid',
	pct:3.5,
	desc:'Not quite as nice as a draught and with less alcohol',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1509668_10152327617473745_370150087_n.jpg?oh=e258e1a7420a320f9b90d642e81fc2c7&oe=588A9A3D',
	link:'https://www.facebook.com/photo.php?fbid=10152327617473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord nelson Anileation',
	pct:5.4,
	desc:'A beer crossed with a coffee',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10003507_10152327617578745_898249905_n.jpg?oh=5fd1810624dc4c9c324e349fe9071e09&oe=58D1AA50',
	link:'https://www.facebook.com/photo.php?fbid=10152327617578745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Hop Thief',
	pct:null,
	desc:'Well hopped',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1898087_10152327617588745_1756511326_n.jpg?oh=d2448cd397580bcc423171566bc88916&oe=58895DEB',
	link:'https://www.facebook.com/photo.php?fbid=10152327617588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire The Constable',
	pct:null,
	desc:'Like a lovely lightly hopped IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1239035_10152327617748745_242091326_n.jpg?oh=98cf43b16437d0e3008207dc51e0b466&oe=58C6D8B0',
	link:'https://www.facebook.com/photo.php?fbid=10152327617748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Australian brewery pale ale',
	pct:4.8,
	desc:'A slightly bitter pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10341507_10152425240228745_8265904163887562785_n.jpg?oh=6afa9ce2932185c7489a5718a98d5787&oe=58935C3F',
	link:'https://www.facebook.com/photo.php?fbid=10152425240228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Supa fly rye IPA',
	pct:5.8,
	desc:'A mild and interesting IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1506594_10152425240263745_7813835679026139769_n.jpg?oh=5b9b6399ef15769c3da629497c738f29&oe=58877673',
	link:'https://www.facebook.com/photo.php?fbid=10152425240263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holland import',
	pct:4.8,
	desc:'A cheap lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10154146_10152425240233745_4967152943053850733_n.jpg?oh=9948fb37e777b7488f374a86af667a67&oe=588FF560',
	link:'https://www.facebook.com/photo.php?fbid=10152425240233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh brewing Co 28 Pale Ale',
	pct:4.8,
	desc:'A little bit too bitter for a pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10304714_10152425240513745_4080589260215688130_n.jpg?oh=c368894ab0e88ced6b03fecd42c61383&oe=58CB9979',
	link:'https://www.facebook.com/photo.php?fbid=10152425240513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Redtrolley ale',
	pct:5.8,
	desc:'A malty ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10314565_10152425240463745_1300237400658400717_n.jpg?oh=52cbd62ab0e98174d60322e1f59d38d8&oe=58C3E658',
	link:'https://www.facebook.com/photo.php?fbid=10152425240463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Opera bar pale ale',
	pct:null,
	desc:'Flavourless',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10154926_10152425240573745_3819970704734320665_n.jpg?oh=7ca2ee3910410958112fee962a8d08ea&oe=58CA44CD',
	link:'https://www.facebook.com/photo.php?fbid=10152425240573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bingo wings',
	pct:5.0,
	desc:'A zesty wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10155860_10152425240628745_5749004272951603123_n.jpg?oh=b5c7ecf755280396db9c99b8beb9227c&oe=5888AC92',
	link:'https://www.facebook.com/photo.php?fbid=10152425240628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dundee India Pale Ale',
	pct:6.3,
	desc:'Not a bad IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10342507_10152425240783745_250399849084331418_n.jpg?oh=f319071c74acfe62877e3ac8c64718be&oe=58C1FC9A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bee Sting',
	pct:5.0,
	desc:'A nice level of sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10168130_10152425240878745_5742462968298954155_n.jpg?oh=c70c1f11785f71ff33e91326f6582b5d&oe=58D2032A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stefano’s pilsner',
	pct:4.7,
	desc:'A good pilsner but far from perfect',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10301357_10152425240938745_5491397456344059410_n.jpg?oh=ff404c125a98c936dc16fe1e8c134b07&oe=58956B00',
	link:'https://www.facebook.com/photo.php?fbid=10152425240938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Stow Away IPA',
	pct:5.6,
	desc:'A fairly mild IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10330353_10152425241028745_6945284873150801200_n.jpg?oh=02c7b9bf777e970b416d3ba75fc56a5b&oe=58C6B0F4',
	link:'https://www.facebook.com/photo.php?fbid=10152425241028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Mango Beer',
	pct:4.5,
	desc:'Kind of tangy but can’t taste the mango',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10294225_10152425241078745_7192155480482123122_n.jpg?oh=e3d26b41b6e8f96f3adde51faaab8805&oe=58C177A3',
	link:'https://www.facebook.com/photo.php?fbid=10152425241078745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s pearlers pale ale',
	pct:4.5,
	desc:'A very well balanced pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10459893_10152534289713745_6169618167007300448_n.jpg?oh=6a5e0ed0f9697e67a8ae2704bc0b4146&oe=58CA61ED',
	link:'https://www.facebook.com/photo.php?fbid=10152534289713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos equis lager especial',
	pct:4.5,
	desc:'A very easy drinking lager. Good for a hot day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10433892_10152534289243745_2400323308581320924_n.jpg?oh=7f232ddcfcc63568b4ab4cc39fb2301d&oe=58CB220B',
	link:'https://www.facebook.com/photo.php?fbid=10152534289243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale Drk',
	pct:4.5,
	desc:'Quite mild for a dark ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10373527_10152534289553745_1636959852017465130_n.jpg?oh=04a5b7832d6616320f462452e389b160&oe=58CA1196',
	link:'https://www.facebook.com/photo.php?fbid=10152534289553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Suntory MD',
	pct:5.0,
	desc:'A slightly strange lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10426644_10152534289858745_1229530734473771808_n.jpg?oh=f39edfb81e5979a25388482aec8a9ebf&oe=58CF2973',
	link:'https://www.facebook.com/photo.php?fbid=10152534289858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s bohemian pilsner',
	pct:5.0,
	desc:'Smooth with a nice finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462530_10152534290193745_4497356221968859858_n.jpg?oh=339f885c5885fc2104071a5398590b5f&oe=58CF7E2A',
	link:'https://www.facebook.com/photo.php?fbid=10152534290193745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redback beer',
	pct:4.7,
	desc:'Reminds me of some belgian beers but not nearly as good',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10488390_10152534290478745_4494982556291999381_n.jpg?oh=92a29c96bf685ca093277252b8acda7f&oe=58D451D8',
	link:'https://www.facebook.com/photo.php?fbid=10152534290478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bintang',
	pct:null,
	desc:'Just like other easy drinking beers from the region',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10398080_10152534290653745_1374069162252942719_n.jpg?oh=ad77bd05e893ca8a4aac0830ae938af1&oe=58D21227',
	link:'https://www.facebook.com/photo.php?fbid=10152534290653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cats shank kolsch',
	pct:4.6,
	desc:'Good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10491226_10152534290818745_8400776013361245843_n.jpg?oh=3de5544431c2151e3a93f0be2dd61b7f&oe=58CC661F',
	link:'https://www.facebook.com/photo.php?fbid=10152534290818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura brewery honey wheat',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10393575_10152534291018745_4203149759533116955_n.jpg?oh=de59003ce2cd7043696aaca62156a7cc&oe=58C0F8BF',
	link:'https://www.facebook.com/photo.php?fbid=10152534291018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Roger\'s beer',
	pct:3.8,
	desc:'A lager with a bit of a tang',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10482595_10152534291158745_997791426307345458_n.jpg?oh=3e92edb2b3eca6e1a94d9deaa5a38c6d&oe=58D07077',
	link:'https://www.facebook.com/photo.php?fbid=10152534291158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'99 not out',
	pct:5.0,
	desc:'Not my kind of beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10441315_10152534300648745_3725590372701097829_n.jpg?oh=83e041373ea8768c7fec086bc0d7ece3&oe=58938F87',
	link:'https://www.facebook.com/photo.php?fbid=10152534300648745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral sly fox',
	pct:4.7,
	desc:'A nice pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10470597_10152534300708745_7685915012921086968_n.jpg?oh=dd38e1e286f11c5b7ef605e1376e63b9&oe=5889D38A',
	link:'https://www.facebook.com/photo.php?fbid=10152534300708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat steam ale',
	pct:4.5,
	desc:'Could go for a case is this',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10390115_10152534300713745_5030138459822932747_n.jpg?oh=e89e6c21c550ad059afef89af421aa29&oe=588E9B1F',
	link:'https://www.facebook.com/photo.php?fbid=10152534300713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s golden lager',
	pct:5.0,
	desc:'What you want on a summer afternoon',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10456077_10152534300758745_7454080799516274626_n.jpg?oh=8c5d2abafbb6542e523008dbb459b189&oe=58C7D70B',
	link:'https://www.facebook.com/photo.php?fbid=10152534300758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf porter',
	pct:6.2,
	desc:'A little bit harsh for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10488349_10152534301008745_8348994823778686167_n.jpg?oh=1770bcf45d78cedecb876fb5ce00632e&oe=5891ACBE',
	link:'https://www.facebook.com/photo.php?fbid=10152534301008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms lager',
	pct:4.6,
	desc:'Wasn\'t expecting much',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10489819_10152534301208745_6098643900831599392_n.jpg?oh=503834a98cc8d6c1880cd6eab7e77819&oe=58C66CF6',
	link:'https://www.facebook.com/photo.php?fbid=10152534301208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O.k beer Okocim',
	pct:5.6,
	desc:'It\'s ok',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10300636_10152534301428745_4348861457784870364_n.jpg?oh=716c6d776a5c3846756e48cc0b67ee2f&oe=58C79613',
	link:'https://www.facebook.com/photo.php?fbid=10152534301428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood lager',
	pct:4.7,
	desc:'Such a letdown after the pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10408527_10152534301523745_6253327536631057603_n.jpg?oh=f510f2c9c1a4fcf88966a5707f29ee3d&oe=58C4D97B',
	link:'https://www.facebook.com/photo.php?fbid=10152534301523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogbolter',
	pct:5.2,
	desc:'A very nice malty flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10409678_10152534301618745_7574186216754130853_n.jpg?oh=a68f0ec69ba356fcb2c9906b845df9e1&oe=58910404',
	link:'https://www.facebook.com/photo.php?fbid=10152534301618745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saranac pumpkin ale',
	pct:5.1,
	desc:'Not that pumkiny',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10262192_10152534301808745_668535654445517750_n.jpg?oh=6f37485c8d3e2fd6b50fdddec99803a2&oe=58CFC5C4',
	link:'https://www.facebook.com/photo.php?fbid=10152534301808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada kellerweis',
	pct:4.8,
	desc:'A true weisbeer. I don\'t like it',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10411228_10152534305933745_5912326499497887080_n.jpg?oh=a2842326a0c80129d710ed38b2713401&oe=58891A0D',
	link:'https://www.facebook.com/photo.php?fbid=10152534305933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hayward 5000',
	pct:8.0,
	desc:'Cheap and malty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10260031_10152534306073745_6457168517247456226_n.jpg?oh=89b3098ec275f3c2f533badd31cfab63&oe=58C24956',
	link:'https://www.facebook.com/photo.php?fbid=10152534306073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cass fresh',
	pct:4.5,
	desc:'A very refreshing lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10463933_10152534306048745_557216881289649027_n.jpg?oh=788f934af5a59096efa26ff3f6bee4e7&oe=58CE1EAC',
	link:'https://www.facebook.com/photo.php?fbid=10152534306048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade bright ale',
	pct:null,
	desc:'An all round good beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462761_10152534306183745_7006650351412791308_n.jpg?oh=0fad853ab6525f159a61b0f102ee732e&oe=58D3F875',
	link:'https://www.facebook.com/photo.php?fbid=10152534306183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s ginger beer',
	pct:3.5,
	desc:'Very gingery but a little bit too fizzy',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10390539_10152534306248745_2125625178149511710_n.jpg?oh=dd37c9477be90c2c257cec5695f60ce8&oe=58C9AF46',
	link:'https://www.facebook.com/photo.php?fbid=10152534306248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pintail pale ale',
	pct:5.3,
	desc:'Kind of a Pale crossed with an IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10454293_10152534306298745_7768963216409422880_n.jpg?oh=a0f56a4d4ace602d297d4d704fb415af&oe=58C5BC83',
	link:'https://www.facebook.com/photo.php?fbid=10152534306298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orion draft beer',
	pct:5.0,
	desc:'Mild on flavour and smell. A really easy drinking beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13442135_10154200936788745_6034318375592636488_n.jpg?oh=be18f4c9f5651aac0fb6179403ed98eb&oe=58C67E6A',
	link:'https://www.facebook.com/photo.php?fbid=10154200936788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf pale ale',
	pct:5.4,
	desc:'A little bit stouty',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10464035_10152534310338745_1731994487341714039_n.jpg?oh=e6c3d63613dcd2ace980cb8a4158ddff&oe=58C0C072',
	link:'https://www.facebook.com/photo.php?fbid=10152534310338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stiegl',
	pct:4.9,
	desc:'A nice light Austrian beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q87/p480x480/10492027_10152534310618745_1648790094042442309_n.jpg?oh=61e5eaefdc1f093a245b9925a9f283ac&oe=5889DF6F',
	link:'https://www.facebook.com/photo.php?fbid=10152534310618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau dark',
	pct:5.5,
	desc:'Tastes really metallic. Might just have been the taps',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/10462761_10152534310558745_1029523877930371907_n.jpg?oh=a698d134e2f20838c4352262566a0951&oe=58D2DE21',
	link:'https://www.facebook.com/photo.php?fbid=10152534310558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cantina',
	pct:4.6,
	desc:'A refreshing drink',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10475339_10152534310788745_8903624356648511173_n.jpg?oh=5941cb17741baf1e143f0d33c45525d8&oe=58921E83',
	link:'https://www.facebook.com/photo.php?fbid=10152534310788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozlak',
	pct:6.5,
	desc:'Malty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10264926_10152534310928745_6694007916577152263_n.jpg?oh=3b423d7768a010edd8fe0dc57b17b0d1&oe=58CD4660',
	link:'https://www.facebook.com/photo.php?fbid=10152534310928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grain lager',
	pct:null,
	desc:'Like a really mild pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10448190_10152534314748745_6480384213227978387_n.jpg?oh=deee66b0c65d4123069f2416acdf807e&oe=58CDBAA4',
	link:'https://www.facebook.com/photo.php?fbid=10152534314748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Hog IPA',
	pct:5.8,
	desc:'A fairly plain IPA. A good choice if you’ve never had one before',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10411207_10153053839443745_1628460253644107712_n.jpg?oh=7f8e4d2bfc579219d736abd95cd334d5&oe=588D478D',
	link:'https://www.facebook.com/photo.php?fbid=10153053839443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA blanc',
	pct:5.0,
	desc:'Not really sure what this beer is supposed to be. But it’s for olympians',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10410984_10153053839163745_7731660578628364886_n.jpg?oh=09850697e4412bf0b47f25cad8621d53&oe=58894874',
	link:'https://www.facebook.com/photo.php?fbid=10153053839163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redoak organic pale ale',
	pct:4.6,
	desc:'A tasty bev',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10349001_10153053839393745_466238167460813515_n.jpg?oh=371402cb1f8a714ce65d7a028e41f817&oe=588AD46C',
	link:'https://www.facebook.com/photo.php?fbid=10153053839393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Nail Hoppy Summer Ale',
	pct:5.0,
	desc:'Nicely hoppy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945677_10153053839853745_7181309439289874351_n.jpg?oh=c4b1673dad032ee51530aebb12a40137&oe=58D15F3E',
	link:'https://www.facebook.com/photo.php?fbid=10153053839853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Astor Ale',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945640_10153053840143745_2674301376011904832_n.jpg?oh=94eaa2c413ec1644b234479ae947a8dc&oe=58C25423',
	link:'https://www.facebook.com/photo.php?fbid=10153053840143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour bright ale',
	pct:4.2,
	desc:'Not really worth getting again',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10696283_10153053840278745_1486083629761267822_n.jpg?oh=ecd616a5fcf5861d59f15fe3c8f689e3&oe=58CD09B3',
	link:'https://www.facebook.com/photo.php?fbid=10153053840278745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso\'s Smokey Bishop',
	pct:4.7,
	desc:'Not one to rush, not too smokey either',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1601397_10153053840403745_751081432725627058_n.jpg?oh=9eb4a531c9842205200b403ffc04b70e&oe=58BE964F',
	link:'https://www.facebook.com/photo.php?fbid=10153053840403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hooten',
	pct:4.6,
	desc:'Standard easy drinking lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1606916_10153053840543745_4428133737928836956_n.jpg?oh=ef8091f9f35f1cbd89c320e8c6452283&oe=588D3755',
	link:'https://www.facebook.com/photo.php?fbid=10153053840543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jenlain Ambre',
	pct:7.5,
	desc:'Was hoping for so much more than with this giant beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955719_10153053840738745_4377010572225479820_n.jpg?oh=67d17273ba606ca0925c375eb9dbdcba&oe=5891A0E6',
	link:'https://www.facebook.com/photo.php?fbid=10153053840738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snaatch lager',
	pct:null,
	desc:'Probably just a rebrand of some other generic beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1044239_10153053840773745_1317709767507240437_n.jpg?oh=d8989871d46efbd1d474f1c041a33e07&oe=58D18DF4',
	link:'https://www.facebook.com/photo.php?fbid=10153053840773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mexicali',
	pct:4.6,
	desc:'Not giving me what expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955710_10153053851408745_4260669585339690789_n.jpg?oh=7d832181e7ed560cab645e9944874381&oe=58C10663',
	link:'https://www.facebook.com/photo.php?fbid=10153053851408745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown golden ale',
	pct:4.5,
	desc:'Not my favourite golden ale. Only slightly better than regular crown',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10942454_10153053851308745_7500988424962232002_n.jpg?oh=c18492f2691be21fc530d8517900adb8&oe=58D34E5E',
	link:'https://www.facebook.com/photo.php?fbid=10153053851308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Knappstein',
	pct:5.6,
	desc:'A little bit harsh. Wouldn\'t buy again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/10941856_10153053851368745_8703876646395783250_n.jpg?oh=f52460de1bc0c43f6154cc3e069e8605&oe=58C1B206',
	link:'https://www.facebook.com/photo.php?fbid=10153053851368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Surry hills pils',
	pct:null,
	desc:'Doesn\'t really taste like a pils',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10428481_10153053851498745_4687849967086253708_n.jpg?oh=ee42753beec931c09c291462d3d3e2e3&oe=58C1B4C5',
	link:'https://www.facebook.com/photo.php?fbid=10153053851498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rio bravo',
	pct:4.0,
	desc:'A fairly tasteless session beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/1920513_10153053851643745_6150367775548290022_n.jpg?oh=bf2e601679f57d88d76dc2145cca72b9&oe=58C7A0E6',
	link:'https://www.facebook.com/photo.php?fbid=10153053851643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks American pale ale',
	pct:null,
	desc:'A good level of hops',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10954539_10153053851753745_8342401209754067322_n.jpg?oh=84daf3c22ae5e0fca06021d79a6e763d&oe=58C3305C',
	link:'https://www.facebook.com/photo.php?fbid=10153053851753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s black beer',
	pct:5.2,
	desc:'Just a bad tasting beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1979678_10153053851808745_6926811721676931401_n.jpg?oh=9b3d93be70409910b3bad03127b24123&oe=58C5EBB8',
	link:'https://www.facebook.com/photo.php?fbid=10153053851808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cthulhu',
	pct:null,
	desc:'A little bit too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10956041_10153053851963745_7126060138864736213_n.jpg?oh=62474e5fe698e049fe22f858aa4f9431&oe=589488D9',
	link:'https://www.facebook.com/photo.php?fbid=10153053851963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood jasper',
	pct:null,
	desc:'Rich but not right',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955201_10153053852088745_6663961286785907822_n.jpg?oh=b3b9e9ae6f2e4ccbbe383e0ae6f09743&oe=58CF30DF',
	link:'https://www.facebook.com/photo.php?fbid=10153053852088745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat summer ale',
	pct:4.7,
	desc:'A great beer for a nice day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16797_10153053852143745_3087580206529630401_n.jpg?oh=c6d911a15bee78b4509910ef35f38d52&oe=58D553D1',
	link:'https://www.facebook.com/photo.php?fbid=10153053852143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pearl river beer',
	pct:5.3,
	desc:'So so bland',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945514_10153053852213745_6703947153036432278_n.jpg?oh=5faf363e799536462eadd667eaf80f9d&oe=5889934D',
	link:'https://www.facebook.com/photo.php?fbid=10153053852213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kaiserdom',
	pct:4.5,
	desc:'Just a standard cheap german Lager. But such an awesome can',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/10931372_10153055725393745_7415839926658912556_n.jpg?oh=4ece6f11e81dedd6bd52998daff490ea&oe=58C8DF2B',
	link:'https://www.facebook.com/photo.php?fbid=10153055725393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN 5.0',
	pct:5.0,
	desc:'Not as bad as I expected from the price',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1560725_10153055725613745_6302115246934015090_n.jpg?oh=e32c0576562cca8c7d0313ab363fb581&oe=58875A2F',
	link:'https://www.facebook.com/photo.php?fbid=10153055725613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade IPA',
	pct:null,
	desc:'A nice balanced IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10882109_10153055725553745_9030008793027639075_n.jpg?oh=47d0360524de6a3fab1c595b1ebeee05&oe=58C3A3CC',
	link:'https://www.facebook.com/photo.php?fbid=10153055725553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six string Hefeweizen',
	pct:null,
	desc:'One of the nicer wheat bears I\'ve tasted',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10957577_10153055725708745_5392401214475659109_n.jpg?oh=a35ee8c3e080bf06c61d97735addebb6&oe=58951A03',
	link:'https://www.facebook.com/photo.php?fbid=10153055725708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hook norton Twelve days',
	pct:5.5,
	desc:'A little bit nutty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1924574_10153055725888745_6113742952542006972_n.jpg?oh=76b56a2d543712aa6559535e239a56d0&oe=588846B3',
	link:'https://www.facebook.com/photo.php?fbid=10153055725888745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Edge angry pirate',
	pct:6.8,
	desc:'Rum flavour in beer is no good for anybody',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10911454_10153055725923745_4540481012810101778_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055725923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA methode',
	pct:5.0,
	desc:'Tastes way too metallic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/10464194_10153055726008745_3155144376465393693_n.jpg?oh=0ea0c9100145ed05ef0c0de460ca227c&oe=58911682',
	link:'https://www.facebook.com/photo.php?fbid=10153055726008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road India Saison',
	pct:7.5,
	desc:'Too much of a white beer flavour for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10955774_10153055726098745_2456265276299415480_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay The ducks',
	pct:4.2,
	desc:'Not at all a pale ale. Matilda bay lets me down once again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/1492370_10153055726208745_5026667878902117342_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dr Tims',
	pct:4.5,
	desc:'Could do with a bit more punch',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1619547_10153055749173745_8508511661850848187_n.jpg?oh=cbd3a5330104f9828dfc5e4db22715e8&oe=58D0D1AA',
	link:'https://www.facebook.com/photo.php?fbid=10153055749173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Age The Celt Experience',
	pct:4.2,
	desc:'Not really much of an experience',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10947196_10153055749403745_4812053214327954894_n.jpg?oh=7443100270b8a0c3fe1515a6c89e4024&oe=58D0C619',
	link:'https://www.facebook.com/photo.php?fbid=10153055749403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bling Bling Imperial IPA',
	pct:8.5,
	desc:'Lots of flavour, couldn’t have many',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10806453_10153055749418745_7326451586089018048_n.jpg?oh=3ce0d9f870ce55d8e1190a9b03715830&oe=58CAA871',
	link:'https://www.facebook.com/photo.php?fbid=10153055749418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bandit Killer Sprocket',
	pct:4.8,
	desc:'Way too much of a smokey flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10711_10153055749528745_1705580902509688757_n.jpg?oh=4c2370e8c2d9627f4c4d7ecd41e66145&oe=58CC16A7',
	link:'https://www.facebook.com/photo.php?fbid=10153055749528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monkey’s Fist',
	pct:4.9,
	desc:'Not sure why these are always reduced to clear at Dan Murpheys',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10257018_10153055749583745_4285986054653809975_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749583745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punch & Judy’s Ale',
	pct:3.9,
	desc:'Not much flavour or alcohol content',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10922862_10153055749673745_210519337780800601_n.jpg?oh=d85abb11e1e0966bf2fc8a474ec10d41&oe=58CCA8BC',
	link:'https://www.facebook.com/photo.php?fbid=10153055749673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hassle Hop',
	pct:5.5,
	desc:'A pale with a bit of a strong ale flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10942330_10153055749753745_4423283376777303913_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The point pale ale',
	pct:4.2,
	desc:'Not my favourite pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10955559_10153055749933745_9217798578543309687_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Tom Chocolate',
	pct:6.0,
	desc:'A slight hint of chocolate',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10891448_10153055770573745_4712183690457686836_n.jpg?oh=70979c5704f4353d4c33aa58baa1a459&oe=58CE6063',
	link:'https://www.facebook.com/photo.php?fbid=10153055770573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John Boston Golden ale',
	pct:4.2,
	desc:'I do like an easy drinking golden ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10690124_10153055770718745_5622367894684528293_n.jpg?oh=2c29775617e0748e34dc4d517c7b848a&oe=58C2D0E0',
	link:'https://www.facebook.com/photo.php?fbid=10153055770718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Selezione 19',
	pct:5.0,
	desc:'Goes well with a nice Italian meal',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10958542_10153055770443745_1738110291091509447_n.jpg?oh=18b0e009e7bbf742404b9a483d562989&oe=588B3BF8',
	link:'https://www.facebook.com/photo.php?fbid=10153055770443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hipster ale',
	pct:5.5,
	desc:'Just not really hitting the spot tonight',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10953214_10153055770813745_8713996460827737605_n.jpg?oh=f36e9323b5e975ecbdf4e9b234ec04d5&oe=58CF80D1',
	link:'https://www.facebook.com/photo.php?fbid=10153055770813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trumer pils',
	pct:4.9,
	desc:'An ok pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10953955_10153055770883745_7624310153191779880_n.jpg?oh=521a27ded5c54d3e5742fa11415c464e&oe=58C8245C',
	link:'https://www.facebook.com/photo.php?fbid=10153055770883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers 62 pilsner',
	pct:5.0,
	desc:'Coopers seem to have a huge range of random beers, sadly the quality varies quite a bit',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10942756_10153055770968745_4182424304505127141_n.jpg?oh=fe98f95c3ebd7936184c8d55b263f9af&oe=58C8EB0B',
	link:'https://www.facebook.com/photo.php?fbid=10153055770968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders All Day IPA',
	pct:4.7,
	desc:'Could literally drink this all day. Another from the great selection at Parsons',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955163_10153055771108745_5413724920939008977_n.jpg?oh=c1573b1c82d63bf15c209efe5bff75c5&oe=5895E316',
	link:'https://www.facebook.com/photo.php?fbid=10153055771108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Torpedo extra IPA',
	pct:7.2,
	desc:'So much flavour, so much booze. What’s not to love',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10686865_10153055771228745_3010927456136598269_n.jpg?oh=076ab1192dac122a2102d3ee38ef8c71&oe=58BFD18E',
	link:'https://www.facebook.com/photo.php?fbid=10153055771228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Henninger',
	pct:4.8,
	desc:'Very bland',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955215_10153055772023745_950968910298192775_n.jpg?oh=77ad82b2d5c60da1f2ab0b12d5c00a44&oe=58946958',
	link:'https://www.facebook.com/photo.php?fbid=10153055772023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian blue',
	pct:4.5,
	desc:'Ok for a wheat beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920181_10153055771283745_6859710748033343904_n.jpg?oh=fa5fe476d8cbef7016c17649913c14cc&oe=58BF0228',
	link:'https://www.facebook.com/photo.php?fbid=10153055771283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kosciusko Pale ale',
	pct:4.5,
	desc:'Never heard of this, was hoping for something better',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10492453_10153055771438745_3655493043304213188_n.jpg?oh=5a85431e98742d01e96c2bae7daca754&oe=58C355A6',
	link:'https://www.facebook.com/photo.php?fbid=10153055771438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Blond',
	pct:6.5,
	desc:'Not as good or as strong as the Quadrupel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10491123_10153055791238745_951076558234575000_n.jpg?oh=c3ab99a22e8ccd2f5f913075b39e7c4c&oe=58C7B0FF',
	link:'https://www.facebook.com/photo.php?fbid=10153055791238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Halifter Stout',
	pct:4.9,
	desc:'A fairly mild stout',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945766_10153055791503745_8417455299148358450_n.jpg?oh=957a416522dcdfee1ebaa2f9f736d32c&oe=58CB39C7',
	link:'https://www.facebook.com/photo.php?fbid=10153055791503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Menabrea 1846',
	pct:4.8,
	desc:'Slightly above average Italian beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945561_10153055791438745_6706555972975228314_n.jpg?oh=8db218a0e4f3f6bfe1e07d555452116e&oe=588C39B3',
	link:'https://www.facebook.com/photo.php?fbid=10153055791438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Doppelbock Winter ale',
	pct:6.0,
	desc:'I need to sample some more doppelbocks',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1798753_10153055791623745_8735243396794406846_n.jpg?oh=a26d6cbfe230ea29b7262267d64686ff&oe=58BE75C0',
	link:'https://www.facebook.com/photo.php?fbid=10153055791623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Hooky',
	pct:4.6,
	desc:'There are just so many bad english beers',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10806242_10153055791708745_8168997172530304317_n.jpg?oh=0def68ef458773341493df1869fbb238&oe=588F299D',
	link:'https://www.facebook.com/photo.php?fbid=10153055791708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade Stout',
	pct:5.8,
	desc:'Not a very nice stout',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10501746_10153055791938745_8029415469669135648_n.jpg?oh=efc50371f2f0e470bcae58dc81b65097&oe=5892B9C9',
	link:'https://www.facebook.com/photo.php?fbid=10153055791938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mallee Bull',
	pct:5.6,
	desc:'Enjoyed this more than I expected',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10929144_10153055792013745_3943691173139596791_n.jpg?oh=b743cb6e841f3e8ee5db2c385d67fcb7&oe=58D3887C',
	link:'https://www.facebook.com/photo.php?fbid=10153055792013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floreffe Prima Melior',
	pct:8.0,
	desc:'Just an awful flavour combination',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10940507_10153055792123745_6951460612562111481_n.jpg?oh=b32a9639c2f4360d23db13343b3496de&oe=5892B190',
	link:'https://www.facebook.com/photo.php?fbid=10153055792123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oettinger Pils',
	pct:4.7,
	desc:'This beer has never been good, but at least it has always been cheap',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10952861_10153055792233745_5985463992710631340_n.jpg?oh=ba96f17bf6461ca8a652821416ea4770&oe=58954545',
	link:'https://www.facebook.com/photo.php?fbid=10153055792233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Quadrupel',
	pct:10,
	desc:'Such a lovely beer all round. Makes me want to go back to Belgium',
	score:8,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10838255_10153055792378745_3160802427352478420_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055792378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms captain\'s IPA',
	pct:5.8,
	desc:'A very mild IPA. Easy drinking but not what I want from an IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10995650_10153118627158745_3441161072765169256_n.jpg?oh=661c4a304bdcba8ce111e15a8e999866&oe=58D58496',
	link:'https://www.facebook.com/photo.php?fbid=10153118627158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mythos',
	pct:4.7,
	desc:'I don\'t remember ever seeing another type of beer in Greece',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10865944_10153118627183745_3452701286868348707_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118627183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Byron bay pale lager',
	pct:4.8,
	desc:'Plain and boring',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17811_10153118627228745_8196338202734334456_n.jpg?oh=8f8ca617d68cec6ede7db36380a52cdd&oe=588C7299',
	link:'https://www.facebook.com/photo.php?fbid=10153118627228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great northern lager',
	pct:4.2,
	desc:'A little bit metallic. Not sure why this was recommended to me',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025812_10153118627363745_3879639136439752978_n.jpg?oh=37b53f605950adf8a537ad330afde565&oe=58C3AB3D',
	link:'https://www.facebook.com/photo.php?fbid=10153118627363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sirling castle',
	pct:6.5,
	desc:'Strong on alcohol, mild on flavour. Perfect for getting drunk quickly',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11024597_10153118627558745_640038091949927094_n.jpg?oh=c9f59914054e2a3938e4a431ac2394f2&oe=588CFC9A',
	link:'https://www.facebook.com/photo.php?fbid=10153118627558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Red Trolley Ale',
	pct:5.8,
	desc:'Not really my kind of beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11035307_10153118666928745_8142017152048186664_n.jpg?oh=d91d763d2bd94ab01c7db8c976f8cc3e&oe=58913BE3',
	link:'https://www.facebook.com/photo.php?fbid=10153118666928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bolt',
	pct:4.6,
	desc:'Very easy drinking. Very close to water',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11037326_10153118666923745_5159572374416519952_n.jpg?oh=1acf7c00c0b969aa90e85d8b9fb4c594&oe=58D18BD5',
	link:'https://www.facebook.com/photo.php?fbid=10153118666923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Copycat A.I.P.A',
	pct:6.8,
	desc:'A nice floral aroma but a little bit harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1797322_10153118666983745_5915201915827958878_n.jpg?oh=ab14fdfaabfb851140d36ae6f38545ea&oe=58C297BD',
	link:'https://www.facebook.com/photo.php?fbid=10153118666983745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black Death Beer',
	pct:5.8,
	desc:'Like a crappy lager but black',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10437609_10153118667103745_274358326202189719_n.jpg?oh=903ed05888f155f5ad01c645b0dfa25a&oe=58BEE6D0',
	link:'https://www.facebook.com/photo.php?fbid=10153118667103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant IPA',
	pct:5.4,
	desc:'Mild but well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11036670_10153118667448745_2676066066178360898_n.jpg?oh=86ac6688ece75fa6ae88bc12ab74c65c&oe=58C60606',
	link:'https://www.facebook.com/photo.php?fbid=10153118667448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s summer ale',
	pct:5.0,
	desc:'Surprisingly this is a ginger beer. And while I do like ginger beers this isn’t one of the better ones',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10358559_10153118667468745_6994245863309298252_n.jpg?oh=b8279bd5bebf5ae9b1f8203e0f88c4a3&oe=58CD7A3C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked Elf WitBier',
	pct:5.0,
	desc:'Fairly mild for a wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10292286_10153118667738745_8355190794765320413_n.jpg?oh=13425b81272283498243a31ff4e4ee8d&oe=58CB5A8C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lander Brau',
	pct:4.7,
	desc:'Seems like it\'s a cheap flavourless wheat beer but since I don\'t like wheat beer I\'m ok with that',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11000604_10153118667938745_2598821758352900098_n.jpg?oh=fe7ff792aa33b020300f905d516258c1&oe=58D114E9',
	link:'https://www.facebook.com/photo.php?fbid=10153118667938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN Bitter',
	pct:4.0,
	desc:'Tastes the same as the green one but not as strong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10450836_10153118667958745_9176447944373645082_n.jpg?oh=322e4c99f895cea75fa14f513dbb64b9&oe=58C8CAFF',
	link:'https://www.facebook.com/photo.php?fbid=10153118667958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Clear',
	pct:4.5,
	desc:'Tastes like water',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10151181_10153118668273745_149724940762965990_n.jpg?oh=77a49665e0d658b4ae6155bc37aa81fb&oe=588D4419',
	link:'https://www.facebook.com/photo.php?fbid=10153118668273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Johannes',
	pct:6.5,
	desc:'Slightly too sweet but ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10471235_10153118668688745_4443326077354329396_n.jpg?oh=5271cb6c870e748d0e32eb0b8f4b0ed8&oe=58C11684',
	link:'https://www.facebook.com/photo.php?fbid=10153118668688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber pils',
	pct:5.0,
	desc:'Not exciting',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902891_10153118668708745_4563543533450469126_n.jpg?oh=0ad86335ccba5805d4e6370e8bfee35e&oe=58D45A57',
	link:'https://www.facebook.com/photo.php?fbid=10153118668708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ballast Point Big Eye',
	pct:7,
	desc:'A nice tasty IPA. I like the lack of a bitter aftertaste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10389593_10153118668748745_5666950047802645873_n.jpg?oh=6e7f340d27052888a688aa7efca6ba0c&oe=58910463',
	link:'https://www.facebook.com/photo.php?fbid=10153118668748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad long trip Saison',
	pct:6.6,
	desc:'Very tasty, but the fizz is a bit strange. Sits in such a strange middle ground but I want more',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10986616_10153118669198745_2610490748271486451_n.jpg?oh=6dd1d52a9506aa6460806c3d25b4e433&oe=58871CC3',
	link:'https://www.facebook.com/photo.php?fbid=10153118669198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perla Midowa',
	pct:6.0,
	desc:'A nice hint of honey. Sweeter than most beers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11018324_10153118669153745_6177767464748408498_n.jpg?oh=0828fb9249c662c2f1952173221ec4fe&oe=588CC842',
	link:'https://www.facebook.com/photo.php?fbid=10153118669153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Storm Super Dry Beer',
	pct:5.0,
	desc:'Your regular plain cheap lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11038700_10153118669473745_5502916115063582938_n.jpg?oh=8dc9583f96dd7446e9a79222d1afa2de&oe=58C7104B',
	link:'https://www.facebook.com/photo.php?fbid=10153118669473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden lion beer',
	pct:5.6,
	desc:'A nicely rounded flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11021223_10153118669773745_8881697342781962806_n.jpg?oh=afef2b97caab7f1623a3b06ca4c7575b&oe=5888326E',
	link:'https://www.facebook.com/photo.php?fbid=10153118669773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love Dale Lager',
	pct:4.7,
	desc:'Quite a smooth lager. Or could just be that it’s the first beer on Friday',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10687355_10153118669793745_4229208713620347909_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain Pilsner',
	pct:4.5,
	desc:'Pretty plain, time to move onto something stronger today',
	score:5,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10845763_10153118669868745_3771962632087142041_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa Valley Milk Stout',
	pct:7.0,
	desc:'Was expecting this to taste like milk but it’s just a creamy stout',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11034204_10153118792398745_930727431364883158_n.jpg?oh=3af6e75ec0c565d8054ac32e08446677&oe=58CA08CA',
	link:'https://www.facebook.com/photo.php?fbid=10153118792398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Lychee Beer',
	pct:4.5,
	desc:'Too sweet for me, just doesn’t take like a beer anymore',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10311768_10153118792388745_7466271610444299802_n.jpg?oh=e94ca9711ab391df28e76b91e5a9c2f0&oe=588AFEE1',
	link:'https://www.facebook.com/photo.php?fbid=10153118792388745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Past Blue Ribbon',
	pct:5.0,
	desc:'Not sure why this gets branded as a hipster beer. It’s just a bland lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1926933_10153118792373745_471015037580664056_n.jpg?oh=cf8581d73cdbdaf8962d995be11f071d&oe=588FF9BB',
	link:'https://www.facebook.com/photo.php?fbid=10153118792373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Chilli Beer',
	pct:4.2,
	desc:'Has a really strong hit of chilli but I like that. You get the coolness of a beer mixed with the heat of chilli',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11034166_10153118792613745_1685865302807726235_n.jpg?oh=b52145a093f61fdea18b2cc89aa12c37&oe=58C04E7F',
	link:'https://www.facebook.com/photo.php?fbid=10153118792613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Pale ale',
	pct:5.1,
	desc:'A well balanced pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11017023_10153118792808745_2253924034975828582_n.jpg?oh=d3a101c06366276a8d9a5b09a43edccb&oe=589410C8',
	link:'https://www.facebook.com/photo.php?fbid=10153118792808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lick Pier Ginger Beer',
	pct:4.0,
	desc:'A little bit too fizzy but nice otherwise',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10988914_10153118793028745_6211347906406183583_n.jpg?oh=fbc1ec6505731ef941f9e1821029e20f&oe=58C5CAC4',
	link:'https://www.facebook.com/photo.php?fbid=10153118793028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Adams Boston Lager',
	pct:4.7,
	desc:'A classic. Need to find this on tap somewhere',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025711_10153118793008745_157967989601698522_n.jpg?oh=67409b2f4d5740768efd878947a62f2e&oe=58CE9B14',
	link:'https://www.facebook.com/photo.php?fbid=10153118793008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines Kolsch',
	pct:4.6,
	desc:'Makes me want to try more kolsch beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10452382_10153118793263745_8541367164944833885_n.jpg?oh=8ec1ba8254ea0b3b34d3a2632f4bdac8&oe=58901402',
	link:'https://www.facebook.com/photo.php?fbid=10153118793263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit Pale Ale',
	pct:4.9,
	desc:'I’m a fan',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11024705_10153118793433745_1941343873752633305_n.jpg?oh=7f2c6075dd73837fb0c8e230443ee738&oe=58D01CE3',
	link:'https://www.facebook.com/photo.php?fbid=10153118793433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'BROK export',
	pct:5.2,
	desc:'Too malty. One of the worse polish beers I’ve had',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11150982_10153225352773745_2645273460851977484_n.jpg?oh=c2fe272166acb19f4f3da4feb921150f&oe=58C8359F',
	link:'https://www.facebook.com/photo.php?fbid=10153225352773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cavalier courage',
	pct:4.5,
	desc:'A bit plain for me but very good for what it is',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11077960_10153225352783745_1418047245676555322_n.jpg?oh=731c926cd3a19c183780dbb041b9163f&oe=58D4BA56',
	link:'https://www.facebook.com/photo.php?fbid=10153225352783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dutch windmill',
	pct:4.6,
	desc:'Standard lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11140753_10153225352778745_8798373029749618991_n.jpg?oh=aafcb67af5b7af7e3f15bca1feb05969&oe=58D5425A',
	link:'https://www.facebook.com/photo.php?fbid=10153225352778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pony fish unlikely lager',
	pct:4.7,
	desc:'Lager with something extra but nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11096283_10153225353503745_2273426521907233162_n.jpg?oh=9b2e08fd8e03b9c2ce26bb87cfd97727&oe=58C43978',
	link:'https://www.facebook.com/photo.php?fbid=10153225353503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures IPA',
	pct:6.4,
	desc:'Little creatures is like a baseline for a type of drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17298_10153225353618745_5211021832992114282_n.jpg?oh=8610a11f85abc4bb9dc4d652a98792f7&oe=58BE5F04',
	link:'https://www.facebook.com/photo.php?fbid=10153225353618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sainte etienne',
	pct:4.8,
	desc:'Average Aldi lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10410488_10153225353563745_8285613091047049802_n.jpg?oh=b509f3e5107cae5e3ecb963d963f37e7&oe=58D5559E',
	link:'https://www.facebook.com/photo.php?fbid=10153225353563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'My Antonia',
	pct:7.5,
	desc:'Surprisingly this tastes better after I brushed my teeth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1473040_10153225353703745_3939681785801200434_n.jpg?oh=58f9e40b0795f0daa72c9b3ab98de925&oe=589441B3',
	link:'https://www.facebook.com/photo.php?fbid=10153225353703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pan head Pilsner',
	pct:5.2,
	desc:'A little bit metallic. Not my favourite',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17127_10153225353823745_2917311890568592350_n.jpg?oh=349991c87a8173520bab064b69b838f1&oe=58D0AC9B',
	link:'https://www.facebook.com/photo.php?fbid=10153225353823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young\'s double chocolate stout',
	pct:5.2,
	desc:'A nice chocolate flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11146531_10153225353988745_3855298969416355875_n.jpg?oh=a10e81007078dc5420e827c0d80f3857&oe=58D4A043',
	link:'https://www.facebook.com/photo.php?fbid=10153225353988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point resin',
	pct:9.1,
	desc:'Very bitter but without any sort of floral hop taste to balance it out',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11053047_10153225354168745_5695677735113264681_n.jpg?oh=fbc6d3bad73bf4fa16c956a1172bc38d&oe=5893CD0B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Bengali',
	pct:6.5,
	desc:'Lots of subtle character',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148760_10153225354163745_4060898664025313434_n.jpg?oh=8b3fe0cf3a60ddbbe5f2cef1a7881c77&oe=5895B3F0',
	link:'https://www.facebook.com/photo.php?fbid=10153225354163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon dog watermelon weizen',
	pct:5.3,
	desc:'Really subtle watermelon taste. Takes a while to get used to',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11136648_10153225354308745_6098979194311010987_n.jpg?oh=7255dba12679751f1d39d124daca5cba&oe=588FECF2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade rebel ale',
	pct:4.7,
	desc:'A little stronger than a lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10494628_10153225354518745_289668608818495871_n.jpg?oh=1717236d3cb59d8308d625743ae5da7b&oe=58D28EEF',
	link:'https://www.facebook.com/photo.php?fbid=10153225354518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Immortal beloved Hefeweizen',
	pct:5.5,
	desc:'Basic wheat beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11159507_10153225354628745_6658479749281312928_n.jpg?oh=0ff3b32fe4b6618798da0cdc7c6acd30&oe=58D391D2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Tank nine',
	pct:4.6,
	desc:'Nicely hopped',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148511_10153225354708745_902540998621637913_n.jpg?oh=87fef8c5ead282e2735be7184314129d&oe=588F956B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire jack of spades',
	pct:5.0,
	desc:'A very nice chocolate flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11130116_10153225365978745_2851210165116478542_n.jpg?oh=a6168248ba54f0990d9029347fab3973&oe=58D3DC98',
	link:'https://www.facebook.com/photo.php?fbid=10153225365978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Crisp',
	pct:5.4,
	desc:'More harsh than crisp. A little bit more bitter than it should be',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11084248_10153225365988745_6811395875070848425_n.jpg?oh=716b97be39ca529988fc8b46b50e5a7c&oe=58CF8869',
	link:'https://www.facebook.com/photo.php?fbid=10153225365988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Globe Premium Draught',
	pct:4.6,
	desc:'Standard lager. Like the can though',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14716_10153225365973745_9134185236353368363_n.jpg?oh=311a60776b82e843764772a32017185f&oe=58CDD3E7',
	link:'https://www.facebook.com/photo.php?fbid=10153225365973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Sweet action',
	pct:5.2,
	desc:'Nice sweet hoppy taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149483_10153225366508745_5535316799902667426_n.jpg?oh=31494d2b7b549bd1a3c0b02ab09c13c4&oe=58CB31A7',
	link:'https://www.facebook.com/photo.php?fbid=10153225366508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ single hop nelson',
	pct:8.0,
	desc:'Perfect level of bitterness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11130263_10153225366548745_4430696674965972638_n.jpg?oh=e1d6321c4de4ea5d736d9e0d5c7b87a6&oe=58C50145',
	link:'https://www.facebook.com/photo.php?fbid=10153225366548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La guillotine',
	pct:8.5,
	desc:'Absolutely amazing',
	score:10,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11156123_10153225366453745_4053445365399151631_n.jpg?oh=e21b38ece26b9901124559e5a16089d6&oe=58C6B178',
	link:'https://www.facebook.com/photo.php?fbid=10153225366453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White choc & raspberry pils',
	pct:5,
	desc:'Really mild on the choc and raspberry so the beer flavour isn\'t overwhelmed',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11027435_10153225366763745_2151282598672247864_n.jpg?oh=ed40b81d1cdebe856fe9616b75df07e9&oe=5891638B',
	link:'https://www.facebook.com/photo.php?fbid=10153225366763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hargreaves hill pale ale',
	pct:4.9,
	desc:'Like a winery pretending to make a beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/247107_10153268256703745_3742881335896716752_n.jpg?oh=ed2e239e6cc858f619a8cebca981db99&oe=58C7AA2C',
	link:'https://www.facebook.com/photo.php?fbid=10153268256703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Global Warmer',
	pct:7.0,
	desc:'Tangy, strong',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11196336_10153268256713745_6680283658542121771_n.jpg?oh=f6da3c7ad33699646c6b8e47a745966c&oe=58C22CED',
	link:'https://www.facebook.com/photo.php?fbid=10153268256713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cristal',
	pct:4.9,
	desc:'A beer that goes down easy when you’re in a rush',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11206000_10153268256698745_6063621327290165780_n.jpg?oh=23e6574dd74edf65762f0807f8de487f&oe=58D3A2FD',
	link:'https://www.facebook.com/photo.php?fbid=10153268256698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra Italia 1906',
	pct:4.8,
	desc:'mild and refreshing',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11205086_10153268257048745_439269609069418781_n.jpg?oh=8889cb98c84957804dd05305ed612c90&oe=5888E819',
	link:'https://www.facebook.com/photo.php?fbid=10153268257048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat fancy pants',
	pct:5.2,
	desc:'Really tasty but also easy to drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603733_10153268257103745_7684396821090282649_n.jpg?oh=c705c3cafd0472d84b35833665ff428c&oe=58CEBD08',
	link:'https://www.facebook.com/photo.php?fbid=10153268257103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers premium lager',
	pct:4.8,
	desc:'Not nearly as good as their other offerings',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178189_10153268257113745_2486098126429601238_n.jpg?oh=de4ee9cef679a4aa6a38e3513f75056a&oe=58D4E028',
	link:'https://www.facebook.com/photo.php?fbid=10153268257113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pixel 480p',
	pct:4.8,
	desc:'Pretty good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11209719_10153268257203745_8370119320216109443_n.jpg?oh=765cee459d3b6d2dbaf4405061156057&oe=58C91D2D',
	link:'https://www.facebook.com/photo.php?fbid=10153268257203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay alpha pale ale',
	pct:5.2,
	desc:'Standard Matilda bay beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10659329_10153268257393745_1308545288385225140_n.jpg?oh=fb9bd90b4f40c1351dd99c7d0545e098&oe=588C109E',
	link:'https://www.facebook.com/photo.php?fbid=10153268257393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quiet deeds white ipa',
	pct:6,
	desc:'A strange combination. Maybe not quite one I could get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/11053929_10153268257438745_724512553237905656_n.jpg?oh=ac7722e404f98b4c2e790c40109231d9&oe=5888D715',
	link:'https://www.facebook.com/photo.php?fbid=10153268257438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Foo brew',
	pct:5.0,
	desc:'Not a thing right with this drink except that it\'s beer',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182107_10153268257443745_4399139666821958419_n.jpg?oh=c2881aca304a3fcc99a53525d0926ad9&oe=58C8DD73',
	link:'https://www.facebook.com/photo.php?fbid=10153268257443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo Brew Hefeweizen',
	pct:5.1,
	desc:'Wouldn’t want another',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182307_10153268257633745_3691539250579390263_n.jpg?oh=f112328b4038a973c4d72d3713412ff4&oe=58C7B815',
	link:'https://www.facebook.com/photo.php?fbid=10153268257633745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innis & Gunn original',
	pct:6.6,
	desc:'Not what I expected. Sweet and strange',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11196243_10153268257703745_5034055497574956739_n.jpg?oh=ea677753fa1846cacdd6ce3a7a9a7568&oe=588D8301',
	link:'https://www.facebook.com/photo.php?fbid=10153268257703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn golden ale',
	pct:4.5,
	desc:'Not one you see around very often',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178208_10153268265353745_1241728649667354734_n.jpg?oh=652bb0a4692bf0647bf1b0aee1a75462&oe=589597AB',
	link:'https://www.facebook.com/photo.php?fbid=10153268265353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pikes pilsner lager',
	pct:4.5,
	desc:'No fish taste at all',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11205492_10153268265378745_5159414108787972846_n.jpg?oh=723f94ecf626d162b43a3dacd0a5555b&oe=58D3F841',
	link:'https://www.facebook.com/photo.php?fbid=10153268265378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Altenmünster',
	pct:4.9,
	desc:'Such a cool name and bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182040_10153268265373745_4318030430351182427_n.jpg?oh=37b323730f22f00497ee59b48904da78&oe=589174D9',
	link:'https://www.facebook.com/photo.php?fbid=10153268265373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love tap double lager',
	pct:5.9,
	desc:'Have to love a nice strong lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11206105_10153268265533745_1005147961464463270_n.jpg?oh=ead8ca887d36ad66c808bd104a5854a0&oe=58C468AA',
	link:'https://www.facebook.com/photo.php?fbid=10153268265533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu schloss hell',
	pct:4.9,
	desc:'Got it from Aldi, wasn’t expecting much',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10356419_10153268265598745_7305179253101068466_n.jpg?oh=15a0a22e024c17818452be6efb241688&oe=58D036C3',
	link:'https://www.facebook.com/photo.php?fbid=10153268265598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pistonhead lager',
	pct:4.6,
	desc:'Pretty average lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149264_10153268265618745_5697774882754067421_n.jpg?oh=f1b0cc2755c97e3497b4f721db349c96&oe=58CA0A0A',
	link:'https://www.facebook.com/photo.php?fbid=10153268265618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads break water',
	pct:4.5,
	desc:'Slightly better than your standard',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178233_10153268265658745_1088283222834381460_n.jpg?oh=d7270fb306ed6ff2d0d8266dd0758b9d&oe=588E3E6C',
	link:'https://www.facebook.com/photo.php?fbid=10153268265658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos Equis Ambar',
	pct:4.5,
	desc:'Has more of a Polish flavour than Mexican',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/10421550_10153268279173745_3566359759975585153_n.jpg?oh=b12c8ede8e28030a3578b5f4b70f6aa2&oe=58D20B4A',
	link:'https://www.facebook.com/photo.php?fbid=10153268279173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington pale ale',
	pct:4.7,
	desc:'One of the best all round beers I’ve tasted',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11188184_10153268279118745_1035950770576096625_n.jpg?oh=ce1f20e2def571a3f112e0bdbe40a8fc&oe=58927391',
	link:'https://www.facebook.com/photo.php?fbid=10153268279118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'El Loco',
	pct:4.6,
	desc:'Even worse than Corona',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11017350_10153268279168745_6892560688839392935_n.jpg?oh=7e65591a6f3a62b27ec16b98eec4cca1&oe=58CAB150',
	link:'https://www.facebook.com/photo.php?fbid=10153268279168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Melbourne bitter',
	pct:4.6,
	desc:'Of the standard Australian beers this one ranks pretty low',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13530_10153268279263745_7432093397688380903_n.jpg?oh=b6b5eb3607cc8f574e023114676a307f&oe=58C3DDE4',
	link:'https://www.facebook.com/photo.php?fbid=10153268279263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saint-Mihal',
	pct:4,
	desc:'Pretty mild but overall ok. Better than expected',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10985916_10153268279573745_5444654809518299041_n.jpg?oh=0d1f3cb399e13a19bf103820137b95cc&oe=589048DF',
	link:'https://www.facebook.com/photo.php?fbid=10153268279573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit White Ale',
	pct:4.5,
	desc:'One of the nicest white beers I’ve had. Another winner from White Rabbit',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1932304_10153268279663745_7818150974405781457_n.jpg?oh=c8ce44eda4e242c9b977531820940104&oe=58CCD89B',
	link:'https://www.facebook.com/photo.php?fbid=10153268279663745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour reserve amber ale',
	pct:5.2,
	desc:'This tastes like a dark ale but isn’t supposed to. The taste is ok but I’m worried by how badly this is labeled',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q82/p480x480/10403262_10153268279703745_1182589880637374526_n.jpg?oh=55cdc36fb4d8c5875ebc5da85a45d78e&oe=58C1D419',
	link:'https://www.facebook.com/photo.php?fbid=10153268279703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Pale ale',
	pct:4.5,
	desc:'A really mild pale ale but with a great smooth flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10421490_10153268279843745_9177649199173204206_n.jpg?oh=9c075e317959c55374e46c9c17e882f0&oe=58CBA512',
	link:'https://www.facebook.com/photo.php?fbid=10153268279843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Summer ale',
	pct:4.5,
	desc:'Another winner from steamrail but not as nice as the pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11062864_10153268279933745_3157338283510709307_n.jpg?oh=b6b8df0c3f89ec44e4a50bd1377a3401&oe=588B6372',
	link:'https://www.facebook.com/photo.php?fbid=10153268279933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail amber',
	pct:4.5,
	desc:'Not as good as the rest of the range',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11109179_10153268279943745_3245706738598167550_n.jpg?oh=48fdb8e18ec3c66ecd1e4238f68cf842&oe=58D38B2D',
	link:'https://www.facebook.com/photo.php?fbid=10153268279943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s southern pale ale',
	pct:4.6,
	desc:'Like a very mild pale ale. Refreshing',
	score:7,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10498559_10153268294398745_8634108256899324103_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grand ridge Moonshine',
	pct:8.5,
	desc:'The description on the bottle makes this sound awful but it’s not too bad. Could be a little bit smoother but the overall flavour is really nice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462829_10153268294448745_4601669711477307040_n.jpg?oh=a736f72fe8db7f27058f03932b0ffbbd&oe=58C6D6F2',
	link:'https://www.facebook.com/photo.php?fbid=10153268294448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers Arms Keeper’s lager',
	pct:4.6,
	desc:'A sweet and quite flavourful lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/l/t31.0-0/p480x480/1537711_10153268294383745_2698680166388774656_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294383745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry’s Brew am I',
	pct:5.0,
	desc:'Young henry’s haven’t let me down yet',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11204930_10153268294698745_7123736277636761157_n.jpg?oh=d6604afa8d8616cdb08084288b14564b&oe=58D3CADE',
	link:'https://www.facebook.com/photo.php?fbid=10153268294698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'’69’ Summer Ale',
	pct:4.6,
	desc:'Surprisingly happy with this one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148611_10153268294718745_4388827143167133097_n.jpg?oh=3a5152e26fde0bf3b95f67555806741c&oe=58901CA9',
	link:'https://www.facebook.com/photo.php?fbid=10153268294718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'New Englander Hop Cannon IPA',
	pct:6.6,
	desc:'Perhaps a few too many hops for me',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11202600_10153268294733745_5223220854392756415_n.jpg?oh=a91fe4eda696a4531a3b72266a14216b&oe=5888BC37',
	link:'https://www.facebook.com/photo.php?fbid=10153268294733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ÜberBräu',
	pct:4.0,
	desc:'Standard cheap beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10346275_10153268294828745_7444781895935179067_n.jpg?oh=e55998c67d242a18621f3a65f7c8f43d&oe=5892F980',
	link:'https://www.facebook.com/photo.php?fbid=10153268294828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain pale ale',
	pct:4.9,
	desc:'Mmm, pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11173400_10153268295048745_1794514503671401328_n.jpg?oh=6a0ddaef44fb9707ce8b87c91b730034&oe=58C4BE9E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA St Josephs',
	pct:9.5,
	desc:'Not the best triple but a nice flavour none the less',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025707_10153268294958745_151299719186905005_n.jpg?oh=715f191b46e61753c978e85b47d14096&oe=58D4586D',
	link:'https://www.facebook.com/photo.php?fbid=10153268294958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue Santa’s private reserve ale',
	pct:6.0,
	desc:'A hearty beverage',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149464_10153268295053745_1257589284621380857_n.jpg?oh=a18df413324d46584a18c1f2ef629a90&oe=58CA379E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Brewery Seasonal Ale',
	pct:4.7,
	desc:'Not up to the normal lord nelson standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11150609_10153268295143745_4412554411779312688_n.jpg?oh=5b5fb5d2046a8bcb60c7a231ccf5aa58&oe=5894D5A2',
	link:'https://www.facebook.com/photo.php?fbid=10153268295143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ale house pale draught',
	pct:4.2,
	desc:'Too much like a lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11212761_10153268295198745_2192040651986082448_n.jpg?oh=6241545f9a20a5878cf2a6d565297fff&oe=58C3C715',
	link:'https://www.facebook.com/photo.php?fbid=10153268295198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers growler',
	pct:4.7,
	desc:'Mild sweet brown ale. Surprisingly easy drinking',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148587_10153268299343745_976562173073925737_n.jpg?oh=84de67be6a868f2332eff7acabe268e4&oe=58C8F039',
	link:'https://www.facebook.com/photo.php?fbid=10153268299343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s American pale ale',
	pct:5.7,
	desc:'Was hoping for a hoppier taste. More of a pale ale for getting smashed',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/22311_10153268299368745_777193479112346497_n.jpg?oh=6d9574daa608f0da63071eaaaf7ec3b4&oe=5889A372',
	link:'https://www.facebook.com/photo.php?fbid=10153268299368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers Kung foo lager',
	pct:4.5,
	desc:'Like a tangy lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10428667_10153268299353745_7595281458401637305_n.jpg?oh=93b05eb01a834df8ddaa4d67dd531ef2&oe=58D002DD',
	link:'https://www.facebook.com/photo.php?fbid=10153268299353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rising sun pale ale',
	pct:5.0,
	desc:'Was expecting more from this. It’s the nice pale flavour but with too much harshness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10985454_10153268299563745_9155074984245162225_n.jpg?oh=d4ad3ba6845090f0693a36470e274eb4&oe=588B7B13',
	link:'https://www.facebook.com/photo.php?fbid=10153268299563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maximus',
	pct:5.8,
	desc:'Good towards the end',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182152_10153268299603745_965318376264137516_n.jpg?oh=acfd3d6f7c3dc228d10e48cbfea99363&oe=58946611',
	link:'https://www.facebook.com/photo.php?fbid=10153268299603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms journeyman',
	pct:3.5,
	desc:'Nice and easy drinking, but still a mid strength',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11200596_10153268299613745_30462160346726619_n.jpg?oh=f9df584529f5b935bf8eab34283a6e44&oe=58C44BBE',
	link:'https://www.facebook.com/photo.php?fbid=10153268299613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit dark ale',
	pct:4.9,
	desc:'Not what I usually expect from a dark ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/11168124_10153268299693745_7328518567704258929_n.jpg?oh=1187c515d7df0589c961ab83b634c0f1&oe=58D3DE69',
	link:'https://www.facebook.com/photo.php?fbid=10153268299693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liberty ale',
	pct:5.9,
	desc:'Very nicely done. Great for a session beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11210416_10153268299813745_8323582624602808812_n.jpg?oh=f2a86ef1711ba2eb29412079c65d9255&oe=58C7E28B',
	link:'https://www.facebook.com/photo.php?fbid=10153268299813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam lager',
	pct:4.9,
	desc:'A very flavourful lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11174764_10153268299828745_5386835742329909663_n.jpg?oh=581abb491ce3a5eb51a568d1d2e6b9a9&oe=58C34F2E',
	link:'https://www.facebook.com/photo.php?fbid=10153268299828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boag XXX Ale',
	pct:4.8,
	desc:'A solid flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/11666075_10153438034333745_2014329694046827935_n.jpg?oh=6befeee2435f57f84669e61fe68e6ce1&oe=58D13AB2',
	link:'https://www.facebook.com/photo.php?fbid=10153438034333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Žatec',
	pct:4.6,
	desc:'Tastes more polish than Czech',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11692789_10153438034343745_2933345002405640949_n.jpg?oh=df4065478ccd3dbbef1a0f7a86db02ba&oe=58BE1B44',
	link:'https://www.facebook.com/photo.php?fbid=10153438034343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fiji Bitter',
	pct:4.6,
	desc:'Has a slight tang to it that you don’t get with Australian bitters',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11698631_10153438034358745_1791286718120294864_n.jpg?oh=d571756efa1277bdf0ab697a236eda52&oe=58BF2B14',
	link:'https://www.facebook.com/photo.php?fbid=10153438034358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Noble Pale ale',
	pct:5.2,
	desc:'Was expecting much more. Just a plain lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11202109_10153438034543745_2281064819509080771_n.jpg?oh=e72968277c5e812d60fce4acb0517b28&oe=58CFF29E',
	link:'https://www.facebook.com/photo.php?fbid=10153438034543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail pilsner',
	pct:4.5,
	desc:'A bit too much like a standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11667503_10153438034893745_6099533991518812550_n.jpg?oh=ead9562e523d3c3c17746ed2f421f2fc&oe=58895F24',
	link:'https://www.facebook.com/photo.php?fbid=10153438034893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds taco',
	pct:5.2,
	desc:'The best wheat beer I\'ve ever tasted',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11693950_10153438034793745_2993920563621018004_n.jpg?oh=559f327ffe04a2c0f11b22305b6f4506&oe=58CF113D',
	link:'https://www.facebook.com/photo.php?fbid=10153438034793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Norman Australian ale',
	pct:5.1,
	desc:'The logo looks dodgy but it\'s actually a nice mild pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403010_10153438034973745_575409467690114271_n.jpg?oh=d82d912b6b151d4676c3c54067842289&oe=58C079EB',
	link:'https://www.facebook.com/photo.php?fbid=10153438034973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Blonde',
	pct:4.6,
	desc:'As I expected a plain flavourless lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11703056_10153438035233745_914090365741131285_n.jpg?oh=b8c1a0761bdf7b34a8116b16e92a950e&oe=58C70493',
	link:'https://www.facebook.com/photo.php?fbid=10153438035233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vonu Pure lager',
	pct:4.6,
	desc:'Surprisingly good and well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707520_10153438035303745_142890088110404042_n.jpg?oh=010d185ba280d4e6a726f211e18eda7e&oe=588EAF91',
	link:'https://www.facebook.com/photo.php?fbid=10153438035303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'OB golden lager',
	pct:4.8,
	desc:'A little more flavourful than normal german beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665626_10153438035338745_1942830826260024445_n.jpg?oh=fbbd7c23949d7a967bfb54e3e0acdd6d&oe=58C63890',
	link:'https://www.facebook.com/photo.php?fbid=10153438035338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kirin first press',
	pct:5.0,
	desc:'A little better than a standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11026787_10153438035418745_3190886247129001905_n.jpg?oh=980c4c83c136a3195be78e830382720a&oe=58CEF520',
	link:'https://www.facebook.com/photo.php?fbid=10153438035418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Černovar  Svetlé',
	pct:4.9,
	desc:'A bit too malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403435_10153438035523745_1440324413921244933_n.jpg?oh=e02741f61450e83d81c0f7437e57d711&oe=5896370F',
	link:'https://www.facebook.com/photo.php?fbid=10153438035523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage Roads Single Fin',
	pct:4.5,
	desc:'Floral and tangy. Much better than expected',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11737813_10153438035548745_1721256026335429959_n.jpg?oh=14da083c43943c1d4edbb9d8ec4659fd&oe=58CCAC03',
	link:'https://www.facebook.com/photo.php?fbid=10153438035548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vailima',
	pct:4.9,
	desc:'An all round terrible beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11140143_10153438035598745_277263619216109713_n.jpg?oh=a8022d2673be7574bd2d8bf175f0340e&oe=5893D751',
	link:'https://www.facebook.com/photo.php?fbid=10153438035598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dry Hopped Pale Ale',
	pct:5.4,
	desc:'Much hoppier than a normal pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11693847_10153438035713745_940540476039083000_n.jpg?oh=5e482087cc4ee47f71f5c4cff4002067&oe=58952F63',
	link:'https://www.facebook.com/photo.php?fbid=10153438035713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Breaking the cardinal Rule',
	pct:9.5,
	desc:'Not much of an IPA but a nice Belgian tripel',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11063592_10153438035963745_4745705285004081483_n.jpg?oh=56e2eb01860adf47996cacf17eaab9e7&oe=58D389E7',
	link:'https://www.facebook.com/photo.php?fbid=10153438035963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paddo pale',
	pct:5.0,
	desc:'No idea how this can be called a pale ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665515_10153438035968745_4205414644516816644_n.jpg?oh=8298ec6714d32d4841a15b4a39dfcd3e&oe=58C99ECD',
	link:'https://www.facebook.com/photo.php?fbid=10153438035968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Royal Premium lager',
	pct:5.1,
	desc:'Nothing premium about this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11742655_10153438036023745_7783155327321003667_n.jpg?oh=a6b9533e4f16be7729e31c2471ec5c57&oe=58D31904',
	link:'https://www.facebook.com/photo.php?fbid=10153438036023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'William’s organic pale ale',
	pct:4.5,
	desc:'A slightly bitter but well rounded pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11234818_10153438036188745_6157946174058205755_n.jpg?oh=a862a1ffddcc1bdc5149e799668b502b&oe=58CE92A3',
	link:'https://www.facebook.com/photo.php?fbid=10153438036188745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses Chardonnay IPA',
	pct:6.0,
	desc:'A mild IPA that really hits the spot. Nice floral aroma',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11071649_10153438036343745_3147415906093292508_n.jpg?oh=ddf91f2cf18dc279c1c49afe5010dbcc&oe=58908D34',
	link:'https://www.facebook.com/photo.php?fbid=10153438036343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oatis',
	pct:6.5,
	desc:'A little bit too sharp for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11667294_10153438036333745_6944136313097119915_n.jpg?oh=504d7276f5569bb94c371d5998ac077b&oe=5896157A',
	link:'https://www.facebook.com/photo.php?fbid=10153438036333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bruce Malone',
	pct:6.2,
	desc:'Ok, but something is just wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/11665530_10153438036328745_3370491198453159853_n.jpg?oh=d16e334e3ef06ff4787bce03c657477b&oe=58CBDEAD',
	link:'https://www.facebook.com/photo.php?fbid=10153438036328745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big smoke wet hop IPA',
	pct:null,
	desc:'Like the wet hop, need to find more',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11233171_10153438036778745_7460779125459519208_n.jpg?oh=9dfec320b2d68619484555ed1d8e2c12&oe=58D26E56',
	link:'https://www.facebook.com/photo.php?fbid=10153438036778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camel\'s beard black sour',
	pct:4.3,
	desc:'Like mixing black current juice with a beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10404258_10153438036873745_1054335218755238006_n.jpg?oh=7e25031adaaffc2a73dafa8d54aa1ab2&oe=58937C6C',
	link:'https://www.facebook.com/photo.php?fbid=10153438036873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks brewing ESB',
	pct:5.1,
	desc:'Bitter like an IPA but without the floral hoppiness',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709549_10153438036878745_3892385374192512736_n.jpg?oh=bf6e1542896b3a61274217f1719e2331&oe=58886CB9',
	link:'https://www.facebook.com/photo.php?fbid=10153438036878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koshihikari rice beer',
	pct:5.0,
	desc:'Amazing how similar this is to a normal lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665487_10153438037018745_87412937068060294_n.jpg?oh=ce501d6b85cea39c20eff314fde77fe2&oe=58C03D50',
	link:'https://www.facebook.com/photo.php?fbid=10153438037018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bastard son pale ale',
	pct:4.8,
	desc:'Cross between a pale and an IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11039309_10153438037053745_1453835514615000872_n.jpg?oh=dd9c1a3a5cace0febc6f373dec39631d&oe=5886EB9E',
	link:'https://www.facebook.com/photo.php?fbid=10153438037053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river red ale',
	pct:6.5,
	desc:'A bit harsh for me',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403190_10153438037108745_3712451184954693803_n.jpg?oh=880adcdad7098abfd26885f0c9063eb2&oe=588E50B5',
	link:'https://www.facebook.com/photo.php?fbid=10153438037108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dirty Bastard',
	pct:8.5,
	desc:'A lot of flavour in this beer but it’s not quite right',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707850_10153438037263745_7444067883763013637_n.jpg?oh=70b6689f096cf964ac3e9f97b325e18e&oe=58C117D0',
	link:'https://www.facebook.com/photo.php?fbid=10153438037263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:3.5,
	desc:'A crappier version of the regular superdry',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11214280_10153438037523745_4286815657184147844_n.jpg?oh=03258e2ce3d3fa3f9a6918d94be43929&oe=58CBC331',
	link:'https://www.facebook.com/photo.php?fbid=10153438037523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kooinda hop transfusion ipa',
	pct:7.5,
	desc:'A very well balanced and floral IPA',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11659318_10153438037553745_8784383877969678894_n.jpg?oh=26fd696014cc53e87b030c9b17b4b9a8&oe=588FBAEB',
	link:'https://www.facebook.com/photo.php?fbid=10153438037553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms spearhead pale ale',
	pct:5.2,
	desc:'A bit of a let down. Doesn’t have what I expect from a pale ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709660_10153438037763745_2498650749121162924_n.jpg?oh=0d5b61a11706b6aaf9e6165af7af3747&oe=5887CA5D',
	link:'https://www.facebook.com/photo.php?fbid=10153438037763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Pale Ale',
	pct:3.8,
	desc:'Really mild for a pale ale but also really mild on alcohol as well. Guess it would be good if you’re just getting into beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11666224_10153438038048745_8968016209259531630_n.jpg?oh=e34aaf65c75634afa4b65b5df04bc5ce&oe=58929E42',
	link:'https://www.facebook.com/photo.php?fbid=10153438038048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s session ale',
	pct:3.5,
	desc:'Another good beer from Matso’s but still a mid strength',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709463_10153438038063745_514405702449925285_n.jpg?oh=d573e131fdc9d384e9f0f495d279f626&oe=58926AE0',
	link:'https://www.facebook.com/photo.php?fbid=10153438038063745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Golden ale',
	pct:4.2,
	desc:'Zesty as promised. Really high quality all round',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11742900_10153438038123745_9100299621440264544_n.jpg?oh=15f7c73d36ed1006a008975538730d1a&oe=5886F04E',
	link:'https://www.facebook.com/photo.php?fbid=10153438038123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage Directors',
	pct:4.8,
	desc:'Pretty run of the mill english ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11038987_10153438038293745_6155510821012537170_n.jpg?oh=4dd3f21323d49a3324e7f7dff5c7edb0&oe=58873C90',
	link:'https://www.facebook.com/photo.php?fbid=10153438038293745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Pale ale',
	pct:4.5,
	desc:'A really nice sweet hit of flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11251267_10153438038418745_6850868855690668787_n.jpg?oh=b3b48fc4316c90eb71d43a0571df4147&oe=58BFA4F4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines ESB',
	pct:5.4,
	desc:'One of the nicer ESBs that I’ve had. But perhaps I just don’t know what an ESB is supposed to taste like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11666089_10153438038438745_5192310955658972737_n.jpg?oh=a1ec852893ec2008d9e85482c6b9b6b4&oe=58CFC8B4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad Sideways Pale ale',
	pct:4.0,
	desc:'This beer is just all wrong. Tastes more like an IPA than a pale and the fizz is just strange',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11692763_10153438038563745_2254106052941195483_n.jpg?oh=4bbff0ba31bcac5205cc98cab1803f99&oe=58CEFC35',
	link:'https://www.facebook.com/photo.php?fbid=10153438038563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carter premium lager',
	pct:4.0,
	desc:'Nothing premium about this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707555_10153438038703745_5816121848155003948_n.jpg?oh=e1cc0d39580dc194e983e371a897be43&oe=58D1BC45',
	link:'https://www.facebook.com/photo.php?fbid=10153438038703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Claro',
	pct:4.6,
	desc:'A kind of sweet Mexican lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11694866_10153438038743745_8578021989993223626_n.jpg?oh=e50c46ee0b05e7611f5fcf77d12751d7&oe=58CCE640',
	link:'https://www.facebook.com/photo.php?fbid=10153438038743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Five hop',
	pct:6.2,
	desc:'I really wanted to like this beer because of the cool bottle but the flavour just isn’t right',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12105748_10153656863078745_1274782812792168869_n.jpg?oh=6828ea845457e8a26e3becf2d0744a97&oe=5894C870',
	link:'https://www.facebook.com/photo.php?fbid=10153656863078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands pale',
	pct:4.6,
	desc:'Missing the boxes it\'s trying to tick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109067_10153656863173745_3852359078129229777_n.jpg?oh=82e65e0a5d39df00b144485571900095&oe=588B13FA',
	link:'https://www.facebook.com/photo.php?fbid=10153656863173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands IPA',
	pct:5.2,
	desc:'Nicer than the pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12065989_10153656863158745_690647153577625477_n.jpg?oh=04a07332bf4c1be080243091baf4ebe0&oe=58D4F622',
	link:'https://www.facebook.com/photo.php?fbid=10153656863158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bellerose Blanc',
	pct:6.5,
	desc:'A fairly mild Belgian beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12141679_10153656863378745_27632216009951724_n.jpg?oh=e6bd86542f9581086c4590922732f1fe&oe=58963F92',
	link:'https://www.facebook.com/photo.php?fbid=10153656863378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fred Murrays IPA',
	pct:5.6,
	desc:'Nothing special but nothing wrong with it',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/11988711_10153656863543745_374129198357931998_n.jpg?oh=96c18ef0a584f51f8b355edfc7743afc&oe=58CC2EBF',
	link:'https://www.facebook.com/photo.php?fbid=10153656863543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh Brewing Co FIG JAM IPA',
	pct:7.0,
	desc:'Has a strange aftertaste that completely ruins the beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10393668_10153656863593745_2358385457397680268_n.jpg?oh=78ca0fcf74d69b21609b17cb82c7b5ce&oe=58CD9D5C',
	link:'https://www.facebook.com/photo.php?fbid=10153656863593745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDevil IPA',
	pct:6.7,
	desc:'A pretty average IPA which slightly misses the mark',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12072602_10153656863733745_7824943187452200119_n.jpg?oh=6e74c20d8deb412324c117d084cf4ff0&oe=588F0294',
	link:'https://www.facebook.com/photo.php?fbid=10153656863733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada 2015 Beer Camp',
	pct:7.0,
	desc:'Not a favourite but a well rounded flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12105717_10153656863923745_5748636982943209878_n.jpg?oh=cb901640aa4e62d5dc1df623cb20e4f4&oe=58870AD7',
	link:'https://www.facebook.com/photo.php?fbid=10153656863923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wahoo summer lager',
	pct:4.2,
	desc:'Water with a hint of beer. Good for a summer day',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115651_10153656864028745_2911616261438807210_n.jpg?oh=e96692ab026050cfabd01317244c0788&oe=58CA313C',
	link:'https://www.facebook.com/photo.php?fbid=10153656864028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy yak',
	pct:4.2,
	desc:'I think the creators were lazy',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12096246_10153656864118745_718405220444766067_n.jpg?oh=44b7daa4003b809d4b9b4616b14cf923&oe=588CCEAE',
	link:'https://www.facebook.com/photo.php?fbid=10153656864118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys darling pale ale',
	pct:4.4,
	desc:'Not that different from a new',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107775_10153656864253745_3676978926907656134_n.jpg?oh=4dd35ee71a7be920bb90d2b789a647d4&oe=58C08D73',
	link:'https://www.facebook.com/photo.php?fbid=10153656864253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn Pale Ale',
	pct:4.7,
	desc:'Decent but there’s just a little something wrong',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112425_10153656864393745_4992271544321247491_n.jpg?oh=9c09374d200d3fa8dca348dbf82f94dc&oe=58C85F48',
	link:'https://www.facebook.com/photo.php?fbid=10153656864393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river Jamaica Ale',
	pct:5.6,
	desc:'Mild but with an underlying taste that’s really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112175_10153656864428745_274214784974027443_n.jpg?oh=289a42e8a3402f133f4afc3accc6505e&oe=5892A4A7',
	link:'https://www.facebook.com/photo.php?fbid=10153656864428745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Hop Hunter IPA',
	pct:6.2,
	desc:'Very hoppy with a nice finish',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115843_10153656864518745_6379524063255293794_n.jpg?oh=9ed911d53b0f49c283bd2ef4ddbd42be&oe=588E8575',
	link:'https://www.facebook.com/photo.php?fbid=10153656864518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat surefoot stout',
	pct:5.0,
	desc:'A fairly mild stout',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115556_10153656864648745_1260864511539950726_n.jpg?oh=96b0ce27d3fbe892cb0298416a3ceb46&oe=58CDCBD5',
	link:'https://www.facebook.com/photo.php?fbid=10153656864648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge Road Bling IPA',
	pct:5.8,
	desc:'Lacking the rounded finish that I was hoping for, but not too bad',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10350421_10153656864623745_1423000334986932771_n.jpg?oh=c0cbc5fb692f7fbfac175430973a18f0&oe=58CFCC48',
	link:'https://www.facebook.com/photo.php?fbid=10153656864623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon boy golden ale',
	pct:4.5,
	desc:'Has a little bit of paleness to it',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112481_10153656864773745_7414480192728397600_n.jpg?oh=e617ea2942c791810966b6c634d4c6b3&oe=58C6F545',
	link:'https://www.facebook.com/photo.php?fbid=10153656864773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Original special blonde beer',
	pct:8.6,
	desc:'Super strong, comes in a giant can and tastes better than normal lager. An all round winner',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12079418_10153656865038745_406494349310437104_n.jpg?oh=c98afe49a76f458deecf53492e6c6360&oe=58949626',
	link:'https://www.facebook.com/photo.php?fbid=10153656865038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s hop ale',
	pct:6.0,
	desc:'Strong and bitter, could do to be a bit more floral',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12143171_10153656865058745_383441333102974608_n.jpg?oh=b6324cb257d7782c7c3fe7e3aac765f7&oe=5895CF19',
	link:'https://www.facebook.com/photo.php?fbid=10153656865058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers',
	pct:5.0,
	desc:'The same as all the other thai beers',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12106825_10153656865098745_7827402413417902820_n.jpg?oh=195abb92f46b7f1459ecccdf0d060a03&oe=5891A371',
	link:'https://www.facebook.com/photo.php?fbid=10153656865098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Federbräu',
	pct:4.7,
	desc:'Has the flavour of a german beer but the quality is slightly lacking',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/12115906_10153656865258745_5285972944996147053_n.jpg?oh=30fa69893e76c31041e036d080d5a4b4&oe=58D23136',
	link:'https://www.facebook.com/photo.php?fbid=10153656865258745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ICing grapefruit',
	pct:4.0,
	desc:'Not sure how this qualifies as a beer but it\'s pretty nice regardless',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109080_10153656865268745_8515065510187069262_n.jpg?oh=fcd6e178b8aec2b546661dc62996b3f2&oe=58C313AF',
	link:'https://www.facebook.com/photo.php?fbid=10153656865268745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Phuket',
	pct:5.0,
	desc:'A little bit more tangy than other Thai beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12118934_10153656865338745_4802874236575690852_n.jpg?oh=b61fe8f09eda327f9c44241b7e74ae8c&oe=58C5A5AB',
	link:'https://www.facebook.com/photo.php?fbid=10153656865338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao dark lager',
	pct:6.5,
	desc:'Doesn’t really taste like a dark lager, just a really crisp and clean lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10888489_10153656865543745_7177566089678444243_n.jpg?oh=12a979b12cd3bf4e3de50cd3a6c807cd&oe=58926B29',
	link:'https://www.facebook.com/photo.php?fbid=10153656865543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers X-tra',
	pct:6.0,
	desc:'A slightly stronger and nicer version of the regular cheers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11201812_10153656865613745_2836886776655090085_n.jpg?oh=f4f7fa69585a596ea116faa509762829&oe=5890A838',
	link:'https://www.facebook.com/photo.php?fbid=10153656865613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel Pale Pilsen',
	pct:5.0,
	desc:'Filipino version of San Miguel. Not nearly as nice as the Spanish version',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/12108847_10153656865618745_952249772663413561_n.jpg?oh=75c68a784fbfe6f5fa8101029c1db67b&oe=58D52EC7',
	link:'https://www.facebook.com/photo.php?fbid=10153656865618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The fox mid ale',
	pct:null,
	desc:'A microbrew copy of every other tasteless mid strength lager out there',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12096074_10153656865793745_4213334596574344775_n.jpg?oh=263022ac8487c311fe9d478996d98ba4&oe=58D2CA71',
	link:'https://www.facebook.com/photo.php?fbid=10153656865793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XXXX bitter',
	pct:4.6,
	desc:'So hard to find the full strength XXXX even in QLD. And it\'s easy to see why. Needs a shot of vodka like in the old days',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12108168_10153656865913745_802278422732824770_n.jpg?oh=948956c8a1b692cb43f15b464c40e103&oe=588EFB8A',
	link:'https://www.facebook.com/photo.php?fbid=10153656865913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės vyšniu kriek',
	pct:5.0,
	desc:'A cherry beer. A little bit too see to drink much but nice in small doses',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12116003_10153656865943745_8818428390735256762_n.jpg?oh=c65be2c392dcc7e85d8a345a270fe1e6&oe=58D2C11E',
	link:'https://www.facebook.com/photo.php?fbid=10153656865943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis grand select',
	pct:5.4,
	desc:'Standard lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115501_10153656866208745_1270989772264309732_n.jpg?oh=24d1d7273d9addaffdf6679a4332fe83&oe=588AA7A3',
	link:'https://www.facebook.com/photo.php?fbid=10153656866208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point the way IPA',
	pct:5.9,
	desc:'Really good example of an IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12088452_10153656866578745_7251403189729284400_n.jpg?oh=9c4bd0354ff0a6e53ea447e8cf8fea89&oe=58C84012',
	link:'https://www.facebook.com/photo.php?fbid=10153656866578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Thanks captain obvious IPA',
	pct:5.8,
	desc:'Gotta love citra hops',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112199_10153656866448745_6538817725943333095_n.jpg?oh=04bd4936c625e2681fefc9cd04bcf6e1&oe=58BE1432',
	link:'https://www.facebook.com/photo.php?fbid=10153656866448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner kristallweissbier',
	pct:5.4,
	desc:'Very crisp for a wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115843_10153656866648745_4612566258079331508_n.jpg?oh=03ea503b32e5a9fb7b90f42678205ec2&oe=5887677C',
	link:'https://www.facebook.com/photo.php?fbid=10153656866648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noisy minor anzus IPA',
	pct:6.0,
	desc:'A bit of a let down, just too bitter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12088432_10153656866828745_7848120632268756477_n.jpg?oh=7797495fd6138edb6209324951964456&oe=5888E3B6',
	link:'https://www.facebook.com/photo.php?fbid=10153656866828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Martens Pils',
	pct:5.0,
	desc:'A good session beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12072622_10153656866868745_684969190381396266_n.jpg?oh=8c6aec8d64fe0782d3d948f87c1056ed&oe=58C4032A',
	link:'https://www.facebook.com/photo.php?fbid=10153656866868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chimay red',
	pct:7.0,
	desc:'Well known but not the best example of a belgian dubbel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1554374_10153656866968745_899111329413653237_n.jpg?oh=e24cf5f013cc53e388e9107ef5e47f0f&oe=5887E07E',
	link:'https://www.facebook.com/photo.php?fbid=10153656866968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds bantam IPA',
	pct:4.7,
	desc:'My biggest disappointment so far from two birds',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115580_10153656867073745_1898684720680152438_n.jpg?oh=846dece31198ebb8a0a7741532366780&oe=58926FFA',
	link:'https://www.facebook.com/photo.php?fbid=10153656867073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew cult hop zone',
	pct:5.0,
	desc:'Very good IPA but not sure if it\'s a good session beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12079324_10153656867078745_2445263991582775788_n.jpg?oh=9de8f5ef5adf4b0a2cc1bcbf82bab5c7&oe=58D09884',
	link:'https://www.facebook.com/photo.php?fbid=10153656867078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult spoiler alert',
	pct:4.5,
	desc:'A little bit of a let down from the IPAs',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107838_10153656867113745_341030388742417750_n.jpg?oh=b782b561f837d98bcc8e55f79c54a79c&oe=5895923A',
	link:'https://www.facebook.com/photo.php?fbid=10153656867113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade pale ale',
	pct:4.7,
	desc:'A regular beer pretending to be something more',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12140701_10153656867523745_8057771070522060863_n.jpg?oh=b7700d758ea6407f7264782c07343377&oe=588D542C',
	link:'https://www.facebook.com/photo.php?fbid=10153656867523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire nine tails',
	pct:5.0,
	desc:'Pretty good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12074484_10153656867603745_6432235869019497791_n.jpg?oh=5342297a05064d6cf5085d399a1d525a&oe=58BEAE52',
	link:'https://www.facebook.com/photo.php?fbid=10153656867603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Celia',
	pct:4.5,
	desc:'Slightly bad czech lager. But at least it’s gluten free',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12119170_10153656873518745_1645193236829467007_n.jpg?oh=5d5c0c01e9c02afc5c317bb73f039f3e&oe=5886DAD6',
	link:'https://www.facebook.com/photo.php?fbid=10153656873518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxx dry',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107835_10153656873528745_2876365020596691425_n.jpg?oh=09ad5fc37452a2c88cf02b234a9051cf&oe=58C5079B',
	link:'https://www.facebook.com/photo.php?fbid=10153656873528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn amber ale',
	pct:4.7,
	desc:'A bit too bitter',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109019_10153656873578745_8374191481709518736_n.jpg?oh=31b42eb28e0bf4d86083053ddc8c4346&oe=588C7A6E',
	link:'https://www.facebook.com/photo.php?fbid=10153656873578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Pointers pale ale',
	pct:4.2,
	desc:'A very well rounded pale ale but not that much flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12119151_10153656873648745_4254619746116923719_n.jpg?oh=4b2a9a801fdb54bf8d23ad5e9282e4e8&oe=588A0D87',
	link:'https://www.facebook.com/photo.php?fbid=10153656873648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner helfe weissbier',
	pct:5.4,
	desc:'A very mild flavoured wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509736_10153811610538745_2189727718735863015_n.jpg?oh=5c6a5410b5e279335441647c10cc9632&oe=588D091B',
	link:'https://www.facebook.com/photo.php?fbid=10153811610538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Downtown Brown',
	pct:5.0,
	desc:'A fairly unsweet brown',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12400634_10153811610548745_7658175171400136673_n.jpg?oh=f0784c64495b23b6c1f8b752b0d5dc3e&oe=588B6255',
	link:'https://www.facebook.com/photo.php?fbid=10153811610548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans Hoppy Gonzales',
	pct:5.9,
	desc:'Really mild and nice chilli flavour but there\'s a little too much bitterness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1935435_10153811610483745_7535392188033528320_n.jpg?oh=b34c62c3391cb0e0636e0db4da6f3a0a&oe=58C9E04F',
	link:'https://www.facebook.com/photo.php?fbid=10153811610483745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans red sky IPA',
	pct:6.5,
	desc:'I great IPA for people who are new to beers with flavour. Mild but really well done',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510233_10153811610863745_3262758970154145170_n.jpg?oh=7b501bd9cecbb056f39535d96340b644&oe=588BD43E',
	link:'https://www.facebook.com/photo.php?fbid=10153811610863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans white Sky',
	pct:6.5,
	desc:'Never quite tasted right but perhaps I was having an off day',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/10561728_10153811610893745_8053139554847988051_n.jpg?oh=fb60f48d22c6d5cc2a0c741ab820d6aa&oe=58871D07',
	link:'https://www.facebook.com/photo.php?fbid=10153811610893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s newtowner',
	pct:4.8,
	desc:'A fairly plain lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12376181_10153811610908745_3920511327334452329_n.jpg?oh=fb6a409746c3666fe771507e12daef8c&oe=58957A83',
	link:'https://www.facebook.com/photo.php?fbid=10153811610908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redds Apple-Ale',
	pct:4.0,
	desc:'Really mild apple flavour, like a cider without all the sugar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12507414_10153811611358745_6320534595559779603_n.jpg?oh=30d609967961b7aecc4bb2fa5e4b04d5&oe=58C36CAF',
	link:'https://www.facebook.com/photo.php?fbid=10153811611358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hill Scotch ale',
	pct:5.8,
	desc:'Fizzed for about 10 minutes and then just tasted a little blemished',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12495170_10153811611453745_4249513101009687446_n.jpg?oh=bf74a530a3b26c80cad7923ffe214ad4&oe=58C02B73',
	link:'https://www.facebook.com/photo.php?fbid=10153811611453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult Reset Robot',
	pct:3.5,
	desc:'A little on the weak side but a really good pale flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12417859_10153811611533745_6524426791759855644_n.jpg?oh=07113b2b145ed633248a1354b4b2c611&oe=58BF0341',
	link:'https://www.facebook.com/photo.php?fbid=10153811611533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garagista IPA',
	pct:5.8,
	desc:'Really nice colour but the flavour misses the mark',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12439242_10153811611693745_5295129091092363707_n.jpg?oh=db8e2b83e8896bdd32c1c3dab295fe34&oe=58C02693',
	link:'https://www.facebook.com/photo.php?fbid=10153811611693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Alice Porter',
	pct:5.2,
	desc:'A fairly nice porter, but nothing great',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1227_10153811611783745_4791320626770283018_n.jpg?oh=440adc8a2f10786cd701dec7791cf9ca&oe=58885FD0',
	link:'https://www.facebook.com/photo.php?fbid=10153811611783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volkan Santorini blonde',
	pct:5.0,
	desc:'Has a kind of silty texture to it and an Eastern European tang',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510230_10153811618053745_1537940753105870983_n.jpg?oh=5d5f42ab62e2033411ad625fb1efa933&oe=588CB822',
	link:'https://www.facebook.com/photo.php?fbid=10153811618053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing company citra IPA',
	pct:6.5,
	desc:'Really nice floral flavour. Gotta love citra hops',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510389_10153811618073745_2543157782800791845_n.jpg?oh=5cedb837d124fd1d01e8c37a2a058b9e&oe=58BE74A7',
	link:'https://www.facebook.com/photo.php?fbid=10153811618073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch voyage of the Galaxy',
	pct:3.9,
	desc:'Just can\'t get into this. It\'s heavy without a nice flavour behind it',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12523010_10153811617993745_3799427315794683212_n.jpg?oh=d7a93a6379ff91613eee9cff6af803ae&oe=58C8E7BF',
	link:'https://www.facebook.com/photo.php?fbid=10153811617993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant three toe',
	pct:5.6,
	desc:'Has some sort of wrong tinge to it and nothing to redeem that',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/12523010_10153811618698745_8674316170585442130_n.jpg?oh=6dd78fff91f82ed2edc698365f3b6fa9&oe=58D2BDEE',
	link:'https://www.facebook.com/photo.php?fbid=10153811618698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch west coast IPA',
	pct:5.8,
	desc:'Mild but very tasty. One of the first from batch that I really like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510395_10153811618823745_3574564297259479731_n.jpg?oh=52d902250117bcbdfd00716d89ae0cb1&oe=588BEEF2',
	link:'https://www.facebook.com/photo.php?fbid=10153811618823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modus cream of the hop #3',
	pct:5.6,
	desc:'Actually more creamy than a normal beer. Really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509647_10153811618828745_7009333713246897313_n.jpg?oh=e55316639a38e915763e86375f8916a6&oe=58C842C6',
	link:'https://www.facebook.com/photo.php?fbid=10153811618828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie kolsch',
	pct:4.6,
	desc:'Really well balanced but a little lacking in flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509088_10153811619033745_702562891235220957_n.jpg?oh=b96bd6152fe1cfd25c524e9ee7337ba0&oe=58C02FAF',
	link:'https://www.facebook.com/photo.php?fbid=10153811619033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie artisan ale',
	pct:4.4,
	desc:'A bit of a harsh flavour. Disappointing after the kolsch',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509407_10153811619193745_3070555167581402785_n.jpg?oh=2740a92a4357d92d77279a4ed3312140&oe=5888C700',
	link:'https://www.facebook.com/photo.php?fbid=10153811619193745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gulden draak 9000',
	pct:10.5,
	desc:'A little harsh all round without any real nice flavour to back it up. You get used to it but why bother',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/580376_10153811619198745_8101596644532309757_n.jpg?oh=c9c29493d9563a798c9c4fb5738c3b8f&oe=58CBAF9E',
	link:'https://www.facebook.com/photo.php?fbid=10153811619198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arrogant bastard barrel aged',
	pct:8.1,
	desc:'Really nice secondary flavour. Could drink a lot of these',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12508899_10153811619303745_6510580439583908445_n.jpg?oh=7d72dc9b094a054b8dcd724524b2acba&oe=588EAC2D',
	link:'https://www.facebook.com/photo.php?fbid=10153811619303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pinedrops IPA',
	pct:6.5,
	desc:'A solid IPA, better than I expected',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581926_10153811639323745_2485735585097388298_n.jpg?oh=85d491b6b19582d53ef08ad239444d2e&oe=58871FF4',
	link:'https://www.facebook.com/photo.php?fbid=10153811639323745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Killer Sproket Rye IPA',
	pct:6.2,
	desc:'I haven’t had many rye IPAs but so far they’ve all been great beers',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1660722_10153811639283745_5357595767484756321_n.jpg?oh=4b8a76263c21505e088f18303410a938&oe=5892AB99',
	link:'https://www.facebook.com/photo.php?fbid=10153811639283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Wild Turkey Bourbon Barrel Stout',
	pct:6.9,
	desc:'Better than I expected, but then I was pretty worried about this one',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/6841_10153811639248745_4589085530063719353_n.jpg?oh=0a6ce1beb9e564a4ed212711efd890a6&oe=58C21A07',
	link:'https://www.facebook.com/photo.php?fbid=10153811639248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington IPA',
	pct:6.4,
	desc:'Another winner from Mornington. Really strong on flavour but without any harshness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1933914_10153811639743745_2943766557036716002_n.jpg?oh=48043f5032c90323c162626447d622c0&oe=58CBCA01',
	link:'https://www.facebook.com/photo.php?fbid=10153811639743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures Furphy',
	pct:4.4,
	desc:'Saw this a lot in Melbourne and wish it would start showing up in Sydney. Glad to see some more brewers making Kölschs',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509006_10153811639708745_4922522512256088245_n.jpg?oh=15bcbde318502dc365a18e95dfe1584b&oe=58D41415',
	link:'https://www.facebook.com/photo.php?fbid=10153811639708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Eelriver Amber Ale',
	pct:4.5,
	desc:'Nothing much to say about this one',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1930332_10153811639763745_6829727140926050001_n.jpg?oh=36cd6334384b59373b78295330c0ee23&oe=58CA2872',
	link:'https://www.facebook.com/photo.php?fbid=10153811639763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedlars Pale',
	pct:5.3,
	desc:'All round decent pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10649831_10153811640038745_8117596568326792946_n.jpg?oh=a69d38fc7eb321924a71573deffd6538&oe=58D15284',
	link:'https://www.facebook.com/photo.php?fbid=10153811640038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 Sorelle',
	pct:5.5,
	desc:'A strange looking beer but has a lovely mild Belgian taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q85/p480x480/12509130_10153811640153745_7506807419110071415_n.jpg?oh=0e6b7d6a550752ea76d5aacebe88bffb&oe=58898EE3',
	link:'https://www.facebook.com/photo.php?fbid=10153811640153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pact pale ale',
	pct:5.2,
	desc:'Another pale ale that falls short. Seems like too many Australian pales are targeting the lager audience',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1923172_10153811640033745_626679474657757195_n.jpg?oh=3393f818c9a6c7e7fa4a1796f710ed22&oe=58CFFF7B',
	link:'https://www.facebook.com/photo.php?fbid=10153811640033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita Amber',
	pct:4.5,
	desc:'An ok beer but there was a slight tang that I didn’t like. I feel like this brewery has so much more to offer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1434_10153811640518745_1774691229893967268_n.jpg?oh=52a94fe65d51a2687b4d70b99e57e3b6&oe=58CF27EF',
	link:'https://www.facebook.com/photo.php?fbid=10153811640518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Scorcher Summer Ale',
	pct:4.6,
	desc:'Fairly inoffensive lager. Can’t complain',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1929791_10153811640558745_2017001779885811496_n.jpg?oh=9d6c4465637af3dbab73d3d83c305dad&oe=58872201',
	link:'https://www.facebook.com/photo.php?fbid=10153811640558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Royal Dutch Post Horn Lager',
	pct:4.3,
	desc:'It’s beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936964_10153811640493745_4599335124953015175_n.jpg?oh=159fcb30fea46f5b4bb4a2875434e305&oe=58C2F399',
	link:'https://www.facebook.com/photo.php?fbid=10153811640493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Abbot Christmas Ale',
	pct:11.5,
	desc:'Slightly syrupy. Gives that nice warmth that makes sense at Christmas. Just not in Australia. Still great flavour all round',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717228_10153890412513745_5272405049843729399_n.jpg?oh=7baaa6394c1d6a7bd94ef6f8a48de5fb&oe=588F6F1A',
	link:'https://www.facebook.com/photo.php?fbid=10153890412513745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sunburnt Irish red ale',
	pct:5.0,
	desc:'There’s a fair bit of flavour but it’s just harsh. Not my cup of tea',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12734008_10153890412458745_3823076669808581993_n.jpg?oh=aa6955891dd215d5f4ed03f2b6131a4c&oe=58D1C5D6',
	link:'https://www.facebook.com/photo.php?fbid=10153890412458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garage Project La Calavera Catrina',
	pct:6.9,
	desc:'I may be unique in that I find that chilli and beer are a perfect combination; and this is the best one I’ve had so far',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12705503_10153890412498745_7528959077834200322_n.jpg?oh=7389f87a148d149660f0c04a8d3dcf67&oe=588E3122',
	link:'https://www.facebook.com/photo.php?fbid=10153890412498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Session pale ale',
	pct:4.7,
	desc:'A little bit harsh for a session beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717761_10153890412778745_1469082473536049223_n.jpg?oh=a99a3dd8ec66070839f3e1a3a0e77e1d&oe=588CD03D',
	link:'https://www.facebook.com/photo.php?fbid=10153890412778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nail Golden IPA',
	pct:7.0,
	desc:'A little too much bitterness without the flavour to back it up',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733411_10153890412873745_394127344743781782_n.jpg?oh=7a90fe59eb7c5aa4c3c939037c3ac831&oe=58C64617',
	link:'https://www.facebook.com/photo.php?fbid=10153890412873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy Yak',
	pct:4.2,
	desc:'Pretty standard',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12494917_10153890412913745_8466195884285998669_n.jpg?oh=d10f14a9afc20e8a68d170a0acf4ce1c&oe=58CC864F',
	link:'https://www.facebook.com/photo.php?fbid=10153890412913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St-ambroise Apricot wheat ale',
	pct:5.0,
	desc:'The apricot is very faint but kind of interferes with the other flavours in an unpleasant way',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12687816_10153890413098745_7756341127358562624_n.jpg?oh=9229e0e8001f158491ee4fb989a49107&oe=588D4D29',
	link:'https://www.facebook.com/photo.php?fbid=10153890413098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rye hard IPA',
	pct:6.3,
	desc:'Super bitter without a bold IPA flavour. Sadly the awesome name doesn\'t translate into flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717260_10153890413303745_2949419762809562441_n.jpg?oh=47371d64d20157f67ed7cacef54672bb&oe=5890AC79',
	link:'https://www.facebook.com/photo.php?fbid=10153890413303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Windhoek',
	pct:4.0,
	desc:'Eastern European maltyness. Ok for a cheap beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890413318745_2007894643886260840_n.jpg?oh=7cb51a164de6d0ba817bceb3e5fca609&oe=58BFFDB1',
	link:'https://www.facebook.com/photo.php?fbid=10153890413318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke sprocket',
	pct:6.6,
	desc:'Really nice hop profile for a flavoursome IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12743992_10153890413553745_2836285406574144058_n.jpg?oh=a0feaab816516c82f33083539c11e816&oe=58D3199B',
	link:'https://www.facebook.com/photo.php?fbid=10153890413553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Crankshaft',
	pct:6.0,
	desc:'Really strong on the hops, just a little too bitter',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744268_10153890413753745_5060146557255132828_n.jpg?oh=66b8c47b3c773e378991a120014705d9&oe=58D40D99',
	link:'https://www.facebook.com/photo.php?fbid=10153890413753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke PSI',
	pct:10.0,
	desc:'Very sour and bitter. Not for me',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11229820_10153890413723745_4413328230475725119_n.jpg?oh=470b67805273308c0dab6dd2f7040574&oe=5894AF11',
	link:'https://www.facebook.com/photo.php?fbid=10153890413723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Cluster 16',
	pct:16.2,
	desc:'Like a normal IPA distilled into a super potent form. Too much for me right now but I should retry',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12741979_10153890413793745_6934869662046573410_n.jpg?oh=85523b96edd510218a766d6da668c051&oe=58C0508E',
	link:'https://www.facebook.com/photo.php?fbid=10153890413793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed californicator IPA',
	pct:7.5,
	desc:'A textbook IPA. Bitter with a strong hop flavour. I just picked it because of the bears having sex on the label',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717177_10153890413993745_4407733928412012176_n.jpg?oh=302accfffeb80268a0384367f3e5dc93&oe=58C988B9',
	link:'https://www.facebook.com/photo.php?fbid=10153890413993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing Galaxy IPA',
	pct:6.5,
	desc:'Low on bitterness, high on aroma. Can\'t decide between this and the citra',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12688166_10153890414098745_93931054277212370_n.jpg?oh=f23602592418d6f1d11c7d744eaa34c7&oe=58CC4EFC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen from the vault',
	pct:5.4,
	desc:'Such an amazing sour lambic. The nerd reference is just a bonus',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12687895_10153890414198745_3642229716769396500_n.jpg?oh=0cc3acc750f7f2af09e9abaec985af7d&oe=58964749',
	link:'https://www.facebook.com/photo.php?fbid=10153890414198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen sequoia',
	pct:6.2,
	desc:'Listed as an amber but kind of like an IPA but a little smoother',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733610_10153890414378745_2084592148299538325_n.jpg?oh=409f1b2b887f72fd6c0a076a0ab7d3f3&oe=589004F6',
	link:'https://www.facebook.com/photo.php?fbid=10153890414378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen velvet cream',
	pct:6.6,
	desc:'Like a Guinness with a little more coffee flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12705540_10153890414573745_7427353905568782339_n.jpg?oh=90f880040dd8fa2c1703cda3be57c8ab&oe=58C1A706',
	link:'https://www.facebook.com/photo.php?fbid=10153890414573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen Duncan',
	pct:3.4,
	desc:'Perhaps one of the mildest beers I\'ve ever had but has a great balance between sour and salty. Deducting points because it\'s a mid strength',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733543_10153890414603745_2708879129886926163_n.jpg?oh=d85ee6fd7ab8d63705a3387b9b6b0096&oe=58BE7BCD',
	link:'https://www.facebook.com/photo.php?fbid=10153890414603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi dry black',
	pct:5.5,
	desc:'A rather sweet taste compared to the regular asahi',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942864_10153890414673745_1846063327846189238_n.jpg?oh=48e295a00e08aad5173dccc7bbdc318a&oe=588DDF80',
	link:'https://www.facebook.com/photo.php?fbid=10153890414673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wet hopped oatmeal ale',
	pct:4.3,
	desc:'A lot more plain than I expected. There\'s a really slight oat aftertaste but I was hoping for it to dominate the beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12742769_10153890414963745_1738049076033297377_n.jpg?oh=513fc0e9d8942d554fcc286328106d4c&oe=58C27CDC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Single-take session ale',
	pct:4.5,
	desc:'Perhaps not the best beer at 10am. The Belgian flavour seemed a bit too wheaty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890415008745_8479217372208836383_n.jpg?oh=1a73aea230ce9a930b9b84412485ed93&oe=58BFDD77',
	link:'https://www.facebook.com/photo.php?fbid=10153890415008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tecate',
	pct:4.5,
	desc:'Pretty plain lager, easy drinking. +1 because of the giant can',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728804_10153890415018745_4089268131902727213_n.jpg?oh=3d83dc1c3b3d000990f52301485f35c7&oe=58C667F4',
	link:'https://www.facebook.com/photo.php?fbid=10153890415018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie boys gunnamatta',
	pct:6.5,
	desc:'Amazingly floral but with so little bitterness. Has a slight spicyness as well which balances perfectly',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12646945_10153890415153745_1313474125480375485_n.jpg?oh=470309845c3a3a544b7b2c7f3a64f0a4&oe=58D09631',
	link:'https://www.facebook.com/photo.php?fbid=10153890415153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum capital pale ale',
	pct:4.7,
	desc:'A little tangy for a pale but still nice. Though on further tasting I\'ve found some bottles to be a little bit too tangy and tastes more like an imperfection than a feature',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717222_10153890415308745_1813544797541172385_n.jpg?oh=999fae04637cb8d914ef4625c741f913&oe=58D38000',
	link:'https://www.facebook.com/photo.php?fbid=10153890415308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures dog days',
	pct:4.4,
	desc:'Surprisingly flavourful for a summer beer. Nice little tang to it',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717186_10153890415423745_6451428281725925044_n.jpg?oh=f8b9ee05332fcbb08d019de4a9c8f6a2&oe=588ECE32',
	link:'https://www.facebook.com/photo.php?fbid=10153890415423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tradewind lager',
	pct:4.4,
	desc:'Easy drinking lager. Good for an all day drink',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717308_10153890415688745_8114544610484440853_n.jpg?oh=54d8954db92c666d16c2198d68e66b47&oe=588A5D93',
	link:'https://www.facebook.com/photo.php?fbid=10153890415688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed Kol schisel',
	pct:4.2,
	desc:'Fairly plain and easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715804_10153890415748745_782298131807112307_n.jpg?oh=ed72240ac595c0ed02f99754a2a111f6&oe=58C0E315',
	link:'https://www.facebook.com/photo.php?fbid=10153890415748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum stinger',
	pct:4.8,
	desc:'kind of tart but sits in a strange place like it can\'t decide what to be',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717321_10153890415758745_9148183600742438871_n.jpg?oh=20b865c0942ad42964158d2d4d3e6734&oe=58C08352',
	link:'https://www.facebook.com/photo.php?fbid=10153890415758745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bristol beer factory independence',
	pct:4.6,
	desc:'The description sounded good but didn\'t quite hit that mark',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12741906_10153890416078745_2509646553682533650_n.jpg?oh=b04496c1e5164a46b4b49d4f513bbf25&oe=58CE06FF',
	link:'https://www.facebook.com/photo.php?fbid=10153890416078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDog cosmic highway',
	pct:4.8,
	desc:'Well named, you can\'t quite pick what you\'re drinking. Not bad but fails to master any category',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744551_10153890416133745_1898256782764708907_n.jpg?oh=42b096437619526d4f2fe6c4181810d9&oe=58D3189E',
	link:'https://www.facebook.com/photo.php?fbid=10153890416133745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm hop select',
	pct:6.0,
	desc:'I expected more, there\'s a slight metallic taste which shouldn\'t be in a nice beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12742633_10153890416108745_3638813966682726331_n.jpg?oh=faaad4bf28338d3ba7f3aada9745d354&oe=58CEC9ED',
	link:'https://www.facebook.com/photo.php?fbid=10153890416108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside othello\'s curse',
	pct:9.0,
	desc:'Too harsh on the tongue. The one time I\'ve wanted a smaller bottle',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733449_10153890416838745_3402335338987277776_n.jpg?oh=7999c854c02b3997101e728d37755a67&oe=58D1EBC1',
	link:'https://www.facebook.com/photo.php?fbid=10153890416838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita jockamo',
	pct:6.5,
	desc:'Too harsh, this brewery is still yet to win me over',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12718283_10153890416898745_6096850790027178927_n.jpg?oh=3072f4940f3a2425e92cefcff5e33ce3&oe=58CFE446',
	link:'https://www.facebook.com/photo.php?fbid=10153890416898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brontide smooth black ale',
	pct:5.0,
	desc:'Started off a bit harsh but was a lot better than other black ales. Makes me want to try more dark beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12734008_10153890416878745_633217613773642603_n.jpg?oh=ba6f94e61e32f81f352e8cecd5d8eb77&oe=5886E809',
	link:'https://www.facebook.com/photo.php?fbid=10153890416878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rodenbach',
	pct:5.2,
	desc:'Surprisingly tangy with very little bitterness. Worth a try',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890417253745_2655298397910190348_n.jpg?oh=fae8d1a4fbd7fa5b00568447eb92b725&oe=588AFFFA',
	link:'https://www.facebook.com/photo.php?fbid=10153890417253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner pils',
	pct:5.1,
	desc:'Refreshing but not my favourite flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717710_10153890417503745_4345190063055237739_n.jpg?oh=a1606426fcfcb661c9c1dd475402e0d6&oe=5892C009',
	link:'https://www.facebook.com/photo.php?fbid=10153890417503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shepherd Neame IPA',
	pct:6.1,
	desc:'I’m always disappointed by English IPAs since the flavour I want from an IPA is more akin to the American interpretation with much more floral hops',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12729064_10153890417368745_6907793566119928582_n.jpg?oh=74cc94ccc1c425c95f6ac5e70109fc91&oe=589257E5',
	link:'https://www.facebook.com/photo.php?fbid=10153890417368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red horse beer',
	pct:7.0,
	desc:'Nicer than expected. Has a slightly spicy finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744494_10153890418648745_513314091064162487_n.jpg?oh=e63917aa3145cd626ef35344075a39f8&oe=58919CEB',
	link:'https://www.facebook.com/photo.php?fbid=10153890418648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road little bling',
	pct:3.4,
	desc:'Not tasty enough to justify the low alcohol',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744494_10153890418973745_1506888197203194129_n.jpg?oh=6f76ecee9e3ba61558318ea4c5f65453&oe=58D04252',
	link:'https://www.facebook.com/photo.php?fbid=10153890418973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Molson Canadian',
	pct:5.0,
	desc:'Crisp and refreshing but nothing special',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728991_10153890418838745_7409486003049273062_n.jpg?oh=7b271d71f0ec80bc065fffaada139f6c&oe=58957578',
	link:'https://www.facebook.com/photo.php?fbid=10153890418838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeasty boys hud-a-wa strong',
	pct:6.8,
	desc:'An interestingly strong flavour but it maintains a smooth finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12729183_10153890419403745_8807635240820254136_n.jpg?oh=941fc0a5d897027ff6a1a6593970a875&oe=58CEF483',
	link:'https://www.facebook.com/photo.php?fbid=10153890419403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont kölsch',
	pct:4.6,
	desc:'I love a good kolsch. So easy drinking but without being flavourless',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12745536_10153890419543745_6014336509869834605_n.jpg?oh=f758bdee3c53b7a1124a2e55b8415659&oe=58C5EA35',
	link:'https://www.facebook.com/photo.php?fbid=10153890419543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont copper ale',
	pct:4.0,
	desc:'The final sip of this beer made me sad that it was gone',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715379_10153890419508745_5707512389210281014_n.jpg?oh=186c4e15a30b51920fb28ee66d14ebb3&oe=58CE59C2',
	link:'https://www.facebook.com/photo.php?fbid=10153890419508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch big Paul\'s mango IPA',
	pct:6.1,
	desc:'The mango flavour doesn\'t overpower what is already a fantastic IPA',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728900_10153890419808745_8114701954738943189_n.jpg?oh=79e92ef84dd6959153b98465546be2eb&oe=58C8BF9B',
	link:'https://www.facebook.com/photo.php?fbid=10153890419808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman Albo corn ale',
	pct:5.5,
	desc:'Pretty much a lager. Much less exciting than I thought',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728843_10153890420703745_1906734589373356822_n.jpg?oh=524c7c4480795af898426c97bbdae50c&oe=588F44FB',
	link:'https://www.facebook.com/photo.php?fbid=10153890420703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman old salty gose',
	pct:4.9,
	desc:'Perhaps the saltiest beer I\'ve ever tasted. But once the initial salt is gone there\'s a really pleasant flavour without the normal beer bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12745969_10153890420683745_2326162512188830203_n.jpg?oh=de439659effdd4e7288b761763937f9a&oe=58CFD239',
	link:'https://www.facebook.com/photo.php?fbid=10153890420683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven Twisted Thistle IPA',
	pct:5.6,
	desc:'Started off with a bit of a tang but seemed to lose it towards the end',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/943951_10153890422103745_2064605675608289445_n.jpg?oh=b18b89158dac4f76fac069da35f685ca&oe=58D02610',
	link:'https://www.facebook.com/photo.php?fbid=10153890422103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington brown',
	pct:5.0,
	desc:'Nicely rounded. Another winner from Mornington',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12688382_10153890449953745_3980101759747984162_n.jpg?oh=63f3116df2693a9ad2e91dda8fcaae0b&oe=58C4AD45',
	link:'https://www.facebook.com/photo.php?fbid=10153890449953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat pale ale',
	pct:5.2,
	desc:'Really refreshing with the right amount of hop flavour for a pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12814792_10153966648923745_359987341393808655_n.jpg?oh=dd95191973620bd350d645517b3e690d&oe=58D50CB5',
	link:'https://www.facebook.com/photo.php?fbid=10153966648923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Swindler',
	pct:4.2,
	desc:'Disappointingly plain',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/936555_10153966649228745_7093539391186290992_n.jpg?oh=d2a8f687b9f5735c8b180a1876c4d0a5&oe=58D003C2',
	link:'https://www.facebook.com/photo.php?fbid=10153966649228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat hightail ale',
	pct:4.5,
	desc:'Still yet to have a bad beer from mountain goat though they are a bit too similar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970226_10153966649058745_8469352202645792973_n.jpg?oh=c1182e30f106bb4e5afc0beddd16195f&oe=58D5521B',
	link:'https://www.facebook.com/photo.php?fbid=10153966649058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Tower 10 IPA',
	pct:7.0,
	desc:'An IPA with a sweet finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12036567_10153966649818745_3762140237584842223_n.jpg?oh=d90db2783cae2c7192f3d84175ab3826&oe=58C5C38B',
	link:'https://www.facebook.com/photo.php?fbid=10153966649818745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven scottish ale',
	pct:5.2,
	desc:'Scottish ale isn’t one of my favourite styles so I can’t give it a top rating',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10342506_10153966649853745_2082231274376560811_n.jpg?oh=8d98180aa1776006f13d4c712f72e33e&oe=58C01E36',
	link:'https://www.facebook.com/photo.php?fbid=10153966649853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fóti',
	pct:4.6,
	desc:'Has a really mild ginger taste. The smell is a little strange but the flavour really grows on you',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1918614_10153966650093745_125776627995891948_n.jpg?oh=661befd576734a9a9361feb0b42fbeef&oe=588F6672',
	link:'https://www.facebook.com/photo.php?fbid=10153966650093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante trigo',
	pct:5.0,
	desc:'Surprisingly this cheap beer is one of the better wheat beers that I’ve had. The tang is really well balanced. That said it is a bit light on flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/535112_10153966650528745_107085668519640662_n.jpg?oh=f9bdd7a85f5836767edc459f979dd2c7&oe=588958E7',
	link:'https://www.facebook.com/photo.php?fbid=10153966650528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Westvleteren Blond',
	pct:5.8,
	desc:'A lot lighter on flavour than I expected but then the bottle I have is older than it should be. That said it is perfectly balanced down to the last drop and there’s a hint of some deliciousness there. Not worth the price you pay in this country but I would love to get a fresh case of this',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1625546_10153966650393745_441647493230179601_n.jpg?oh=0e7c641c2a480031f0f91037a842ae49&oe=5889D7A9',
	link:'https://www.facebook.com/photo.php?fbid=10153966650393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor IPA',
	pct:6.5,
	desc:'I can’t enjoy this while eating. The bitterness difference is just too large for my taste buds to cope. Outside of that the bitterness is still a little too strong for the hop aroma',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/75534_10153966650468745_295000144566915941_n.jpg?oh=df56d1672f84f835fbcd017f5d3fddcb&oe=58CA0324',
	link:'https://www.facebook.com/photo.php?fbid=10153966650468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew dog Jack Hammer',
	pct:7.2,
	desc:'So much floral and citrus aroma. More bitterness than I would like but once you get used to it the flavour is amazing',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1507888_10153966650763745_3858788343816093746_n.jpg?oh=f250368e45b1eb0f28c1d9f356067baf&oe=58BE5755',
	link:'https://www.facebook.com/photo.php?fbid=10153966650763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie Boys Dark Matta',
	pct:7.5,
	desc:'Pretty good for a dark beer. Fairly smooth and rich but perhaps a little too bitter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10347498_10153966651168745_482800618815663484_n.jpg?oh=ada898aa353c954d30ddc0489202c36d&oe=589230EC',
	link:'https://www.facebook.com/photo.php?fbid=10153966651168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masters Finest',
	pct:4.5,
	desc:'No flavour except some bitterness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10368217_10153966651078745_5301100254520843348_n.jpg?oh=9b8cff64930d65bdc5d4c56346206c4f&oe=58C784B9',
	link:'https://www.facebook.com/photo.php?fbid=10153966651078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Throwback IPA',
	pct:3.5,
	desc:'Great smell but a bit lacking on flavour. A nice session IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10169445_10153966651248745_4831098313362630542_n.jpg?oh=0007fe47eec943d5cb972476c1a1a47b&oe=58871A11',
	link:'https://www.facebook.com/photo.php?fbid=10153966651248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės kvietinis',
	pct:5.2,
	desc:'Pretty standard wheat beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10356398_10153966651813745_6716954315521047307_n.jpg?oh=bc2ba9f009c74e2f56c8cf1577c58a95&oe=58D22F0F',
	link:'https://www.facebook.com/photo.php?fbid=10153966651813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Houblon Chouffe Double IPA Triple',
	pct:9.0,
	desc:'Doesn’t really taste much like an IPA, nor is it the best Belgian blonde',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12494908_10153966651838745_649551942505437131_n.jpg?oh=1303bb61e5afbe9ad22dafa5fd3fbe31&oe=58C54E4D',
	link:'https://www.facebook.com/photo.php?fbid=10153966651838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lupulus Pale ale',
	pct:4.7,
	desc:'Fantastically flavoured pale ale. Still mild though',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600415_10153966651858745_4717804169564084978_n.jpg?oh=140d80ae6c86345cfa23bfb78da2f147&oe=58CE9998',
	link:'https://www.facebook.com/photo.php?fbid=10153966651858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head indian brown ale',
	pct:7.2,
	desc:'One of the nicer browns I’ve had',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1545766_10153966653998745_8815895665252384924_n.jpg?oh=488ee85c06b9468b0223e9750cb88ee2&oe=588F311C',
	link:'https://www.facebook.com/photo.php?fbid=10153966653998745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Imperial IPA',
	pct:8.8,
	desc:'Hugely fragrant and really tasty',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62366_10153966653993745_718097065966967009_n.jpg?oh=3b56a9f3a4bc448361376f3aac50a272&oe=58953C8D',
	link:'https://www.facebook.com/photo.php?fbid=10153966653993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head 90 minute IIPA',
	pct:9.0,
	desc:'Really nice flavour. Solid beer all the way',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1010314_10153966653958745_5103605884788995211_n.jpg?oh=8961ead0a8c50a4d80a1d93d6afd3190&oe=58C19317',
	link:'https://www.facebook.com/photo.php?fbid=10153966653958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Forester bitter amber ale',
	pct:5.2,
	desc:'A little sour but not in a bad way',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936970_10153966655368745_7839777973772364383_n.jpg?oh=6abeea3c12eddf6a221a5e6453f8f380&oe=58CCB12B',
	link:'https://www.facebook.com/photo.php?fbid=10153966655368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Emelisse rye smoked IPA',
	pct:6.2,
	desc:'To me the smokiness gives it some harshness that I don’t like',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10004059_10153966655363745_2943533530938025216_n.jpg?oh=62fc56c3b6a2531c960eff36d06aeb27&oe=588B6565',
	link:'https://www.facebook.com/photo.php?fbid=10153966655363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Pale Ale',
	pct:5.4,
	desc:'Had more flavour than anticipated, it’s actually a lot like the IIPA but with less bitterness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10401879_10153966655348745_3642236879798361206_n.jpg?oh=2d46997d1730d9c91683deda64ca2da9&oe=5895B49E',
	link:'https://www.facebook.com/photo.php?fbid=10153966655348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Federation Pale ale',
	pct:5.1,
	desc:'Don’t have the best memory of drinking this but it was ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1782025_10153966655578745_4664850473670279145_n.jpg?oh=695a10524f45622c8a43f2016c6fb318&oe=58CEC7EC',
	link:'https://www.facebook.com/photo.php?fbid=10153966655578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rockpool Pilsner',
	pct:5.0,
	desc:'Crisp but ultimately flavourless. Perhaps I\'ve been having too many IPAs recently',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936522_10153966655918745_1071656518415804472_n.jpg?oh=403c742497b8ed07307a28c4ac8c1089&oe=58C3DC10',
	link:'https://www.facebook.com/photo.php?fbid=10153966655918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn IPA',
	pct:5.8,
	desc:'Delicious. A little bitter but lots of hoppy flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/580369_10153966656363745_4315787602585071997_n.jpg?oh=f2dc4dc5f75b872aba16c3eeadf40e82&oe=588ADC7D',
	link:'https://www.facebook.com/photo.php?fbid=10153966656363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony Amber Ale',
	pct:5.0,
	desc:'Overly bitter and without much malt flavour. Still yet to find a great amber',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12821411_10153966656918745_380719159889184662_n.jpg?oh=a10f1674b14a8869d172c792d4c1e0a5&oe=58D500FE',
	link:'https://www.facebook.com/photo.php?fbid=10153966656918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington Imperial Amber',
	pct:7.5,
	desc:'So thick coming out of bottle. The initial taste is bitter but behind that is a strong and sweet flavour that while not what I normally go for is still really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10478660_10153966656973745_8240271036615712554_n.jpg?oh=9635697d7e2eb07446d889160a6980ef&oe=588BC4E0',
	link:'https://www.facebook.com/photo.php?fbid=10153966656973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snow',
	pct:4.5,
	desc:'Almost no bitterness. It\'s got quite a lot of malt flavour as if it wasn\'t left long enough to ferment. Perfect with a spicy dish',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600298_10153966657628745_4870073187001041055_n.jpg?oh=c3324eb96691c28e99895fe444219d86&oe=58CC1ED8',
	link:'https://www.facebook.com/photo.php?fbid=10153966657628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha freshwater pale ale',
	pct:5.2,
	desc:'Mild on hops but also low on bitterness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1934561_10153966658683745_1961182541822640883_n.jpg?oh=9c5ac2f66dc9cdfb23cbf9900c81f877&oe=58CA9ED2',
	link:'https://www.facebook.com/photo.php?fbid=10153966658683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Extra Bitter Type',
	pct:5.4,
	desc:'It’s bitter and a little malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10403247_10153966658678745_4947349393995850106_n.jpg?oh=33002a2870a417271dc450548d29d26a&oe=588B7B22',
	link:'https://www.facebook.com/photo.php?fbid=10153966658678745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weidmann',
	pct:4.2,
	desc:'A little bit more malty than most German lagers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10639498_10153966658918745_2502060406104500926_n.jpg?oh=d34cd5d5f6a1cf718117918f452840b4&oe=58906413',
	link:'https://www.facebook.com/photo.php?fbid=10153966658918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Blonde Type',
	pct:5.4,
	desc:'Supposed to be hoppy but it’s just bitter. Feels like it’s missing something',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12832355_10153966659053745_5547402226284326278_n.jpg?oh=4392abd6c33eff80db59fc84ef80bda2&oe=5895DAD5',
	link:'https://www.facebook.com/photo.php?fbid=10153966659053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Rye IPA',
	pct:6.0,
	desc:'Smells really good but the taste is a little harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9185_10153966659098745_8275916423969475463_n.jpg?oh=d894d6aec629ff07d7138e1a9cc02700&oe=58916A79',
	link:'https://www.facebook.com/photo.php?fbid=10153966659098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cucapa brown ale',
	pct:4.8,
	desc:'It’s not awful but I can’t really get into it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12821335_10153966659288745_8654410515493028710_n.jpg?oh=0a7597f8d732aefcbb28157cc31227b1&oe=58C2F2F3',
	link:'https://www.facebook.com/photo.php?fbid=10153966659288745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Celebration',
	pct:6.8,
	desc:'Not as fresh as I was hoping but still nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942538_10153966659453745_8399119403482883132_n.jpg?oh=2dec01b6e88a81f6de293ed60b86b5d3&oe=58D46168',
	link:'https://www.facebook.com/photo.php?fbid=10153966659453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jelen pivo',
	pct:4.6,
	desc:'Has a strange smell and a kind of malty taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10398353_10153966659598745_7866549484220940291_n.jpg?oh=0c33d3bcd73cafc41d1c9196d551fa65&oe=58CE549E',
	link:'https://www.facebook.com/photo.php?fbid=10153966659598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings pale ale',
	pct:4.8,
	desc:'The bitterness is a tad too harsh but it’s nicely hopped',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10570347_10153966659658745_1644353854355421040_n.jpg?oh=c2d0c61176226ea0adb8b315c3bd714b&oe=58CE1BF8',
	link:'https://www.facebook.com/photo.php?fbid=10153966659658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lav',
	pct:5.0,
	desc:'Standard malty european cheap lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/934134_10153966659898745_3561780875401552010_n.jpg?oh=6dbb8e912f2361ecd019d00528d89e26&oe=58BF623F',
	link:'https://www.facebook.com/photo.php?fbid=10153966659898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #1 Pale Ale',
	pct:null,
	desc:'A bit too much yeastyness which overrides the other flavours, this has reduced considerably as the beer has aged. Otherwise rather mild on flavour without much hop punch',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13015479_10154072539743745_2413857034853958131_n.jpg?oh=cfd9d3a7280c841a327c1615fd11a13c&oe=58C96993',
	link:'https://www.facebook.com/photo.php?fbid=10154072539743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #2 Pale Ale',
	pct:3.6,
	desc:'Has a bit of a yeasty smell but it’s covered up a bit by a mild hop aroma. Low on bitterness with a bit of sweetness and not too malty. All round quite drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942882_10154072540043745_2361335499708872878_n.jpg?oh=6a19ce371b12d8db70743ec469571cb7&oe=58961FC4',
	link:'https://www.facebook.com/photo.php?fbid=10154072540043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duel Hoppy Lager',
	pct:4.7,
	desc:'Nicer than I expected, quite a bit of hop aroma coming off this and a well rounded taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13015652_10154072540083745_7009465615847756409_n.jpg?oh=bb9068a37d38d5ddfa728540e2035462&oe=588B0DE1',
	link:'https://www.facebook.com/photo.php?fbid=10154072540083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'8bit',
	pct:6.5,
	desc:'Really nice IPA, little strong but a good hop profile',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13062107_10154072540318745_5259423050211336454_n.jpg?oh=f1ac01c0a518970eb8d972dbc68ec74d&oe=58C17997',
	link:'https://www.facebook.com/photo.php?fbid=10154072540318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chop shop pale ale',
	pct:4.7,
	desc:'Lacks on every side. No hops and way too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13010770_10154072540533745_222338390337149891_n.jpg?oh=9d1e892fadb432927a27cea13b923501&oe=5895D26F',
	link:'https://www.facebook.com/photo.php?fbid=10154072540533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington why so cereal',
	pct:4.9,
	desc:'Really nice. Not too strong on flavour but well balanced. Give it a go if you\'re new to pale ales',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13062012_10154072540558745_5299069403089933354_n.jpg?oh=ce4e6a9546e5bea67432f6cfbf8d3e04&oe=58CE97AE',
	link:'https://www.facebook.com/photo.php?fbid=10154072540558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yulli\'s seabass',
	pct:4.2,
	desc:'Can\'t pick what the flavour is but I like it. Not as plain as I was expecting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13000118_10154072540778745_8031562595698025950_n.jpg?oh=a352ad685f434b241ed6f6d5f537c3de&oe=58CC009B',
	link:'https://www.facebook.com/photo.php?fbid=10154072540778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant',
	pct:5.4,
	desc:'Very little hop flavour, mostly just bitterness. Somewhere underneath there’s a nice flavour trying to break through',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13076528_10154072540798745_8824066737110537781_n.jpg?oh=7dc1c5511e36477d8c0a231a5c9f8ccd&oe=58C5D729',
	link:'https://www.facebook.com/photo.php?fbid=10154072540798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes mirror pond pale ale',
	pct:5.0,
	desc:'Could be a little hoppier but it\'s still smooth and sweet with a nice hint of caramel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13007147_10154072540863745_3547228142622250194_n.jpg?oh=b71a60800316371cc6bc62c0adf0fe97&oe=588C9BA8',
	link:'https://www.facebook.com/photo.php?fbid=10154072540863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mont Blanc Génépi',
	pct:5.9,
	desc:'Kind of tastes how it looks. Like a like cordial mixed with beer. The little bit of spice ties it together and makes for a nice sweet beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13001187_10154072541123745_7747103315223526141_n.jpg?oh=14ad1a23c92a78e19706952206942ddd&oe=58C12A28',
	link:'https://www.facebook.com/photo.php?fbid=10154072541123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Evil twin Falco',
	pct:7.0,
	desc:'A little more bitter than I was hoping but has a nice hop finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13043371_10154072541163745_2624244242033439826_n.jpg?oh=462c1f768e52a363c114361c752c9c39&oe=58C7998F',
	link:'https://www.facebook.com/photo.php?fbid=10154072541163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes fresh squeezed IPA',
	pct:6.4,
	desc:'Really citrusy, a little too bitter but still a great drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q85/p480x480/13015236_10154072541183745_1805235121131069529_n.jpg?oh=94f99669d175b907b2c8c2efcdba61b6&oe=58CA5074',
	link:'https://www.facebook.com/photo.php?fbid=10154072541183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liger',
	pct:6.9,
	desc:'Fizzy and dark and sweet',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13012764_10154072541233745_130102072018590790_n.jpg?oh=933bba7e75987836843ae0c05b99a847&oe=58C17CE2',
	link:'https://www.facebook.com/photo.php?fbid=10154072541233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tuatara Ardennes',
	pct:6.5,
	desc:'The Belgian flavour makes it taste stronger than it is. It’s fairly good but there are so many better Belgian beers out there that it’s not doing enough to bring me back',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239986_10154147273578745_3214682018646558241_n.jpg?oh=355f4d8472e21c002b88397c0a42df7d&oe=58C23BA7',
	link:'https://www.facebook.com/photo.php?fbid=10154147273578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Panhead APA',
	pct:5.7,
	desc:'Interesting smell but the taste is covered up too much by the bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239385_10154147273588745_8270989544774283167_n.jpg?oh=4eb3b4527774680898049a313e8cf3ff&oe=58D12857',
	link:'https://www.facebook.com/photo.php?fbid=10154147273588745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #3',
	pct:4.6,
	desc:'Pretty good all round. Has a nice sweetness which balances well against the slight citrus hop profile',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13221450_10154147273613745_1009157283682000956_n.jpg?oh=a3e65c7415982d0cba2c368033bacf6a&oe=58938CDB',
	link:'https://www.facebook.com/photo.php?fbid=10154147273613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beirut beer',
	pct:4.6,
	desc:'Tastes like a cheap Eastern European beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230125_10154147273808745_8826087779815602957_n.jpg?oh=4a665b992f2f8fc33a0f7e9f66d611b5&oe=58C8FA87',
	link:'https://www.facebook.com/photo.php?fbid=10154147273808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Hopco NZ pale ale',
	pct:4.8,
	desc:'Doesn’t have the same floral taste that their other beers have. It’s still hoppy but more of the bitterness is coming through',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13238891_10154147274018745_2218348989364359233_n.jpg?oh=ce32994ebd91c3bf271db57dbb1ffbe7&oe=58C89DC2',
	link:'https://www.facebook.com/photo.php?fbid=10154147274018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone coffee milk stout',
	pct:5.0,
	desc:'Creamy, rich and oh so dark. The coffee flavour is mild enough for me to enjoy',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241124_10154147274053745_6203121244694342567_n.jpg?oh=0e56b8633e47deee91bd122826190427&oe=58CAC34E',
	link:'https://www.facebook.com/photo.php?fbid=10154147274053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden road ride on IPA',
	pct:6.4,
	desc:'Huge floral hop aroma. Perhaps just a tad too bitter but very enjoyable',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13237689_10154147274093745_5794071140903192166_n.jpg?oh=89f782f2de5c7ce74477ec5bfa30afa8&oe=58937CB7',
	link:'https://www.facebook.com/photo.php?fbid=10154147274093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life IPA',
	pct:6.0,
	desc:'Another great beer from Pirate Life. Nicely hoppy',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239358_10154147274213745_2832924558842747402_n.jpg?oh=50a4e9a306a436831205eef3d74338ff&oe=58C9C35C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delirium Argentum',
	pct:7.0,
	desc:'Had a slightly metallic taste to start but otherwise it’s a really clean and crisp beer. Much milder in taste than other Belgian beers. I’m beginning to get the feeling that Belgian IPAs don’t have the hop profile that I expect',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256284_10154147274343745_1195107616388760793_n.jpg?oh=803c1aec57d501240a312991fdf0c7e9&oe=5895798C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wayward brewing rose kölsch',
	pct:5.1,
	desc:'Great kölsch. Crisp and clean but keeps you coming back',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13240606_10154147274448745_3348024943795201690_n.jpg?oh=a1a0f9c80730d75deb6305246ffa0284&oe=58C506AF',
	link:'https://www.facebook.com/photo.php?fbid=10154147274448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses harvest ale',
	pct:5.8,
	desc:'Pretty plain ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13265938_10154147274608745_6314635329318943118_n.jpg?oh=2a2eaebc650637fb53571322f106d815&oe=58C5A29D',
	link:'https://www.facebook.com/photo.php?fbid=10154147274608745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Norton lager',
	pct:4.3,
	desc:'A very sweet lager with much more flavour than your average lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13232982_10154147274688745_9124860390189621549_n.jpg?oh=59bf9007e95f83667de0274f866816f4&oe=58D49037',
	link:'https://www.facebook.com/photo.php?fbid=10154147274688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew stout #4',
	pct:5.4,
	desc:'Has a yeasty and hoppy smell like my other beers but with a mild stout smell. The stout taste is milder than when I bottled it. To me it’s a great because it doesn’t have the kick like other stouts but this may disappoint those who look for that in a stout',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244856_10154147274693745_6588882774543071375_n.jpg?oh=676ddbc1c5d7607055db7918a14b177a&oe=5892B707',
	link:'https://www.facebook.com/photo.php?fbid=10154147274693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch smoking Russian party guy',
	pct:3.2,
	desc:'Quite mild on the stout flavour, sweet and tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256284_10154147274788745_4004743103375627628_n.jpg?oh=b92e7ca4930a3c0b801580902cc7c2d9&oe=5890C42C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch American pale ale',
	pct:5.2,
	desc:'Pretty good pale ale. Nothing super exciting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254124_10154147274953745_3000260124675662961_n.jpg?oh=136ca27a817ab562636b9ccd9fe54ab6&oe=58D152C7',
	link:'https://www.facebook.com/photo.php?fbid=10154147274953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch in a pickle',
	pct:4.2,
	desc:'My first cucumber beer. Tastes a lot like pickles. It\'s interesting but it wouldn\'t bring me back',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/13233015_10154147274988745_881393278262650589_n.jpg?oh=a5f8a8ed513f7283ff5e890c91e91ede&oe=58C67B6B',
	link:'https://www.facebook.com/photo.php?fbid=10154147274988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch seeing red IRA',
	pct:7.1,
	desc:'Pretty much a red IPA. Nice flavour but doesn\'t have as much floral aroma as I like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12871500_10154147275008745_8435099638862141389_n.jpg?oh=c0cb93e92bffbe3844d13c8b6c34a95d&oe=588F5646',
	link:'https://www.facebook.com/photo.php?fbid=10154147275008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Marnie\'s majority ale',
	pct:6.4,
	desc:'Nicely floral, not too bitter. All round good IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241213_10154147275538745_4637541751661074474_n.jpg?oh=8ff97798d8678415f1e878ddcb8f3112&oe=58D1884E',
	link:'https://www.facebook.com/photo.php?fbid=10154147275538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter big sur',
	pct:6.7,
	desc:'Strong on flavour, big on hops',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230238_10154147276023745_1973175567688158306_n.jpg?oh=6aaf005acb0b13f940aaa3ed353ab4b0&oe=5896444E',
	link:'https://www.facebook.com/photo.php?fbid=10154147276023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans flight path',
	pct:6.0,
	desc:'Smells like and IPA, tastes like a stout. But still pretty good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239234_10154147275958745_6647175011009867398_n.jpg?oh=0ca35913d04ce16b71206da53bbc3587&oe=5886EC9C',
	link:'https://www.facebook.com/photo.php?fbid=10154147275958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XX bitter',
	pct:6.0,
	desc:'Not as hoppy as the label indicates,  almost European in the maltyness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13245387_10154147276163745_6894115153068596063_n.jpg?oh=eee1c6ec506593faba9ed67bef3016ba&oe=58C79423',
	link:'https://www.facebook.com/photo.php?fbid=10154147276163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside brewing 88 robust porter',
	pct:6.0,
	desc:'One of the less sweet porters I’ve had but still not bitter. Not my favourite',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230311_10154147276338745_1922289556115965636_n.jpg?oh=c0e0a9e2a5c851ef66e62a7cec4e02c6&oe=58D22A61',
	link:'https://www.facebook.com/photo.php?fbid=10154147276338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pale ale #1',
	pct:4.6,
	desc:'Tastes like a Belgian ale. It’s alright',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13267730_10154147276308745_5674622146165558080_n.jpg?oh=3fd9d2a8865686b7c68788a3abfbbc14&oe=5893142A',
	link:'https://www.facebook.com/photo.php?fbid=10154147276308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Belgian IPA #2',
	pct:5.5,
	desc:'Like other Belgian IPAs it’s not very hoppy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13238891_10154147276503745_6482757969464081061_n.jpg?oh=2cd6d124a52d1aba938f55c9d47ba8f4&oe=58C763C2',
	link:'https://www.facebook.com/photo.php?fbid=10154147276503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pils #3',
	pct:4.4,
	desc:'Pretty good pilsner',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254038_10154147276793745_7322916825370233688_n.jpg?oh=ed2e80c1a947d2c6ae572f207fbce9cc&oe=58CF8A5C',
	link:'https://www.facebook.com/photo.php?fbid=10154147276793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beachwood road dark harvest',
	pct:6.6,
	desc:'Smells hoppy but tastes stouty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13265923_10154147277158745_2404573365022025413_n.jpg?oh=65aa8998299ebaa2f6d85705cb7d16a2&oe=5889467B',
	link:'https://www.facebook.com/photo.php?fbid=10154147277158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha fire within',
	pct:5.8,
	desc:'Pretty spot on for what I expect from an amber ale but doesn\'t have a flavour I love',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254029_10154147277223745_2166868226944171155_n.jpg?oh=e62e5dbf92cf188109c94435d066a513&oe=58D0E948',
	link:'https://www.facebook.com/photo.php?fbid=10154147277223745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Derwent aromatic spelt ale',
	pct:5.9,
	desc:'Only slightly sour and it all comes together well. It\'s not a style that I\'m used to but I do enjoy it',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13221636_10154147277423745_6025488422010352804_n.jpg?oh=63e1e92b741130725fa334b58288f228&oe=5888A288',
	link:'https://www.facebook.com/photo.php?fbid=10154147277423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Serpents kiss',
	pct:4.4,
	desc:'The slight watermelon taste makes it hard to enjoy the beer. You get used to it but there\'s not a lot of reason to',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256027_10154147277688745_7034538653078229756_n.jpg?oh=ab0cafa453adc2a1f09c5238e09f3ebe&oe=588DB578',
	link:'https://www.facebook.com/photo.php?fbid=10154147277688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark knight porter style',
	pct:4.5,
	desc:'Mild and sweet. Nice easy drinking porter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13263768_10154147277768745_7051226245324032886_n.jpg?oh=2408c8006c8ca990f800048b7c138448&oe=58CDE406',
	link:'https://www.facebook.com/photo.php?fbid=10154147277768745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral karma citra',
	pct:5.8,
	desc:'A little bit too stouty and bitter for me but otherwise good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241326_10154147277883745_7683110725231850309_n.jpg?oh=3f3a20604feef85636a985bfbb394268&oe=58D480D2',
	link:'https://www.facebook.com/photo.php?fbid=10154147277883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew single hop',
	pct:4.8,
	desc:'A little bit lacking on the hop side but well rounded. Kind of want to know what hop and malt they use',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/13226775_10154147278083745_8353755751636156502_n.jpg?oh=670d80bf1593f34aa7917461b89353ee&oe=58C5BCC2',
	link:'https://www.facebook.com/photo.php?fbid=10154147278083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante lager',
	pct:5.2,
	desc:'Pretty plain lager, slightly better than your standard Australian beers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256370_10154147278128745_521618674616706499_n.jpg?oh=ea638c575323f81d190ec4ed98029327&oe=58D10DF7',
	link:'https://www.facebook.com/photo.php?fbid=10154147278128745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone IPA',
	pct:6.9,
	desc:'Very bitter and lacking in hops but ok',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244720_10154147278198745_7466060435592720847_n.jpg?oh=305d4498bb7af4900534a47004404b17&oe=58BE28CF',
	link:'https://www.facebook.com/photo.php?fbid=10154147278198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha water buffalo',
	pct:6.6,
	desc:'Has a few flavours which are hard to pin down but it works well. Has a nice amount of sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13245472_10154147280238745_5349990342920915596_n.jpg?oh=b33825301f7236c93ceea89a776b0a94&oe=58933EFF',
	link:'https://www.facebook.com/photo.php?fbid=10154147280238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arc Valley Lager',
	pct:4.7,
	desc:'Nothing particularly good about this beer. It’s drinkable but that’s about it',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13413137_10154200938153745_6141742786313639808_n.jpg?oh=cd43836392949c53156caac7c8b611f7&oe=58C160EE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Namysrów pils',
	pct:6.0,
	desc:'Malty European pils. Nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13442354_10154200938273745_8005265126653801521_n.jpg?oh=0e9f304f3a83f60029c6aa0e789dfc20&oe=58D1DBDE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Otra vez',
	pct:4.5,
	desc:'Smells strange bad but tastes completely different. Having trouble describing exactly what I’m getting here, kind of like watermelon. Perhaps too many things going on all at once. I wouldn’t want many but it’s worth the experience',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13435367_10154200938253745_7818346019313072630_n.jpg?oh=c2fe9991d70b9c0fa0fde72d4d705093&oe=5893D4E3',
	link:'https://www.facebook.com/photo.php?fbid=10154200938253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock Cannonball IPA',
	pct:7.4,
	desc:'Has the floral smell that I love in an IPA and a nice balance of bitterness and hops. A great example of an IPA',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13413596_10154200938458745_5561217537478071831_n.jpg?oh=330f6317893f008f5a0df3723cc44f5d&oe=58C06816',
	link:'https://www.facebook.com/photo.php?fbid=10154200938458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Exit milk stout',
	pct:5.2,
	desc:'Not nearly as sweet as I expected, almost had a sour note. Once I got used to it it was an enjoyable drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13450864_10154200938523745_2403941117496205897_n.jpg?oh=59d9e5daea4cebc63b3580c4295ced53&oe=58D3AD91',
	link:'https://www.facebook.com/photo.php?fbid=10154200938523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The continuous daryl',
	pct:8.4,
	desc:'One amazing beer. Spot on with bitterness and fruitiness',
	score:9.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423996_10154200938528745_8109251558112727055_n.jpg?oh=68bec88ecdd6f7c9d4e8d1451e9fdcb1&oe=58950F82',
	link:'https://www.facebook.com/photo.php?fbid=10154200938528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate temptress',
	pct:6.0,
	desc:'A little bit too bitter and too stouty for me. Not getting any chocolate either',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13418736_10154200938698745_7920734449371306402_n.jpg?oh=1fe178b68b5d581fdce1f65dc50c975a&oe=58C08380',
	link:'https://www.facebook.com/photo.php?fbid=10154200938698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock high wire grapefruit',
	pct:5.5,
	desc:'Fruity like a soft drink but still bitter like a beer. Smells a little bit like past. Different and refreshing',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423871_10154200938833745_2449878580533037042_n.jpg?oh=7f6adcdb405461380d08757cfa570b49&oe=58BF63BE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938833745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hop tart',
	pct:4.6,
	desc:'An interesting beer. Could do with a little more hop flavour to go with the sourness but refreshing as it is',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13407034_10154200938858745_1959407752907879656_n.jpg?oh=98b9b1546f4d66c3fbbe57e2b484448f&oe=58D2FA0C',
	link:'https://www.facebook.com/photo.php?fbid=10154200938858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue dead guy',
	pct:6.5,
	desc:'Like a really sweet IPA. There’s something else in there that I can’t put my finger on',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13445293_10154200938923745_8996401406387609840_n.jpg?oh=c5eae859d1f96fbf351a97dd9a2af559&oe=58CD9C92',
	link:'https://www.facebook.com/photo.php?fbid=10154200938923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #6',
	pct:5.8,
	desc:'A little underwhelmed with the hop flavour, it didn’t come out as strong as I expected. While I wouldn’t really call this an IPA it’s still a nice beer. Not too bitter and really easy to drink',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13434897_10154200939143745_4531007103835058687_n.jpg?oh=91fd1bf90367e8a36d0aa1e3b35a8f1f&oe=588BF38B',
	link:'https://www.facebook.com/photo.php?fbid=10154200939143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock salty kiss',
	pct:4.1,
	desc:'Fairly mild on flavour. Easy to drink and refreshing',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423942_10154200939173745_2576605150498271504_n.jpg?oh=f9d4a5922314156bbc29f8bbf9359659&oe=58D226E5',
	link:'https://www.facebook.com/photo.php?fbid=10154200939173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tuatara outrigger',
	pct:4.5,
	desc:'More of a Belgian flavour than I expected. Ok but not great',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423884_10154200939238745_5620898802714048410_n.jpg?oh=f2123485b739ea41e31fc7bd74134545&oe=5888114F',
	link:'https://www.facebook.com/photo.php?fbid=10154200939238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Legal tender',
	pct:4.5,
	desc:'Has a slightly sweet taste and a spicy finish. Drink it quick before it gets warm',
	score:5.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13445722_10154200939418745_7912390867396221069_n.jpg?oh=94630656d0f4aa1f3aec10f26e1ac702&oe=58C86BDD',
	link:'https://www.facebook.com/photo.php?fbid=10154200939418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson dead ahead',
	pct:null,
	desc:'There\'s an interesting background flavour, perhaps honey, but it\'s overwhelmed by the bitterness. A little disappointing',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13393976_10154200939438745_8730033578411056337_n.jpg?oh=4501c21834789a4ad521eceac67f87fa&oe=58C7042B',
	link:'https://www.facebook.com/photo.php?fbid=10154200939438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #5',
	pct:6.4,
	desc:'Definitely tastes like a belgian ale. Not the favourite beer I\'ve made but it\'s ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358744_10154470801668745_8655409107323903704_n.jpg?oh=5310e147792f9275361cf46b9574a6ed&oe=58CE31C6',
	link:'https://www.facebook.com/photo.php?fbid=10154470801668745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #7',
	pct:6.6,
	desc:'There’s a slight caramel/toffee flavour that comes through but the apple isn’t there except for the smell. More bitter than my other beers but it’s not overwhelming',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355682_10154470801823745_1173945088278637495_n.jpg?oh=bd85114f696e468e2d284bd0f9335323&oe=58937B5C',
	link:'https://www.facebook.com/photo.php?fbid=10154470801823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #8',
	pct:5.6,
	desc:'A much more in your face stout than my #3. The chocolate hasn’t come through but the sweetness from the lactose has. There’s a noticeable coffee flavour as well that I didn’t expect. Amazingly though it comes together really well and is quite easy drinking',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390783_10154470801013745_7457075134918125782_n.jpg?oh=4e13c7e794ff1af664a3e0469bc7d12b&oe=58D2F3A6',
	link:'https://www.facebook.com/photo.php?fbid=10154470801013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings dark red IPA',
	pct:6.0,
	desc:'Too much bitterness overwhelming the other flavours',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14441019_10154470803253745_5501701895500526145_n.jpg?oh=3e9057b9efa713ce3987c79caad3fe20&oe=58D043EE',
	link:'https://www.facebook.com/photo.php?fbid=10154470803253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cleanskin Green beer',
	pct:4.5,
	desc:'Not as cheap tasting as I expected. Low bitterness and a sweet malt profile make it fairly drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14344819_10154470803348745_8611392715725012151_n.jpg?oh=100ea4fedde601279d330044e95d73c8&oe=588B35B8',
	link:'https://www.facebook.com/photo.php?fbid=10154470803348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Hell',
	pct:4.2,
	desc:'Almost tasteless. Absolutely nothing exciting about this beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14449987_10154470803333745_1465091648994242942_n.jpg?oh=37d12399e2e284a04776968dfa6860f5&oe=58BEA712',
	link:'https://www.facebook.com/photo.php?fbid=10154470803333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa brewing I can\'t believe it\'s not bacon',
	pct:5.5,
	desc:'Super smokey but not overwhelming. Definitely evokes memories of bacon',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14364803_10154470805213745_3875462672312387508_n.jpg?oh=2d3c390925375d7a5763d61f8ecf6101&oe=58BFA6C1',
	link:'https://www.facebook.com/photo.php?fbid=10154470805213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'West end draught',
	pct:4.5,
	desc:'Uninspired south Australian lager. Not as bitter as other Australian brews but there\'s no hops or malt to make it s decent beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333654_10154470805553745_6025478775328181204_n.jpg?oh=02ae58911e84ba28f1e315bc34530021&oe=58CE0EE7',
	link:'https://www.facebook.com/photo.php?fbid=10154470805553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa valley hop heaven',
	pct:5.0,
	desc:'Nicely balanced hops. Bitterness is on par for what I expect from a beer like this. Great smell too',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333767_10154470806018745_900617753120366059_n.jpg?oh=49d18b5ad469f8283cf16860682550b3&oe=5886CE93',
	link:'https://www.facebook.com/photo.php?fbid=10154470806018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa valley SA wit',
	pct:4.4,
	desc:'Really refreshing. Would go great on a hot day. One of the better wit beers I\'ve had',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/14333606_10154470807043745_5024248083203116549_n.jpg?oh=d3c54470f8ae2bd52b2e553b2ede5c3c&oe=588D5A20',
	link:'https://www.facebook.com/photo.php?fbid=10154470807043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Clare valley bulls eye',
	pct:4.5,
	desc:'Overly bitter with no hop profile',
	score:4.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14448985_10154470807198745_1941773766117119359_n.jpg?oh=f70fdc780e1c4952da9e55e9eedb6b73&oe=588A8851',
	link:'https://www.facebook.com/photo.php?fbid=10154470807198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony sunshine ale',
	pct:4.8,
	desc:'A little bit lacking but not a bad beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14364917_10154470807363745_7728138801464076268_n.jpg?oh=ec7c46853a85d3b3a1aa8d960c675d65&oe=58D4FE35',
	link:'https://www.facebook.com/photo.php?fbid=10154470807363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Clare valley monkey\'s uncle',
	pct:4.5,
	desc:'Another bitter beer but tastes like a red ale. Decent flavours behind the bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14370253_10154470814018745_7440993665823569606_n.jpg?oh=a2e3f95d60e7725160c09579e5484223&oe=58C52103',
	link:'https://www.facebook.com/photo.php?fbid=10154470814018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Malt fiction session ale',
	pct:4.5,
	desc:'Very easy drinking. Not a lot of flavour but for something you’re drinking all day this would be great. A little bit tangy',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333020_10154470814048745_257468858783913286_n.jpg?oh=4fec6f8dd7e579a7e7c105a455c73c6e&oe=58C89FE3',
	link:'https://www.facebook.com/photo.php?fbid=10154470814048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic hat smash hits IPA',
	pct:5.5,
	desc:'Definitely an IPA but not terribly nice. Surprisingly the bitterness went away as it got warmer and it was a bit nicer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359032_10154470814043745_5966474147333652109_n.jpg?oh=806ddf139db4b71b46068de4d6533b70&oe=58896BDB',
	link:'https://www.facebook.com/photo.php?fbid=10154470814043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic hat Stealin time',
	pct:5.5,
	desc:'Really nice ginger hit',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14445970_10154470815508745_4236605545443642954_n.jpg?oh=d7ecaf865c22a18e790465c78e92b349&oe=58C3A5D3',
	link:'https://www.facebook.com/photo.php?fbid=10154470815508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington dogs bollocks',
	pct:6.2,
	desc:'Oh so smooth. One of easiest drinking beers I’ve ever had',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14330073_10154470816203745_282816465036444454_n.jpg?oh=855a88309c90d02b54d8fd4fdf9f5db3&oe=58CEC1F1',
	link:'https://www.facebook.com/photo.php?fbid=10154470816203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innes & Gunn fired oak scotch ale',
	pct:7.0,
	desc:'You can really taste the oak flavours coming through Has a slightly strange flavour but overall pretty nice',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14446159_10154470816978745_506619917402895971_n.jpg?oh=a17adaac8f3c029433e504b547c11d33&oe=588FD624',
	link:'https://www.facebook.com/photo.php?fbid=10154470816978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire hop thief #8',
	pct:5.0,
	desc:'Didn’t think I would enjoy this one as much as the #7 given the hops but it’s just as good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14368650_10154470818108745_5244772193649315176_n.jpg?oh=e2488df55a3e9645c04d98b01a3c82bb&oe=588FC890',
	link:'https://www.facebook.com/photo.php?fbid=10154470818108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steam whistle pilsner',
	pct:5.0,
	desc:'Easy drinking. Fairly dry and not too bitter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14354999_10154470819568745_6410883825021001969_n.jpg?oh=e8ce799dfe0dd493ab2f803dec0a6358&oe=588C2B2A',
	link:'https://www.facebook.com/photo.php?fbid=10154470819568745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mismatch Extra pale ale',
	pct:5.8,
	desc:'Really tasty brew. Not as bitter as I expected which works well with mild hop flavour',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14433165_10154470820783745_152106093540537783_n.jpg?oh=1396436053c1345f1424dbbf1dd6b39b&oe=58D402BB',
	link:'https://www.facebook.com/photo.php?fbid=10154470820783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shark island pale ale',
	pct:null,
	desc:'My first from this brewery, happy so far. Mild on hops but the sweetness from the malt holds it together',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14449945_10154470822683745_4208137139695558555_n.jpg?oh=21a828a45b1d67327dcc7db0881cf1b2&oe=588823B0',
	link:'https://www.facebook.com/photo.php?fbid=10154470822683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shark island summer ale',
	pct:null,
	desc:'A little bit too yeasty. Not what I expect from a summer ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355645_10154470822778745_4715676910602713492_n.jpg?oh=a20b23ba687d7298938ba2988db7b733&oe=5895CAAB',
	link:'https://www.facebook.com/photo.php?fbid=10154470822778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont Belgian pale ale',
	pct:5.1,
	desc:'Perfect example of a Belgian',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358791_10154470822723745_2714715947737886763_n.jpg?oh=b9361efd4e4f4fc484aa12b61d6fbce6&oe=58C41808',
	link:'https://www.facebook.com/photo.php?fbid=10154470822723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont saison de Ville',
	pct:6.7,
	desc:'The best saison I\'ve had. Like drinking a piece of fruit',
	score:9.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359213_10154470823213745_2596732537954561642_n.jpg?oh=acb4bd074faee0a1a8a30a1364b83803&oe=588E079E',
	link:'https://www.facebook.com/photo.php?fbid=10154470823213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch juicy as phuck dark',
	pct:6.3,
	desc:'So much hop aroma with no bitterness. A style I\'ve been searching for but it could be more balanced',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359083_10154470824703745_1117717087850964481_n.jpg?oh=c6d84e35c97672d475852f8dac305c2e&oe=588C989B',
	link:'https://www.facebook.com/photo.php?fbid=10154470824703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch tank 6 imperial stout',
	pct:9.2,
	desc:'There\'s a beautiful flavour but it\'s hidden behind some harshness which slightly spoils it',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359220_10154470824843745_4704165971419825465_n.jpg?oh=2882ebdae5fb6e3d3bdbb5c3dda3a2f9&oe=589346D1',
	link:'https://www.facebook.com/photo.php?fbid=10154470824843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral smoked porter',
	pct:4.9,
	desc:'Smooth but without the backing to make it a great beer',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14446226_10154470825398745_5928076298632372626_n.jpg?oh=433e860ea10f8eed12dcaf1675f920af&oe=58C6DB01',
	link:'https://www.facebook.com/photo.php?fbid=10154470825398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hotchkiss six',
	pct:4.5,
	desc:'Really mild easy drinking stout. Kind of lacks any interesting depth of flavour',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333103_10154470826493745_1969706286448885118_n.jpg?oh=47cc5f34040a03db8d596c03650eec25&oe=588BF696',
	link:'https://www.facebook.com/photo.php?fbid=10154470826493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson valley blood orange gose',
	pct:4.2,
	desc:'Takes a bit of getting used to, orange doesn’t usually go with salty. Not something I would buy again',
	score:5.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14344683_10154470826643745_4940801353933151559_n.jpg?oh=d221c1e0ef90ab340c5f71d2917d391d&oe=58C0B88C',
	link:'https://www.facebook.com/photo.php?fbid=10154470826643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay bearded hobo pale ale',
	pct:4.9,
	desc:'Crisp and dry. Very easy drinking, a great pale ale for someone new to beer',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358894_10154470827368745_3712421249999347669_n.jpg?oh=50781483d58f3de58dc2500de2cb4d21&oe=58CE350B',
	link:'https://www.facebook.com/photo.php?fbid=10154470827368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay Vlad White IPA',
	pct:6.0,
	desc:'The hops cut through what I normally dislike in a wheat beer. Nicely aromatic and not too bitter',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355084_10154470829398745_6813450556520253908_n.jpg?oh=dbcccdbd78e059d4ae8f63bf4ed54aed&oe=58CEB38F',
	link:'https://www.facebook.com/photo.php?fbid=10154470829398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay Black gold coffee porter',
	pct:5.9,
	desc:'A nice balance between beer and coffee. Could do with some more sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390723_10154470829368745_5229900954620895810_n.jpg?oh=f3aa8ffc954e6f8c4bd8636429428722&oe=58C11A75',
	link:'https://www.facebook.com/photo.php?fbid=10154470829368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liebenweiss hefe weissbier',
	pct:5.5,
	desc:'Really citrusy which hides the yeastiness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390784_10154470829463745_472986184778146969_n.jpg?oh=14aac9fe80d6bc7db750cb74d89387d9&oe=58C2A407',
	link:'https://www.facebook.com/photo.php?fbid=10154470829463745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Destroy all humans',
	pct:null,
	desc:'Tastes like it wants to kill me. Was this even supposed to be consumed?',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14370189_10154470831048745_1494600717903960685_n.jpg?oh=6fc87c0bdb5f0c7754e5ad1c21e1cf84&oe=58C80FCB',
	link:'https://www.facebook.com/photo.php?fbid=10154470831048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie smith triple',
	pct:8.6,
	desc:'Super strange color but with an amazing taste. Starts with a kick then followed by a mild berry sweetness which then mellows out for a smooth finish',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14433200_10154470831183745_4447106305531667099_n.jpg?oh=28357a186d3e50e16119f7c8696a9f5c&oe=589027F1',
	link:'https://www.facebook.com/photo.php?fbid=10154470831183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Hop Ottin IPA',
	pct:7.0,
	desc:'Super flavourful. Initially it’s very bitter but once you get over that it’s amazing. It’s exactly what I expect when a beer says it’s an IPA. Not to mention it just looks beautiful in a glass. If you see it try it out',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15037208_10154633841058745_7320029792917556199_n.jpg?oh=0d13c1b73dd53dc0748df115aa378c23&oe=5888852E',
	link:'https://www.facebook.com/photo.php?fbid=10154633841058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant Hasselsloth west coast IPA',
	pct:7.2,
	desc:'After the IPA I just had this seems a bit tasteless. It’s not bad in any way it’s just that I had already been spoiled somewhat during the evening. The name is of course what drew me in and can’t be faulted but the beer isn’t as flavourful as I would like',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15056359_10154633841048745_7424132168615349111_n.jpg?oh=3b86800a94a4d15ca23daf941054a2a8&oe=58D5A32A',
	link:'https://www.facebook.com/photo.php?fbid=10154633841048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing death between the tanks DIPA',
	pct:7.8,
	desc:'After having 2 IPAs this was the perfect follow on. My palate was fully ready to ignore the 113 IBUs and delve into the flavours beneath. It’s full of citrusy hops which give you fruitiness but with the undeniable awareness that this is a strong beer. As I finish my glass I look at the bottom with sadness that I have no more of this supreme liquid, I’m left only with the hoppy smell of the bottle and the realisation that the next beer will not be as good',
	score:9.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15078999_10154633841473745_8903335512713450426_n.jpg?oh=aa6fa9a6bed19fdc6bcdc61f498986a2&oe=58D582A6',
	link:'https://www.facebook.com/photo.php?fbid=10154633841473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic hat poppy agave ale',
	pct:5.0,
	desc:'Not terribly exciting. The agave seems to smooth it out a bit but not enough to really differentiate it',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15027843_10154633843218745_6421410119970575016_n.jpg?oh=305904640f8805642b7da383442550e2&oe=58C7E155',
	link:'https://www.facebook.com/photo.php?fbid=10154633843218745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Basement brew house American pale ale',
	pct:5.7,
	desc:'Has a nice balance between IPA bitterness and the easy drinking of a pale. It\'s not special but it\'s a crowd pleaser',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15037221_10154633843548745_8836639246743876067_n.jpg?oh=299595a97929853b63d7a089d759c5cc&oe=58957F68',
	link:'https://www.facebook.com/photo.php?fbid=10154633843548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Basement brew house sparkling',
	pct:5.0,
	desc:'Strong on galaxy hops, low on bitterness. Really easy drinking but in no way plain',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15095095_10154633843283745_1240876872041420459_n.jpg?oh=57d06393e8b70492a7c3ebcdc5ebd2df&oe=58C1C795',
	link:'https://www.facebook.com/photo.php?fbid=10154633843283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yulli\'s fat nerd vanilla porter',
	pct:6.0,
	desc:'No question of the vanilla. The sweetness makes it a really nice porter but by the end of a pint it felt like a bit much. Would only recommend ordering a middy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15078888_10154633844908745_7841479986973542187_n.jpg?oh=54311b5eab0bf68c59205a4b5c0ee793&oe=58BE67A6',
	link:'https://www.facebook.com/photo.php?fbid=10154633844908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wayward Keller instinct',
	pct:4.8,
	desc:'Has a really strange flavour in the back. Interesting as something I\'ve not had before but not going to bring me back',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15036443_10154633844778745_8868726654336200982_n.jpg?oh=2e9d221d7fcd71a1288f03f40ebdb28a&oe=5889E4CA',
	link:'https://www.facebook.com/photo.php?fbid=10154633844778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White rabbit barrel aged red',
	pct:4.9,
	desc:'An interesting style. Kind of a half sour beer.  Hints of cherry. Worth a look if you want something new',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15032114_10154633844938745_2224669951803352879_n.jpg?oh=667fcaa87749810684a7810177869f35&oe=58D30A51',
	link:'https://www.facebook.com/photo.php?fbid=10154633844938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult get down American brown',
	pct:5.8,
	desc:'More of a stout than a brown due to the lack of sweetness. Kind of disappointing',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15037333_10154633846433745_6730955490670727997_n.jpg?oh=15d59c63bfd227d09a6b49cf0bf2f9aa&oe=5890CF4C',
	link:'https://www.facebook.com/photo.php?fbid=10154633846433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

return ret;
}
