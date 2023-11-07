/*! For license information please see components-Input-TextArea-TextArea-stories.1fc51742.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesigner_hire_ds=self.webpackChunkdesigner_hire_ds||[]).push([[48],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/components/Input/TextArea/TextArea.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextAreaDefault:function(){return TextAreaDefault},TextAreaTyped:function(){return TextAreaTyped},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TextArea_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),theme=__webpack_require__("./src/theme/theme.ts"),getBorderColor=__webpack_require__("./src/components/getBorderColor.ts"),useInput=__webpack_require__("./src/components/Input/hook/useInput.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextArea(_ref){var value=_ref.value,_onChange=_ref.onChange,fullWidth=_ref.fullWidth,placeholder=_ref.placeholder,_ref$rows=_ref.rows,rows=void 0===_ref$rows?3:_ref$rows,_useInput=(0,useInput.Z)(),textareaRef=_useInput.textareaRef,isFocused=_useInput.isFocused;return(0,jsx_runtime.jsx)("textarea",{rows:rows,ref:textareaRef,className:"".concat(theme.r.text.body1," ").concat((0,getBorderColor.k)(void 0,isFocused,value)," ").concat(fullWidth?"w-full":"w-max"," resize-none py-4 px-3 disabled:bg-background disabled:text-gray-50 rounded-lg w-full border outline-none placeholder:text-gray-50 text-gray-90 caret-primary-50"),placeholder:placeholder,onChange:function onChange(e){return _onChange(e.target.value)},value:null!=value?value:""})}try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{rows:{defaultValue:{value:"3"},description:"",name:"rows",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value?: string | undefined) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/Input/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var _TextAreaDefault$para,_TextAreaDefault$para2,_TextAreaDefault$para3,_TextAreaTyped$parame,_TextAreaTyped$parame2,_TextAreaTyped$parame3,react=__webpack_require__("./node_modules/react/index.js"),TextArea_stories={title:"Components/Input/TextArea",component:TextArea,tags:["autodocs"]},TextAreaDefault={args:{placeholder:"두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다."},decorators:[function(Story,context){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(Story,{args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},context.args),{},{value:value,onChange:function onChange(e){return setValue(e)}})})}]},TextAreaTyped={args:{placeholder:"플레이스홀더"},decorators:[function(Story,context){var _useState3=(0,react.useState)("두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다."),_useState4=(0,slicedToArray.Z)(_useState3,2),value=_useState4[0],setValue=_useState4[1];return(0,jsx_runtime.jsx)(Story,{args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},context.args),{},{value:value,onChange:function onChange(e){return setValue(e)}})})}]};TextAreaDefault.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},TextAreaDefault.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_TextAreaDefault$para=TextAreaDefault.parameters)||void 0===_TextAreaDefault$para?void 0:_TextAreaDefault$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    placeholder: `두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.`\n  },\n  decorators: [(Story, context) => {\n    // useState를 사용하여 value 상태를 관리합니다.\n    const [value, setValue] = useState<string | undefined>('');\n    return <Story args={{\n      ...context.args,\n      value,\n      // useState로 생성된 value 상태를 전달합니다.\n      onChange: e => setValue(e) // onChange 핸들러를 정의합니다.\n    }} />;\n  }]\n}"},null===(_TextAreaDefault$para2=TextAreaDefault.parameters)||void 0===_TextAreaDefault$para2||null===(_TextAreaDefault$para3=_TextAreaDefault$para2.docs)||void 0===_TextAreaDefault$para3?void 0:_TextAreaDefault$para3.source)})}),TextAreaTyped.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},TextAreaTyped.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_TextAreaTyped$parame=TextAreaTyped.parameters)||void 0===_TextAreaTyped$parame?void 0:_TextAreaTyped$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    placeholder: `플레이스홀더`\n  },\n  decorators: [(Story, context) => {\n    // useState를 사용하여 value 상태를 관리합니다.\n    const [value, setValue] = useState<string | undefined>(`두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.\n두줄 이상 긴 텍스트 입력 시 인풋창 입니다.`);\n    return <Story args={{\n      ...context.args,\n      value,\n      // useState로 생성된 value 상태를 전달합니다.\n      onChange: e => setValue(e) // onChange 핸들러를 정의합니다.\n    }} />;\n  }]\n}"},null===(_TextAreaTyped$parame2=TextAreaTyped.parameters)||void 0===_TextAreaTyped$parame2||null===(_TextAreaTyped$parame3=_TextAreaTyped$parame2.docs)||void 0===_TextAreaTyped$parame3?void 0:_TextAreaTyped$parame3.source)})});var __namedExportsOrder=["TextAreaDefault","TextAreaTyped"]},"./src/components/Input/hook/useInput.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useInput}});var _Users_jake_matches_designer_hire_ds_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInput(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_Users_jake_matches_designer_hire_ds_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),isFocused=_useState2[0],setIsFocused=_useState2[1],inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),textareaRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleFocus=function handleFocus(){return setIsFocused(!0)},handleBlur=function handleBlur(){return setIsFocused(!1)},node=inputRef.current,nodeTextarea=textareaRef.current;return node&&(node.addEventListener("focus",handleFocus),node.addEventListener("blur",handleBlur)),nodeTextarea&&(nodeTextarea.addEventListener("focus",handleFocus),nodeTextarea.addEventListener("blur",handleBlur)),function(){node&&(node.removeEventListener("focus",handleFocus),node.removeEventListener("blur",handleBlur)),nodeTextarea&&(nodeTextarea.removeEventListener("focus",handleFocus),nodeTextarea.removeEventListener("blur",handleBlur))}}),[]),{isFocused:isFocused,inputRef:inputRef,textareaRef:textareaRef}}},"./src/components/getBorderColor.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getBorderColor(error,isFocused,value){return error?"border-red-30":isFocused&&!value?"border-primary-40":isFocused&&value?"border-primary-50":"border-gray-20"}__webpack_require__.d(__webpack_exports__,{k:function(){return getBorderColor}})},"./src/theme/theme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return theme}});var theme={text:{hero:"text-hero leading-hero",heading1:"text-heading1 leading-heading1",heading2:"text-heading2 leading-heading2",heading3:"text-heading3 leading-heading3",body1:"text-body1 leading-body1",body2:"text-body2 leading-body2",caption:"text-caption leading-caption",caption2:"text-caption2 leading-caption2"}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);