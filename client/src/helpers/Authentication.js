import Cookies from 'universal-cookie';
import {BaseUrl} from "./constants";
import fetch from "cross-fetch";
import AuthQuerystring from "./AuthQuerystring";

const cookies = new Cookies();

export default function Authentication(props) {
    fetch(BaseUrl + '/api/authenticate' + AuthQuerystring())
        .then(function (response) {
            if (response.status == 401) {
                props.history.push("/login");
            }
        })

     if (cookies.get("username") && cookies.get("password")) {
         return true;
     }

     return false;
}
