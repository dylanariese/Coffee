import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../shared/user.model";
import { device } from "tns-core-modules/platform/platform";
import { UserService } from "../shared/user.service";


@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("name") name: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private userService: UserService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.name  = "Jan Jansen";
        this.user.uuid = device.uuid;
    }

    submit() {
        if (!this.user.name) {
            this.alert("Please provide a name.");
            return;
        }

        this.register();

        // this.processing = true;
        // if (this.isLoggingIn) {
        //     this.login();
        // } else {
        //     this.register();
        // }
    }

    login() {
        // this.userService.login(this.user)
        //     .then(() => {
        //         this.processing = false;
        //         this.routerExtensions.navigate(["/home"], { clearHistory: true });
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Unfortunately we could not find your account.");
        //     });
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

    register() {
        // if (this.user.password != this.user.confirmPassword) {
        //     this.alert("Your passwords do not match.");
        //     return;
        // }
        this.userService.register(this.user)
            // .then(() => {
            //     this.processing = false;
            //     this.alert("Your account was successfully created.");
            //     this.isLoggingIn = true;
            // })
            // .catch(() => {
            //     this.processing = false;
            //     this.alert("Unfortunately we were unable to create your account.");
            // });
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }


    focusPassword() {
        this.name.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "Coffee App",
            okButtonText: "OK",
            message: message
        });
    }
}

