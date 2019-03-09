/**
 * Created by xiajs on 2019/3/9.
 *
     var ss = setFactory.newInstance();
     ss.put("123");
     ss.put("223");
     ss.put("323");
     ss.put("123");
     var s2 = setFactory.newInstance();
     s2.put("abc");
     s2.put("dbc");
     s2.put("cbc");

     var rr = ss.values();
     for(var o in rr){
                console.log(rr[o]);
      }

     var rr2 = s2.values();
     for(var o in rr2){
                console.log(rr2[o]);
     }
 *
 *
 */

setFactory = (function(){

    var cloneObj = function (obj) {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            //newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; //arguments.callee 在哪一个函数中运行，它就代表哪个函数, 一般用在匿名函数中。
            newObj[key] = typeof val === 'object' ? cloneObj(val): val;
        }
        return newObj;
    };

    var set = {

        elements : new Array(),

        //获取SET元素个数
        size : function () {
            return this.elements.length;
        },

        //判断SET是否为空
        isEmpty : function () {
            return (this.elements.length < 1);
        },

        //删除SET所有元素
        clear : function () {
            this.elements = new Array();
        },

        //向SET中增加元素（key, value)
        put : function ( _value) {
            this.elements.push(_value);
        },

        //删除指定VALUE的元素，成功返回True，失败返回False
        remove : function (_value) {//removeByValueAndKey
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i] == _value) {
                        this.elements.splice(i, 1);
                        return true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
        element : function (_index) {
            if (_index < 0 || _index >= this.elements.length) {
                return null;
            }
            return this.elements[_index];
        },

        //判断SET中是否含有指定VALUE的元素
        contains : function (_value) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i] == _value) {
                        bln = true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //获取SET中所有VALUE的数组（ARRAY）
        values : function () {
            return this.elements;
        },

        getIndex : function ( _value ) {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i] == _value) {
                    return i;
                }
            }
        }

    };

    var factory = {
        newInstance : function(){
            return cloneObj(set);
        }
    };

    return factory;
})();