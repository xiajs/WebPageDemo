/**
 * Created by xiajs on 2018/11/26.
 *
 *  测试代码：
 *  alert("为空判断 1 = "+varUtil.isEmptyStr("1"));
 *  alert("为空判断 空引号 = "+varUtil.isEmptyStr(""));
 *  alert("为空判断 空格 = "+varUtil.isEmptyStr(" "));
 *  alert("为空判断 null = "+varUtil.isEmptyStr(null));
 *  alert("为空判断 无参 = "+varUtil.isEmptyStr());
 *
 */

varUtil = (function(){
    var innerUtil = {

        /**
         * @param param
         */
       isEmptyStr:function(param){
            if (param == null || param == undefined || param ==  ''){
                return true;
            }

            if (param.length == 0 || param.trim().length == 0){
                return true;
            }

            return false;
        },
        isNullStr:function(param){

            if (param == null || param == undefined || param ==  ''){
                return true;
            }

            if (param.length == 0 ){
                return true;
            }

            return false;
        },
        getNotBlankStr:function(param){

            if (this.isEmptyStr(param)){
                return;
            }
            return param.trim();
        }
    };
    return innerUtil;
})();