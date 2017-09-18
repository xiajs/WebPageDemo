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
        }
    };

    page.pageUrls[0] = "../gitbook/content/page1.txt";
    page.pageUrls[1] = "../gitbook/content/page2.txt";
    page.pageUrls[2] = "../gitbook/content/page3.txt";

    return page;
})();
