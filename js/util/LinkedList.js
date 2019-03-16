/**
 * Created by xiajs on 2019/3/16.
 *
     var lst = LinkedListFactory.newInstance();
     lst.add(2);
     lst.add(4);
     lst.add(1);
     var lst2 = LinkedListFactory.newInstance();
     lst2.add("a");
     lst2.add("b");
     lst2.add("c");
     var rr = lst.values();
     for(var o in rr){
                console.log(rr[o]);
      }
     console.log("--------------------");
     rr = lst2.values();
     for(var o in rr){
                console.log(rr[o]);
     }
 *
 */

LinkedListFactory = (function(){

    var List = function(){
        this.elements = new Array(); //必须要带this关键字

        this.add =  function ( _value) {
            this.elements.push(_value);
            this.elements.sort(function(a,b){return a>b?1:-1});//从小到大排序
        };

        this.values = function () {
            return this.elements;
        };

        this.get = function( i ){
            return this.elements[i];
        };

        this.clear = function(){

        };


    };

//    List1.prototype.add =  function ( _value) {
//        this.elements.push(_value);
//        this.elements.sort(function(a,b){return a>b?1:-1});//从小到大排序
//    }
//
//    List1.prototype.values = function () {
//        return this.elements;
//    };

    var factory = {
        newInstance : function(){
            return new List();
        }
    };

    return factory;
})();