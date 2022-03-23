"use strict";(self.webpackChunkolricweb=self.webpackChunkolricweb||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2257:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Quickstart",s={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Install",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"What is Olric?",permalink:"/docs/overview/intro"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Look and feel",id:"look-and-feel",level:2},{value:"Embedded-member scenario",id:"embedded-member-scenario",level:3},{value:"Server-client scenario",id:"server-client-scenario",level:3},{value:"redis-cli and Redis clients",id:"redis-cli-and-redis-clients",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Olric is a Golang library. So you can just run ",(0,i.kt)("inlineCode",{parentName:"p"},"go get...")," to install it in your environment. Also, most recent Docker\nimages are distributed via DockerHub."),(0,i.kt)("p",null,"In a properly configured Golang environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go get -u github.com/buraksezer/olric\n")),(0,i.kt)("p",null,"This will add the latest stable Olric version to your environment."),(0,i.kt)("p",null,"You can launch ",(0,i.kt)("em",{parentName:"p"},"olricd")," Docker container by running the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -p 3320:3320 olricio/olricd:latest\n")),(0,i.kt)("p",null,"This command will pull the latest ",(0,i.kt)("em",{parentName:"p"},"olricd")," Docker image and run a new Olric Instance. You should know that the container exposes\n",(0,i.kt)("inlineCode",{parentName:"p"},"3320")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"3322")," ports. If everything goes well, you will have a standalone Olric node. Please note that, you can always\nadd a new node to your setup to scale-out easily. It doesn't require any complex setup or external plugins."),(0,i.kt)("h2",{id:"look-and-feel"},"Look and feel"),(0,i.kt)("h3",{id:"embedded-member-scenario"},"Embedded-member scenario"),(0,i.kt)("p",null,"Olric has two different deployment scenarios. You can embed Olric into your application. So you can share the heap\nstorage among the cluster members. It is called ",(0,i.kt)("strong",{parentName:"p"},"embedded-member")," deployment scenario. In your application code,\nyou can easily access the cluster and run queries."),(0,i.kt)("p",null,"The following example, creates a new embedded client and run simple ",(0,i.kt)("em",{parentName:"p"},"Put")," and ",(0,i.kt)("em",{parentName:"p"},"Get")," operations on the distributed map\ndata structure."),(0,i.kt)("p",null,"Please note that, the official Golang client implementation is a type-safe client. You don't need extra decoding stage\nto use the retrieved values, but you can insert any type into distributed maps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e := db.NewEmbeddedClient()\ndm, err := e.NewDMap("bucket-of-arbitrary-items")\nif err != nil {\n    log.Fatalf("olric.NewDMap returned an error: %v", err)\n}\n\n// Magic starts here!\nctx = context.Background()\nerr = dm.Put(ctx, "string-key", "string-value")\nif err != nil {\n    log.Fatalf("Failed to call Put: %v", err)\n}\n\ngr, err := dm.Get(ctx, "string-key")\nif err != nil {\n    log.Fatalf("Failed to call Get: %v", err)\n}\nvalue, err := gr.String()\nif err != nil {\n    log.Fatalf("Failed to call String on GetResponse: %v", err)\n}\nfmt.Println("Value for string-key:", value)\n')),(0,i.kt)("h3",{id:"server-client-scenario"},"Server-client scenario"),(0,i.kt)("p",null,"You don't have to join the cluster to query your data. Olric works well with classic ",(0,i.kt)("strong",{parentName:"p"},"server-client")," scenario. Assume that\nyou deployed an Olric cluster on Kubernetes and it automatically scale-out to fulfill your requirements. In web servers, you need to\naccess the Olric cluster. The following code snippet shows how you can query distributed maps with ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterClient"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ctx = context.Background()\ne, err := olric.NewClusterClient([]string{"localhost:3320"})\nif err != nil {\n    log.Fatalf("olric.NewClusterClient returned an error: %v", err)\n}\n\ndm, err := e.NewDMap("bucket-of-arbitrary-items")\nif err != nil {\n    log.Fatalf("olric.NewDMap returned an error: %v", err)\n}\n\n// Magic starts here!\nctx = context.Background()\n\n// Put a key into the distributed map.\nerr = dm.Put(ctx, "string-key", "string-value")\nif err != nil {\n    log.Fatalf("Failed to call Put: %v", err)\n}\n\n// Retrieve the key again.\ngr, err := dm.Get(ctx, "string-key")\nif err != nil {\n    log.Fatalf("Failed to call Get: %v", err)\n}\n\nvalue, err := gr.String()\nif err != nil {\n    log.Fatalf("Failed to call String on GetResponse: %v", err)\n}\nfmt.Println("Value for string-key:", value)\n')),(0,i.kt)("h2",{id:"redis-cli-and-redis-clients"},"redis-cli and Redis clients"),(0,i.kt)("p",null,"Olric uses the ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/protocol"},"Redis protocol"),". So you can use any Redis client to access the cluster, including ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/rediscli"},"redis-cli"),". "),(0,i.kt)("p",null,"Assume that you run an Olric node in Docker environment. Start ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'redis-cli -p 3320\n127.0.0.1:3320> DM.PUT mydmap mykey "Olric Rocks!"\nOK\n127.0.0.1:3320> DM.GET mydmap mykey\n"Olric Rocks!"\n')),(0,i.kt)("p",null,"In Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import redis\n\nr = redis.Redis(port=3320)\n\nres = r.execute_command("DM.PUT", "mydmap", "mykey", "Olric rocks!")\nprint(res)  # b\'OK\'\n\nres = r.execute_command("DM.GET", "mydmap", "mykey")\nprint(res)  # b\'Olric rocks!\'\n')),(0,i.kt)("p",null,"You can use any Redis client to access an Olric cluster. The official Golang client is just a thin layer around ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-redis/redis"},"go-redis/redis"),"."))}m.isMDXComponent=!0}}]);