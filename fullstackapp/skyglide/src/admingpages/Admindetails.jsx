import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Admindetails = () => {
  const [Admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getusers")
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result);
      });
  }, []);
  return (
    <>
        <div class="container-xl px-4 mt-4">
          {/* <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"  target="__blank">Notifications</a>
      </nav> */}
          <div class="row">
            <div class="col-xl-4">
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  {Admin.map((admin) => (
                  <img style={{height:'300px',width:"250px"}}
                    class="img-account-profile rounded-circle mb-2"
                    src={admin.image}
                    alt=""
                  />
                  ))}
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                {Admin.map((admin) => (
                  <form>
                    <div class="mb-3">
                      <label class="small mb-1" for="inputUsername">
                     <b> USERNAME</b>
                      </label>
                      :{admin.username}
                    
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">
                        <b>Name:</b>     
                                           </label>
                                           {admin.username+"Kumar.B"}
               
                      </div>
                     
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputOrgName">
                          Organization name
                        </label>
                   
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputLocation">
                          Location
                        </label>
                    
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="small mb-1" for="inputEmailAddress">
                        Email address
                      </label>
                     
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputPhone">
                          Phone number
                        </label>
                       
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputBirthday">
                          Birthday
                        </label>
                      
                      </div>
                    </div>
                    <button class="btn btn-primary" type="button">
                      Save changes
                    </button>
                  </form>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default Admindetails;
