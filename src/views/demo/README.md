# Api 

**下级命名空间**

Collection、Observable、util

**包含的类**


BaseBrush、Canvas、Canvas、Circle、CircleBrush、Color、Ellipse、Gradient、Group、Image、Intersection、IText、Line、Object、Path、PathGroup、Pattern、PatternBrush、PencilBrush、Point、Polygon、Polyline、Rect、Shadow、SprayBrush、StaticCanvas、Text、Triangle

**类属性成员**

```javascript
DPI //static成员，屏幕上每英寸的像素数，默认情况下为96，可以根据实际的情况进行修改。  
isLikelyNode(boolean) //static成员，在nodejs环境中，该值为true。  
isTouchSupported(boolean) //static成员，在触摸屏环境下，该值为true。  
SHARED_ATTRIBUTE(Array) //static成员，从SVG元素转换得到的所有属性。
```

**类函数成员**
```javascript
/**
 * 只有在node.js环境中该函数才可用。
 * 参数一为画布的宽；
 * 参数二为画布高；
 * 参数三可选，传递给FabricCanvas的参数选项；
 * 参数四可选，传递给NodeCanvas的参数选项。
 * 返回值为封装的canvas实例。
 */  
static Object createCanvasForNode(Number, Number, Object opt, Object opt)  

/**
 * 返回指定的SVG文档的CSS规则。
 * 参数为SVG文档，返回值为CSS规则。
 */
static Object getCSSRule(SVGDocument) 

/**
 * 转换指定的SVG文档，返回的有渐变的定义。
 * 返回的渐变定义中，key为渐变元素的id，value为渐变定义。
 */
static Object getGradientDefs(SVGDocument)  

/**
 * 传入一个SVG文档相关的字符串，进行转换并传给一系列fabric元素。
 * 参数一为需要转换的字符串；
 * 参数二，无说明；
 * 参数三为更进一步的回调，在每个fabric元素被创建时进行调用。
 */
static void loadSVGFromString(String, Function, Function opt)  
/**
 * 传入一个SVG文档相关的URL，进行解析转换并传给一系列的fabric元素。
 * SVG是通过XMLHttpRequest获取的，所有遵守SOP原则（就是要在同一个域名下）。
 * 参数一为URL；
 * 参数二，无说明；
 * 参数三为更进一步的回调，在每个fabric元素被创建时进行调用。
 */
static void loadSVGFromURL(String, Function, Function opt) 

//console.log函数的封装。参数为需要输出的任意值。
static void log(Any opt)  

/**
 * 向上递归转换父节点。
 * 传入给完的DOM元素和需要转换的指定属性数组，返回一个属性相关的键值对对象。
 * 参数一为需要转换的DOM元素；
 * 参数二为需要转换的属性数组。
 */
static Object parseAttributes(DOMElement, Array)  

/**
 * 将一个SVG元素的数据转换为一系列相关的fabric.*相关的实例。
 * 参数一为需要转换的SVG元素数组；
 * 参数二为回调函数，参数为fabric元素的数组，该数组是从SVG元素数组转换得到的；
 * 参数三为可选的选项对象，该参数无详细说明；
 * 参数四为更进一步的回调，在每个fabric元素被创建时进行调用。
 */
static void parseElements(Array, Function, Object opt, Function opt)  

//转换字体的短声明，将它的属性加入Object中。参数一为字体声明；参数二为转换结果。
static void parseFontDeclaration(String, Object)  

/**
 * 转换“点”的属性，返回点对应的数组。
 * 参数为代表点的字符串，
 * 译者注：通过源码可知该字符串的格式为x1,y1,x2,y2,x3,y3,...
 */
static Array parsePointsAttribute(String)  

/**
 * 转换“style”属性，返回相关的样式数组。
 * 参数为需要转换的SVG元素。
 * 译者注：通过源码可知不单是SVG元素，DOM元素也可以通过该函数进行转换
 */
static Object parseStyleAttribute(SVGElement)  

/**
 * 转换一个SVG文档，将它转为fabirc.*相关的实例数组，并将该数组传给回调函数。
 * 参数一为需要转换的SVG文档；
 * 参数二为回调函数，当SVG文档完成转换后被调用，回调的参数为转换后的fabric.；
 * 参数三为更进一步的SVG转换回调，在各个fabric元素被成功创建后时进行调用。
 */
static void parseSVGDocument(SVGDocument, Function, Function opt)  

/**
 * 转换“变换”属性，返回与之相关的数组。
 * 参数为包含着所有“变换”相关的属性的字符串。
 * 返回值包含着6个成员的变换矩阵。
 */
static Array parseTransformAttribute(String)  
//console.warn函数的封装。
static void warn(Any opt)  
```


## BaseBrush
### fabric.BaseBrush
构造函数：new BaseBrush();

**类属性成员**  
color(String)：画刷的颜色，默认值为"rgb(0,0,0)"。  
shadow(fabric.Shadow)：代表该形状的Shadow实例，默认值为null。  
编者注：向后兼容提示，在版本1.2.12之后该属性代替了shadowColor、shadowOffsetX、shadowOffsetY、shadowBlur属性。  
strokeLineCap(String)：画刷线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"round"。  
strokeLineJoin(String)：画刷线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"round"。  
width(Number)：画刷的宽度，默认值为1。

**类函数成员**

```javascript
/**
* 为指定的Object设置阴影效果。
* 参数可选，为阴影效果，格式举例" 2px 2px 10px rgba(0,0,0,0.2)"。
*/
fabric.Object setShadow(Object | String opt)：

```

## Canvas
### fabric.Canvas
构造函数  
```javascript
new Canvas();
```
**可触发的事件**  
object:modified、object:rotating、object:scaling、object:moving、object:selected、before:selection:cleared、selection:cleared、selection:created、path:created、mouse:down、mouse:move、mouse:up、mouse:over、mouse:out

**父类**  
fabric.StaticCanvas

**类属性成员**  
```javascript
allowTouchScrolling(boolean) //默认false，指明使用触摸屏或者在canvas上拖动对象时，屏幕是否跟着滚动  

backgroundColor(string|fabric.Pattern) //Canvas实例的背景色，需要通过fabric.StaticCanvas的setBackgroundColor()函数来设置 

/**
* 默认null，Canvas实例的背景图片。
* 需要通过fabric.StaticCanvas的setBackgroundImage()函数来设置。
* 如果要设置图片的透明度和长宽，需要通过fabric.Image的opacity属性和width、height属性来设置。  
*/
backgroundImage(fabric.Image) 

centeredRotation(boolean) //默认false，当设置为true时Canvas上的所有对象使用中间点（而不是默认的左上角）作为旋转的原点

centeredScaling(boolean) //默认false，当设置为true时，Canvas上的所有对象使用中间点（而不是默认的左上角）作为缩放的原点  

clipTo(function) //这是一个funcion类型的属性成员，一般用于回调。  

//作用是将整个Canvas进行裁剪并传递给第一个参数，以下是文档中附带的例子 //  
canvas.clipTo = function(ctx) {
  ctx.arc(0, 0, 60, 0, Math.PI*2, true);
};
// or passing to fabric.Element options
new fabric.Element('myCanvas', {
  clipTo: function(ctx) {
    ctx.arc(0, 0, 60, 0, Math.PI*2, true);
  }
});

containerClass(string) //默认"canvas-container"，包裹Canvas元素的默认元素类（<div>）  

controlsAboveOverlay(boolean) //默认false，指明对象的控制器（borders/controls）是否渲染在前景图片之上  

defaultCursor(string) //默认"default"，整个Canvas上使用的默认光标  

freeDrawingCursor(string) //默认"crosshair"，自由绘画状态下的光标样式 

FX_DURATION(number) //默认500，单位毫秒（ms）。动画的持续时间，给fx*的方法使用。

hoverCursor(string) //默认"move"，当鼠标覆盖在Canvas上任一对象上时的光标样式。 

imageSmoothingEnabled(boolean) //默认true。指明Canvas是否使用图片的平滑特性。 

includeDefaultValues(boolean) //默认true，指明Canvas序列化时是否包括默认值。 
 
interactive(boolean) //默认true。指明Canvas是否可以进行交互，该属性的值不可更改。  

moveCursor(string) //默认"move"，移动Canvas任一对象时的光标样式。  

overlayColor(string|fabric.Pattern) //Canvas的前景色，可以通过fabric.StaticCanvas的setOverlayColor()函数进行设置。 

/**
* 默认null，Canvas的前景图。
* 可以通过fabric.StaticCanvas的setOverlayImage()函数进行设置。
* 如果要设置位置，可通过fabric.Image的left和top属性进行设置。 
*/
overlayImage(fabric.Image) 

perPixelTargetFind(boolean) //默认false。当设置为true，对象的检测会以像互点为基础，而不是以边界的盒模型为基础。

preserveObjectStacking(boolean) //默认false。指明对象被选定的时候，是否留在当前的栈位置上。如果设置为false，对象会被移至最顶端，并被渲染为选择组的一部分。  

renderOnAddRemove(boolean) //默认为true。指明当调用fabric.Collection.add、fabric.Collection.insertAt、fabric.Collection.remove函数时是否重新渲染Canvas。当大量的插入或移除对象时，将这个属性设置为false，可以获得高的效率。

rotationCursor(string) //默认"crosshair"，旋转点的光标样式。  

selection(boolean) //默认true。指明分组选择是否可用。  

selctionBorderColor(string) //默认"rgba(255,255,255,0.3)"，选择边框的颜色。 

selectionColor(string) //默认"rgba(100,100,255,0.3)"，对象被选中时的颜色。 

selectionDashArray(Array) //选择框的点状样式数组。如果非空，选择空即为点状样式。  

selectionLineWidth(number) //默为1。对象或组被选中时，选择框的线条宽度。  

skipTargetFind(boolean) //默认false。设置为true时，当鼠标覆盖在Canvas上时，对象的探测均会失效。这个属性可用于提高性能。

stateful(boolean) //默认true。指明对象的状态是否会被保存。  

/**
* 默认true。
* 当设置为true时，getSvgTransform()函数将会StaticCanvas.viewprotTransform赋值给SVG transform；
* 当设置为true时，被拉伸的Canvas将会把拉伸效果应用到SVG的输出。  
*/
svgViewportTransformation(boolean)

targetFindTolerance(number) //默认0。对象探测的误差像素点阈值。

uniScaleTransform(boolean) //默认false。当设置为true时，对象可以固定一边被进行拉伸。

viewportTransform(Array) //应用于视口的拉伸（译者注：这个属性完全不知道在干啥）
``` 

**类函数成员**  
```javascript

void _setCursorFromEvent(e,target) //根据光标在Canvas上的位置对光标进行设置。编者注 //这个函数在opera上有很大的BUG。

absolutePan(fabric.Point) //将画布视图的原点移至point指定的点。

beingForward(fabric.Object,boolean) //将指定对象在栈中称前一位。第二个参数如果设置为true，将会把指定对象在Canvas上移至到覆盖它的对象之上。

bringToFront(fabric.Object) //将指定的对象移至栈顶。

calcOffset() //计算Canvas相对于document的偏移量。这个函数被附加给Window的resize事件的处理函数。

centerObject(fabric.Object) //在水平和垂直方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。

centerObjectH(fabric.Object) //在水平方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。

centerObjectV(fabric.Object) //在垂直方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。

clear() //清空Canvas上的所有实例，包括背景、对象等。

clearContext(CanvasRenderingContext2D) //清除指定的Canvas的元素。

clone(callback opt, Array opt) //复制Canvas的实例。callback是一个回调函数，它的第一个参数用于接收被复制的对象实例；第二个参数放置着包含在被复制的Canvas以及它的子元素中的属性。

cloneWithoutData(callback opt) //复制Canvas的实例，但不复制其包含的数据。这个函数是复制必要的维度、裁剪属性等等，但它们的数据会被置空（你可以自己计算出这些属性的值）。callback是一个回调函数，它的第一个参数用于接收被复制的对象的实例。

boolean containsPoint(Event, fabric.Object) //检测点是否包含在给定的Object的区域中。

deactivateAll() //使Canvas上活动的Object无效。移除任何处于活动状态的的Group或object。

deactivateAllWithDispatch() //使Canavs上活动的Object无效，并且分发合适的事件。

discardActiveGroup() //抛弃当前处于活动状态的Group。

discardActiveObject() //抛弃当前处于活动状态的Object。

dispose() //清楚Canvas上的所有元素，并移除所有的侦听事件。

drawControls(CanvasRenderingContext2D) //绘制Object的控制器（边框和控制器，就是那几个小方块）。

findTarget(Event, boolean) //确定了我们点中了哪个Object。如果第二个参数为true，则会跳过Group，只有Object会被探测到。

fxCenterObjectH(fabric.Object, callback object opt) //让指定的Object水平居中，带有动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。

fxCenterObjectV(fabric.Object, callback object opt) //让指定的Object垂直居中，带有动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。

fxRemove(fabirc.Object, callback object opt) //和fabric.Canvas.remove()函数效果一样，只不过带了动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。

fxStraightenObject(fabric.Object) //和fabric.Canvas.prototype.straightenObject()效果一样，只不过带了动画效果。

fabric.Group getActiveGroup() //获取当前处于活动状态的Group。

fabric.Object getActiveObject() //获取当前处于活动状态的Object。

Object getCenter() //返回Canvas的中点坐标。返回值中包含了left和top两个属性。

CanvasRenderingContext2D getContext() //返回Canvas的Context。

HTMLCanvasElement getElement() //返回与Canvas相关联的<canvas>HTML元素。

Number getHeight() //获取Canvas的高度，以像素为单位。

Object getPointer(Event) //返回与Canvas相关联的点坐标，返回值中包含了x和y两个属性。

CanvasRenderingContext2D getSelectionContext() //返回绘置选中对象的Canvas的Context。

HTMLCanvasElement getSelectionElement() //返回绘置着选中对象的Canvas的相关联的<canvas>HTML对象。

Number getWidth() //获取Canvas的宽度，以像素为单位。

Number getZoom() //返回Canvas的缩放级别。

Object initialize(HTMLElement | String, Object opt) //构造函数。第一个参数指定需要实例代的HTML元素；第二个参数则指定了需要预先设置的一些属性（可选）。

boolean isTargetTransparent(fabric.Object, Number x, Number y) //当Object在指定的坐标上是透明的，则返回true。

loadFromDatalessJSON(String | Object, Function, Function opt) //从无数据的json中还原出Canvas。这个无数据的json必须符合fabric.Canvas.toDatalessJSON()。这个函数有三个参数，第一个参数是需要还原的json数据；第二个参数是一个回调函数，这个回调函数在解析json，相关的Object（如fabric.Image）初始化时被调用；第三个参数也是一个回调函数，可选，在每一个元素创建之后被调用。编者注 //这个函数在1.2.2版本后已被废弃。

loadFromJSON(String | Object, Function, Function opt) //从指定的json数据中还原出Canvas。这个json数据必须符合fabric.Canvas.toJSON()。这个函数有三个参数，第一个参数是需要还原的json数据；第二个参数是一个回调函数，这个回调函数在解析json，相关的Object（如fabric.Image）初始化时被调用；第三个参数也是一个回调函数，可选，在每一个元素创建之后被调用。文档中的示例 //

canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));

canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
});
moveTo(fabric.Object, Number) //将指定的Object移动到栈的指定位置。

onBeforeScaleRotate() //这是一个回调函数，在Object缩放或旋转时被调用。

relativePan(fabric.Point) //整个视口，根据给定的点形成向量进行移动。译者注 //没看懂这里整个视口是怎么移动的。

removeListeners() //移除所有的事件侦听函数。

renderAll(boolean) //将上层的Canvas以及从属的Canvas全部进行渲染。如果需要所有的顶层Images重新进行渲染，则将参数设置为true。

renderTop() //只渲染顶层的Canvas，同时也会渲染选中的Group。

sendBackwards(fabric.Object, boolean opt) //将指定的Object在栈中向下移一位。如果第二个参数设置为true，则会在Canvas上将指定的Object放置在下一个与之有交集的Object的后面。

sendToBack(fabric.Object) //将指定的Object置于栈中的最底部。

setActiveGroup(fabric.Group) //设置指定的Group为活动状态。

setActiveObject(fabric.Object, Event opt) //设置指定的Object为活动状态。第二个参数通过object:selected事件进行传递。

setBackgroundColor(string | fabric.Pattern, Function) //设置Canvas的背景色。第二个参数是个回调函数，在背景色设置之后被调用。

// 文档中示例
// eg1
canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
// eg2
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
// eg3
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));

/**
* 设置Canvas的背景图片。
* 第二个参数是回调函数，当图片被成功加载被设置成背景后被调用；
* 第三个是可选参数，将设置给背景图的一些属性。
*/
setBackgroundImage(fabric.Image | string, Function, Object opt) 
// 文档中示例
// eg1
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
// eg2
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
// eg3
fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});
// eg4
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
// eg5
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});

setCursor(string) //设置光标的样式。参数的可选值有：[ [<url> [<x> <y>]?,] 可参考：http://www.w3.org/TR/css3-ui/#cursor


/**
* 设置Canvas的长宽。
* 第一个参数有两个属性width和height，分别表示要设置的长宽，类型为Number或string；
* 第二个参数有两个属性backstoreOnly和cssOnly，这两个均为boolean类型.
* 当cssOnly为true时，width和height的设置需要带上单位（px/%/em等）。
* 当backstroeOnly为true时，则将设置的长宽以backstore的模式进行设置。
* （译者注：不太清楚这里的backstore什么意思，去查了字典也没查到这个词）
*/
setDimensions(Object, Object opt)

setOverlayColor(string | fabric.Pattern, Function) //设置Canvas的前景色。第一个参数是用来设置的颜色；第二个参数是个回调函数，当前景色设置后被调用。
// 文档中示例：
// eg1
canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
// eg2
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
// eg3
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));

/**
* 设置Canvas的前景图。
* 第一个参数是要设置的前景图；
* 第二个参数是个回调函娄，在成功加载图片并设置为前景图中被调用；
* 第三个参数是个可选参数，是要设置给前景图的选项。
*/
setOverlayImage(fabric.Image | string, Function, Object opt)
//文档中示例：
// eg1
canvas.setOverlayImage('xx.png', canvas.renderAll.bind(canvas), {
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
// eg2
canvas.setOverlayImage('xx.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
// eg3
fabric.Image.fromURL('xxx.png', function(img) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
// eg4
canvas.setOverlayImage('xxxx', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
// eg5
canvas.setOverlayImage('xxx.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});

setViewportTransform(Array) //设置Canvas的变换。参数则属于context.transform的一种表现形式。

setZoom(Number) //设置Canvas的缩放程度。当参数小于1时，Canvas则缩小。

straightenObject(fabric.Object) //将Object拉直（译者注 //不太清楚这里拉直什么意思）。

string toDatalessJSON(Array opt) //返回代表Canvas的无数据JSON。参数是一个数组，指定了需要额外包含在输出中的属性。

Object toDatalessObject(Array opt) //返回代表Canvas的无数据Object。参数是一个数组，指定了需要额外包含在输出中的属性。

/**
* 将Canvas转为数据串形式的URL。要注意，当multiplier被使用的时候，裁剪区域会被适当缩放。
* Object是一个可选值，附带着以下属性：
* format  string，可选，默认"png"，指定输出的图像格式，"jpeg"或"png"
* quality  Number，可选，默认1，取值范围0到1，只对于"jpeg"格式有效
* multiplier  Number，可选，默认1，缩放因子
* left  Number，可选，裁剪的左偏移量
* top  Number，可选，裁剪的顶部偏移量
* width  Number，可选，裁剪宽度
* height  Number，可选，裁剪高度
*
*/
string toDataURL(Object opt) 
// 文档中示例：
// eg1
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
// eg2
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
// eg3
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});

/**
* 将Canavs转成数据串格式的URL，通过缩放因子可以对图片进行缩放。
* 第一个参数是输入的格式，jpeg或png；
* 第二个参数是缩放因子；
* 第三个参数则是输出的质量，取值为0到1之间。本函数已废*弃。
*/
string toDataURLWithMultiplier(string, Number, Number)
string toJSON(Array) //将Canvas序列化为JSON数据。参数是一个数组，包含你想要额外添加到输出数据中的属性。文档中示例：
// eg1
var json = canvas.toJSON();
// eg2
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling']);
// eg3
canvas.includeDefaultValues = false;
var json = canvas.toJSON();

Object toObject(Array) //将Canvas序列化为Object数据。参数是一个数组，包含你想要额外添加到输出数据中的属性。

string toString() //返回一个代表Canvas实例的字符串。

string toSVG(Object opt, Function opt) 
//返回一个代表Canvas的SVG数据。参数比较复杂，如需查看请点击 /assets/toSVG.png
// 文档中示例：
// eg1
var svg = canvas.toSVG();
// eg2
var svg = canvas.toSVG({suppressPreamble: true});
// eg3
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
// eg4
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
// eg5
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});

zoomToPoint(fabric.Point, Number) //设置Canvas以指定的点为中心进行缩放。第一个参数即为指定的中心点；第二个参数为缩放级别，小于1即为缩小。
```

## Circle

### fabric.Circle  
**构造函数**  
```javascript
new Circle()
```
**父类**  
```javascript
fabric.Object
```
类属性成员
```javascript
ATTRIBUTE_NAMES //static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number) //Object的旋转角度（以度为单位）。
backgroundColor(String) //Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String) //Object为激活状态时，控制器的边框颜色。默认值为 //rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number) //当Object处于激活或移动状态时，控制器边框的透明度。默认值为 //0.4。
borderScaleFactor(Number) //Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean) //当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示 //该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean) //当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示 //该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function) //该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String) //Object控制器（激活的时候）四角的颜色，默认值为 //rgba(102,153,255,0.5)。
cornerSize(Number) //Object控制器四角的大小，以像素为单位，默认值为 //12。
endAngle(Number) //圆的结束角度，默认值2Pi。
evented(boolean) //当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String) //Object填充的颜色，默认值为 //rgb(0,0,0)。
fillRule(String) //该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示 //该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean) //当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean) //当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String) //为Canvas的globalCompositeRule设置的混合规则。默认值为 //"source-over"。
hasBorders(boolean) //当属性为false时，Object的控制器边框将不会被渲染。默认值为 //true。
hasControls(boolean) //当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean) //当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number) //Object的高度，默认为0。
hoverCursor(String) //当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean) //当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number) //Object的左边位置，即X坐标。注意 //在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean) //当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean) //当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean) //当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean) //当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean) //当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean) //当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean) //当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number) //Object缩放比例最小值，默认值为0.01。
oCoords(Object) //Object包含的控制器的坐标，默认值为null。
opacity(Number) //Object的透明度，默认值为1。
originX(String) //Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String) //Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number) //Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean) //当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
radius(Number) //圆的半径，默认值为0。
rotatingPointOffset(Number) //Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number) //Object水平方向的缩放因子。默认值为1。
scaleY(Number) //Object垂直方向的缩放因子，默认值为1。
selectable(boolean) //当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow) //当前图形的Shadow对象，默认为null。
startAngle(Number) //圆的起始角度，沿顺时钟方向。默认值为0。
stateProperties(Array) //属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String) //当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array) //用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String) //Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String) //Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number) //Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number) //用于渲染Object的线条的宽度，默认值为1。
top(Number) //Object的顶部位置。注意 //默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array) //变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean) //当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String) //Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean) //当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number) //Object的宽度，默认值为0。
```
**类函数成员**  

```javascript

static fabric.Circle fromElement(SVGElement, Object opt) //通过指定的SVG元素返回fabric.Circle实例。第一个参数是指定的SVG元素。
static fabric.Circle fromObject(Object) //通过指定的Object返回对应的fabric.Circle实例。
void _renderControls(CanvasRenderingContext2D, boolean opt) //渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D) //在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D) //为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String) //参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object) //对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照 //http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt) //将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront() //将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center() //在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH() //在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV() //在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array) //深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function) //从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity() //返回一个实例的复杂度。（译者注 //该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point) //检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D) //绘制Object盒模型的四周，要求有以下公共属性 //width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D) //绘制Object盒模型的控制器，要求有以下公共属性 //width、height、conerSize、padding。
fabric.Object fxstraighten(Object) //和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String) //最基本的getter函数，参数为想要获取的属性名。
Number getAngle() //获得Object的旋转角度，以“度”为单位。
Object getBoundingRect() //返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight() //返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth() //返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint() //返回Object的真实中点坐标。
Function getClipTo() //获得Object的裁剪函数。
String getFill() //获得Object的填充颜色。
boolean getFlipX() //获得Object的flipX属性。
boolean getFlipY() //获得Object的flipY属性。
Number getHeight() //获得Object的高度。
Number getLeft() //获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt) //获取一个点在Object上的本地坐标。注意 //第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity() //获取Object的透明度，在0到1之间的数字。
String getOriginX() //获取Object的原点X值。
String getOriginY() //获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String) //如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为 //"left"、"center"、"right"；第二个参数代表originY，可选值为 //"top"、"center"、"bottom"。
Number getRadiusX() //返回Object的水平半径（根据Object缩放程度）。
Number getRadiusY() //返回Object的垂直半径（根据Object缩放程度）。
Number getScaleX() //获取Object的scaleX属性值。
Number getScaleY() //获取Object的scaleY属性值。
Object getShadow() //获取Object的阴影，返回阴影实例。（译者注 //不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke() //获取Object的stroke属性值。
Number getStrokeWidth() //获取Object的笔划宽度。
String getSvgStyles() //获取svg输出的样式字符串。
String getSvgTransform() //获取svg输出的变换字符串。
String getSvgTransformMatrix() //从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop() //获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix() //获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform() //在可能的情况下，获取Object的视口变换。（译者注 //源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible() //获取Object是否可见。
Number getWidth() //获取Object的宽度。
boolean hasStateChanged() //当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Circle initialize(Object) //构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object) //探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object) //探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object) //探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object) //探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String) //当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有 //"tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String) //指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number) //将Object移至绘制栈的指定层。
fabric.Object remove() //将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt) //在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt) //保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number) //缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number) //将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number) //将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean) //将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack() //将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function) //为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number) //设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function) //设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String) //设置实例的颜色（Color是fill属性的别名）。
//设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示 //
// bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
// br: boolean类型，为true则bottom-right控制器可用，false则不可用。
// mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
// ml: boolean类型，为true则middle-left控制器可用，false则不可用。
// mr: boolean类型，为true则middle-right控制器可用，false则不可用。
// mt: boolean类型，为true则middle-top控制器可用，false则不可用。
// tl: boolean类型，为true则top-left控制器可用，false则不可用。
// tr: boolean类型，为true则top-right控制器可用，false则不可用。
// mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlsVisibility(Object opt) 

fabric.Object setControlVisible(String, boolean) //设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords() //以当前的角度、宽高为基准，设置四角的的位置。可参考 //https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String) //设置Object的填充颜色。参数示例 //rgb(0,0,0)。
fabric.Object setFlipX(boolean) //设置Object的flipX属性值。
fabric.Object setFlipY(boolean) //设置Object的flipY属性值。
/*
*设置（填充或画笔）的渐变色。无法向后兼容提示 
在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，
可选属性如下 
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例 //{0: 'ff0000', 1: '000000'}
示例1 //
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2 //
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
*
*/
fabric.Object setGradient(String, Object) 
fabric.Object setLeft(Number) //设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number) //设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt) //通过参数设置Object的属性。
fabric.Object setOriginX(String) //设置originX属性值，可选值为 //"left", "right", "center"。
fabric.Object setOriginY(String) //设置originY属性值，可选值为 //"top", "bottom", "center"。
fabric.Object setPatternFill(Object) //设置Object的样式填充。参数的可选成员如下 //
// 参数名	类型	是否可选	默认值	说明
// source	String | HTMLImageElement			样式来源
// repeat	String	是	"repeat"	指定是否重复样式填充，可选值有 //"repeat"、"repeat-x"、"repeat-y"、"no-repeat"
// offsetX	Number	是	0	相对于左上角的水平偏移量
// offsetY	Number	是	0	相对于右上角的垂直偏移量
// 示例 //
// fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
//   object.setPatternFill({
//     source: img,
//     repeat: 'repeat'
//   });
//   canvas.renderAll();
// });
void setPositionByOrigin(fabric.Point, String, String) //根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有 //'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有 //'top', 'center' or 'bottom'。
void setRadius(Number) //设置Object的半径，从而更新Object的宽度。译者注 //看源码宽高同时更新。
fabric.Object setScaleX(Number) //设置Object的scaleX属性值。
fabric.Object setScaleY(Number) //设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt) //设置Object的阴影。当参数为String类型时，可以如下格式设置 //"2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下 //
// 属性名	类型	是否可选	默认值	说明
// color	String	是	rgb(0,0,0)	阴影颜色
// blur	Number	是	0	阴影模糊度
// offsetX	Number	是	0	水平偏移量
// offsetY	Number	是	0	垂直偏移量
// 示例1 //
// object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
// canvas.renderAll();
// 示例2 //
// object.setShadow({
//   color: 'red',
//   blur: 10,
//   offsetX: 20,
//   offsetY: 20
// });
// canvas.renderAll();
fabric.Object setSourcePath(String) //设置Object的源路径。译者注 //不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String) //设置Object的画笔。
fabric.Object setStrokeWidth(Number) //设置Object的画笔宽度。
fabric.Object setTop(Number) //设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array) //设置Object的transformMatrix属性。
fabric.Object setupState() //建立Object的状态。
fabric.Object setVisible(boolean) //设置Object的visible属性。
fabric.Object straighten() //拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt) //返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object) //将Object转换成类URL的字符串。参数可选成员如下 //
// 属性名	类型	是否可选	默认值	说明
// format	String	是	png	输出图片的格式，可选"jpeg"或"png"
// quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
// multiplier	Number	是	1	缩放因子
// left	Number	是		裁剪区域左偏移量，v1.2.14引入
// top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
// width	Number	是		裁剪区域宽度，v1.2.14引入
// height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String) //切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt) //返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY) //返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt) //返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString() //返回一个代表当前实例的字符串。
String toSVG(Function opt) //返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean) //当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String) //将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String) //将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
```
## CircleBrush
```javascript
fabric.CircleBrush
构造函数 new CircleBrush()

类属性成员：
width(Number)：画刷的宽度，默认值为10。

类函数成员：
fabric.Point addPoint(Object)：（译者注：文档对本函数的功能没过多说明，从源码得知是对points数组中添加一个点，而这个点是根据参数创建的。该函数的参数是一个包含x、y成员的Object，一般情况下可以看成是fabric.Point的实例。）
void drawDot(Object)：当鼠标点下和移动时在框架内部进行调用。（译者注：本函数参数的意义和addPoint()函数的参数一样，根据源码可知，在本函数内部内该参数就是给addPoint()函数使用的。）
fabric.CircleBrush initialize(fabric.Canvas)：构造函数。
void onMouseDown(Object)：鼠标按下时的事件函数。
void onMouseMove(Object)：鼠标移动时的事件函数。
void onMouseUp(Object)：鼠标弹起时的事件函数。







```
## Color
```javascript
fabric.Color
构造函数：
fabric.Color new Color(string)：这是一个颜色类，目的是为了抽象和封装常用的颜色操作。fabric.Color是一个构造函数，用于创建一个fabric.Color对象实例。参数是一个十六进制或rgb(a)格式的字符串。

类属性成员：
colorNameMap：这是一个静态属性，是一张存放着17种基本颜色的表，这些颜色都是以十六进制表示的。
reHex：这是一个静态属性，正则表达式匹配的十六进制颜色格式，如#FF5555、010155、aff。
reHSLa：这是一个静态属性，正则表达式匹配的HSL或HSLA的颜色格式，如hsl(200, 80%, 10%)、 hsla(300, 50%, 80%, 0.5),、hsla( 300 , 50% , 80% , 0.5 )。
reRGBa：这是一个静态属性，正则表达式匹配的RGB或RGBA的颜色格式，如rgb(0, 0, 0)、rgba(255, 100, 10, 0.5)、 rgba( 255 , 100 , 10 , 0.5 )、 rgb(1,1,1)、rgba(100%, 60%, 10%, 0.5)。

类函数成员：
static fabric.Color fromHex(string)：传入一个十六进制格式的颜色值，返回fabric.Color实例。参数是需要实例化的颜色，如FF5555。
static fabric.Color fromHsl(string)：传入一个HSL格式的颜色值，返回fabric.Color实例。参数是需要实例化的颜色，如hsl(0-260,0%-100%,0%-100%)。
static fabric.Color fromHsla(string)：传入一个HSLA格式的颜色值，返回fabric.Color实例。
static fabric.Color fromRgb(string)：传入一个RGB格式的颜色值，返回fabric.Color实例。参数是需要实例化的颜色，如rgb(0-255,0-255,0-255)。
static fabric.Color fromRgba(string)：传入一个RGBA格式的颜色值，返回fabric.Color实例。
static fabric.Color fromSource(Array)：传入一个表示颜色的数组，返回fabirc.Color实例。数组格式为[200, 100, 100, 0.5]。
static Array sourceFromHex(string)：传入以十六进制表示的颜色值，返回以数组表示的颜色值。参数格式是一个十六进制表示的颜色值，如FF5555。
static Array sourceFormHsl(string)：传入以HSL或HSLA表示的颜色值，返回以数组表示的颜色值。参数格式是HSL或HSLA表示的颜色值，如hsl(0-360,0%-100%,0%-100%) 或hsla(0-360,0%-100%,0%-100%, 0-1)。
static Array sourceFromRgb(string)：传入以RGB或RBGA表示的颜色值，返回以数组表示的颜色值。参数格式是RGB或RGBA表示的颜色值，如rgb(0-255,0-255,0-255)、rgb(0%-100%,0%-100%,0%-100%)。
Number getAlpha()：获取颜色实例的Alpha通道值。返回值为0到1之间的数字。
Array getSource()：获取颜色实例的Source，这里的Source是以数组表示的颜色值，如[200, 200, 100, 1]。
fabric.Color overlayWith(string | fabric.Color)：用另一种颜色与本颜色进行遮罩混合后，获得新的颜色。参数即是用于指定遮罩混合的另一种颜色。
fabirc.Color setAlpha(Number)：设置颜色实例的alpha通道值。参数即是要设置的alpha值，取值在0到1之间。
setSource(Array)：设置颜色实例的Source，这里的Source是以数组表示的颜色值，如[200, 200, 100, 1]。
fabric.Color toBlackWhite(Number)：将颜色值转为它对应的黑白二值颜色，参数为转换域值。
fabirc.Color toGrayscale()：将颜色转成与之对应的灰度值。
string toHex()：获取十六进制表示的颜色值，如FF5555。
string toHsl()：获取HSL格式表示的颜色值，如hsl(0-360,0%-100%,0%-100%)。
string toHsla()：获取HSLA格式表示的颜色值，如hsla(0-360,0%-100%,0%-100%,0-1)。
string toRgb()：获取RGB格式表示的颜色值，如rgb(0-255,0-255,0-255)。
string toRgba()：获取RGBA格式表示的颜色值，如rgba(0-255,0-255,0-255,0-1)。



```
## Ellipse
```javascript
fabric.Ellipse
构造函数：new Ellipse()

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度，默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
rx(Number)：水平半径，默认值为0。
ry(Number)：垂直半径，默认值为0。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
static fabric.Ellipse fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Ellipse实例。第一个参数是指定的SVG元素。
static fabric.Ellipse fromObject(Object)：通过指定的Object返回对应的fabric.Ellipse实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getRx()：返回Object的水平半径（根据Object缩放情况）。
Number getRy()：返回Object的垂直半径（根据Object缩放情况）。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Ellipse initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。







```
## Gradient
```javascript
fabric.Gradient
构造函数：new Gradient()

类属性成员：
offsetX(Number)：来自PathGroup之外的SVG的各渐变的水平方向偏移量，默认为0。
offsetY(Number)：来自PathGroup之外的SVG的各渐变的垂直方向偏移量，默认为0。

类函数成员：
static fabric.Gradient forObject(Object, Objecdt opt)：从指定的Object（第一个参数）中返回对应的fabric.Gradient实例。第二个参数是可选的，具体是什么功能文档中没说。
static fabric.Gradient fromElement(SVGGradientElement, fabric.Object)：从指定的SVG元素中返回对应的fabric.Gradient实例。第二个参数，文档中也没说，只是指到要参照以下网址：http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement和http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
fabric.Gradient addColorStop(Object)：添加一个ColorStop，参数包含了偏移量（offset）和颜色（color）两个属性。（译者注：两个属性的具体名字没有提到，是否还有其他可用属性也没说明）
fabric.Gradient initialize(Object opt)：这是构造函数。参数则是需要进行初始化的渐变选项，可选，参数中可包含type、coords、gradientUnits和colorStops属性。
CanvasGradient toLive(CanvasRenderingContext2D)：返回Context上的CanvasGradient实例。
Object toObject()：返回一个由Object形式表示的渐变。
string toSVG(Object, boolean)：返回由SVG形式表示的渐变。第一个参数是通过Object创建出对应的渐变；第二个参数则指定是否则SVG中的坐标标准化。





```
## Group
```javascript
fabric.Group
构造函数：new Group()

父类：fabric.Object

内部包函类：fabric.Collection

类属性成员：
async(Boolean)：static成员，指明该类实例是否异步操作，默认值为true。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
delegatedProperties(Object)：读/写操作时，委托给Group的所有属性。译者注：源码中的该属性定义如下：
delegatedProperties: {
      fill:             true,
      opacity:          true,
      fontFamily:       true,
      fontWeight:       true,
      fontSize:         true,
      fontStyle:        true,
      lineHeight:       true,
      textDecoration:   true,
      textAlign:        true,
      backgroundColor:  true
}
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度，默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
static fabric.Group fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Group实例。第一个参数是指定的SVG元素。
static fabric.Group fromObject(Object)：通过指定的Object返回对应的fabric.Group实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
fabric.Group addWithUpdate(Object)：添加一个Object到Group中，并重新计算该Group的维度、位置等。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Group destroy()：销毁Group，并恢复内部所有Object的状态。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasMoved()：检查该Group是否被移动（从saveCoords最后一次被调用算起）。如果有移动返回true。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Group initialize(Object, Object)：构造函数，第一个参数为组对象，第二参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
fabric.Group removeWithUpdate(Object)：从Group中移除指定的Object，并重新计算该Group的维度、位置等。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Group saveCoords()：保存该Group实例的坐标（与hasMoved()函数配合使用）。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Group setObjectsCoords()：设置该Group中所有Object的坐标。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。









```
## Image
```javascript
fabric.Image
构造函数：new Image()

父类：fabric.Object

命名空间：filters

类属性成员：
async(boolean)：static成员，指明该类型的实例都是异步操作，默认值为true。
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
CSS_CANVAS(String)：static成员，Canvas默认的CSS类名，默认值为"canvas-img"。
pngCompression(Number)：static成员，指定当产生png图片时使用的压缩级别，可选值为1到9，默认值为1。
_lastScaleX(Number)：私有成员，记录最后一次的scaleX的值，用于检测图片重演染之后是否有改变大小。
_lastScaleY(Number)：私有成员，记录最后一次的scaleY的值，用于检测图片重演染之后是否有改变大小。
alignX(String)：preserveAspectRatio的一部分，可选值为"none", "mid", "min", "max"，默认值为"none"。
alignY(String)：preserveAspectRatio的一部分，可选值为"none", "mid", "min", "max"，默认值为"none"。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
crossOrigin(String)：可选值为""、" anonymous"、" allow-credentials"。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
getSvgSrc(Function)：getSrc函数的别名。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
meetOrSlice(String)：preserveAspectRatio的一部分，可选值为"meet"、"slice"。取值为meet时，图片会全部展示；取值为slice时，图片会跟据视窗进行部分填充。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.Image fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Image实例。第一个参数是指定的SVG元素。
static fabric.Image fromObject(Object)：通过指定的Object返回对应的fabric.Image实例。
static void fromURL(String, Function opt, Object opt)：通过指定的URL创建对应的fabric.Image实例。第一个参数为URL；第二个参数为回调函数，可选，当Image创建后被调用，新创建的fabric.Image实例作为回调函数的第一个参数传入；第三个参数，可选，准备附加到Image实例上的选项。
boolean _needsResize()：若返因true则说明fabric.Image需要重绘大小。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
HTMLImageElement getElement()：返回与该fabric.Image相关联的<img>的Html元素。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
Object getOriginalSize()：返回图像的原始尺寸，返回的Object中包含width和height两个成员。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getSrc()：返回该fabric.Image的源地址。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Image initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Image setCrossOrigin()：在该fabric.Image的实例和相关联的<img>对象上设置crossOrigin值。
fabric.Image setElement(HTMLElement, Function opt, Object opt)：将该fabric.Image实例相关联的图像更改为另外指定的新元素。如果旧图像上定义了过滤器，这些过滤器将会应用于新图像。你需要在更改关联对象之后调用canvas.renderAll()和object.setCoords()，用于重新渲染图像和更新控制器区域。第一个参数为新指定的<img>对象；第二个参数为可选的回调函数，当新图像生成并将过滤器应用完成之后被调用；第三个参数可选，为附加到新图像上的选项。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Image setSrc(String, Function opt, Object opt)：为图像设置新的URL。第一个参数为新的URL；第二个参数为可选的回调函数，当新图像加载成功、过滤器完全应用时被调用；第三个参数，可选，将要附加到新图像上的选项。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。










```
## Intersection
```javascript
fabric.Intersection
构造函数：new Intersection()

类函数成员：
void appendPoint(fabric.Point)：为交集添加一个点。
void appendPoints(Array)：为交集添加一个数组，这个数组装载的都是fabric.Point成员。





```
## IText
```javascript
fabric.IText

构造函数：new IText()
说明：IText是在版本1.4引入的，当Canvas处理被监控状态下时，"text:"前缀的事件会被触发。支持的按键组合如下：
  Move cursor:                    left, right, up, down
  Select character:               shift + left, shift + right
  Select text vertically:         shift + up, shift + down
  Move cursor by word:            alt + left, alt + right
  Select words:                   shift + alt + left, shift + alt + right
  Move cursor to line start/end:  cmd + left, cmd + right
  Select till start/end of line:  cmd + shift + left, cmd + shift + right
  Jump to start/end of text:      cmd + up, cmd + down
  Select till start/end of text:  cmd + shift + up, cmd + shift + down
  Delete character:               backspace
  Delete word:                    alt + backspace
  Delete line:                    cmd + backspace
  Forward delete:                 delete
  Copy text:                      ctrl/cmd + c
  Paste text:                     ctrl/cmd + v
  Cut text:                       ctrl/cmd + x
  Select entire text:             ctrl/cmd + a

可触发事件：event:changed、selection:changed、editing:entered、editing:exited

父类：fabric.Text

内部包含类：fabric.Observable

类属性成员：
instance(Array)：static成员，装载着所有被创建的fabric.IText实例。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
caching(Boolean)：指明内部的文字宽度是否被缓存。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
cursorColor(String)：没有被文字样式覆盖时的光标默认颜色，默认值为"#333"。
curosrDelay(Number)：光标闪烁之间的延时，以毫秒为单位，默认值为1000。
cursorDuration(Number)：光标渐显进入的时长，以毫秒为单为，默认值为600。
cursorWidth(Number)：光标的宽度，以像素为单位，默认值为2。
editable(boolean)：指示该Text是否能被编辑，默认值为true。
editingBorderColor(String)：处于编辑状态时Text的边框颜色，默认值为" rgba(102,153,255,0.25)"。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
fontFamily(String)：字体名称，默认值为" Times New Roman"。
fontSize(Number)：字体大小，以像素为单位，默认值为40。
fontStyle(String)：字体的样式，可选值为："","normal","italic","oblique"。
fontWeight(String | Number)：字体的粗细，可设置的值示例："normal","bold",400,600,800。默认为"normal"。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
isEditing(boolean)：指明Text是否处理编辑模式，默认值为false。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lineHeight(Number)：行高，默认为1.3。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
path(String | null)：当使用Cufon时，设置字体文件的URL。默认为null。
边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectionColor(String)：被选中的文字的颜色，默认值为" rgba(17,119,255,0.3)"。
selectionEnd(Number)：选中的文本末端的位置，默认值为0。
selectionStart(Number)：选中的文本的起始位置（或者是当没有选中任何文本时，光标的当前位置），默认值为0。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
styles(Object)：该Object包含着文字的样式（顶层属性“行数”以及二级属性“每行字数”），默认值为null。
textAlign(String)：文字的对齐方式，可选值为："left","center","right"。
textBackgroundColor(String)：文字每一行的背景色。
textDecoration(String)：文字修饰，可选值有："","underline","overline","line-through"。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
useNative(Boolean)：指明Canvas是否使用本地文本函数对文字进行渲染（如果false，则使用Cufon）。默认为true。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.IText fromObject(Object)：通过指定的Object返回对应的fabric.IText实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
fabric.Text _set(String, Any)：给指定的属性设置指定的值。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void abortCursorAnimation()：中止光标动画，并清除所有的定时器。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
void copy(Event)：复制选中的文本。
void cut(Event)：剪切文本。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.IText enterEditing()：进入编辑状态。
fabric.IText exitEditing()：退出编辑状态。
Number findLineBoundaryLeft(Number)：寻找参数指定的当前行的起始位置，作为新选中块的起始索引。
Number findLineBoundaryRight(Number)：寻找参数指定的当前行的结束位置，作为新选中块的结束索引。
void forwardDelete()：向前删除。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Object get2DCursorLocation(Number opt)：返回二维表示的光标（或选中起始）位置。返回值包含lineIndex和charIndex两项。参数是一个可选的索引，如果没有传值，则使用当前选中的位置。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getCurrentCharColor(Number, Number)：返回指定位置的color(fill)值。第一个参数为lineIndex，第二个参数为charIndex。
Number getCurrentCharFontSize(Number, Number)：返回指定位置的fontSize值。第一个参数为lineIndex，第二个参数为charIndex。
Object getCurrentCharStyle(Number, Number)：返回指定位置的文字的完整样式。第一个参数为lineIndex，第二个参数为charIndex。返回值Object中包含如下成员：fontSize、fill、textBackgroundColor、textDecoration、fontFamily、fontWeight、fontStyle、stroke、strokeWidth。
Number getDownCursorOffset(Event, boolean)：获取选中块的起始偏移量。第一个参数为事件对象，第二个参数指明是否从右边开始选中。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
String getFontFamily()：获取Object的字体名称。
String getFontSize()：获取Object的字体大小。
String getFontStyle()：获取Object的字体样式。
String | Number getFontWeight()：获取Object字体粗细。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Number getLineHeight()：获取Object的文字行间距。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getNumNewLinesInSelectText()：返回选中文本中新行的数量。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
String getSelectedText()：选回选中文本的内容。
Number getSelectionStartFromPointer(Event)：返回对象被点击所在的文字的索引。
Object getSelectionStyles(Number opt, Number opt)：返回当前选中块/光标所在处（当光标位于起始位置）的样式。第一个参数为起始索引，第二个参数为结束索引，均为可选参数。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
String getText()：获取Object包含的文本。
String getTextAlign()：获取Object文本的对齐方式。
String getTextBackgroundColor()：获取Object的textBackgroundColor属性值。
String getTextDecoration()：获取Object文本修饰值。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
Number getUpCursorOffset(Event, Boolean)：（译者注：该函数没有任何注解，但以getDownCursorOffset猜测，很可能是获取选中块的终止偏移量）。第一个参数为事件对象，第二个参数指明是否从右边开始选中。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
void initAddedHandler()：初始化"added"的事件句柄。
void initBehavior()：初始化IText所有的交互行为。
void initClicks()：初始化双击和三击的事件句柄。
void initCursorSelectionHandler()：初始化与光标或文本选中相关的事件处理句柄。
void initDelayedCursor()：初始化延迟光标。
void initHiddenTextarea()：初始化隐藏文本域（需要在IOS中弹出键盘）。
fabric.IText initialize(String, Object)：构造函数，第一个参数为需要显示的文本，第二参数是要初始化的属性值。
void initMousedownHandler()：初始化鼠标向下按的事件句柄。
void initMouseupHandler()：初始化鼠标弹起事件句柄。
void initSelectedHandler()：初始化选中文本事件句柄。
void insertChars(String)：在光标处插入一个字符，如果有选中块则替换掉选中的内容。
void insertCharStyleObject(Number, Number , Object opt)：为给定的行号/字号指定的文字添加样式对象。第一个参数为行索引；第二个参数为字索引；第三个参数可选，即为样式对象。
void insertNewline()：插入一个新行。
void insertNewlineStyleObject(Number, Number, Boolean)：插入新的要式对象。第一个参数为行索引；第二个参数为字索引；第三个参数为true时则标明为该行末尾。
void insertStyleObjects(String, Boolean, Array opt)：插入一个或多个样式对象。第一个参数为插入样式的文字；第二个参数为true时标识该行末尾；第三个参数可选，为想要插入的一个或多个样式数组。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isEmptyStyles()：如果没有样式应用则返回true。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
void moveCursorDown(Event)：使光标向下移动。
void moveCursorDownWithoutShift(Number)：使光标向下移动，但不保持选中状态。
void moveCursorDownWithShift(Number)：使光标向下移动，并且保持选中状态。
void moveCursorLeft(Event)：使光标向左移动。
void moveCursorLeftWithoutShift(Event)：使光标向左移动，但不保持选中状态。
void moveCursorLeftWithShift(Event)：使光标向左移动，并且保持选中状态。
void moveCursorRight(Event)：使光标向右移动。
void moveCursorRightWithoutShift(Event)：使光标向右移动，但不保持选中状态。
void moveCursorRightWithShift(Event)：使光标向右移动，并且保持选中状态。
void moveCursorUp(Event)：使光标向上移动。
void moveCursorUpWithoutShift(Number)：使光标向上移动，但不保持选中状态。
void moveCursorUpWithShift(Number)：使光标向上移动，并且保持选中状态。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
void onKeyDown(Event)：处理按键Down事件。
void onKeyPress(Event)：处理按键Press事件。
void paste(Event)：粘贴文本。
fabric.Object remove()：将Object从Canvas上移除。
void removeChars(Event)：移除光标所在处的文字。
void removeStyleObject(Boolean, Number opt)：移除样式对象。第一个参数为true时，则说明为该行行首；第二个参数可选，如果无指定则以当前选中块的起始位置为准。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
void renderCursor(Object)：渲染光标。参数即为指定演染的边界，从源码中可得知该Object有left、top、leftOffset、topOffset成员。
void renderCursorOrSelection()：渲染光标或选中的文本块，取决于哪个当前存在。
void renderSelection(Array, Object)：渲染选中的文本块。第一个参数为字符数组；第二个参数为渲染的边界，该Object有left、top、leftOffset、topOffset成员。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
Number searchWordBoundary(Number, Number)：检索对应于一个词的开始或结束的位置。第一个参数为指定字的索引；第二个参数可选值为-1或1。
void selectAll()：选中所有文本。
void selectLine(Number)：基于给定的索引，选中该行。参数为给定的文字索引。
void selectWord(Number)：基于给定的索引，选中该词。参数为给定的文字索引。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
void setCursorByClick(Event)：根据传递的鼠标位置（x/y）来重新设置光标的位置。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Text setFontFamily(String)：设置字体。
fabric.Text setFontSize(Number)：设置字号，以像素为单位。
fabric.Text setFontStyle(String)：设置文字样式。
fabric.Text setFontWeight(Number | String)：设置文字粗细。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Text setLineHeight(Number)：设置行高。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
void setSelectionEnd(Number)：设置选中文本块的结束位置（即为选中块的右边界）。参数为指定的结束位置。
void setSelectionStart(Number)：设置选中文本块的起始位置（即为块中块的左边界）。参数为指定的起始位置。
fabric.IText setSelectionStyles(Object opt)：设置当前选中文本块的样式。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Text setText(String)：设置文字。
fabric.Text setTextAlign(String)：设置文字对齐方式。
fabric.Text setTextBackground(String)：设置文字背景色。
fabric.Text setTextDecoration(String)：设置文字修饰。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
void shiftLineStyles(Number, Number)：向上或向下转换行样式。第一个参数为行索引；第二个参数可选值为-1或1。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
void swapSelectionPoints()：私有函数，无任何说明。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。











```
## Line
```javascript
fabric.Line
构造函数：new Line()

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
x1(Number)：x值或第一边缘线，默认为0。
x2(Number)：x值或第二边缘线，默认为0。
y1(Number)：y值或第一边缘线，默认为0。
y2(Number)：y值或第二边缘线。默认为0。

类函数成员：
static fabric.Line fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Line实例。第一个参数是指定的SVG元素。
static fabric.Line fromObject(Object)：通过指定的Object返回对应的fabric.Line实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Line initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。；
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。










```
## Object
```javascript
fabric.Object
构造函数：new Object() 这是所有2D图形类的根类。

可触发的事件：event.added、event.removed、event.selected、event.modified、event.rotated、event.scaling、event.moving、event.mousedown、event.mouseup

类属性成员：
__uid(Number)：static成员，当创建SVG元素时，在内部使用的唯一ID值。
NUM_FRACTION_DIGITS(Number)：static成员，是一个常量，定义了序列化Object时使用的分数。你可以使用它增加或减少left、top、scaleX、scaleY（等值）的精度。
rotate：static成员，fabric.prototype.Object.setAngle的别名。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度。默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左部位置，即x坐标，默认值为0。默认情况下，它是以Object中点进行计算。你可以通过设置originX={left/center/right}进行改变。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的Y坐标，默认值为0。需要注意的是，默认情况下是相对于Object的中部。可以通过orginY(top|center|bottom)属性进行设置。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。；
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。

```
##Observable
```javascript
fabric.Observable 命名空间

类函数成员：
static Self off(String | Object, Function)：停止特定的事件侦听。调用该函数时如果不传参数，则移除所有事件侦听。参数一为事件名称，如"after:render"，或键/值对，如{'after:render': handler, 'selection:cleared': handler}；参数二为将被移除的侦听器函数。
static Self on(String | Object, Function)：侦听指定的事件。参数一为事件名称，如"after:render"，或键/值对，如{'after:render': handler, 'selection:cleared': handler}；参数二为当指定的事件发生时，接受通知的侦听函数。
static Self trigger(String, Object opt)：用指定的可选选项触发指定的事件。参数一为将要触发的事件名；参数二可选，为传给侦听函数的参烽。



```

## Path
```javascript
fabric.Path
构造函数：new Path()

父类：fabric.Object

类属性成员：
async(boolean)：static成员，指明该类型的实例都是异步操作，默认值为true。
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
minX(Number)：所有点当中X坐标的最小值，对于偏移的点是必需值，默认为0。
minY(Number)：所有点当中Y坐标的最小值，对于偏移的点是必需值，默认为0。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
path(Array)：路径点的数组，默认为null。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.Path fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Path实例。第一个参数是指定的SVG元素。
static fabric.Path fromObject(Object)：通过指定的Object返回对应的fabric.Path实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
abric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Path initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。













```
## PathGroup
```javascript
fabric.PathGroup
构造函数：new PathGroup()

父类：fabric.Path

类属性成员：
async(boolean)：static成员，指明该类型的实例都是异步操作，默认值为true。
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
minX(Number)：所有点当中X坐标的最小值，对于偏移的点是必需值，默认为0。
minY(Number)：所有点当中Y坐标的最小值，对于偏移的点是必需值，默认为0。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
path(Array)：路径点的数组，默认为null。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.PathGroup fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.PathGroup实例。第一个参数是指定的SVG元素。
static fabric.PathGroup fromObject(Object)：通过指定的Object返回对应的fabric.PathGroup实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
fabric.PathGroup _set(String, Any)：为指定的属性设置指定的值。第一个参数为属性名；第二个参数为属性值。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
abric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
abric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Array getObjects()：返回该PathGroup中所有Path对象。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.PathGroup initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isSameColor()：当Group中的所有Path对象的颜色全部相同时，返回true。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。










```
## Pattern
```javascript
fabric.Pattern
构造函数：new Pattern()

类属性成员：
offsetX(Number)：Pattern在Object上相对于左上角的水平偏移量。
offsetY(Number)：Pattern在Object上相对于左上角的垂直偏移量。
repeat(string)：默认"repeat"，指定Pattern的重复方式，可选值有"repeat"、"repeat-x"、"repeat-y"、"no-repeat"。

类函数成员：
fabric.Pattern initialize(Object opt)：构造函数。
CanvasPattern toLive(CanvasRenderingContext2D)：返回CanvasPattern实例。
Object toObject()：返回以Object形式表示的Pattern。
string toSVG(fabric.Object)：返回以SVG形式表示的Pattern。

译者注：这篇文档写得很粗糙啊，毕竟fabric的作者只是一个人，我们要求不能太高了。



```
## PatternBrush
```javascript
fabric.PatternBrush
构函函数：new PatternBrush()

父类：fabric.BaseBrush

类成员函数：
color(String)：画刷的颜色，默认值为"rgb(0,0,0)"。
shadow(fabric.Shadow)：代表该形状的Shadow实例，默认值为null。（编者注：向后兼容提示，在版本1.2.12之后该属性代替了shadowColor、shadowOffsetX、shadowOffsetY、shadowBlur属性。）
strokeLineCap(String)：画刷线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"round"。
strokeLineJoin(String)：画刷线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"round"。
width(Number)：画刷的宽度，默认值为1。

类函数成员：
void _setBrushStyles()：设置画刷样式。
fabric.Pat createPath()：创建路径实例。（译者注：通过源码可知该函数需要传入一个pathData的String参数，不清楚为啥文档没写。）
fabric.Pattern getPattern()：创建样式属性实例。
fabric.Object setShadow(Object | String opt)：为指定的Object设置阴影效果。参数可选，为阴影效果，格式举例" 2px 2px 10px rgba(0,0,0,0.2)"。










```
## PencilBrush
```javascript

fabric.PencilBrush
构造函数：new PencilBrush()

父类：fabric.BaseBrush

类属性成员：
color(String)：画刷的颜色，默认值为"rgb(0,0,0)"。
shadow(fabric.Shadow)：代表该形状的Shadow实例，默认值为null。（编者注：向后兼容提示，在版本1.2.12之后该属性代替了shadowColor、shadowOffsetX、shadowOffsetY、shadowBlur属性。）
strokeLineCap(String)：画刷线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"round"。
strokeLineJoin(String)：画刷线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"round"。
width(Number)：画刷的宽度，默认值为1。

类函数成员：
void _finalizeAndAddPath()：在顶层Canvas画出路径之后，鼠标弹起之时，该函数使用捕获的（所有）点创建一个新的fabric.Path路径实例，并将其添加到Canvas中。
String convertPointsToSVGPath(Array, Number, Number)：将传入的点数组转为SVG路径。参数一为Points实例组成的数组；参数二、参数三文档中无说明，参数名分别是minX和minY。（译者注：源码中该函数也没有参数二和参数三，不知道为什么文档中有这两个参数的存在。）
fabric.Path createPath(String)：创建一个fabric.Path实例，并将其添加到Canvas中。参数为路径的数据。（译者注：不太清楚为什么参数是String，而且数据格式也没说明，据源码可知该参数是用于new fabric.Path()的第一个参数。）
fabric.PencilBrush initialize(fabric.Canvas)：构造函数。
void onMouseDown(Object)：鼠标按下时的事件函数。
void onMouseMove(Object)：鼠标移动时的事件函数。
void onMouseUp(Object)：鼠标弹起时的事件函数。
fabric.Object setShadow(Object | String opt)：为指定的Object设置阴影效果。参数可选，为阴影效果，格式举例" 2px 2px 10px rgba(0,0,0,0.2)"。







```

## Point
```javascript
fabric.Point

构造函数：new Point(Number, Number)：参数一为X坐标；参数二为Y坐标。

类函数成员：
fabric.Point add(fabric.Point)：给该Point对象加上一个指定点（的坐标），并返回新实例化的那个点。（译者注：从源码中得知，add函数内直接new一个Point，然后返回）
fabric.Point addEquals(fabric.Point)：为该Point对象加上一个指定点（的坐标）。（译者注：通过源码得知，该函数中直接将当前的X/Y坐标替换成新点的X/Y坐标）。
fabric.Point distanceFrom(fabric.Point)：返回该点与给定的点的距离。
fabric.Point divide(Number)：将该点坐标除以给定的因子，并返回一个新的点。
fabric.Point divideEquals(Number)：将该点坐标除以给定的因子。
boolean eq(fabric.Point)：如果该点与给定的点相同，则返回true。
boolean gt(fabric.Point)：如果该点大于给定的点，则返回true。
boolean gte(fabric.Point)：如果该点大于等于给定的点，则返回true。
fabric.Point lerp(fabric.Point, Number)：返回一个新点，这个新点是旧点与指定点插值计算出的结果点。（译者注：不太懂这个意思，源码是这样的return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);）
boolean lt(fabric.Point)：如果该点小于给定的点，则返回true。
boolean lte(fabric.Point)：如果该点小于等于给定的点，则返回true。
fabric.Point max(fabric.Point)：返回一个新点，新点的X/Y坐标由新旧两点X/Y坐标最大值组成。
fabric.Point midPointFrom(fabric.Point)：返回该点与指定点的中点。
fabric.Point min(fabric.Point)：返回一个新点，新点的X/Y坐标由新旧两点X/Y坐标最小值组成。
fabric.Point multiply(Number)：将该点坐标乘以给定的因子，并返回一个新点。
fabric.Point multiplyEquals(Number)：将该点坐标乘以给定的因子。
fabric.Point scalarAdd(Number)：将该点坐标加上给定的因子，并返回一个新点。
fabric.Point scalarAddEquals(Number)：将该点坐标加上给定的因子。
fabric.Point scalarSubtract(Number)：将该点坐标减去给定的因子，并返回一个新点。
fabric.Point scalarSubtractEquals(Number)：将该点坐标减去给定的因子。
void setPointFrom(fabric.Point)：将指定点的坐标赋值给该点。
void setXY(Number, Number)：为该点设置X/Y坐标。参数一为X坐标；参数二为Ｙ坐标。
fabric.Point subtract(fabric.Point)：给该Point对象减去一个指定点（的坐标），并返回新实例化的那个点。
fabric.Point subtractEquals(fabric.Point)：为该Point对象减去一指定点（的坐标）。
void swap(fabric.Point)：将该点与指定点的X/Y坐标互换。
String toString()：返回一个代表该Point实例的字符串。








```
## Polygon
```javascript
fabric.Polygon
构造函数：new Polygon()

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
minX(Number)：所有点的X的最小值，对于偏移的点是必要的值，默认值为0。
minY(Number)：所有点的Y的最小值，对于偏移的点是必要的值，默认值为0。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
points(Array)：一个装载着point的数组，默认值为null。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.Polygon fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Polygon实例。第一个参数是指定的SVG元素。
static fabric.Polygon fromObject(Object)：通过指定的Object返回对应的fabric.Polygon实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabirc.Polygon initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。













```

## Polyline
```javascript
fabric.Polyline
构造函数：new Polyline()

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度，默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
minX(Number)：所有点的X的最小值，对于偏移的点是必要的值，默认值为0。
minY(Number)：所有点的Y的最小值，对于偏移的点是必要的值，默认值为0。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
points(Array)：一个装载着point的数组，默认值为null。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
static fabric.Polyline fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Polyline实例。第一个参数是指定的SVG元素。
static fabric.Polyline fromObject(Object)：通过指定的Object返回对应的fabric.Polyline实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Polyline initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。


```

## Rect
```javascript
fabric.Rect
构造函数：new Rect()

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度，默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
rx(Number)：水平半径，默认值为0。
ry(Number)：垂直半径，默认值为0。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
static fabric.Rect fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Rect实例。第一个参数是指定的SVG元素。
static fabric.Rect fromObject(Object)：通过指定的Object返回对应的fabric.Rect实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Rect initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
```
## Shadow
```javascript
fabric.Shadow
构造函数：new Shadow()

类属性成员：
reOffsetsAndBlur：静态属性，正则表达式匹配的水平偏移量、垂直偏移量以及模糊级别，如"2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px"。
affectStroke(boolean)：默认false，指定阴影是否会影响四周的操纵杠。
blur(Number)：阴影的模糊级别。
color(string)：默认"rgb(0,0,0)"，阴影的颜色。
includeDefaultValues(boolean)：默认true，指定toObject输出的时候是否包括默认值。
offsetX(Number)：默认0，阴影的水平偏移量。
offsetY(Number)：默认0，阴影的垂直偏移量。

类函数成员：
fabric.Shadow initialize(Object | string opt)：构造函数，Object类型的参数包含着color、blur、offsetX、offsetY属性，string类型的参数可参照"rgba(0,0,0,0.2) 2px 2px 10px, "2px 2px 10px rgba(0,0,0,0.2)"
Object toObject()：返回以Object表示的阴影。
string toString()：返回以string表示的阴影，这个string是以css3 text-shadow方式声明的。
string toSVG(fabric.Object)：返回以SVG string表示的阴影。




```
## SprayBrush
 ```javascript
fabric.SprayBrush
构造函数：new SprayBrush()

类属性成员：
density(Number)：喷雾的密度（每一喷块的点数），默认值为20。
dotWidth(Number)：喷点的宽度，默认值为1。
dotWidthVariance(Number)：喷点的宽度差异，默认值为1。
optimizeOverlapping(Boolean)：指示这些覆盖喷点是否会被移除（在某些特殊情况下要求喷上去的点需要被移除），默认值为true。
randomOpacity(Boolean)：指示每一个喷点的透明度是否随机，默认值为false。
width(Number)：喷头的宽度，默认值为10。

类函数成员：
void addSprayChunk(Object)：（译者注：该函数功能文档中没有任何说明，根据源码可知，该函数在sprayChunks数组中添加一个喷块，参数为一个包含有x、y成员的对象，通常情况下可以认为是fabric.Point的实例。）
fabric.SprayBrush initialize(fabric.Canvas)：构造函数。
void onMouseDown(Object)：鼠标按下时的事件函数。
void onMouseMove(Object)：鼠标移动时的事件函数。
void onMouseUp(Object)：鼠标弹起时的事件函数。
void render()：强制对重渲染画刷。
```
## StaticCanvas
```javascript
fabric.StaticCanvas
构造函数：new StaticCanvas()

可触发的事件：before:render、after:render、canvas:cleared、object:added、object:removed

类中包含着：fabric.Collection、fabric.Observable

类属性成员：
EMPTY_JSON(string)：这是一个静态属性，不可更改。默认值为："{\"objects\": [], \"background\": \"white\"}"
allowTouchScrolling(boolean)：默认false，指明使用触摸屏或者在canvas上拖动对象时，屏幕是否跟着滚动
backgroundColor(string|fabric.Pattern)：Canvas实例的背景色，需要通过fabric.StaticCanvas的setBackgroundColor()函数来设置
backgroundImage(fabric.Image)：默认null，Canvas实例的背景图片。需要通过fabric.StaticCanvas的setBackgroundImage()函数来设置。如果要设置图片的透明度和长宽，需要通过fabric.Image的opacity属性和width、height属性来设置。
clipTo(function)：这是一个funcion类型的属性成员，一般用于回调。作用是将整个Canvas进行裁剪并传递给第一个参数，以下是文档中附带的例子：
canvas.clipTo = function(ctx) {
  ctx.arc(0, 0, 60, 0, Math.PI*2, true);
};
// or passing to fabric.Element options
new fabric.Element('myCanvas', {
  clipTo: function(ctx) {
    ctx.arc(0, 0, 60, 0, Math.PI*2, true);
  }
});
controlsAboveOverlay(boolean)：默认false，指明对象的控制器（borders/controls）是否渲染在前景图片之上
FX_DURATION(number)：默认500，单位毫秒（ms）。动画的持续时间，给fx*的方法使用。
imageSmoothingEnabled(boolean)：默认true。指明Canvas是否使用图片的平滑特性。
includeDefaultValues(boolean)：默认true，指明Canvas序列化时是否包括默认值。
overlayColor(string|fabric.Pattern)：Canvas的前景色，可以通过fabric.StaticCanvas的setOverlayColor()函数进行设置。
overlayImage(fabric.Image)：默认null，Canvas的前景图。可以通过fabric.StaticCanvas的setOverlayImage()函数进行设置。如果要设置位置，可通过fabric.Image的left和top属性进行设置。
preserveObjectStacking(boolean)：默认false。指明对象被选定的时候，是否留在当前的栈位置上。如果设置为false，对象会被移至最顶端，并被渲染为选择组的一部分。
renderOnAddRemove(boolean)：默认为true。指明当调用fabric.Collection.add、fabric.Collection.insertAt、fabric.Collection.remove函数时是否重新渲染Canvas。当大量的插入或移除对象时，将这个属性设置为false，可以获得高的效率。
stateful(boolean)：默认true。指明对象的状态是否会被保存。
svgViewportTransformation(boolean)：默认true。当设置为true时，getSvgTransform()函数将会StaticCanvas.viewprotTransform赋值给SVG transform；当设置为true时，被拉伸的Canvas将会把拉伸效果应用到SVG的输出。
viewportTransform(Array)：应用于视口的拉伸（译者注：这个属性完全不知道在干啥）

类函数成员：
boolean | null supports(string)：这是一个类static函数，用于检测Canvas是否支持某些函数。（可以是检查HTMLCanvasElement本身的函数，或者检测其渲杂的context）。参数则是需要检测的函数名，可以是以下任一取值："getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"。返回true表示支持此函数，至少说明该函数存在。返回null表示canvas元素或与其相关的context无法被初始化。
fabric.Canvas absolutePan(fabric.Point)：将画布视图的原点移至point指定的点。
fabric.Canvas beingForward(fabric.Object,boolean)：将指定对象在栈中称前一位。第二个参数如果设置为true，将会把指定对象在Canvas上移至到覆盖它的对象之上。
fabric.Canvas bringToFront(fabric.Object)：将指定的对象移至栈顶。
fabric.Canvas calcOffset()：计算Canvas相对于document的偏移量。这个函数被附加给Window的resize事件的处理函数。
fabric.Canvas centerObject(fabric.Object)：在水平和垂直方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。
fabric.Canvas centerObjectH(fabric.Object)：在水平方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。
fabric.Canvas centerObjectV(fabric.Object)：在垂直方向上居中指定的对象。在居中之后，你可能属要调用对象上的setCoords()函数来更新controls的区域。
fabric.Canvas clear()：清空Canvas上的所有实例，包括背景、对象等。
fabric.Canvas clearContext(CanvasRenderingContext2D)：清除指定的Canvas的元素。
clone(callback opt, Array opt)：复制Canvas的实例。callback是一个回调函数，它的第一个参数用于接收被复制的对象实例；第二个参数放置着包含在被复制的Canvas以及它的子元素中的属性。
cloneWithoutData(callback opt)：复制Canvas的实例，但不复制其包含的数据。这个函数是复制必要的维度、裁剪属性等等，但它们的数据会被置空（你可以自己计算出这些属性的值）。callback是一个回调函数，它的第一个参数用于接收被复制的对象的实例。
fabric.Canvas dispose()：清楚Canvas上的所有元素，并移除所有的侦听事件。
fabric.Canvas fxCenterObjectH(fabric.Object, callback object opt)：让指定的Object水平居中，带有动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。
fabric.Canvas fxCenterObjectV(fabric.Object, callback object opt)：让指定的Object垂直居中，带有动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。
fabric.Canvas fxRemove(fabirc.Object, callback object opt)：和fabric.Canvas.remove()函数效果一样，只不过带了动画效果。第二个参数是一个回调的Object，可以有两个属性，onComplete和onChange两个属性（都是Function）。
fabric.Canvas fxStraightenObject(fabric.Object)：和fabric.Canvas.prototype.straightenObject()效果一样，只不过带了动画效果。
fabric.Group getActiveGroup()：获取当前处于活动状态的Group。
fabric.Object getActiveObject()：获取当前处于活动状态的Object。
Object getCenter()：返回Canvas的中点坐标。返回值中包含了left和top两个属性。
CanvasRenderingContext2D getContext()：返回Canvas的Context。
HTMLCanvasElement getElement()：返回与Canvas相关联的<canvas>HTML元素。
Number getHeight()：获取Canvas的高度，以像素为单位。
Number getWidth()：获取Canvas的宽度，以像素为单位。
Number getZoom()：返回Canvas的缩放级别。
Object initialize(HTMLElement | String, Object opt)：构造函数。第一个参数指定需要实例代的HTML元素；第二个参数则指定了需要预先设置的一些属性（可选）。
fabric.Canvas loadFromDatalessJSON(String | Object, Function, Function opt)：从无数据的json中还原出Canvas。这个无数据的json必须符合fabric.Canvas.toDatalessJSON()。这个函数有三个参数，第一个参数是需要还原的json数据；第二个参数是一个回调函数，这个回调函数在解析json，相关的Object（如fabric.Image）初始化时被调用；第三个参数也是一个回调函数，可选，在每一个元素创建之后被调用。编者注：这个函数在1.2.2版本后已被废弃。
fabric.Canvas loadFromJSON(String | Object, Function, Function opt)：从指定的json数据中还原出Canvas。这个json数据必须符合fabric.Canvas.toJSON()。这个函数有三个参数，第一个参数是需要还原的json数据；第二个参数是一个回调函数，这个回调函数在解析json，相关的Object（如fabric.Image）初始化时被调用；第三个参数也是一个回调函数，可选，在每一个元素创建之后被调用。文档中的示例：
⑴
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
⑵
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
});
fabric.Canvas moveTo(fabric.Object, Number)：将指定的Object移动到栈的指定位置。
onBeforeScaleRotate()：这是一个回调函数，在Object缩放或旋转时被调用。
fabric.Canvas relativePan(fabric.Point)：整个视口，根据给定的点形成向量进行移动。译者注：没看懂这里整个视口是怎么移动的。
fabric.Canvas renderAll(boolean)：将上层的Canvas以及从属的Canvas全部进行渲染。如果需要所有的顶层Images重新进行渲染，则将参数设置为true。
fabric.Canvas renderTop()：只渲染顶层的Canvas，同时也会渲染选中的Group。
fabric.Canvas sendBackwards(fabric.Object, boolean opt)：将指定的Object在栈中向下移一位。如果第二个参数设置为true，则会在Canvas上将指定的Object放置在下一个与之有交集的Object的后面。
fabric.Canvas sendToBack(fabric.Object)：将指定的Object置于栈中的最底部。
fabric.Canvas setBackgroundColor(string | fabric.Pattern, Function)：设置Canvas的背景色。第二个参数是个回调函数，在背景色设置之后被调用。文档中示例：
⑴
canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
⑵
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
⑶
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
fabric.Canvas setBackgroundImage(fabric.Image | string, Function, Object opt)：设置Canvas的背景图片。第二个参数是回调函数，当图片被成功加载被设置成背景后被调用；第三个是可选参数，将设置给背景图的一些属性。文档中示例：
⑴
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
⑵
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
⑶
fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});
⑷
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
⑸
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});
fabric.Canvas setDimensions(Object, Object opt)：设置Canvas的长宽。第一个参数有两个属性width和height，分别表示要设置的长宽，类型为Number或string；第二个参数有两个属性backstoreOnly和cssOnly，这两个均为boolean类型，当cssOnly为true时，width和height的设置需要带上单位（px/%/em等）。当backstroeOnly为true时，则将设置的长宽以backstore的模式进行设置。（译者注：不太清楚这里的backstore什么意思，去查了字典也没查到这个词）
fabric.Canvas setHeight(Number | string, Object)：设置Canvas实例的高度。第一个参数是要设置的目标高度。第二个参数有两个属性backstoreOnly和cssOnly，这两个均为boolean类型，当cssOnly为true时， height的设置需要带上单位（px/%/em等）。当backstroeOnly为true时，则将设置的长宽以backstore的模式进行设置。（译者注：不太清楚这里的backstore什么意思，去查了字典也没查到这个词）
fabric.Canvas setOverlayColor(string | fabric.Pattern, Function)：设置Canvas的前景色。第一个参数是用来设置的颜色；第二个参数是个回调函数，当前景色设置后被调用。文档中示例：
⑴
canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
⑵
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
⑶
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
fabric.Canvas setOverlayImage(fabric.Image | string, Function, Object opt)：设置Canvas的前景图。第一个参数是要设置的前景图；第二个参数是个回调函娄，在成功加载图片并设置为前景图中被调用；第三个参数是个可选参数，是要设置给前景图的选项。文档中示例：
⑴
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
⑵
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
⑶
fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
⑷
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
⑸
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});
fabric.Canvas setViewportTransform(Array)：设置Canvas的变换。参数则属于context.transform的一种表现形式。
fabric.Canvas setWidth(Number | string, Object)：设置Canvas实例的宽度。第一个参数是要设置的目标宽度。第二个参数有两个属性backstoreOnly和cssOnly，这两个均为boolean类型，当cssOnly为true时，width的设置需要带上单位（px/%/em等）。当backstroeOnly为true时，则将设置的长宽以backstore的模式进行设置。（译者注：不太清楚这里的backstore什么意思，去查了字典也没查到这个词）
fabric.Canvas setZoom(Number)：设置Canvas的缩放程度。当参数小于1时，Canvas则缩小。
fabric.Canvas straightenObject(fabric.Object)：将Object拉直（译者注：不太清楚这里拉直什么意思）。
string toDatalessJSON(Array opt)：返回代表Canvas的无数据JSON。参数是一个数组，指定了需要额外包含在输出中的属性。
Object toDatalessObject(Array opt)：返回代表Canvas的无数据Object。参数是一个数组，指定了需要额外包含在输出中的属性。
string toDataURL(Object opt)：将Canvas转为数据串形式的URL。要注意，当multiplier被使用的时候，裁剪区域会被适当缩放。Object是一个可选值，附带着以下属性：
format  string，可选，默认"png"，指定输出的图像格式，"jpeg"或"png"
quality  Number，可选，默认1，取值范围0到1，只对于"jpeg"格式有效
multiplier  Number，可选，默认1，缩放因子
left  Number，可选，裁剪的左偏移量
top  Number，可选，裁剪的顶部偏移量
width  Number，可选，裁剪宽度
height  Number，可选，裁剪高度
文档中示例：
⑴
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
⑵
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
⑶
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
string toDataURLWithMultiplier(string, Number, Number)：将Canavs转成数据串格式的URL，通过缩放因子可以对图片进行缩放。第一个参数是输入的格式，jpeg或png；第二个参数是缩放因子；第三个参数则是输出的质量，取值为0到1之间。本函数已废弃。
string toJSON(Array)：将Canvas序列化为JSON数据。参数是一个数组，包含你想要额外添加到输出数据中的属性。文档中示例：
⑴
var json = canvas.toJSON();
⑵
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling']);
⑶
canvas.includeDefaultValues = false;
var json = canvas.toJSON();
Object toObject(Array)：将Canvas序列化为Object数据。参数是一个数组，包含你想要额外添加到输出数据中的属性。
string toString()：返回一个代表Canvas实例的字符串。
string toSVG(Object opt, Function opt)：返回一个代表Canvas的SVG数据。参数比较复杂，如下表所示：
参数	可选	描述
参数一Object类型	是	SVG输出的可选属性
属性说明
属性名	类型	可选	默认值	描述
suppressPreamble	boolean	是	false	如果为true，则xml标记不会被包含
viewBox	Object	是		SVG视图盒模型的属性
属性说明
属性名	类型	可选	描述
x	Number	是	盒模型的x坐标
y	Number	是	盒模型的y坐标
width	Number	是	盒模型的宽度
height	Number	是	盒模型的高度

encoding	string	是	UTF-8	SVG输出的编码

参数二回调函数Function类型	是	这是一个回调函数，在每个Object转换成SVG描述符时被调用
文档中示例：
⑴
var svg = canvas.toSVG();
⑵
var svg = canvas.toSVG({suppressPreamble: true});
⑶
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
⑷
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
⑸
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
fabric.Canvas zoomToPoint(fabric.Point, Number)：设置Canvas以指定的点为中心进行缩放。第一个参数即为指定的中心点；第二个参数为缩放级别，小于1即为缩小。



```
## Text
```javascript
fabric.Text
构造函数：new Text();

父类：fabric.Object

类属性成员：
ATTRIBUTE_NAMES：static成员，转换SVG元素时产生的属性名称列表（在fabric.Line.fromElement函数中使用）。
DEFAULT_SVG_FONT_SIZE：static成员，默认SVG的字体大小。译者注：源码中默认值是16。
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
fontFamily(String)：字体名称，默认值为" Times New Roman"。
fontSize(Number)：字体大小，以像素为单位，默认值为40。
fontStyle(String)：字体的样式，可选值为："","normal","italic","oblique"。
fontWeight(String | Number)：字体的粗细，可设置的值示例："normal","bold",400,600,800。默认为"normal"。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lineHeight(Number)：行高，默认为1.3。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
path(String | null)：当使用Cufon时，设置字体文件的URL。默认为null。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
textAlign(String)：文字的对齐方式，可选值为："left","center","right"。
textBackgroundColor(String)：文字每一行的背景色。
textDecoration(String)：文字修饰，可选值有："","underline","overline","line-through"。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
useNative(Boolean)：指明Canvas是否使用本地文本函数对文字进行渲染（如果false，则使用Cufon）。默认为true。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。

类函数成员：
static fabric.Text fromElement(SVGElement, Object opt)：通过指定的SVG元素返回fabric.Text实例。第一个参数是指定的SVG元素。
static fabric.Text fromObject(Object)：通过指定的Object返回对应的fabric.Text实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
String getFontFamily()：获取Object的字体名称。
String getFontSize()：获取Object的字体大小。
String getFontStyle()：获取Object的字体样式。
String | Number getFontWeight()：获取Object字体粗细。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Number getLineHeight()：获取Object的文字行间距。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
String getText()：获取Object包含的文本。
String getTextAlign()：获取Object文本的对齐方式。
String getTextBackgroundColor()：获取Object的textBackgroundColor属性值。
String getTextDecoration()：获取Object文本修饰值。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Text initialize(String, Object)：构造函数，第一个参数为需要显示的文本，第二参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Text setFontFamily(String)：设置字体。
fabric.Text setFontSize(Number)：设置字号，以像素为单位。
fabric.Text setFontStyle(String)：设置文字样式。
fabric.Text setFontWeight(Number | String)：设置文字粗细。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Text setLineHeight(Number)：设置行高。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Text setText(String)：设置文字。
fabric.Text setTextAlign(String)：设置文字对齐方式。
fabric.Text setTextBackground(String)：设置文字背景色。
fabric.Text setTextDecoration(String)：设置文字修饰。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
```










## Triangle
```javascript

fabric.Triangle
构造函数：new Triangle()

父类：fabric.Object

类属性成员：
angle(Number)：Object的旋转角度（以度为单位）。
backgroundColor(String)：Object的背景颜色，只有赋值字符串时才起作用。
borderColor(String)：Object为激活状态时，控制器的边框颜色。默认值为：rgba(102,153,255,0.75)。
borderOpacityWhenMoving(Number)：当Object处于激活或移动状态时，控制器边框的透明度。默认值为：0.4。
borderScaleFactor(Number)：Object控制器四边的缩放因子，默认为1。
centeredRotation(boolean)：当属性为true时，通过控制器进行旋转的时候将以Object的中点为原点进行旋转，默认true。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
centeredScaling(boolean)：当属性为true时，将以Object的中点作为缩放的原点，默认false。向下兼容提示：该属性替代了旧版本的centerTransform(boolean)属性。
clipTo(Function)：该属性是一个函数，决定了如何对Object进行裁剪（Context作为函数的和一个参数传入）。要注意Context的原点是Object的中点（而不是左上角的那个点）。
cornerColor(String)：Object控制器（激活的时候）四角的颜色，默认值为：rgba(102,153,255,0.5)。
cornerSize(Number)：Object控制器四角的大小，以像素为单位，默认值为：12。
evented(boolean)：当属性为false时，该Object将不会成为事件的目标，默认true。所有的事件传递都会经过该属性。该属性是在1.3.4版本之后引入的。
fill(String)：Object填充的颜色，默认值为：rgb(0,0,0)。
fillRule(String)：该属性用于填充Object，只能接受值"nonzero"，默认值也是"nonzero"。向下兼容提示：该属性在1.4.2版本之前都是用fabric.Object.globalCompositeOperation函数替代的。
flipX(boolean)：当属性为true时，Object将以水平翻转的样式被渲染。默认为false。
flipY(boolean)：当属性为true时，Object将以垂直翻转的样式被演染。默认为false。
globalCompositeOperation(String)：为Canvas的globalCompositeRule设置的混合规则。默认值为："source-over"。
hasBorders(boolean)：当属性为false时，Object的控制器边框将不会被渲染。默认值为：true。
hasControls(boolean)：当属性为false时，Object的控制器将不会显示，与此同时将无法操作Object。默认值为true。
hasRotatingPoint(boolean)：当属性为false时，Object的控制器旋转点将不会显示和被选中。默认为true。
height(Number)：Object的高度，默认为0。
hoverCursor(String)：当鼠标覆盖在该Object上时使用的鼠标样式。默认为null。
includeDefaultValues(boolean)：当设置为false时，Object序列化过程中将不会包含其默认值。默认为true。
left(Number)：Object的左边位置，即X坐标。注意：在默认情况下，是以Object中点进行计算，你可以设置originx={left|center|right}进行改变。默认值为0。
lockMovementX(boolean)：当设置为true，Object的水平移动将被锁定。默认值为false。
lockMovementY(boolean)：当设置为true，Object的垂直移动将被锁定。默认值为false。
lockRotation(boolean)：当设置为true，Object的旋转将被锁定。默认值为false。
lockScalingFlip(boolean)：当设置为true，Object将通过缩放到负值从而实现被翻转。默认值为false。
lockScalingX(boolean)：当设置为true，Object水平方向将无法被缩放。默认值为false。
lockScalingY(boolean)：当设置为true，Object垂直方向将无法被缩放。默认值为false。
lockUniScaling(boolean)：当设置为true，Object将无法被锁定比例进行缩放。默认值为false。
minScaleLimit(Number)：Object缩放比例最小值，默认值为0.01。
oCoords(Object)：Object包含的控制器的坐标，默认值为null。
opacity(Number)：Object的透明度，默认值为1。
originX(String)：Object平移的水平起始点，可选值有"left"|"right"|"center"默为值为"left"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
originY(String)：Object平移的垂直起始点，可选值有"top"|"bottom"|"center"默为值为"top"。查阅http://jsfiddle.net/1ow02gea/40/获知originX和orginY是如何影响Group中的Object。
padding(Number)：Object与其控制器边框中间的空白间距，以像素为单位，默认为0。
perPixelTargetFind(boolean)：当设置为true时，canvas上的object是基于像素进行检索的，而不是基于边框盒模型。默认为false。
rotatingPointOffset(Number)：Object控制器旋转点的偏移量（当hasRotatingPoint设置为true时才有效），默认值为40。
scaleX(Number)：Object水平方向的缩放因子。默认值为1。
scaleY(Number)：Object垂直方向的缩放因子，默认值为1。
selectable(boolean)：当设置为false时，Object无法被选中编辑（无论是以像素点为基础或以组为基础），但是相应的事件仍然会触发。默认值为true。
shadow(fabric.Shadow)：当前图形的Shadow对象，默认为null。
stateProperties(Array)：属性列表，用于检查Object的状态是否改变（fabric.Object.hasChanged）。目的在于实现历史状态的redo和undo操作。
stroke(String)：当该属性有定义的时候，Object将通过该属性定义的线条以及颜色进行渲染。默认为null。
strokeDashArray(Array)：用于装载Object线条的破折号样式的数组（stroke属性必须已被定义）。
strokeLineCap(String)：Object线条的终端样式，可选值有"butt"|"round"|"square"，默认值为"butt"。
strokeLineJoin(String)：Object线条连接处边角的样式，可选值有"bevil"|"round"|"miter"，默认值为"miter"。
strokeMiterLimit(Number)：Object线条链接处的最大斜角长度（当strokeLineJoin值设置为miter时起作用），默认值为10。
strokeWidth(Number)：用于渲染Object的线条的宽度，默认值为1。
top(Number)：Object的顶部位置。注意：默认情况下是相对于Object的中点，你可以设置originY={top|center|bottom}进行改变。默认值为0。
transformMatrix(Array)：变换矩阵（类似于SVG的变换矩阵）。
transparentCorners(boolean)：当设置为true时，Object的控制器边缘内部将会被渲染为透明，默认值为true。
type(String)：Object的类型，可选值为"rect"|"circel"|"path"等，默认值为"object"。要注意的是，这个属性为只读，不能进行修改。如果你修改这个属性的值，Fabric框架特定部分（比如JSON加载）将会不正常。
visible(boolean)：当设置为false，Object将不会在Canvas上被渲染。默认值为true。
width(Number)：Object的宽度，默认值为0。

类函数成员：
static fabric.Triangle fromObject(Object)：通过指定的Object返回对应的fabric.Triangle实例。
void _renderControls(CanvasRenderingContext2D, boolean opt)：渲染Object的控制器以及边框。第一个参数是渲染的Context；第二个参数若设置为true，则相关的Context则不会被变换。
void _restoreCompositeOperation(CanvasRenderingContext2D)：在Object变更渲染之后，保存之前的保存的画布操作（globalCompositeOperation）。参数则是指定在其上染上的Context。
void _setupCompositeOperation(CanvasRenderingContext2D)：为指定的Object设置一个画布全局操作（globalCompositeOperation）。特定的Object自定义操作可以通过设置globalCompositeOperation属性进行设置。参数则是指定在其上染上的Context。
void adjustPosition(String)：参数可选值为"left"|"center"|"right"。
fabric.Object animate(String | Object, Number | Object)：对指定的属性进行动画变换。第一个参数是用于动画的属性（Object类型可指定多个）；当参数一为String时，参数二为变换的终点值，否则为对象选项。具体可参照：http://fabricjs.com/fabric-intro-part-2/#animation。
fabric.Object bringForward(boolean opt)：将绘制的Object在栈中位置向上移动。当参数设置为true时，将Object置于下一个相交的Object之上。
fabric.Object bringToFront()：将Ojbect移到绘图栈的最顶端。
fabric.Ojbect center()：在Canvas的水平和垂直方向上居中Object。居中操作之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerH()：在Canavs的水平方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object centerV()：在Canvas的垂直方向上居中Object。之后，你需要调用Object的setCoords()函数来更新控制区。
fabric.Object clone(Function, Array)：深度复制Object。第一个参数是回调函数，该回调的第一个参数是复制出来的Object；第二个参数是一个数组，装载着你想要添加到输出的所有属性。
fabric.Object cloneAsImage(Function)：从Object创建出一个新的fabric.Image实例。参数是一个回调函数，该回调的第一个参数是复制出来的fabric.Image实例。
Number complexity()：返回一个实例的复杂度。（译者注：该函数估计会被各子类重载，因为这个函数在Object类中直接返回0）。
boolean containsPoint(fabric.Point)：检查指定的点是否包含在Object中。
fabric.Object drawBorders(CanvasRenderingContext2D)：绘制Object盒模型的四周，要求有以下公共属性：width、height、padding、borderColor。
fabric.Object drawControls(CanvasRenderingContext2D)：绘制Object盒模型的控制器，要求有以下公共属性：width、height、conerSize、padding。
fabric.Object fxstraighten(Object)：和fabric.Object.prototype.straighten()的作用一样，只不过带了动画效果。参数是一个Object，里面有两个元素onComplete和onChange，分别是两个回调函数。onComplete在动画结束之后调用，onChange在动画的每一阶段分别调用。
Any get(String)：最基本的getter函数，参数为想要获取的属性名。
Number getAngle()：获得Object的旋转角度，以“度”为单位。
Object getBoundingRect()：返回Object的边框矩形坐标。返回值是一个Object类型，其中包括了left、top、width、height四个元素。
Number getBoundingRectHeight()：返回Object的边框矩形的高度。（版本1.0.4开始已废弃）
Number getBoundingRectWidth()：返回Object的边框矩形的宽度。（版本1.0.4开始已废弃）
fabric.Point getCenterPoint()：返回Object的真实中点坐标。
Function getClipTo()：获得Object的裁剪函数。
String getFill()：获得Object的填充颜色。
boolean getFlipX()：获得Object的flipX属性。
boolean getFlipY()：获得Object的flipY属性。
Number getHeight()：获得Object的高度。
Number getLeft()：获得Object左边的位置，即X坐标，以像素为单位。
Object getLocalPointer(Event, Object opt)：获取一个点在Object上的本地坐标。注意：第二个参数可选。这个函数默认情况下是获取当前鼠标所在点的本地坐标，如果指定了第二个参数，则该函数将获取第二个参数指定的点的本地坐标。返回值和第二个函数都是Object，包函x、y两个成员。
Number getOpacity()：获取Object的透明度，在0到1之间的数字。
String getOriginX()：获取Object的原点X值。
String getOriginY()：获取Object的原点Y值。
fabric.Point getPointByOrigin(String, String)：如果Object有不同的原点，该函数可获得Object的原点坐标。第一个参数代表originX，可选值为："left"、"center"、"right"；第二个参数代表originY，可选值为："top"、"center"、"bottom"。
Number getScaleX()：获取Object的scaleX属性值。
Number getScaleY()：获取Object的scaleY属性值。
Object getShadow()：获取Object的阴影，返回阴影实例。（译者注：不清楚为啥文档写的是返回Object而不是fabric.Shadow）。
String getStroke()：获取Object的stroke属性值。
Number getStrokeWidth()：获取Object的笔划宽度。
String getSvgStyles()：获取svg输出的样式字符串。
String getSvgTransform()：获取svg输出的变换字符串。
String getSvgTransformMatrix()：从单一元素的变换矩阵中返回svg输出的变换字符串。
Number getTop()：获得Object的顶部位置，即Y坐标，以像素为单位。
Array getTransformMatrix()：获得Object的变换矩阵，即transformMatrix属性值。
boolean getViewportTransform()：在可能的情况下，获取Object的视口变换。（译者注：源码中返回的是数组，不知道为啥文档中写的是返回boolean）。
boolean getVisible()：获取Object是否可见。
Number getWidth()：获取Object的宽度。
boolean hasStateChanged()：当任一个Object的状态属性发生变化是，该函数返回true。
fabric.Triangle initialize(Object)：构造函数，参数是要初始化的属性值。
boolean intersectsWithObject(fabric.Object)：探测该Object是否与指定的Object有交集。
boolean intersectsWithRect(Object, Object)：探测该Object是否与指定的矩型有交集。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点
boolean isContainedWithinObject(fabric.Object)：探测该Object是否完全包含在另一个指定的Object中。
boolean isContainedWithinRect(Object, Object)：探测该Object是否完全包含在指定的矩形中。第一个参数是矩形左上角的点；第二个参数是矩形右上角的点。
boolean isControlVisible(String)：当指定的控制器可见是返回true，否测返回false。参数为控制器的名称，可选值有："tl"、"tr"、"bl"、"br"、"ml"、"mt"、"mr"、"mb"、"mtr"。
boolean isType(String)：指定的类型和当前Object类型相同时，则返回true。
fabric.Object moveTo(Number)：将Object移至绘制栈的指定层。
fabric.Object remove()：将Object从Canvas上移除。
render(CanvasRenderingContext2D, boolean opt)：在指定的Context上渲染Object。第一个参数是将要渲染的Object；第二个参数为true时，Context将不会进行变换。
fabric.Object saveState(Object opt)：保存Object的状态。参数是一个Object，当状态保存过程中需要额外添加到Object中的状态属性。
fabric.Object scale(Number)：缩放Object，X和Y轴方向上等值。参数即是缩放因子。
fabric.Object scaleToHeight(Number)：将Object的高度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object scaleToWidth(Number)：将Object的宽度缩放到指定值。考虑到盒模型，最好是使用scale进行x、y轴等比缩放。
fabric.Object sendBackwards(boolean)：将Object在绘制栈中向下移一层。当参数为true时，将Object移到下一个与之相交的Object之后。
fabric.Object sendToBack()：将Object移至绘制栈的最底部。
fabric.Object set(String | Object, Object | Function)：为指定的属性设置值。当设置位置或维度（与left、top、scale、angle等相关联）的属性时，set函数Object的边框和控制器的位置。如果你要将它们也进行更新，需要调用setCoord()函数。第一个参数指定属性名或Object，为Object时函数将会遍历该Object的键值对；第二个参数指定属性值或Function，为Function时属性值将会作为参数传放，并返回一个新值。
fabric.Object setAngle(Number)：设置Object的角度，以“度”为单位。
fabric.Object setClipTo(Function)：设置Object的裁剪函数，即clipTo属性。
fabric.Object setColor(String)：设置实例的颜色（Color是fill属性的别名）。
fabric.Object setControlsVisibility(Object opt)：设置fabric.Object控制器的显示/隐藏状态。参数是一个要选的Object，可选成员如下所示：
bl: boolean类型，为true则bottom-left控制器可用，false则不可用。
br: boolean类型，为true则bottom-right控制器可用，false则不可用。
mb: boolean类型，为true则middle-bottom控制器可用，false则不可用。
ml: boolean类型，为true则middle-left控制器可用，false则不可用。
mr: boolean类型，为true则middle-right控制器可用，false则不可用。
mt: boolean类型，为true则middle-top控制器可用，false则不可用。
tl: boolean类型，为true则top-left控制器可用，false则不可用。
tr: boolean类型，为true则top-right控制器可用，false则不可用。
mtr: boolean类型，为true则middle-top-rotate控制器可用，false则不可用。
fabric.Object setControlVisible(String, boolean)：设置指定的控制器显示/隐藏状态。第一个参数是指定的控制器名，可选值有'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'；第二个参数为true则指定的控制器可用，否则不可用。
fabric.Object setCoords()：以当前的角度、宽高为基准，设置四角的的位置。可参考：https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords。
fabric.Object setFill(String)：设置Object的填充颜色。参数示例：rgb(0,0,0)。
fabric.Object setFlipX(boolean)：设置Object的flipX属性值。
fabric.Object setFlipY(boolean)：设置Object的flipY属性值。
fabric.Object setGradient(String, Object)：设置（填充或画笔）的渐变色。无法向后兼容提示：在v1.1.0之前，该函数被命名为setGradientFill。第一个参数可选值为"stroke"或"fill"；第二个参数为Object，可选属性如下：
属性名	类型	是否可选	默认值	说明
type	String	是		渐变类型，"linear"或"radial"
x1	Number	是	0	起始点x坐标
y1	Number	是	0	起始点y坐标
x2	Number	是	0	终点x坐标
y2	Number	是	0	终点y坐标
r1	Number	是	0	起始点半径（仅在径向渐变时生效）
r2	Number	是	0	终止点半径（仅在径向渐变时生效）
colorStops	Object	是		终止色，示例：{0: 'ff0000', 1: '000000'}
示例1：
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
示例2：
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
fabric.Object setLeft(Number)：设置Object的左边距，以像素为单位。
fabric.Object setOpacity(Number)：设置Object的透明度，参数范围[0-1]。
void setOptions(Object opt)：通过参数设置Object的属性。
fabric.Object setOriginX(String)：设置originX属性值，可选值为："left", "right", "center"。
fabric.Object setOriginY(String)：设置originY属性值，可选值为："top", "bottom", "center"。
fabric.Object setPatternFill(Object)：设置Object的样式填充。参数的可选成员如下：
参数名	类型	是否可选	默认值	说明
source	String | HTMLImageElement			样式来源
repeat	String	是	"repeat"	指定是否重复样式填充，可选值有："repeat"、"repeat-x"、"repeat-y"、"no-repeat"
offsetX	Number	是	0	相对于左上角的水平偏移量
offsetY	Number	是	0	相对于右上角的垂直偏移量
示例：
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
void setPositionByOrigin(fabric.Point, String, String)：根据Object的原点设置Object的值置。第一个参数指定的Object的新位置；第二个参数指定Object的水平原点，可选值有：'left', 'center' or 'right'；第三个参数指定Object的垂直原点，可选值有：'top', 'center' or 'bottom'。
fabric.Object setScaleX(Number)：设置Object的scaleX属性值。
fabric.Object setScaleY(Number)：设置Object的scaleY属性值。
fabric.Object setShadow(Object | String opt)：设置Object的阴影。当参数为String类型时，可以如下格式设置："2px 2px 10px rgba(0,0,0,0.2)"；当参数为Object类型时，可选成员如下：
属性名	类型	是否可选	默认值	说明
color	String	是	rgb(0,0,0)	阴影颜色
blur	Number	是	0	阴影模糊度
offsetX	Number	是	0	水平偏移量
offsetY	Number	是	0	垂直偏移量
示例1：
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
示例2：
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
fabric.Object setSourcePath(String)：设置Object的源路径。译者注：不清楚这里的source path是指啥。参数即为要设置的sourcePath属性值。
fabric.Object setStroke(String)：设置Object的画笔。
fabric.Object setStrokeWidth(Number)：设置Object的画笔宽度。
fabric.Object setTop(Number)：设置Object的top属性，以像素为单位。
fabric.Object setTransformMatrix(Array)：设置Object的transformMatrix属性。
fabric.Object setupState()：建立Object的状态。
fabric.Object setVisible(boolean)：设置Object的visible属性。
fabric.Object straighten()：拉直Object（将Object从前当角度旋转到0、90、180、270度，取决于哪个角度比较靠近）。；
Object toDatalessObject(Array opt)：返回代表该实例的无数据Object。参数可选，该数组可指定任意你想添加到输出的属性。
String ToDataURL(Object)：将Object转换成类URL的字符串。参数可选成员如下：
属性名	类型	是否可选	默认值	说明
format	String	是	png	输出图片的格式，可选"jpeg"或"png"
quality	Number	是	1	输出图片质量，[0-1]，jpeg格式生效
multiplier	Number	是	1	缩放因子
left	Number	是		裁剪区域左偏移量，v1.2.14引入
top	Number	是		裁剪区域顶部偏移量，v1.2.14引入
width	Number	是		裁剪区域宽度，v1.2.14引入
height	Number	是		裁剪区域高度，v1.2.14引入
fabric.Object toggle(String)：切换指定的属性，true变为false，false变为true。
Object toJSON(Array opt)：返回一个代表当前实例的JSON对象。参数可选，该数组可指定任意你想添加到输出的属性。
fabric.Point toLocalPoint(fabric.Point, originX, originY)：返回指定的点在当前Object的本地坐标。第一个参数指定一个需要转换的全局坐标；第二个参数指定了水平原点，可选值有'left', 'center' or 'right'；第三个参数指定了垂直原点，可选值有'top', 'center' or 'bottom'。
Object toObject(Array opt)：返回一个代表当前实例的Object对象。参数可选，该数组可指定任意你想添加到输出的属性。
String toString()：返回一个代表当前实例的字符串。
String toSVG(Function opt)：返回代表当前实例的SVG字符串。参数是一个可选的回调函数，用于更进一步转换SVG对象。
void transform(CanvasRenderingContext2D, boolean)：当渲染Object时对Context进行变换。当第二个参数为true时，context被变换到Object的左上角，这个用在渲染文本的时候。
fabric.Point translateToCenterPoint(fabric.Point, String, String)：将指定的坐标点从原点平移到中点坐标（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
fabric.Point translateToOriginPoint(fabric.Point, String, String)：将指定的坐标点从中点坐标平移到原点（基于Object的维度）。第一个参数的X/Y坐标分别对应第二和第三个参数；第二个参数即水平原点，可选值为'left', 'center' or 'right'；第三个参数即垂直原点，可选值为'top', 'center' or 'bottom'。
```











