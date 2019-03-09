/**
 * Created by xiajs on 2019/3/9.
 *
 *
     var ss = mapFactory.newInstance();
     ss.put("123","1-1");
     ss.put("223","1-2");
     ss.put("323","1-3");
     ss.put("123","1-4");
     var s2 = mapFactory.newInstance();
     s2.put("abc","1-a");
     s2.put("dbc","1-b");
     s2.put("cbc","1-c");

     var rr = ss.values();
     for(var o in rr){
                console.log(rr[o]);
     }

     var rr2 = s2.values();
     for(var o in rr2){
                console.log(rr2[o]);
     }
 *
 */
mapFactory = (function(){

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

    var map = {

        elements : new Array(),

        //获取MAP元素个数
        size : function () {
            return this.elements.length;
        },

        //判断MAP是否为空
        isEmpty : function () {
            return (this.elements.length < 1);
        },

        //删除MAP所有元素
        clear : function () {
            this.elements = new Array();
        },

        //向MAP中增加元素（key, value)
        put : function (_key, _value) {
            if( this.containsKey(_key) ){
                this.elements[this.getIndexByKey(_key)] = {
                    key: _key,
                    value: _value
                };
            }else{
                this.elements.push({
                    key: _key,
                    value: _value
                });
            }
        },

        //删除指定KEY的元素，成功返回True，失败返回False
        removeByKey : function (_key) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                        this.elements.splice(i, 1);
                        return true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //删除指定VALUE的元素，成功返回True，失败返回False
        removeByValue : function (_value) {//removeByValueAndKey
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == _value) {
                        this.elements.splice(i, 1);
                        return true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //删除指定VALUE的元素，成功返回True，失败返回False
        removeByValueAndKey : function (_key, _value) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == _value && this.elements[i].key == _key) {
                        this.elements.splice(i, 1);
                        return true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //获取指定KEY的元素值VALUE，失败返回NULL
        get : function (_key) {
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                        return this.elements[i].value;
                    }
                }
            } catch (e) {
                return false;
            }
            return false;
        },

        //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
        element : function (_index) {
            if (_index < 0 || _index >= this.elements.length) {
                return null;
            }
            return this.elements[_index];
        },

        //判断MAP中是否含有指定KEY的元素
        containsKey : function (_key) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                        bln = true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //判断MAP中是否含有指定VALUE的元素
        containsValue : function (_value) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == _value) {
                        bln = true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //判断MAP中是否含有指定VALUE的元素
        containsObj : function (_key, _value) {
            var bln = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == _value && this.elements[i].key == _key) {
                        bln = true;
                    }
                }
            } catch (e) {
                bln = false;
            }
            return bln;
        },

        //获取MAP中所有VALUE的数组（ARRAY）
        values : function () {
            var arr = new Array();
            for (i = 0; i < this.elements.length; i++) {
                arr.push(this.elements[i].value);
            }
            return arr;
        },

        //获取MAP中所有VALUE的数组（ARRAY）
        valuesByKey : function (_key) {
            var arr = new Array();
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    arr.push(this.elements[i].value);
                }
            }
            return arr;
        },

        //获取MAP中所有KEY的数组（ARRAY）
        keys : function () {
            var arr = new Array();
            for (i = 0; i < this.elements.length; i++) {
                arr.push(this.elements[i].key);
            }
            return arr;
        },

        //获取key通过value
        keysByValue : function (_value) {
            var arr = new Array();
            for (i = 0; i < this.elements.length; i++) {
                if (_value == this.elements[i].value) {
                    arr.push(this.elements[i].key);
                }
            }
            return arr;
        },

        //获取MAP中所有KEY的数组（ARRAY）
        keysRemoveDuplicate : function () {
            var arr = new Array();
            for (i = 0; i < this.elements.length; i++) {
                var flag = true;
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j] == this.elements[i].key) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    arr.push(this.elements[i].key);
                }
            }
            return arr;
        },

        getIndexByKey : function ( _key ) {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return i;
                }
            }
        }

    };

    var factory = {

        newInstance : function(){
            return cloneObj(map);
        }
    };

    return factory;
})();