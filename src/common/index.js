// const backendDomain = "http://192.168.1.138/jyothi_clg";

const backendDomain = "https://demo.oakyaitservices.in/api/";



const SummaryApi = {
  adminevents: {
    url: `${backendDomain}/events/adminevents.php`,
    method: "get",
  },
  getevents: {
    url: `${backendDomain}/events/retrieve.php`,
    method: "get",
  },
  images: {
    url: `${backendDomain}/events/images`,
  },
  createEvent: {
    url: `${backendDomain}/events/create.php`,
    method: "post",
  },
  updateEvent: {
    url: `${backendDomain}/events/update.php`,
    method: "post",
  },
  createContact:{                   
    url: `${backendDomain}/contact/create.php`,
  method: "post",
  },
  createadmission:{
    url: `${backendDomain}/admission/create.php`,
  method: "post",
  },
  getContact: {
    url: `${backendDomain}/contact/retrieve.php`,
    method: "get",
  },
  getAdmissions: {
    url: `${backendDomain}/admission/retrieve.php`,
    method: "get",
  },
  getNews: {
    url: `${backendDomain}/news/retrieve.php`,
    method: "get",
  },
  createNews: {
    url: `${backendDomain}/news/create.php`,
    method: "post",
  },
  updateNews: {
    url: `${backendDomain}/news/update.php`,
    method: "post",
  },
  adminContact: {
    url: `${backendDomain}/contact/admincontact.php`,
    method: "get",
  },
  adminAdmission: {
    url: `${backendDomain}/admission/adminadmission.php`,
    method: "get",
  },
  adminNews: {
    url: `${backendDomain}/news/adminnews.php`,
    method: "get",
  },
  adminLogin:{
    url: `${backendDomain}/admin/login.php`,
    method: "post",
  },
  getCounts:{
    url: `${backendDomain}/dashboard/counts.php`,
    method: "get",
  }
};

export default SummaryApi;
