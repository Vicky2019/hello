(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"090a":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"carousel-section"},[e("v-uni-view",{staticClass:"titleNview-placing"}),e("v-uni-view",{staticClass:"titleNview-background",style:{backgroundColor:t.titleNViewBackground}}),e("v-uni-swiper",{staticClass:"carousel",attrs:{circular:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.carouselList,function(i,a){return e("v-uni-swiper-item",{key:a,staticClass:"carousel-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage({title:"轮播广告"})}}},[e("v-uni-image",{attrs:{src:i.src}})],1)}),1),e("v-uni-view",{staticClass:"swiper-dots"},[e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),e("v-uni-text",{staticClass:"sign"},[t._v("/")]),e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperLength))])],1)],1),e("v-uni-view",{staticClass:"cate-section"},[e("v-uni-view",{staticClass:"cate-item"},[e("v-uni-image",{attrs:{src:"/static/temp/c3.png"}}),e("v-uni-text",[t._v("环球美食")])],1),e("v-uni-view",{staticClass:"cate-item"},[e("v-uni-image",{attrs:{src:"/static/temp/c5.png"}}),e("v-uni-text",[t._v("个护美妆")])],1),e("v-uni-view",{staticClass:"cate-item"},[e("v-uni-image",{attrs:{src:"/static/temp/c6.png"}}),e("v-uni-text",[t._v("营养保健")])],1),e("v-uni-view",{staticClass:"cate-item"},[e("v-uni-image",{attrs:{src:"/static/temp/c7.png"}}),e("v-uni-text",[t._v("家居厨卫")])],1),e("v-uni-view",{staticClass:"cate-item"},[e("v-uni-image",{attrs:{src:"/static/temp/c8.png"}}),e("v-uni-text",[t._v("速食生鲜")])],1)],1),e("v-uni-view",{staticClass:"ad-1"},[e("v-uni-image",{attrs:{src:"/static/temp/ad1.jpg",mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"seckill-section m-t"},[e("v-uni-view",{staticClass:"s-header"},[e("v-uni-image",{staticClass:"s-img",attrs:{src:"/static/temp/secskill-img.jpg",mode:"widthFix"}}),e("v-uni-text",{staticClass:"tip"},[t._v("8点场")]),e("v-uni-text",{staticClass:"hour timer"},[t._v("07")]),e("v-uni-text",{staticClass:"minute timer"},[t._v("13")]),e("v-uni-text",{staticClass:"second timer"},[t._v("55")]),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"scoll-wrapper"},t._l(t.goodsList,function(i,a){return e("v-uni-view",{key:a,staticClass:"floor-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-image",{attrs:{src:i.image,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)}),1)],1)],1),e("v-uni-view",{staticClass:"f-header m-t"},[e("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),e("v-uni-view",{staticClass:"tit-box"},[e("v-uni-text",{staticClass:"tit"},[t._v("精品团购")]),e("v-uni-text",{staticClass:"tit2"},[t._v("Boutique Group Buying")])],1),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-view",{staticClass:"group-section"},[e("v-uni-swiper",{staticClass:"g-swiper",attrs:{duration:500}},t._l(t.goodsList,function(i,a){return a%2===0?e("v-uni-swiper-item",{key:a,staticClass:"g-swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-view",{staticClass:"g-item left"},[e("v-uni-image",{attrs:{src:i.image,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"t-box"},[e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))]),e("v-uni-text",{staticClass:"m-price"},[t._v("￥188")])],1),e("v-uni-view",{staticClass:"pro-box"},[e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:"72",activeColor:"#fa436a",active:!0,"stroke-width":"6"}})],1),e("v-uni-text",[t._v("6人成团")])],1)],1)],1),e("v-uni-view",{staticClass:"g-item right"},[e("v-uni-image",{attrs:{src:t.goodsList[a+1].image,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"t-box"},[e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(t.goodsList[a+1].title))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.goodsList[a+1].price))]),e("v-uni-text",{staticClass:"m-price"},[t._v("￥188")])],1),e("v-uni-view",{staticClass:"pro-box"},[e("v-uni-view",{staticClass:"progress-box"},[e("v-uni-progress",{attrs:{percent:"72",activeColor:"#fa436a",active:!0,"stroke-width":"6"}})],1),e("v-uni-text",[t._v("10人成团")])],1)],1)],1)],1):t._e()}),1)],1),e("v-uni-view",{staticClass:"f-header m-t"},[e("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),e("v-uni-view",{staticClass:"tit-box"},[e("v-uni-text",{staticClass:"tit"},[t._v("分类精选")]),e("v-uni-text",{staticClass:"tit2"},[t._v("Competitive Products For You")])],1),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-view",{staticClass:"hot-floor"},[e("v-uni-view",{staticClass:"floor-img-box"},[e("v-uni-image",{staticClass:"floor-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg",mode:"scaleToFill"}})],1),e("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"scoll-wrapper"},[t._l(t.goodsList,function(i,a){return e("v-uni-view",{key:a,staticClass:"floor-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-image",{attrs:{src:i.image,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)}),e("v-uni-view",{staticClass:"more"},[e("v-uni-text",[t._v("查看全部")]),e("v-uni-text",[t._v("More+")])],1)],2)],1)],1),e("v-uni-view",{staticClass:"hot-floor"},[e("v-uni-view",{staticClass:"floor-img-box"},[e("v-uni-image",{staticClass:"floor-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658",mode:"scaleToFill"}})],1),e("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"scoll-wrapper"},[t._l(t.goodsList,function(i,a){return e("v-uni-view",{key:a,staticClass:"floor-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-image",{attrs:{src:i.image3,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)}),e("v-uni-view",{staticClass:"more"},[e("v-uni-text",[t._v("查看全部")]),e("v-uni-text",[t._v("More+")])],1)],2)],1)],1),e("v-uni-view",{staticClass:"hot-floor"},[e("v-uni-view",{staticClass:"floor-img-box"},[e("v-uni-image",{staticClass:"floor-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg",mode:"scaleToFill"}})],1),e("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"scoll-wrapper"},[t._l(t.goodsList,function(i,a){return e("v-uni-view",{key:a,staticClass:"floor-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-image",{attrs:{src:i.image2,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)}),e("v-uni-view",{staticClass:"more"},[e("v-uni-text",[t._v("查看全部")]),e("v-uni-text",[t._v("More+")])],1)],2)],1)],1),e("v-uni-view",{staticClass:"f-header m-t"},[e("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),e("v-uni-view",{staticClass:"tit-box"},[e("v-uni-text",{staticClass:"tit"},[t._v("猜你喜欢")]),e("v-uni-text",{staticClass:"tit2"},[t._v("Guess You Like It")])],1),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-view",{staticClass:"guess-section"},t._l(t.goodsList,function(i,a){return e("v-uni-view",{key:a,staticClass:"guess-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:i.image,mode:"aspectFill"}})],1),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)}),1)],1)},r=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return r}),e.d(i,"a",function(){return a})},"241f":function(t,i,e){"use strict";e.r(i);var a=e("dce3"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a},"3b8d":function(t,i,e){"use strict";e.r(i),e.d(i,"default",function(){return o});var a=e("795b"),n=e.n(a);function r(t,i,e,a,r,o,s){try{var c=t[o](s),l=c.value}catch(u){return void e(u)}c.done?i(l):n.a.resolve(l).then(a,r)}function o(t){return function(){var i=this,e=arguments;return new n.a(function(a,n){var o=t.apply(i,e);function s(t){r(o,a,n,s,c,"next",t)}function c(t){r(o,a,n,s,c,"throw",t)}s(void 0)})}}},"460f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-9b76779c]{background:#f5f5f5}.m-t[data-v-9b76779c]{margin-top:%?16?%}\n/* 头部 轮播图 */.carousel-section[data-v-9b76779c]{position:relative;padding-top:10px}.carousel-section .titleNview-placing[data-v-9b76779c]{height:0;padding-top:44px;box-sizing:initial}.carousel-section .titleNview-background[data-v-9b76779c]{position:absolute;top:0;left:0;width:100%;height:%?426?%;-webkit-transition:.4s;transition:.4s}.carousel[data-v-9b76779c]{width:100%;height:%?350?%}.carousel .carousel-item[data-v-9b76779c]{width:100%;height:100%;padding:0 %?28?%;overflow:hidden}.carousel uni-image[data-v-9b76779c]{width:100%;height:100%;border-radius:%?10?%}.swiper-dots[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:%?60?%;bottom:%?15?%;width:%?72?%;height:%?36?%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);background-size:100% 100%}.swiper-dots .num[data-v-9b76779c]{width:%?36?%;height:%?36?%;border-radius:50px;font-size:%?24?%;color:#fff;text-align:center;line-height:%?36?%}.swiper-dots .sign[data-v-9b76779c]{position:absolute;top:0;left:50%;line-height:%?36?%;font-size:%?12?%;color:#fff;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n/* 分类 */.cate-section[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?30?% %?22?%;background:#fff\n  /* 原图标颜色太深,不想改图了,所以加了透明度 */}.cate-section .cate-item[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#303133}.cate-section uni-image[data-v-9b76779c]{width:%?88?%;height:%?88?%;margin-bottom:%?14?%;border-radius:50%;opacity:.7;box-shadow:%?4?% %?4?% %?20?% rgba(250,67,106,.3)}.ad-1[data-v-9b76779c]{width:100%;height:%?210?%;padding:%?10?% 0;background:#fff}.ad-1 uni-image[data-v-9b76779c]{width:100%;height:100%}\n/* 秒杀专区 */.seckill-section[data-v-9b76779c]{padding:%?4?% %?30?% %?24?%;background:#fff}.seckill-section .s-header[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?92?%;line-height:1}.seckill-section .s-header .s-img[data-v-9b76779c]{width:%?140?%;height:%?30?%}.seckill-section .s-header .tip[data-v-9b76779c]{font-size:%?28?%;color:#909399;margin:0 %?20?% 0 %?40?%}.seckill-section .s-header .timer[data-v-9b76779c]{display:inline-block;width:%?40?%;height:%?36?%;text-align:center;line-height:%?36?%;margin-right:%?14?%;font-size:%?26?%;color:#fff;border-radius:2px;background:rgba(0,0,0,.8)}.seckill-section .s-header .icon-you[data-v-9b76779c]{font-size:%?32?%;color:#909399;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.seckill-section .floor-list[data-v-9b76779c]{white-space:nowrap}.seckill-section .scoll-wrapper[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.seckill-section .floor-item[data-v-9b76779c]{width:%?150?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.seckill-section .floor-item uni-image[data-v-9b76779c]{width:%?150?%;height:%?150?%;border-radius:%?6?%}.seckill-section .floor-item .price[data-v-9b76779c]{color:#fa436a}.f-header[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?140?%;padding:%?6?% %?30?% %?8?%;background:#fff}.f-header uni-image[data-v-9b76779c]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%;margin-right:%?20?%}.f-header .tit-box[data-v-9b76779c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.f-header .tit[data-v-9b76779c]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.f-header .tit2[data-v-9b76779c]{font-size:%?24?%;color:#909399}.f-header .icon-you[data-v-9b76779c]{font-size:%?34?%;color:#909399}\n/* 团购楼层 */.group-section[data-v-9b76779c]{background:#fff}.group-section .g-swiper[data-v-9b76779c]{height:%?650?%;padding-bottom:%?30?%}.group-section .g-swiper-item[data-v-9b76779c]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.group-section uni-image[data-v-9b76779c]{width:100%;height:%?460?%;border-radius:4px}.group-section .g-item[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.group-section .left[data-v-9b76779c]{-webkit-box-flex:1.2;-webkit-flex:1.2;flex:1.2;margin-right:%?24?%}.group-section .left .t-box[data-v-9b76779c]{padding-top:%?20?%}.group-section .right[data-v-9b76779c]{-webkit-box-flex:0.8;-webkit-flex:0.8;flex:0.8;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.group-section .right .t-box[data-v-9b76779c]{padding-bottom:%?20?%}.group-section .t-box[data-v-9b76779c]{height:%?160?%;font-size:%?30?%;color:#303133;line-height:1.6}.group-section .price[data-v-9b76779c]{color:#fa436a}.group-section .m-price[data-v-9b76779c]{font-size:%?26?%;text-decoration:line-through;color:#909399;margin-left:%?8?%}.group-section .pro-box[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%;font-size:%?24?%;color:%?28?%;padding-right:%?10?%}.group-section .progress-box[data-v-9b76779c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:10px;overflow:hidden;margin-right:%?8?%}\n/* 分类推荐楼层 */.hot-floor[data-v-9b76779c]{width:100%;overflow:hidden;margin-bottom:%?20?%}.hot-floor .floor-img-box[data-v-9b76779c]{width:100%;height:%?320?%;position:relative}.hot-floor .floor-img-box[data-v-9b76779c]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.hot-floor .floor-img[data-v-9b76779c]{width:100%;height:100%}.hot-floor .floor-list[data-v-9b76779c]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.hot-floor .scoll-wrapper[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.hot-floor .floor-item[data-v-9b76779c]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.hot-floor .floor-item uni-image[data-v-9b76779c]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.hot-floor .floor-item .price[data-v-9b76779c]{color:#fa436a}.hot-floor .more[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.hot-floor .more uni-text[data-v-9b76779c]:first-child{margin-bottom:%?4?%}\n/* 猜你喜欢 */.guess-section[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.guess-section .guess-item[data-v-9b76779c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.guess-section .guess-item[data-v-9b76779c]:nth-child(odd){margin-right:4%}.guess-section .image-wrapper[data-v-9b76779c]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-9b76779c]{width:100%;height:100%;opacity:1}.guess-section .title[data-v-9b76779c]{font-size:%?32?%;color:#303133;line-height:%?80?%}.guess-section .price[data-v-9b76779c]{font-size:%?32?%;color:#fa436a;line-height:1}body.?%PAGE?%[data-v-9b76779c]{background:#f5f5f5}',""])},"7ef9":function(t,i,e){"use strict";e.r(i);var a=e("090a"),n=e("241f");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("b95d");var o,s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"9b76779c",null,!1,a["a"],o);i["default"]=c.exports},"96cf":function(t,i){!function(i){"use strict";var e,a=Object.prototype,n=a.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,u=i.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=i.regeneratorRuntime=l?t.exports:{},u.wrap=x;var d="suspendedStart",v="suspendedYield",f="executing",g="completed",h={},p={};p[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==a&&n.call(w,o)&&(p=w);var m=E.prototype=k.prototype=Object.create(p);C.prototype=m.constructor=E,E.constructor=C,E[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var i="function"===typeof t&&t.constructor;return!!i&&(i===C||"GeneratorFunction"===(i.displayName||i.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},u.awrap=function(t){return{__await:t}},_(A.prototype),A.prototype[s]=function(){return this},u.AsyncIterator=A,u.async=function(t,i,e,a){var n=new A(x(t,i,e,a));return u.isGeneratorFunction(i)?n:n.next().then(function(t){return t.done?t.value:n.next()})},_(m),m[c]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},u.keys=function(t){var i=[];for(var e in t)i.push(e);return i.reverse(),function e(){while(i.length){var a=i.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},u.values=N,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],i=t.completion;if("throw"===i.type)throw i.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function a(a,n){return s.type="throw",s.arg=t,i.next=a,n&&(i.method="next",i.arg=e),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=i&&i<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=i,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),h},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var a=e.completion;if("throw"===a.type){var n=a.arg;j(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,a){return this.delegate={iterator:N(t),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=e),h}}}function x(t,i,e,a){var n=i&&i.prototype instanceof k?i:k,r=Object.create(n.prototype),o=new B(a||[]);return r._invoke=L(t,e,o),r}function y(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(a){return{type:"throw",arg:a}}}function k(){}function C(){}function E(){}function _(t){["next","throw","return"].forEach(function(i){t[i]=function(t){return this._invoke(i,t)}})}function A(t){function i(e,a,r,o){var s=y(t[e],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){i("next",t,r,o)},function(t){i("throw",t,r,o)}):Promise.resolve(l).then(function(t){c.value=t,r(c)},function(t){return i("throw",t,r,o)})}o(s.arg)}var e;function a(t,a){function n(){return new Promise(function(e,n){i(t,a,e,n)})}return e=e?e.then(n,n):n()}this._invoke=a}function L(t,i,e){var a=d;return function(n,r){if(a===f)throw new Error("Generator is already running");if(a===g){if("throw"===n)throw r;return M()}e.method=n,e.arg=r;while(1){var o=e.delegate;if(o){var s=F(o,e);if(s){if(s===h)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===d)throw a=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=f;var c=y(t,i,e);if("normal"===c.type){if(a=e.done?g:v,c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(a=g,e.method="throw",e.arg=c.arg)}}}function F(t,i){var a=t.iterator[i.method];if(a===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,F(t,i),"throw"===i.method))return h;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=y(a,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,h;var r=n.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,h):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,h)}function I(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function j(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var i=t[o];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function i(){while(++a<t.length)if(n.call(t,a))return i.value=t[a],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}return{next:M}}function M(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b95d:function(t,i,e){"use strict";var a=e("d9b3"),n=e.n(a);n.a},d9b3:function(t,i,e){var a=e("460f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("723213e4",a,!0,{sourceMap:!1,shadowMode:!1})},dce3:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("3b8d")),r={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var i,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("carouselList");case 2:return i=t.sent,this.titleNViewBackground=i[0].background,this.swiperLength=i.length,this.carouselList=i,t.next=8,this.$api.json("goodsList");case 8:e=t.sent,this.goodsList=e||[];case 10:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),swiperChange:function(t){var i=t.detail.current;this.swiperCurrent=i,this.titleNViewBackground=this.carouselList[i].background},navToDetailPage:function(t){var i=t.title;uni.navigateTo({url:"/pages/product/product?id=".concat(i)})}},onNavigationBarSearchInputClicked:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(i){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$api.msg("点击了搜索框");case 1:case"end":return t.stop()}},t,this)}));function i(i){return t.apply(this,arguments)}return i}(),onNavigationBarButtonTap:function(t){var i=t.index;0===i?this.$api.msg("点击了扫描"):1===i&&uni.navigateTo({url:"/pages/notice/notice"})}};i.default=r}}]);