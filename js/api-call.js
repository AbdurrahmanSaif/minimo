//company logo data
getData("logo").then((response) => {
  let data = response.data;
  let newData = {
    image: data.img,
    url: data.url,
  };
  document.getElementById(
    "company-logo"
  ).innerHTML = `<a href="${newData.url}"><img src="${newData.image}" alt="" class="img-responsive"></a>`;
});

//menus data
getData("menus").then((response) => {
  let data = response.data;
  let newData = [
    {
      name: data[0].name,
      url: data[0].url,
    },
    {
      name: data[1].name,
      url: data[1].url,
    },
    {
      name: data[2].name,
      url: data[2].url,
    },
    {
      name: data[3].name,
      url: data[3].url,
    },
  ];
  let all_li = newData.map((d) => `<li><a href="${d.url}">${d.name}</a></li>`);
  document.getElementById("menus").innerHTML = all_li.join("");
});

//banner image data
getData("banner_data").then((response) => {
  let data = response.data;
  let newData = {
    banner_img: data.banner_img,
  };
  document.getElementById(
    "banner-img"
  ).innerHTML = `<img src="${newData.banner_img}" alt="" class="img-responsive">`;
});

//photodiary data
getData("photodairy").then((response) => {
  let data = response.data;
  let newData = {
    about: data.about,
    heading: data.heading,
    paragraph: data.paragraph,
    message: data.message,
  };
  document.getElementById(
    "photodiary-data"
  ).innerHTML = `<h4>${newData.about}</h4>
  <h2>${newData.heading}</h2>
  <div class="pd-sec-text">
    <p>${newData.paragraph}</p>
  </div>
  <h4>${newData.message}</h4>`;
});

//blog sec data

getData("blog_sec_data").then((response) => {
  let data = response.data;
  let newData = [
    {
      blog_img: data[0].blog_img,
      about: data[0].about,
      heading: data[0].heading,
      paragraph: data[0].paragraph,
    },
    {
      blog_img: data[1].blog_img,
      about: data[1].about,
      heading: data[1].heading,
      paragraph: data[1].paragraph,
    },
    {
      blog_img: data[2].blog_img,
      about: data[2].about,
      heading: data[2].heading,
      paragraph: data[2].paragraph,
    },
    {
      blog_img: data[3].blog_img,
      about: data[3].about,
      heading: data[3].heading,
      paragraph: data[3].paragraph,
    },
  ];
  let all_li = data.map(
    (d) => `<li class="blog-sec-li-margin">
  <div class="blog-img">
    <img src="${d.blog_img}" alt="" class="img-responsive">
  </div>
  <h4>${d.about}</h4>
  <h2>${d.heading}</h2>
  <p>${d.paragraph}</p>
</li>`
  );
  document.getElementById("my-blog").innerHTML = all_li.join("");
});

//news letter data
getData("newsletter").then((response) => {
  let data = response.data;
  let newData = { heading: data.heading };
  document.getElementById("newsletter-heading").innerHTML = newData.heading;
});

//blog-sec2 data
getData("blog_sec_data2").then((response) =>{
  let data = response.data;
  let newData = [
    {
      blog_img: data[0].blog_img,
      about: data[0].about,
      heading: data[0].heading,
      paragraph: data[0].paragraph,
    },
    {
      blog_img: data[1].blog_img,
      about: data[1].about,
      heading: data[1].heading,
      paragraph: data[1].paragraph,
    }
  ];
  let all_li = newData.map(
    (d) => `<li class="blog-sec-li-margin">
  <div class="blog-img">
    <img src="${d.blog_img}" alt="" class="img-responsive">
  </div>
  <h4>${d.about}</h4>
  <h2>${d.heading}</h2>
  <p>${d.paragraph}</p>
</li>`
  );
  document.getElementById("my-blog2").innerHTML = all_li.join("");
})
 
//load btn data
getData("blog_sec_button").then((response) => {
  let data = response.data;
  let newData = {
    name: data.name,
    name: data.name
  };
  document.getElementById("load-btn").innerHTML = `
  <a href="${newData.url}">${newData.name}</a>`;
})

//footer copyright data
getData("copyright").then((response) =>{
  let data = response.data;
  let newData = [
    {
      name: data[0].name,
      url: data[0].url,
    },
    {
      name: data[1].name,
      url: data[1].url,
    },
  ];

  let all_li = newData.map((d) => `<li><a href="${d.url}">${d.name}</a></li>`);
  document.getElementById("copyright-data").innerHTML = all_li.join("");
})

//footer social-icons data
getData("social_icons").then((response) => {
  let data = response.data;
  let newData =  {
    heading: "Follow",
    icon1: "fab fa-facebook-f",
    icon2: "fab fa-twitter",
    icon3: "fab fa-instagram",
  };
  document.getElementById("social-icons").innerHTML = `
  <li>${newData.heading}</li>
  <li>
    <a href="#">
      <i class="${newData.icon1}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${newData.icon2}"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="${newData.icon3}"></i>
    </a>
  </li>
  `;
})

