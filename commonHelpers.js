import{S as d,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(n){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"45227925-dc4eec2d8e9c6a7da21dc7ebe",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${a}`;return fetch(e).then(t=>t.json())}const p=new d(".gallery li",{captionsData:"alt",captionDelay:250});function f(n){const o=n.map(r=>`<li class="gallery-item"
      <a class="gallery-link" href="${r.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags} " />
          <div class="image-info">
               <p>LIKES: ${r.likes}</p>
                    <p>VIEWS: ${r.views}</p>
                    <p>COMMENTS: ${r.comments}</p>
                    <p>DOWNLOADS: ${r.downloads}</p>
                </div>
            </a>
            </li>
        `).join("");i.imgGallery.innerHTML=o,p.refresh()}function h(){i.loader.classList.remove("hidden")}function l(){i.loader.classList.add("hidden")}function u(){i.formSearch.reset()}const i={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.formSearch.addEventListener("submit",n=>{n.preventDefault();const o=i.inputImgSearch.value.trim();if(o===""){i.imgGallery.innerHTML=" ",c.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once"});return}h(),i.imgGallery.innerHTML=" ",m(o).then(({hits:r})=>{if(r.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",layout:2,position:"topRight",displayMode:"once"}),l(),u();return}l(),f(r),u()}).catch(r=>{l(),c.error({title:"Error",message:`${r}`,layout:2,position:"topRight",displayMode:"once"})})});
//# sourceMappingURL=commonHelpers.js.map
