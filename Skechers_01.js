(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BACKGROUND = function() {
	this.initialize(img.BACKGROUND);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card2 = function() {
	this.initialize(img.card2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card3 = function() {
	this.initialize(img.card3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card4 = function() {
	this.initialize(img.card4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card5 = function() {
	this.initialize(img.card5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card6 = function() {
	this.initialize(img.card6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card7 = function() {
	this.initialize(img.card7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.card8 = function() {
	this.initialize(img.card8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,269);


(lib.model = function() {
	this.initialize(img.model);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,360);


(lib.model_rev = function() {
	this.initialize(img.model_rev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1223);


(lib.otg = function() {
	this.initialize(img.otg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,33);


(lib.shop = function() {
	this.initialize(img.shop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,33);


(lib.swipe = function() {
	this.initialize(img.swipe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,307);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.swipe();
	this.instance.setTransform(-160,-153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sw, new cjs.Rectangle(-160,-153.5,320,307), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A6KeZMAAAg8xMA0VAAAMAAAA8xg");
	this.shape.setTransform(-0.5,53.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-168,-141,335,389), null);


(lib.otg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.otg();
	this.instance.setTransform(-73.3,-14.9,0.9049,0.9049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.otg_1, new cjs.Rectangle(-73.3,-14.9,146.6,29.9), null);


(lib.modelwide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.model_rev();
	this.instance.setTransform(-174.65,-178,0.2911,0.2911);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.modelwide, new cjs.Rectangle(-174.6,-178,349.29999999999995,356), null);


(lib.model_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.model();
	this.instance.setTransform(-130,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.model_1, new cjs.Rectangle(-130,-180,260,360), null);


(lib.mask2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5AWmMAAAgtLMAyBAAAMAAAAtLg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mask2, new cjs.Rectangle(-160,-144.6,320.1,289.29999999999995), null);


(lib.card8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card8();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card8_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card7();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card7_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card6();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card6_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card5();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card5_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card4();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card4_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card3();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card3_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card2();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card2_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.card1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card1();
	this.instance.setTransform(-93,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card1_1, new cjs.Rectangle(-93,-134.5,186,269), null);


(lib.gallery = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.card8_1();
	this.instance.setTransform(920.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card7_1();
	this.instance_1.setTransform(840.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card6_1();
	this.instance_2.setTransform(760.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card5_1();
	this.instance_3.setTransform(680.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card4_1();
	this.instance_4.setTransform(600.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card3_1();
	this.instance_5.setTransform(520.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card2_1();
	this.instance_6.setTransform(440.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card1_1();
	this.instance_7.setTransform(360.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card8_1();
	this.instance_8.setTransform(280.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_9 = new lib.card7_1();
	this.instance_9.setTransform(200.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_10 = new lib.card6_1();
	this.instance_10.setTransform(120.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_11 = new lib.card5_1();
	this.instance_11.setTransform(40.05,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_12 = new lib.card4_1();
	this.instance_12.setTransform(-39.95,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_13 = new lib.card3_1();
	this.instance_13.setTransform(-119.95,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_14 = new lib.card2_1();
	this.instance_14.setTransform(-199.95,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.instance_15 = new lib.card1_1();
	this.instance_15.setTransform(-279.95,0.05,0.3226,0.3226,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gallery, new cjs.Rectangle(-310,-43.4,1260,86.8), null);


// stage content:
(lib.Skechers2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [69,94,114];
	// timeline functions:
	this.frame_69 = function() {
		var root = this;
		
		createjs.Touch.enable(stage);
		
		root.gallery_mc.mask = root.mask_mc;
		root.mask_mc.visible = false;
		
		var startX;
		var galleryStartX;
		
		var spacing = 80;
		var totalImages = 8;
		var setWidth = spacing * totalImages;
		
		root.gallery_mc.on("mousedown", startDrag);
		root.gallery_mc.on("pressmove", dragGallery);
		root.gallery_mc.on("pressup", snapGallery);
		
		function startDrag(evt){
		
		    startX = evt.stageX;
		    galleryStartX = root.gallery_mc.x;
		
		}
		
		function dragGallery(evt){
		
		    var moveX = (evt.stageX - startX) * 0.6; // slower swipe
		    root.gallery_mc.x = galleryStartX + moveX;
		
		}
		
		function snapGallery(){
		
		    var index = Math.round(root.gallery_mc.x / -spacing);
		    var targetX = -(index * spacing);
		
		    createjs.Tween.get(root.gallery_mc)
		        .to({x: targetX}, 400, createjs.Ease.quadOut)
		        .call(checkLoop);
		
		}
		
		function checkLoop(){
		
		    if(root.gallery_mc.x <= -setWidth){
		        root.gallery_mc.x += setWidth;
		    }
		
		    if(root.gallery_mc.x >= 0){
		        root.gallery_mc.x -= setWidth;
		    }
		
		}
	}
	this.frame_94 = function() {
		this.link01.alpha = 0.05;
		
		// Invisible stage button (opens URL)
		this.link01.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.skechers.id/ramadan-2026", "_blank");
		    }, 100);
		}.bind(this));
		
		this.link02.alpha = 0.05;
		
		// Invisible stage button (opens URL)
		this.link02.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.skechers.id/ramadan-2026", "_blank");
		    }, 100);
		}.bind(this));
	}
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(25).call(this.frame_94).wait(20).call(this.frame_114).wait(1));

	// Layer_11
	this.link02 = new lib.stageBtn();
	this.link02.name = "link02";
	this.link02.setTransform(160.75,459.25,0.9552,0.0834,0,0,0,0.3,0);

	this.link01 = new lib.stageBtn();
	this.link01.name = "link01";
	this.link01.setTransform(160.65,141.75,0.9552,1.0047,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.link01},{t:this.link02}]},94).wait(21));

	// Layer_8
	this.instance = new lib.sw();
	this.instance.setTransform(193.8,326.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({x:160,alpha:1},10).wait(20).to({x:134.35,alpha:0},5).to({_off:true},1).wait(15));

	// Layer_12
	this.mask_mc = new lib.mask2();
	this.mask_mc.name = "mask_mc";
	this.mask_mc.setTransform(160.05,426.7,1,0.3685);
	this.mask_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(69).to({_off:false},0).wait(46));

	// Layer_7
	this.gallery_mc = new lib.gallery();
	this.gallery_mc.name = "gallery_mc";
	this.gallery_mc.setTransform(280,428.4);
	this.gallery_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gallery_mc).wait(69).to({_off:false},0).wait(46));

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E282A7").s().p("A63IrIAAxVMA1vAAAIAARVg");
	this.shape.setTransform(165,517.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E282A7").s().p("A63ItIAAxZMA1vAAAIAARZg");
	this.shape_1.setTransform(165,508.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E282A7").s().p("A63IvIAAxcMA1vAAAIAARcg");
	this.shape_2.setTransform(165,500.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E282A7").s().p("A63IwIAAxfMA1vAAAIAARfg");
	this.shape_3.setTransform(165,491.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E282A7").s().p("A63IyIAAxjMA1vAAAIAARjg");
	this.shape_4.setTransform(165,482.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E282A7").s().p("A63I0IAAxnMA1vAAAIAARng");
	this.shape_5.setTransform(165,474.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E282A7").s().p("A63I2IAAxrMA1vAAAIAARrg");
	this.shape_6.setTransform(165,465.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E282A7").s().p("A63I4IAAxvMA1vAAAIAARvg");
	this.shape_7.setTransform(165,456.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E282A7").s().p("A63I5IAAxxMA1vAAAIAARxg");
	this.shape_8.setTransform(165,448.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E282A7").s().p("A63I7IAAx1MA1vAAAIAAR1g");
	this.shape_9.setTransform(165,439.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E282A7").s().p("A63I9IAAx5MA1vAAAIAAR5g");
	this.shape_10.setTransform(165,430.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(46));

	// Layer_15
	this.instance_1 = new lib.shop();
	this.instance_1.setTransform(54,267,0.7705,0.7705);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).wait(51));

	// Layer_3
	this.instance_2 = new lib.otg_1();
	this.instance_2.setTransform(160.3,426.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},10).wait(20).to({y:350.85},6).wait(45));

	// Layer_4
	this.instance_3 = new lib.modelwide();
	this.instance_3.setTransform(160,184.25,0.8761,1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({scaleX:1,alpha:1},6).wait(45));

	// Layer_14
	this.instance_4 = new lib.model_1();
	this.instance_4.setTransform(167.6,329.9,2.0856,2.0856,-3.4957);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({scaleX:1.3082,scaleY:1.3082,rotation:0,x:160,y:257.85},15).wait(19).to({scaleX:1,scaleY:1,y:200.4},11).to({scaleX:1.1846,alpha:0},6).wait(45));

	// Layer_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_11.setTransform(158,238.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.89)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_12.setTransform(158,238.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.776)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_13.setTransform(158,238.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.667)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_14.setTransform(158,238.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.557)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_15.setTransform(158,238.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.443)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_16.setTransform(158,238.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.333)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_17.setTransform(158,238.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.224)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_18.setTransform(158,238.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.11)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_19.setTransform(158,238.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("EgaPAmhMAAAhNBMA0fAAAMAAABNBg");
	this.shape_20.setTransform(158,238.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},82).wait(23));

	// Layer_1
	this.instance_5 = new lib.BACKGROUND();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(34.1,178.7,1195.9,542.5);
// library properties:
lib.properties = {
	id: '411DE1766251174FB67C82765681C989',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BACKGROUND.jpg", id:"BACKGROUND"},
		{src:"images/card1.png", id:"card1"},
		{src:"images/card2.png", id:"card2"},
		{src:"images/card3.png", id:"card3"},
		{src:"images/card4.png", id:"card4"},
		{src:"images/card5.png", id:"card5"},
		{src:"images/card6.png", id:"card6"},
		{src:"images/card7.png", id:"card7"},
		{src:"images/card8.png", id:"card8"},
		{src:"images/model.png", id:"model"},
		{src:"images/model_rev.png", id:"model_rev"},
		{src:"images/otg.png", id:"otg"},
		{src:"images/shop.png", id:"shop"},
		{src:"images/swipe.png", id:"swipe"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['411DE1766251174FB67C82765681C989'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;