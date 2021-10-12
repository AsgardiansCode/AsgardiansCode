"use strict";(self.webpackChunkasgardians=self.webpackChunkasgardians||[]).push([[332],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7760:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:3},o=void 0,s={unversionedId:"basic/list",id:"basic/list",isDocsHomePage:!1,title:"list",description:"list1 = ['tim', 'nirmal']",source:"@site/docs/basic/list.md",sourceDirName:"basic",slug:"/basic/list",permalink:"/AsgardiansCode/docs/basic/list",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic/list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"lists",permalink:"/AsgardiansCode/docs/basic/lists"},next:{title:"Tutorial Intro",permalink:"/AsgardiansCode/docs/intro"}},u=[{value:"Print",id:"print",children:[]},{value:"Join List",id:"join-list",children:[]},{value:"List Comprehension",id:"list-comprehension",children:[]},{value:"Slicing",id:"slicing",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"list1 = ['tim', 'nirmal']")),(0,i.kt)("h2",{id:"print"},"Print"),(0,i.kt)("details",null,(0,i.kt)("summary",null," ['tim', 'nirmal'] "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"print(list1)\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," tim, nirmal "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'print( ", ".join(list1) )\n'))),(0,i.kt)("h2",{id:"join-list"},"Join List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.python"},'a = ( ", ".join(list1) )\n')),(0,i.kt)("h2",{id:"list-comprehension"},"List Comprehension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output expression,"),(0,i.kt)("li",{parentName:"ul"},"Input sequence,"),(0,i.kt)("li",{parentName:"ul"},"A variable representing a member of the input sequence and"),(0,i.kt)("li",{parentName:"ul"},"An optional predicate part.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = [x ** 2 for x in range(1, 11) if x % 2 == 1]\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst2 = []\nfor x in range(1, 11):\n    if x % 2 == 1:\n        lst2.append(x ** 2)\n\nprint(lst)\nprint(lst2)\n")),(0,i.kt)("p",null,"[1, 9, 25, 49, 81]"),(0,i.kt)("p",null,"[1, 9, 25, 49, 81]")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Power of 2 => [2, 4, 8, 16] "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[2 ** x for x in range(1, 4)] \n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Primes / No Primes "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    noprimes = [j for i in range(2, 8) for j in range(i * 2, 50, i)]\n    primes = [x for x in range(2, 50) if x not in noprimes]\n\n    ls = set(noprimes) # Remove duplicates\n    noprimes = list(ls)\n    \n    print(primes)\n    print(noprimes)\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Lowering the Characters "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'print ([x.lower() for x in ["A","B","C"]] )\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Extract Numbers "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'string = "my phone number is : 11122 !!"\n\nprint("\\nExtracted digits")\nnumbers = [x for x in string if x.isdigit()]\nprint (numbers)\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null," A list of list for multiplication table "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    a = 5\n    table = [[a, b, a * b] for b in range(1, 11)]\n    \n    print("\\nMultiplication Table")\n    for i in table:\n        print (i) \n'))),(0,i.kt)("h2",{id:"slicing"},"Slicing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"[start : stop : steps]\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Slicing examples with Revising list "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst =list(range(1, 11))\n")),(0,i.kt)("p",null,"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_5 = lst[1 : 5]\n")),(0,i.kt)("p",null,"[2, 3, 4, 5]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst5_8 = lst[5 : 8]\n")),(0,i.kt)("p",null,"[6, 7, 8]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_ = lst[1 : ]\n")),(0,i.kt)("p",null,"[2, 3, 4, 5, 6, 7, 8, 9, 10]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_5 = lst[: 5]\n")),(0,i.kt)("p",null,"[1, 2, 3, 4, 5]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_8_2 = lst[1 : 8 : 2]\n")),(0,i.kt)("p",null,"[2, 4, 6, 8]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_rev = lst[ : : -1]\n")),(0,i.kt)("p",null,"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_rev_9_5_2 = lst[9 : 4 : -2]\n")),(0,i.kt)("p",null,"[10, 8, 6]")),(0,i.kt)("h1",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/"},"https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import functools\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter(lambda x : x % 2 == 1, range(1, 20))\n")),(0,i.kt)("p",null,"[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter(lambda x : x % 5 == 0, \n      [x ** 2 for x in range(1, 11) if x % 2 == 1])\n")),(0,i.kt)("p",null,"[25]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter((lambda x: x < 0), range(-5,5))\n")),(0,i.kt)("p",null,"[-5, -4, -3, -2, -1]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"print (functools.reduce(lambda a,b: a if (a > b) else b, [7, 12, 45, 100, 15]))\n")),(0,i.kt)("p",null,"100"))}m.isMDXComponent=!0}}]);