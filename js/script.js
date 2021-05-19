let apiUrl = "http://localhost:3000";

async function getLogoData() {
  let response = await axios.get(`${apiUrl}/logo`);
  let data = response.data;
  return {
    image: data.img,
    url: data.url,
  };
}

async function getNavData() {
  let response = await axios.get(`${apiUrl}/menus`);
  let data = response.data;
  return [
    {
      name: "data[0].name",
      url: "data[0].url",
    },
    {
      name: "data[1].name",
      url: "data[1].url",
    },
    {
      name: "data[2].name",
      url: "data[2].url",
    },
    {
      name: "data[3].name",
      url: "data[3].url",
    },
  ];
}

async function getBannerData() {
  let response = await axios.get(`${apiUrl}/banner_data`);
  let data = response.data;
  return {
    banner_img: data.banner_img,
  };
}

async function getPhotodiaryData() {
  let response = await axios.get(`${apiUrl}/photodairy`);
  let data = response.data;
  return {
    about: data.about,
    heading: data.heading,
    paragraph: data.paragraph,
    message: data.message,
  };
}

function getBlogSecData() {
  return [
    {
      blog_img: "images/blog-img2.jpg",
      about: "Lifestyle",
      heading: "More than just a music festival",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
    {
      blog_img: "images/blog-img2.jpg",
      about: "Lifestyle",
      heading: "Life tastes better with coffee",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
    {
      blog_img: "images/blog-img3.jpg",
      about: "Lifestyle",
      heading: "American dream",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
    {
      blog_img: "images/blog-img4.jpg",
      about: "Lifestyle",
      heading: "A day exploring the Alps",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
  ];
}

function getNewsData() {
  return "Sign up for our newsletter!";
}

function getBlogSec2Data() {
  return [
    {
      blog_img: "images/blog-img1.jpg",
      about: "Lifestyle",
      heading: "More than just a music festival",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
    {
      blog_img: "images/blog-img2.jpg",
      about: "Lifestyle",
      heading: "Life tastes better with coffee",
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
    },
  ];
}

function getLoadBtnData() {
  return {
    btnName: "Load more",
    url: "index.html",
  };
}

function getCopyrightData(){
  return [
    {
      name: "Terms & Conditions",
      url: "#",
    },
    {
      name: "Policy",
      url: "#",
    },
  ];
}

function getSocialIconsData(){
  return {
    heading: "Follow",
    icon1: "fab fa-facebook-f",
    icon2: "fab fa-twitter",
    icon3: "fab fa-instagram",
  };
}
