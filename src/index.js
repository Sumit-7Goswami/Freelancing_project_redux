import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//Module not found: Error: Can't resolve 'react-toastify' in 'F:\project resume\cart_startups_hackathon\src'
// Ensure you have installed react-toastify using npm or yarn
//how to install react-toastify
//npm install react-toastify

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter>
 
            <Provider store={Store}>
                <App />
                <Toaster/>
            </Provider>


    </BrowserRouter>

);
