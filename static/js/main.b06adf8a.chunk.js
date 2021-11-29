(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),s=(n(17),n(1)),c=n.n(s),d=n(2),l=n(7),u=n(8),p=n(10),y=n(9),m=n(11),f=n(4),b=n(3),T=n.n(b),v=function(){return new Promise((function(e,t){window.addEventListener("load",Object(d.a)(c.a.mark((function n(){var a,i,r,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return a=new T.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(i=window.web3,console.log("Injected web3 detected."),e(i)):(r=new T.a.providers.HttpProvider("http://127.0.0.1:8545"),o=new T.a(r),console.log("No web3 instance injected, using Local web3."),e(o));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))},_=(n(20),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).state={storageValue:0,web3:null,accounts:null,contract:null,eventValue:0},n.componentDidMount=Object(d.a)(c.a.mark((function e(){var t,a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return a=e.sent,e.next=9,t.eth.net.getId();case 9:i=e.sent,r=f.networks[i],o=new t.eth.Contract(f.abi,r&&r.address),n.setState({web3:t,accounts:a,contract:o}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),n.runExample=Object(d.a)(c.a.mark((function e(){var t,a,i,r,o,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.accounts,i=t.contract,r=document.getElementById("inputValue").value,e.next=4,i.methods.set(r).send({from:a[0]});case 4:return o=e.sent,console.log(o),s=o.events.isSet.returnValues.value,e.next=9,i.methods.get().call();case 9:d=e.sent,n.setState({storageValue:d,eventValue:s});case 11:case"end":return e.stop()}}),e)}))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.web3?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Good to Go!"),i.a.createElement("p",null,"Your Truffle Box is installed and ready."),i.a.createElement("h2",null,"Smart Contract Example"),i.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),i.a.createElement("p",null,"Try changing the value stored on ",i.a.createElement("strong",null,"line 42")," of App.js."),i.a.createElement("div",null,"The stored value is: ",this.state.storageValue),i.a.createElement("input",{id:"inputValue",type:"text"}),i.a.createElement("button",{onClick:this.runExample},"Envoyer valeur"),i.a.createElement("div",null,"The stored value is: ",this.state.eventValue)):i.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"isSet","type":"event"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.9+commit.e5eed63a\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"isSet\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"project:/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"london\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"project:/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x8e80e39ca33d06445ce41aed3577705733eed8387942eb161de2e8238947d76f\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://dcd1c85a71fc4f9d0665e22aa35ec7f3da37fd38c296770a21028bf261137791\\",\\"dweb:/ipfs/QmUsVKww64i9pwf9BnKkhcEp8shNyQQhCQbSKio5cCsxpw\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b50610189806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fc565b610075565b005b61005f6100b8565b60405161006c9190610138565b60405180910390f35b806000819055507f4fe60da0c680ac95894ed55d80adb4e6924c8ce68ad72a4ba65b9479ba786e126000546040516100ad9190610138565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d9816100c6565b81146100e457600080fd5b50565b6000813590506100f6816100d0565b92915050565b600060208284031215610112576101116100c1565b5b6000610120848285016100e7565b91505092915050565b610132816100c6565b82525050565b600060208201905061014d6000830184610129565b9291505056fea264697066735822122048380cf99ccc609b065c0a932eadc7a73bafaa85e5a34bf29d15b759e1f0f9d264736f6c63430008090033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fc565b610075565b005b61005f6100b8565b60405161006c9190610138565b60405180910390f35b806000819055507f4fe60da0c680ac95894ed55d80adb4e6924c8ce68ad72a4ba65b9479ba786e126000546040516100ad9190610138565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d9816100c6565b81146100e457600080fd5b50565b6000813590506100f6816100d0565b92915050565b600060208284031215610112576101116100c1565b5b6000610120848285016100e7565b91505092915050565b610132816100c6565b82525050565b600060208201905061014d6000830184610129565b9291505056fea264697066735822122048380cf99ccc609b065c0a932eadc7a73bafaa85e5a34bf29d15b759e1f0f9d264736f6c63430008090033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:1374:2","statements":[{"body":{"nodeType":"YulBlock","src":"47:35:2","statements":[{"nodeType":"YulAssignment","src":"57:19:2","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"73:2:2","type":"","value":"64"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"67:5:2"},"nodeType":"YulFunctionCall","src":"67:9:2"},"variableNames":[{"name":"memPtr","nodeType":"YulIdentifier","src":"57:6:2"}]}]},"name":"allocate_unbounded","nodeType":"YulFunctionDefinition","returnVariables":[{"name":"memPtr","nodeType":"YulTypedName","src":"40:6:2","type":""}],"src":"7:75:2"},{"body":{"nodeType":"YulBlock","src":"177:28:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"194:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"197:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"187:6:2"},"nodeType":"YulFunctionCall","src":"187:12:2"},"nodeType":"YulExpressionStatement","src":"187:12:2"}]},"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulFunctionDefinition","src":"88:117:2"},{"body":{"nodeType":"YulBlock","src":"300:28:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"317:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"320:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"310:6:2"},"nodeType":"YulFunctionCall","src":"310:12:2"},"nodeType":"YulExpressionStatement","src":"310:12:2"}]},"name":"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db","nodeType":"YulFunctionDefinition","src":"211:117:2"},{"body":{"nodeType":"YulBlock","src":"379:32:2","statements":[{"nodeType":"YulAssignment","src":"389:16:2","value":{"name":"value","nodeType":"YulIdentifier","src":"400:5:2"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"389:7:2"}]}]},"name":"cleanup_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"361:5:2","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"371:7:2","type":""}],"src":"334:77:2"},{"body":{"nodeType":"YulBlock","src":"460:79:2","statements":[{"body":{"nodeType":"YulBlock","src":"517:16:2","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"526:1:2","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"529:1:2","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"519:6:2"},"nodeType":"YulFunctionCall","src":"519:12:2"},"nodeType":"YulExpressionStatement","src":"519:12:2"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"483:5:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"508:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"490:17:2"},"nodeType":"YulFunctionCall","src":"490:24:2"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"480:2:2"},"nodeType":"YulFunctionCall","src":"480:35:2"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"473:6:2"},"nodeType":"YulFunctionCall","src":"473:43:2"},"nodeType":"YulIf","src":"470:63:2"}]},"name":"validator_revert_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"453:5:2","type":""}],"src":"417:122:2"},{"body":{"nodeType":"YulBlock","src":"597:87:2","statements":[{"nodeType":"YulAssignment","src":"607:29:2","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"629:6:2"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"616:12:2"},"nodeType":"YulFunctionCall","src":"616:20:2"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"607:5:2"}]},{"expression":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"672:5:2"}],"functionName":{"name":"validator_revert_t_uint256","nodeType":"YulIdentifier","src":"645:26:2"},"nodeType":"YulFunctionCall","src":"645:33:2"},"nodeType":"YulExpressionStatement","src":"645:33:2"}]},"name":"abi_decode_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"575:6:2","type":""},{"name":"end","nodeType":"YulTypedName","src":"583:3:2","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"591:5:2","type":""}],"src":"545:139:2"},{"body":{"nodeType":"YulBlock","src":"756:263:2","statements":[{"body":{"nodeType":"YulBlock","src":"802:83:2","statements":[{"expression":{"arguments":[],"functionName":{"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulIdentifier","src":"804:77:2"},"nodeType":"YulFunctionCall","src":"804:79:2"},"nodeType":"YulExpressionStatement","src":"804:79:2"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"777:7:2"},{"name":"headStart","nodeType":"YulIdentifier","src":"786:9:2"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"773:3:2"},"nodeType":"YulFunctionCall","src":"773:23:2"},{"kind":"number","nodeType":"YulLiteral","src":"798:2:2","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"769:3:2"},"nodeType":"YulFunctionCall","src":"769:32:2"},"nodeType":"YulIf","src":"766:119:2"},{"nodeType":"YulBlock","src":"895:117:2","statements":[{"nodeType":"YulVariableDeclaration","src":"910:15:2","value":{"kind":"number","nodeType":"YulLiteral","src":"924:1:2","type":"","value":"0"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"914:6:2","type":""}]},{"nodeType":"YulAssignment","src":"939:63:2","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"974:9:2"},{"name":"offset","nodeType":"YulIdentifier","src":"985:6:2"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"970:3:2"},"nodeType":"YulFunctionCall","src":"970:22:2"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"994:7:2"}],"functionName":{"name":"abi_decode_t_uint256","nodeType":"YulIdentifier","src":"949:20:2"},"nodeType":"YulFunctionCall","src":"949:53:2"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"939:6:2"}]}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"726:9:2","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"737:7:2","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"749:6:2","type":""}],"src":"690:329:2"},{"body":{"nodeType":"YulBlock","src":"1090:53:2","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1107:3:2"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1130:5:2"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"1112:17:2"},"nodeType":"YulFunctionCall","src":"1112:24:2"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1100:6:2"},"nodeType":"YulFunctionCall","src":"1100:37:2"},"nodeType":"YulExpressionStatement","src":"1100:37:2"}]},"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1078:5:2","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1085:3:2","type":""}],"src":"1025:118:2"},{"body":{"nodeType":"YulBlock","src":"1247:124:2","statements":[{"nodeType":"YulAssignment","src":"1257:26:2","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1269:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"1280:2:2","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1265:3:2"},"nodeType":"YulFunctionCall","src":"1265:18:2"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1257:4:2"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1337:6:2"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1350:9:2"},{"kind":"number","nodeType":"YulLiteral","src":"1361:1:2","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1346:3:2"},"nodeType":"YulFunctionCall","src":"1346:17:2"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"1293:43:2"},"nodeType":"YulFunctionCall","src":"1293:71:2"},"nodeType":"YulExpressionStatement","src":"1293:71:2"}]},"name":"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1219:9:2","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1231:6:2","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1242:4:2","type":""}],"src":"1149:222:2"}]},"contents":"{\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n}\\n","id":2,"language":"Yul","name":"#utility.yul"}],"sourceMap":"100:213:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"100:213:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;171:71;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;246:65;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;171:71;213:1;205:5;:9;;;;225:12;231:5;;225:12;;;;;;:::i;:::-;;;;;;;;171:71;:::o;246:65::-;282:4;301:5;;294:12;;246:65;:::o;88:117:2:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o","source":"// SPDX-License-Identifier: MIT\\n//pragma solidity >=0.4.21 <0.7.0;\\npragma solidity >=0.7.0 <0.9.0;\\n\\ncontract SimpleStorage {\\n  uint value;\\n\\n  event isSet(uint value); \\n\\n  function set(uint x) public {\\n    value = x;\\n    emit isSet(value);\\n  }\\n\\n  function get() public view returns (uint) {\\n    return value;\\n  }\\n}\\n","sourcePath":"F:\\\\workspace\\\\alyra\\\\truffle-react\\\\contracts\\\\SimpleStorage.sol","ast":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[67]},"id":68,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.7",".0","<","0.9",".0"],"nodeType":"PragmaDirective","src":"67:31:1"},{"abstract":false,"baseContracts":[],"canonicalName":"SimpleStorage","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":67,"linearizedBaseContracts":[67],"name":"SimpleStorage","nameLocation":"109:13:1","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"value","nameLocation":"132:5:1","nodeType":"VariableDeclaration","scope":67,"src":"127:10:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"127:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"anonymous":false,"id":44,"name":"isSet","nameLocation":"148:5:1","nodeType":"EventDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"indexed":false,"mutability":"mutable","name":"value","nameLocation":"159:5:1","nodeType":"VariableDeclaration","scope":44,"src":"154:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"154:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"153:12:1"},"src":"142:24:1"},{"body":{"id":57,"nodeType":"Block","src":"199:43:1","statements":[{"expression":{"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":49,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"205:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":50,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"213:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"205:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"205:9:1"},{"eventCall":{"arguments":[{"id":54,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"231:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":53,"name":"isSet","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"225:5:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":55,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"225:12:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":56,"nodeType":"EmitStatement","src":"220:17:1"}]},"functionSelector":"60fe47b1","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"set","nameLocation":"180:3:1","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":46,"mutability":"mutable","name":"x","nameLocation":"189:1:1","nodeType":"VariableDeclaration","scope":58,"src":"184:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"184:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"183:8:1"},"returnParameters":{"id":48,"nodeType":"ParameterList","parameters":[],"src":"199:0:1"},"scope":67,"src":"171:71:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":65,"nodeType":"Block","src":"288:23:1","statements":[{"expression":{"id":63,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"301:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":62,"id":64,"nodeType":"Return","src":"294:12:1"}]},"functionSelector":"6d4ce63c","id":66,"implemented":true,"kind":"function","modifiers":[],"name":"get","nameLocation":"255:3:1","nodeType":"FunctionDefinition","parameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"258:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[{"constant":false,"id":61,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":66,"src":"282:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"282:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"281:6:1"},"scope":67,"src":"246:65:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":68,"src":"100:213:1","usedErrors":[]}],"src":"67:247:1"},"legacyAST":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[67]},"id":68,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.7",".0","<","0.9",".0"],"nodeType":"PragmaDirective","src":"67:31:1"},{"abstract":false,"baseContracts":[],"canonicalName":"SimpleStorage","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":67,"linearizedBaseContracts":[67],"name":"SimpleStorage","nameLocation":"109:13:1","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"value","nameLocation":"132:5:1","nodeType":"VariableDeclaration","scope":67,"src":"127:10:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"127:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"anonymous":false,"id":44,"name":"isSet","nameLocation":"148:5:1","nodeType":"EventDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"indexed":false,"mutability":"mutable","name":"value","nameLocation":"159:5:1","nodeType":"VariableDeclaration","scope":44,"src":"154:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"154:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"153:12:1"},"src":"142:24:1"},{"body":{"id":57,"nodeType":"Block","src":"199:43:1","statements":[{"expression":{"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":49,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"205:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":50,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"213:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"205:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"205:9:1"},{"eventCall":{"arguments":[{"id":54,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"231:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":53,"name":"isSet","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"225:5:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":55,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"225:12:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":56,"nodeType":"EmitStatement","src":"220:17:1"}]},"functionSelector":"60fe47b1","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"set","nameLocation":"180:3:1","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":46,"mutability":"mutable","name":"x","nameLocation":"189:1:1","nodeType":"VariableDeclaration","scope":58,"src":"184:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"184:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"183:8:1"},"returnParameters":{"id":48,"nodeType":"ParameterList","parameters":[],"src":"199:0:1"},"scope":67,"src":"171:71:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":65,"nodeType":"Block","src":"288:23:1","statements":[{"expression":{"id":63,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"301:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":62,"id":64,"nodeType":"Return","src":"294:12:1"}]},"functionSelector":"6d4ce63c","id":66,"implemented":true,"kind":"function","modifiers":[],"name":"get","nameLocation":"255:3:1","nodeType":"FunctionDefinition","parameters":{"id":59,"nodeType":"ParameterList","parameters":[],"src":"258:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[{"constant":false,"id":61,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":66,"src":"282:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint","nodeType":"ElementaryTypeName","src":"282:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"281:6:1"},"scope":67,"src":"246:65:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":68,"src":"100:213:1","usedErrors":[]}],"src":"67:247:1"},"compiler":{"name":"solc","version":"0.8.9+commit.e5eed63a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0xB04C97318aC21D533aF4d159ae0b75e8cA939779","transactionHash":"0x88090771f045ab3aa3fbd900d733e1fa1aa81067d1aebaab6b87cff4c9aa7625"},"1637744324662":{"events":{},"links":{},"address":"0xD0b31c1c9062F6dE661b9d317950dA56b814aF6e","transactionHash":"0x703447c66b6d606563c293ac9bceff6707e2fff66c83b253fe327981ddc261e2"},"1637746726089":{"events":{},"links":{},"address":"0xcD3B21502129C94a32d2f01d132373637177313D","transactionHash":"0xa66df668641cd4bb479148e6a9c34d13f3efdd71ecd37dbc22796d318310d3cb"}},"schemaVersion":"3.4.3","updatedAt":"2021-11-29T11:09:53.439Z","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')}},[[12,1,2]]]);
//# sourceMappingURL=main.b06adf8a.chunk.js.map