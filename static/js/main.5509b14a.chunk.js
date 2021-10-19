(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__FF1-w",title:"ImageGallery_title__2UkS1"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2IjDc",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1YBuU"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__wo4vi",Modal:"Modal_Modal__2ZAdq"}},15:function(e,t,a){e.exports={Button:"ButtonLoadMore_Button__1FRcQ"}},17:function(e,t,a){e.exports={loader:"LoaderSpinner_loader__3LvQr"}},22:function(e,t,a){},24:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(22),a(3)),s=a(4),l=a(6),m=a(5),u=a(7),h=(a(23),a(24),a(9)),g=a.n(h),d=a(1),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageName:""},e.onSubmitForm=function(t){var a=e.state.imageName,n=e.props.onSubmit;if(t.preventDefault(),""===a.trim())return u.c.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438!");n(a),e.setState({imageName:""})},e.onChangeImageName=function(t){var a=t.target;e.setState({imageName:a.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=this.onSubmitForm,a=this.onChangeImageName,n=e.imageName;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:t,children:[Object(d.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(d.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{name:"imageName",value:n,className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})]})})})}}]),a}(n.Component),b=p,j=a(14),f=a(11),O=a.n(f),v=a(12),y=a.n(v),S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.images;return Object(d.jsx)(d.Fragment,{children:e&&e.map((function(e){return Object(d.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:e.webformatURL,alt:e.tags,className:y.a.ImageGalleryItemImage,"data-image":e.largeImageURL})},e.id)}))})}}]),a}(n.Component),_=S;var I={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23025169-5a1370e5bf826cff1ac1e8732","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},x=a(15),N=a.n(x),M=a(16),w=a.n(M),F=a(17),k=a.n(F),C=function(){return Object(d.jsx)("div",{className:k.a.loader,children:Object(d.jsx)(w.a,{type:"Bars",color:"#3f51b5",height:200,width:200,timeout:1500})})},B=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={page:1,loading:!1},e.buttonLoadMore=function(){var t=e.props,a=t.imageName,n=t.loadMore,o=e.state.page;e.setState({loading:!0}),setTimeout((function(){I.fetchImages(a,o+1).then((function(e){0===e.hits.length?u.c.info("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat('"'.concat(a,'"')," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435.")):n(e.hits)})).then(e.setState({page:o+1})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({loading:!1})}))}),1e3)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.imageName;e.imageName!==a&&this.setState({page:1,imageName:""})}},{key:"render",value:function(){var e=this.state,t=this.buttonLoadMore,a=e.loading;return Object(d.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:a?Object(d.jsx)(C,{}):Object(d.jsx)("p",{children:"Load more"})})}}]),a}(n.Component),G=B,L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],page:1,status:"idle"},e.loadMore=function(t){var a=e.state.images;e.setState({images:[].concat(Object(j.a)(a),Object(j.a)(t))})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.imageName,o=this.state,r=o.page,c=o.images;e.imageName!==n&&(this.setState({status:"pending"}),setTimeout((function(){I.fetchImages(n,r).then((function(e){0===e.hits.length?u.c.info("\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat('"'.concat(n,'"')," \u043d\u0435\u0442. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435.")):a.setState({images:e.hits,status:"resolved"})})).catch((function(e){return console.log(e)}))}),1e3)),t.images!==c&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=this.loadMore,a=e.images,n=e.status,o=this.props,r=o.imageName,c=o.onOpenModal;return"idle"===n?Object(d.jsx)("h2",{className:O.a.title,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}):"pending"===n?Object(d.jsx)(C,{}):"resolved"===n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:O.a.ImageGallery,onClick:c,children:Object(d.jsx)(_,{images:a})}),a.length>0&&Object(d.jsx)(G,{images:a,imageName:r,loadMore:t})]}):void 0}}]),a}(n.Component),D=L,A=a(13),U=a.n(A),T=document.querySelector("#modal-root"),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.onOverlayModalClick=function(t){t.target===t.currentTarget&&e.props.onCloseModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props.children,t=this.onOverlayModalClick;return Object(r.createPortal)(Object(d.jsx)("div",{className:U.a.Overlay,onClick:t,children:Object(d.jsx)("div",{className:U.a.Modal,children:e})}),T)}}]),a}(n.Component),q=E,R=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageName:0,showModal:!1,currentImage:"",page:1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(t){var a=t.target;"IMG"===a.nodeName&&e.setState((function(e){var t=e.showModal;return{currentImage:a.dataset.image,showModal:!t}}))},e.onSubmitForm=function(t){e.setState({imageName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=this.toggleModal,a=this.onSubmitForm,n=this.onOpenModal,o=e.showModal,r=e.currentImage,c=e.imageName;return Object(d.jsxs)("div",{className:"App",children:[o&&Object(d.jsx)(q,{onCloseModal:t,children:Object(d.jsx)("img",{src:r,alt:"",width:"950"})}),Object(d.jsx)(b,{onSubmit:a}),Object(d.jsx)(D,{imageName:c,onOpenModal:n}),Object(d.jsx)(u.a,{autoClose:3e3,position:"bottom-right",transition:u.b})]})}}]),a}(n.Component),K=R;c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3sPRp",SearchForm:"Searchbar_SearchForm__2qCZz",SearchFormButton:"Searchbar_SearchFormButton__ei_t2",SearchFormBbutton:"Searchbar_SearchFormBbutton__3nYvT",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__25NaT",SearchFormInput:"Searchbar_SearchFormInput__dI9Wx"}}},[[46,1,2]]]);
//# sourceMappingURL=main.5509b14a.chunk.js.map