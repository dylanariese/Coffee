// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
// import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "./models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@Injectable()
export class UserService {
    user:User;
    private serverUrl = "http://localhost:50764/api/users";
    //private serverUrl = "https://httpbin.org/get";

    constructor(private http: HttpClient) { }

    getData() {
        // let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl);
    }

    
    register(user: User) {

        this.user = user;
        // return Kinvey.User.signup({ username: user.email, password: user.password })
        //     .catch(this.handleErrors);
    }

    getUser()
    {
        return this.user;
    }

    getUsers(){
        return null;
    }

    login(user: User) {
        // return Kinvey.User.login(user.email, user.password)
        //     .catch(this.handleErrors);
    }

    logout() {
        // return Kinvey.User.logout()
        //     .catch(this.handleErrors);
    }

    resetPassword(email) {
        // return Kinvey.User.resetPassword(email)
        //     .catch(this.handleErrors);
    }

    // handleErrors(error: Kinvey.BaseError) {
    //     console.error(error.message);
    //     return Promise.reject(error.message);
    // }
}
