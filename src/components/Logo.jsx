import React from 'react';
import './logo.css';
import NavNotifications from './NavNotifications';
import { Button, Popover } from "flowbite-react";

const Logo = () => {

  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="logo">
      <span> NASA IT </span>
      <i
        class="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
      <input type="text" placeholder="Search..." /> <i class="bi bi-search"></i>
      {/* <div className='notificationicon'>
        <Popover
          aria-labelledby="default-popover"
          content={
            <div >
              <div>
                <h3 id="default-popover" >Popover title</h3>
              </div>
              <div>
                <p>And here's some amazing content. It's very engaging. Right?</p>
              </div>
            </div>
          }
        >
          <Button> <i class="bi bi-bell-fill"></i> </Button>
        </Popover>
      </div> */}
      <div className="notificationicon">
        <Popover
          // aria-labelledby="default-popover"
          content={
            <div style={{ width: "300px" }}>
              <div>
                <h3 id="default-popover" style={{ marginBottom: "10px" }}>
                  Notifications
                </h3>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  And here's some amazing content. It's very engaging. Right?
                  hgwekifwenflkwe hjwebfiwe jhbefn e ewkwenfcnfwe
                </p>
              </div>
            </div>
          }
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              padding: 0,
              outline: "none",
            }}
            // Add this line
            onFocus={(e) => (e.target.style.outline = "none")}
          >
            <i className="bi bi-bell-fill"></i>

            <h6> 5 </h6>
          </button>
        </Popover>
      </div>
      <div className="settings">
        <Popover
          aria-labelledby="default-popover"
          content={
            <div style={{ width: "250px" }}>
              <div style={{ fontSize: "16px", padding: "25px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    color: "blue",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {" "}
                  <i class="bi bi-person-gear"></i>
                  Edit Profile
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    color: "blue",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {" "}
                  <i class="bi bi-person-lock"></i>
                  Change password
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    color: "blue",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {" "}
                  <i class="bi bi-box-arrow-left"></i>
                  Logout
                </p>
              </div>
            </div>
          }
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              padding: 0,
              outline: "none",
            }}
            // Add this line
            onFocus={(e) => (e.target.style.outline = "none")}
          >
            <i className="bi bi-person-circle"></i>
          </button>
        </Popover>
      </div>
    </div>
  );
}

export default Logo;
