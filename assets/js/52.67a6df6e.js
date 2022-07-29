(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{460:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"webpack-为模块化而生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-为模块化而生"}},[t._v("#")]),t._v(" Webpack 为模块化而生")]),t._v(" "),a("p",[t._v("webpack的目标是高效管理维护项目资源")]),t._v(" "),a("h3",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),a("p",[t._v("为什么我们需要模块化？\n最早通过文件划分实现模块化。通过"),a("code",[t._v('<script src="...">')]),t._v("引入页面\n弊端是全局环境，无私有环境，容易污染，且模块无互相的依赖关系，随着项目发展变大，维护困难。")]),t._v(" "),a("p",[t._v("命名空间虽然解决了模块的私有环境问题，即让每个模块只暴露一个全局对象，然后将模块内容挂载到对象中")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moduleA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA#method1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("但是仍然无法实现模块的依赖关系，之后使用立即执行函数套壳来提供私有空间")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleA"')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#method1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moduleA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("method1\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jquery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("虽然原生实现了，但是模块引入还是非常僵硬而不受控制。")]),t._v(" "),a("h3",{attrs:{id:"为什么需要webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要webpack"}},[t._v("#")]),t._v(" 为什么需要webpack")]),t._v(" "),a("ol",[a("li",[t._v("现代前端开发复杂，后端渲染，前端原生，框架，开发方式，呼唤一种模块化开发的出现")]),t._v(" "),a("li",[t._v("需要高级特性来提升开发效率，比如ES6，TS，less")]),t._v(" "),a("li",[t._v("需要监听文件变化来实时体现到浏览器上，即热更新")]),t._v(" "),a("li",[t._v("JS代码本身也需要模块化")]),t._v(" "),a("li",[t._v("开发完成后的压缩合并优化")])]),t._v(" "),a("p",[t._v("这些都可以交给webpack")]),t._v(" "),a("h3",{attrs:{id:"到底什么是webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到底什么是webpack"}},[t._v("#")]),t._v(" 到底什么是webpack")]),t._v(" "),a("p",[t._v("webpack是面向现代JS应用程序的静态模块打包工具")]),t._v(" "),a("ul",[a("li",[t._v("静态模块\n指开发阶段，可以被webpack引用的资源，即被webpack获取打包进"),a("strong",[t._v("bundle.js")]),t._v("的资源")])]),t._v(" "),a("p",[t._v("webpack处理开发完成的应用程序时会在内部先构建模块的依赖图，并生成一或多个bundle.js")]),t._v(" "),a("h3",{attrs:{id:"webpack的能力总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack的能力总结"}},[t._v("#")]),t._v(" webpack的能力总结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编译代码\n比如开发环境中开发者使用ES6开发，为了适应浏览器解决兼容问题，webpack可以把代码编译成ES5版本")])]),t._v(" "),a("li",[a("p",[t._v("整合模块\n即打包，把多个模块打包生成名为bundle.js的文件，整合后性能提高，维护难度下降，可以避免浏览器频繁请求文件模块")])]),t._v(" "),a("li",[a("p",[t._v("视万物为模块\n通过安装各种前端loader，实现支持各种前端模块的加载打包，以此来通过代码控制所有资源文件的加载与否")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);