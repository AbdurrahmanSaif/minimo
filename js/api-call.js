
//company logo data
getLogoData().then((data) =>{
  document.getElementById(
    "company-logo"
  ).innerHTML = `<a href="${data.url}"><img src="${data.image}" alt="" class="img-responsive"></a>`;
});


//menus data
getNavData().then((menuData) =>{
  document.getElementById(
    "menus"
  ).innerHTML = `<li><a href="${menuData.url}">${menuData.name}</a></li>`;
})
// var data = nav.map((navData) => {
//   return `<li><a href="#">${navData.name}</a></li>`;
// });
// document.getElementById("menus").innerHTML = data.join("");



//banner image data
getBannerData().then((data)=>{
document.getElementById(
  "banner-img"
).innerHTML = `<img src="${data.banner_img}" alt="" class="img-responsive">`;
});

//photodiary data
photodiary = getPhotodiaryData().then((data) =>{
  document.getElementById(
    "photodiary-data"
  ).innerHTML = `<h4>${data.about}</h4>
  <h2>${data.heading}</h2>
  <div class="pd-sec-text">
    <p>${data.paragraph}</p>
  </div>
  <h4>${data.message}</h4>`;
});

//blog sec data
var blog_sec = getBlogSecData();
var data = blog_sec.map((blogSecData) => {
  return `<li class="blog-sec-li-margin">
                        <div class="blog-img">
                          <img src="${blogSecData.blog_img}" alt="" class="img-responsive">
                        </div>
                        <h4>${blogSecData.about}</h4>
                        <h2>${blogSecData.heading}</h2>
                        <p>${blogSecData.paragraph}</p>
                      </li>`;
});
document.getElementById("my-blog").innerHTML = data.join("");

//news letter data
var news_letter = getNewsData();
document.getElementById("newsletter-heading").innerHTML = news_letter;

//blog-sec2 data
var blog_sec2 = getBlogSec2Data();
var data = blog_sec2.map((blogSecData) => {
  return `<li class="blog-sec-li-margin">
             <div class="blog-img">
               <img src="${blogSecData.blog_img}" alt="" class="img-responsive">
             </div>
             <h4>${blogSecData.about}</h4>
             <h2>${blogSecData.heading}</h2>
             <p>${blogSecData.paragraph}</p>
          </li>`;
});
document.getElementById("my-blog2").innerHTML = data.join("");

//load btn data
var load_btn = getLoadBtnData();
var data = `
  <a href="${load_btn.url}">${load_btn.btnName}</a>`;
document.getElementById("load-btn").innerHTML = data;

//footer copyright data
var copyright = getCopyrightData();
var data = copyright.map((copyrightData) => {
  return `<li><a href="${copyrightData.url}">${copyrightData.name}</a></li>`;
});
document.getElementById("copyright-data").innerHTML = data.join("");

//footer social-icons data
var footer_icons = getSocialIconsData();
var data = `
  <li>${footer_icons.heading}</li>
  <li>
    <a href="#">
      <i class="${footer_icons.icon1}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${footer_icons.icon2}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${footer_icons.icon3}"></i>
    </a>
  </li>
  `;
  document.getElementById("social-icons").innerHTML = data;

