import React from 'react';
import Modal from 'react-responsive-modal';
import fetch from "cross-fetch";
import {BaseUrl} from "../helpers/constants";
import AuthQuerystring from "../helpers/AuthQuerystring";

export default class Login extends React.Component {
    state = {
        open: true,
        email: "",
        password: ""
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    login = () => {
        if (this.state.email && this.state.password) {
            this.writeCookie('username',this.state.email,3);
            this.writeCookie('password',this.state.password,3);

            let self = this;
            fetch(BaseUrl + '/api/authenticate' + AuthQuerystring())
                .then(function (response) {
                    if (response.status == 401) {
                        self.props.history.push("/login");
                    }
                    if (response.status == 200) {
                        self.props.history.push("/");
                    }
                });
        }
    }

     writeCookie =(key, value, hours)=> {
        var date = new Date();

        // Get milliseconds at current time plus number of hours*60 minutes*60 seconds* 1000 milliseconds
        date.setTime(+ date + (hours * 3600000)); //60 * 60 * 1000

        window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

        return value;
    };

    changeEmail = (e) => {
        this.setState({email: e.target.value});
    }
    changePassword = (e) => {
        this.setState({password: e.target.value});
    }


    render() {
        const {open} = this.state;
        return (
            <div>
                <button class="btn btn-primary" onClick={this.onOpenModal}>Press here to log in</button>
                <Modal open={open} classNames={{modal: 'modal-login-react'}} onClose={this.onCloseModal} center>
                    <div className="container">
                        <form className="form-signin">
                            <h2 className="form-signin-heading">Please sign in</h2>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input type="text" id="email" onChange={this.changeEmail.bind(this)}
                                   className="form-control" placeholder="Email address"
                                   required autoFocus/>
                            <br/>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" onChange={this.changePassword.bind(this)}
                                   className="form-control" placeholder="Password"
                                   required/>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" defaultValue="remember-me"/> Remember me
                                </label>
                            </div>
                            <br/>
                            <button className="btn btn-lg btn-primary btn-block" onClick={this.login.bind(this)}
                                    type="submit">Sign in
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}


// import React from 'react';
// import ReactModalLogin from 'react-modal-login';
//
//
// export default class Login extends React.Component {
//
//     constructor(props) {
//         super(props);
//         console.log('test');
//         this.state={email:'',password:''};
//
//         if(!document.isPressed) {
//             document.isPressed = true;
//             document.addEventListener('keypress',this.onChange.bind(this))
//         }
//
//         this.state = {
//             showModal: true,
//             loggedIn: null,
//             loading: false,
//             error: null,
//             initialTab: null,
//             recoverPasswordSuccess: null,
//         };
//
//     }
//
//
//     onLogin() {
//         console.log(this);
//         console.log('__onLogin__');
//         console.log('email: ' + this.state.email);
//         console.log('password: ' + this.password);
//         const email = document.getElementById('email');
//         const password = document.getElementById('password').value;
//         email.onlick = this.onChange;
//         if (!email || !password) {
//             this.setState({
//                 error: true
//             })
//         } else {
//             this.onLoginSuccess('form');
//         }
//     }
//
//     openModal(initialTab) {
//         this.setState({
//             initialTab: initialTab
//         }, () => {
//             this.setState({
//                 showModal: true,
//             })
//         });
//     }
//
//     onLoginSuccess(method, response) {
//
//         this.closeModal();
//         this.setState({
//             loggedIn: method,
//             loading: false
//         })
//     }
//
//     onLoginFail(method, response) {
//
//         this.setState({
//             loading: false,
//             error: response
//         })
//     }
//
//     startLoading() {
//
//         this.setState({
//             loading: true
//         })
//     }
//
//     finishLoading() {
//         console.log('email: ' + document.querySelector('#dasdada').value);
//         this.setState({
//             loading: false,
//         })
//
//     }
//
//     afterTabsChange() {
//         this.setState({
//             error: null,
//
//         });
//         this.onSelectTab("login");
//
//     }
//
//     closeModal() {
//         this.setState({
//             showModal: false,
//             error: null
//         });
//     }
//
//     onSelectTab(tab) {
//         this.setState({
//             newTab: "login"
//         }, () => {
//             this.setState({
//                 newTab: null
//             })
//         })
//     }
//
//     onChange(e){
//         // if (e.repeat) {
//         //     return
//         // }
//         //
//         // var keynum;
//         //
//         // if (window.event) { // IE
//         //     keynum = e.keyCode;
//         // } else if (e.which) { // Netscape/Firefox/Opera
//         //     keynum = e.which;
//         // }
//         //
//         // let char = String.fromCharCode(keynum);
//         //
//         // if (document.activeElement.id = "email"){
//         //     this.email += char;
//         //     console.log(document.activeElement.id);
//         //     console.log(char);
//         // }
//         // if (document.activeElement.id = "password"){
//         //     this.password += char;
//         //     console.log(document.activeElement.id);
//         //     console.log(char);
//         // }
//         //
//         // this.setState({
//         //     email:"fdsfsd"
//         // });
//         //
//         // console.log(this);
//     }
//
//     render() {
//
//         const loggedIn = this.state.loggedIn
//             ? <div>
//                 <p>You are signed in with: {this.state.loggedIn}</p>
//             </div>
//             : <div>
//                 <p>You are signed out</p>
//             </div>;
//
//         const isLoading = this.state.loading;
//
//         return (
//             <div>
//
//                 <button
//                     className="RML-btn"
//                     onClick={() => this.openModal('login')}
//                 >
//                     Login
//                 </button>
//
//
//                 <ReactModalLogin
//                     visible={this.state.showModal}
//                     onCloseModal={this.closeModal.bind(this)}
//                     loading={isLoading}
//                     initialTab={this.state.initialTab}
//                     error={this.state.error}
//                     newTab={this.state.newTab}
//                     tabs={{
//                         afterChange: this.afterTabsChange.bind(this),
//                         registerLabel:"No registration"
//                     }}
//                     startLoading={this.startLoading.bind(this)}
//                     finishLoading={this.finishLoading.bind(this)}
//                     form={{
//                         onLogin: this.onLogin.bind(this),
//
//                         loginBtn: {
//                             label: "Sign in"
//                         },
//                         loginInputs: [
//                             {
//                                 containerClass: 'RML-form-group',
//                                 label: 'Username',
//                                 type: 'text',
//                                 inputClass: 'RML-form-control',
//                                 id: 'email',
//                                 name: 'email',
//                                 placeholder: 'username',
//                             },
//                             {
//                                 containerClass: 'RML-form-group',
//                                 label: 'Password',
//                                 type: 'password',
//                                 inputClass: 'RML-form-control',
//                                 id: 'password',
//                                 name: 'password',
//                                 placeholder: 'Password',
//                             }
//                         ],
//
//                     }}
//                 />
//                 {loggedIn}
//             </div>
//         )
//     }
// }