//company logo data
getLogoData().then((data) => {
  document.getElementById(
    "company-logo"
  ).innerHTML = `<a href="${data.url}"><img src="${data.image}" alt="" class="img-responsive"></a>`;
});

//menus data
getNavData().then((menuData) => {
  let newData = menuData.map(
    (d) => `<li><a href="${d.url}">${d.name}</a></li>`
  );
  document.getElementById("menus").innerHTML = newData.join("");
});

//banner image data
getBannerData().then((data) => {
  document.getElementById(
    "banner-img"
  ).innerHTML = `<img src="${data.banner_img}" alt="" class="img-responsive">`;
});

//photodiary data
photodiary = getPhotodiaryData().then((data) => {
  document.getElementById("photodiary-data").innerHTML = `<h4>${data.about}</h4>
  <h2>${data.heading}</h2>
  <div class="pd-sec-text">
    <p>${data.paragraph}</p>
  </div>
  <h4>${data.message}</h4>`;
});

//blog sec data
getBlogSecData().then((data) => {
  let newData = data.map(
    (d) => `<li class="blog-sec-li-margin">
  <div class="blog-img">
    <img src="${d.blog_img}" alt="" class="img-responsive">
  </div>
  <h4>${d.about}</h4>
  <h2>${d.heading}</h2>
  <p>${d.paragraph}</p>
</li>`
  );
  document.getElementById("my-blog").innerHTML = newData.join("");
});


//news letter data
getNewsData().then((data) => {
  document.getElementById("newsletter-heading").innerHTML = data.heading;
});

//blog-sec2 data
getBlogSec2Data().then((data) => {
  let newData = data.map(
    (d) => `<li class="blog-sec-li-margin">
  <div class="blog-img">
    <img src="${d.blog_img}" alt="" class="img-responsive">
  </div>
  <h4>${d.about}</h4>
  <h2>${d.heading}</h2>
  <p>${d.paragraph}</p>
</li>`
  );
  document.getElementById("my-blog2").innerHTML = newData.join("");
});

//load btn data
getLoadBtnData().then((data) => {
  document.getElementById("load-btn").innerHTML = `
  <a href="${data.url}">${data.name}</a>`;
});

//footer copyright data
getCopyrightData().then((data) => {
  console.log(data)
  let newData = data.map((d) => `<li><a href="${d.url}">${d.name}</a></li>`)
  document.getElementById(
    "copyright-data"
  ).innerHTML =  newData.join("");
});


//footer social-icons data
getSocialIconsData().then((data) => {
  document.getElementById("social-icons").innerHTML = `
  <li>${data.heading}</li>
  <li>
    <a href="#">
      <i class="${data.icon1}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${data.icon2}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${data.icon3}"></i>
    </a>
  </li>
  `;
});
