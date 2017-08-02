$append_mls.appendBase( null , "" ) ;
$append_mls.appendIni(
{
	meta : [
			{
				zepto : {
						src : document.baseURI + "assets/js/zepto.js" ,
						domParent : "head" ,
					} ,
				// jquery : {
				// 		src : document.baseURI + "assets/js/jquery-2.1.4.js" ,
				// 		domParent : "head" ,
				// } ,
			} ,
	] ,			
	link : [
				{
					// 0 : "//at.alicdn.com/t/font_1431676360_347254.css" ,
					"light7" : document.baseURI + "dist/css/light7-2.css" ,
					"light7-swiper" : document.baseURI + "dist/css/light7-swiper.css" ,
					"light7-swipeout" : document.baseURI + "dist/css/light7-swipeout.css" ,
					"app" : document.baseURI + "css/app.css" ,

				} ,
				{
					// demos : document.baseURI + "assets/css/demos.css" ,
					// zepto : document.baseURI + "assets/js/zepto.js" ,
					"taobao" : document.baseURI + "assets/css/taobao.css" ,
					tb_search_list : document.baseURI + "assets/css/tb_search_list.css" ,

				} ,
				
			] ,
	script : [
				{
					// angular :  "http://code.angularjs.org/angular-1.0.1.min.js" ,
					// zepto : document.baseURI + "assets/js/zepto.js" ,
					// jquery : document.baseURI + "assets/js/jquery-2.1.4.js" ,
					alicdn_zepto : "//g.alicdn.com/sj/lib/zepto/zepto.js" ,
				} ,
				{
					
					// "calendar" : document.baseURI + "docs-demos/js/calendar.js" ,
					// "city-picker" : document.baseURI + "docs-demos/js/picker.js" ,
					// "colors" : document.baseURI + "docs-demos/js/colors.js" ,
					// "picker" : document.baseURI + "docs-demos/js/picker.js" ,
					// "i18n" : document.baseURI + "docs-demos/js/i18n.js" ,
					// "cn" : document.baseURI + "dist/js/i18n/cn.js" ,
					light7 : document.baseURI + "dist/js/light7.js" ,
					"light7-swiper" : document.baseURI + "dist/js/light7-swiper.js" ,
					"light7-swipeout" : document.baseURI + "dist/js/light7-swipeout.js" ,
					
				} ,
				{

					// "demos" : document.baseURI + "assets/js/demos2.js" ,
					"search-get-json" : document.baseURI + "assets/js/search-get-json.js" ,
					"category_tab" : document.baseURI + "assets/js/category_tab.js" ,
					"sinInv-search-get-json" : document.baseURI + "assets/js/sinInv-search-get-json.js" ,
					"sinInv-detail-get-json" : document.baseURI + "assets/js/sinInv-detail-get-json.js" ,

					"indexPgNav" : document.baseURI + "assets/js/indexPgNav-load.js" ,
					// "app" : document.baseURI + "examples/light7-mall_c01/js/app.js" ,
					"init" : document.baseURI + "js/init.js" ,
	
				} ,
			] ,
		} 
		, false 
) ;
