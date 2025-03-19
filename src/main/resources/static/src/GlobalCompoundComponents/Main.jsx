import React, {useContext} from 'react';
import MainPage from "../Pages/MainPage.jsx";
import Form from "./Form.jsx";
import {UseApiCallHook} from "../Hooks/useApiCallHook.js";
import {UserContext} from "../GlobalContext/UserContext.jsx";

function Main() {


    return (
        <div>
            <Form headers={[{tag: "h1", text: "Signup"}]}
                  inputs={[{type: "text", placeholder: "Enter your firstname", name: "firstname"},
                      {type: "text", placeholder: "Enter your lastname", name: "lastname"},
                      {type: "email", placeholder: "Enter your email", name: "email"},
                      {type: "password", placeholder: "Enter your password", name: "password"}
                  ]}
               
                  onSubmit={(e, formData) => {

                      UseApiCallHook.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, formData)
                          .then(() => {
                              // Ha a post kérés sikeres, akkor frissítjük az oldalt
                              window.location.reload(); // Csak most frissítünk, miután a válasz megérkezett
                          }).catch((error) => {
                          console.log("Hiba:", error);
                      });
                      e.preventDefault()
                  }
                  }
            />

        </div>
    );
}

export default Main;