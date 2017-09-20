/**
 * Created by xiajs on 2017/9/18.
 */

xbook2 = (function(){

    var page = {

        curPageUrlId : 1,
        pageUrls : new Array(),

        toNextPage: function(){
            if( this.curPageUrlId>= this.pageUrls.length - 1){
                return;
            }
            this.curPageUrlId++;
        },

        toPrevPage:function(){
            if( this.curPageUrlId <=0 ){
                return;
            }
            this.curPageUrlId--;
        },

        toPage:function(pId){
            if( pId!=null && pId != "undefined" ){
                var ids = pId.split(".");
                if( ids.length>1 ){
                    if( ids[ids.length - 1]>= this.pageUrls.length - 1){
                        return;
                    }
                    this.curPageUrlId = ids[ids.length - 1]-1;
                }
            }
        },

        getCurUrl:function(){
            return this.pageUrls[this.curPageUrlId];
        },

        resizePage:function(){
            var browserWidth = $(window).width();
            var browserHeight = $(window).height();
            //根据浏览器宽度调整css值
            $(".book").css("width", browserWidth - 20);
            $(".book").css("height", browserHeight - 20);
            $(".book-body").css("max-height", browserHeight - 20);
            $(".navigation-next").css("left", browserWidth - 70);
            $(".normal").css("width",browserWidth-360);
            $(".normal").css("max-height",browserHeight - 20);
        }
    };

    //浏览器窗口调整时更改页面大小
    $(window).resize(function() {
        page.resizePage();
    });

    page.pageUrls[0] = "../gitbook/content/page1.txt";
    page.pageUrls[1] = "../gitbook/content/page2.txt";
    page.pageUrls[2] = "../gitbook/content/page3.txt";

    return page;
})();
