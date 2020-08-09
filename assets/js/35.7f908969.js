(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{256:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("p",[t._v('当在代码执行阶段执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，就叫做"执行上下文(EC)"，也叫执行上下文环境，也叫执行环境。包括变量对象、作用域链、this')]),t._v(" "),a("h2",{attrs:{id:"活动对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 活动对象")]),t._v(" "),a("p",[t._v("（activation object）arguments和其它命名参数")]),t._v(" "),a("h2",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("ul",[a("li",[t._v("用途：保证对执行环境有权并有序地访问所有变量和函数")]),t._v(" "),a("li",[t._v("顺序：从前到后一级一级查找自由变量（当前作用域没有定义的变量），最前端为变量对象（arguments\\函数声明\\变量声明）,最后为全局环境下的变量和对象")]),t._v(" "),a("li",[t._v("函数的父级作用域是函数定义时的作用域，不是执行的")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\n\t \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" changeColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" anothorColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n\t \n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" swapColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tempColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("anothorColor\n\t        anothorColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("color\n\t        color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tempColor\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("    swapColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("作用域链：\nwindow——color\n\t    ——changeColors()——anothorColor\n\t\t\t\t\t   ——swapColors()——tempcolor\n")])]),t._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("什么是闭包？闭包是指有权访问另一个函数作用域中的变量的函数。")])]),t._v(" "),a("li",[a("p",[t._v("原理？作用域")])]),t._v(" "),a("li",[a("p",[t._v("如何使用它？")]),t._v(" "),a("p",[t._v("i. 函数作为返回值")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//100 ")]),t._v("\n")])])]),a("p",[t._v("ii. 函数作为参数传递")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" f3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("    fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//100")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("为什么要使用它？")])]),t._v(" "),a("p",[t._v("使一个函数能访问另一个函数作用域中的变量。形成闭包之后，该变量不会被垃圾回收机制回收，可以避免全局变量污染。但会占用更多内存。")]),t._v(" "),a("p",[t._v("通常函数执行完毕后，局部活动对象会被销毁，内存中只保存全局作用域。但是对闭包来说，他的作用域链中包含对外部函数活动对象的引用。因此外部函数的活动对象不能销毁，会占用更多内存。")]),t._v(" "),a("p",[t._v("解除对匿名函数的引用（释放内存）：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fn1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将匿名函数赋给fn1")]),t._v("\n\t\tfn1（） "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用函数")]),t._v("\n        fn1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解除引用")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);