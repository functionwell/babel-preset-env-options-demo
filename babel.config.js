const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "8",
            },
            /**
             * 不转换ES6 import语法，
             * 利用webpack处理import，
             * tree shaking on
             * */
            modules: false,
            /**
             * 根据用到的es语法导入polyfill，
             * 利用webpack保证不会重复导入
             * */
            useBuiltIns: "usage",
            /**
             * loose mode为true时，Class语法转换为 SomeClass.prototype.toString = function toString() {}
             * loose mode为false时，Class语法转换为使用Object.defineProperty为SomeClass.prototype和SomeClass添加方法和静态方法
             * */
            loose: true,
        },
    ]
];

module.exports = {presets};