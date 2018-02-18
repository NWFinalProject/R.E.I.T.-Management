import axios from "axios";

export default {
  getRequests: function(ourUser) {
    return axios.get("/requests", {
      params: {
        username: ourUser.username
      }
    });
  },

getAdminRequests:function(){
  return axios.get("/Adminrequests");
},
 saveRequests: function(requestsData) {
    return axios.post("/newrequest", requestsData);
  },

  newUser: function(newUser){
    return axios.post("/signup", newUser);
  },

adminUpdate: function(data) {
    console.log('we hit the admin update!!')
    return axios.post("/adminupdate", data);
  },
contUpdate: function(data){
  return axios.post("/contupdate",data);
}

}

