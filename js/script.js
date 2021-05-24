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

async function getBlogSecData() {
  let response = await axios.get(`${apiUrl}/blog_sec_data`);
  let data = response.data;
  return [
    {
      blog_img: data[0].blog_img,
      about: data[0].about,
      heading: data[0].heading,
      paragraph:data[0].paragraph,
    },
    {
      blog_img: data[1].blog_img,
      about: data[1].about,
      heading: data[1].heading,
      paragraph:data[1].paragraph,
    },
    {
      blog_img: data[2].blog_img,
      about: data[2].about,
      heading: data[2].heading,
      paragraph:data[2].paragraph,
    },
    {
      blog_img: data[3].blog_img,
      about: data[3].about,
      heading: data[3].heading,
      paragraph:data[3].paragraph,
    }
  ];
}

async function getNewsData() {
  let response = await axios.get(`${apiUrl}/newsletter`);
  let data = response.data;
  return {heading: data.heading};
}

async function getBlogSec2Data() {
  let response = await axios.get(`${apiUrl}/blog_sec_data2`);
  let data = response.data;
  return [
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
}

async function getLoadBtnData() {
  let response = await axios.get(`${apiUrl}/blog_sec_button`);
  let data = response.data;
  return {
    name: data.name,
    name: data.name
  };
}

async function getCopyrightData(){
  let response = await axios.get(`${apiUrl}/copyright`);
  let data = response.data;
  return [
    {
      name: data[0].name,
      url: data[0].url,
    },
    {
      name: data[1].name,
      url: data[1].url,
    },
  ];
}

async function getSocialIconsData(){
  let response = await axios.get(`${apiUrl}/social_icons`)
  return {
    heading: "Follow",
    icon1: "fab fa-facebook-f",
    icon2: "fab fa-twitter",
    icon3: "fab fa-instagram",
  };
}
