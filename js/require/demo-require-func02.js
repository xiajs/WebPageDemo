/**
 * Created by xiajs on 2018/12/5.
 */

define(['jquery'], function($) { // 比如这个模块，代码的执行依赖 jQuery，require.js 会先加载 jquery 模块代码，并加以执行，然后将依赖模块 以 $ 的参数形式传入回调函数中，回调函数将执行结果注册为模块
    // maybe some code here
    console.log("demo-require-func02 call width:"+ $(window).width());
    return {
        // some public api
    };
});
