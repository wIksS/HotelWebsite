import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function AuthQuerystring (){
    let username = cookies.get("username");
    let password = cookies.get("password");
    if (username && password ){
        return "?username="+username + "&password=" + password;
    }

    return "";
}