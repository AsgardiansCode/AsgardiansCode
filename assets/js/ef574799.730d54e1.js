"use strict";(self.webpackChunkasgardians=self.webpackChunkasgardians||[]).push([[8332],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7760:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),l=t(3366),i=(t(7294),t(3905)),s=["components"],a={sidebar_position:3},o=void 0,p={unversionedId:"basic/list",id:"basic/list",isDocsHomePage:!1,title:"list",description:"list1 = ['tim', 'nirmal']",source:"@site/docs/basic/list.md",sourceDirName:"basic",slug:"/basic/list",permalink:"/AsgardiansCode/docs/basic/list",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic/list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"lists",permalink:"/AsgardiansCode/docs/basic/lists"},next:{title:"Basic_PY",permalink:"/AsgardiansCode/docs/basic/Basic_PY"}},u=[{value:"Print",id:"print",children:[]},{value:"Join List",id:"join-list",children:[]},{value:"List Comprehension",id:"list-comprehension",children:[]},{value:"Slicing",id:"slicing",children:[]},{value:"Nested Lists",id:"nested-lists",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"list1 = ['tim', 'nirmal']")),(0,i.kt)("h2",{id:"print"},"Print"),(0,i.kt)("details",null,(0,i.kt)("summary",null," ['tim', 'nirmal'] "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"print(list1)\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," tim, nirmal "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'print( ", ".join(list1) )\n'))),(0,i.kt)("h2",{id:"join-list"},"Join List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.python"},'a = ( ", ".join(list1) )\n')),(0,i.kt)("h2",{id:"list-comprehension"},"List Comprehension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output expression,"),(0,i.kt)("li",{parentName:"ul"},"Input sequence,"),(0,i.kt)("li",{parentName:"ul"},"A variable representing a member of the input sequence and"),(0,i.kt)("li",{parentName:"ul"},"An optional predicate part.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = [x ** 2 for x in range(1, 11) if x % 2 == 1]\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst2 = []\nfor x in range(1, 11):\n    if x % 2 == 1:\n        lst2.append(x ** 2)\n\nprint(lst)\nprint(lst2)\n")),(0,i.kt)("p",null,"[1, 9, 25, 49, 81]"),(0,i.kt)("p",null,"[1, 9, 25, 49, 81]")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Power of 2 => [2, 4, 8, 16] "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[2 ** x for x in range(1, 4)] \n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Primes / No Primes "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    noprimes = [j for i in range(2, 8) for j in range(i * 2, 50, i)]\n    primes = [x for x in range(2, 50) if x not in noprimes]\n\n    ls = set(noprimes) # Remove duplicates\n    noprimes = list(ls)\n    \n    print(primes)\n    print(noprimes)\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Lowering the Characters "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'print ([x.lower() for x in ["A","B","C"]] )\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Extract Numbers "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'string = "my phone number is : 11122 !!"\n\nprint("\\nExtracted digits")\nnumbers = [x for x in string if x.isdigit()]\nprint (numbers)\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null," A list of list for multiplication table "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    a = 5\n    table = [[a, b, a * b] for b in range(1, 11)]\n    \n    print("\\nMultiplication Table")\n    for i in table:\n        print (i) \n'))),(0,i.kt)("h2",{id:"slicing"},"Slicing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"[start : stop : steps]\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Slicing examples with Revising list "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst =list(range(1, 11))\n")),(0,i.kt)("p",null,"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_5 = lst[1 : 5]\n")),(0,i.kt)("p",null,"[2, 3, 4, 5]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst5_8 = lst[5 : 8]\n")),(0,i.kt)("p",null,"[6, 7, 8]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_ = lst[1 : ]\n")),(0,i.kt)("p",null,"[2, 3, 4, 5, 6, 7, 8, 9, 10]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_5 = lst[: 5]\n")),(0,i.kt)("p",null,"[1, 2, 3, 4, 5]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst1_8_2 = lst[1 : 8 : 2]\n")),(0,i.kt)("p",null,"[2, 4, 6, 8]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_rev = lst[ : : -1]\n")),(0,i.kt)("p",null,"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst_rev_9_5_2 = lst[9 : 4 : -2]\n")),(0,i.kt)("p",null,"[10, 8, 6]")),(0,i.kt)("h1",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/"},"https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import functools\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter(lambda x : x % 2 == 1, range(1, 20))\n")),(0,i.kt)("p",null,"[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter(lambda x : x % 5 == 0, \n      [x ** 2 for x in range(1, 11) if x % 2 == 1])\n")),(0,i.kt)("p",null,"[25]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lst = filter((lambda x: x < 0), range(-5,5))\n")),(0,i.kt)("p",null,"[-5, -4, -3, -2, -1]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"print (functools.reduce(lambda a,b: a if (a > b) else b, [7, 12, 45, 100, 15]))\n")),(0,i.kt)("p",null,"100"),(0,i.kt)("h2",{id:"nested-lists"},"Nested Lists"),(0,i.kt)("p",null,"Sort list according to the second item in list"),(0,i.kt)("details",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Python code to sort the lists using the second element of sublists\n# Inplace way to sort, use of third variable\ndef Sort(sub_li):\n    l = len(sub_li)\n    for i in range(0, l):\n        for j in range(0, l-i-1):\n            if (sub_li[j][1] > sub_li[j + 1][1]):\n                tempo = sub_li[j]\n                sub_li[j]= sub_li[j + 1]\n                sub_li[j + 1]= tempo\n    return sub_li\n\n# Driver Code\nsub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]\nprint(Sort(sub_li))\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Python code to sort the tuples using second element\n# of sublist Inplace way to sort using sort()\ndef Sort(sub_li):\n\n    # reverse = None (Sorts in Ascending order)\n    # key is set to sort using second element of\n    # sublist lambda has been used\n    sub_li.sort(key = lambda x: x[1])\n    return sub_li\n\n# Driver Code\nsub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]\nprint(Sort(sub_li))\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Python code to sort the tuples using second element \n# of sublist Function to sort using sorted()\ndef Sort(sub_li):\n  \n    # reverse = None (Sorts in Ascending order)\n    # key is set to sort using second element of \n    # sublist lambda has been used\n    return(sorted(sub_li, key = lambda x: x[1]))    \n  \n# Driver Code\nsub_li =[['rishav', 10], ['akash', 5], ['ram', 20], ['gaurav', 15]]\nprint(Sort(sub_li))\n"))))}m.isMDXComponent=!0}}]);