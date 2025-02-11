import { Injectable } from "@angular/core";
import { LoginInterface, LoginResInterface } from "../data-access/auth.model";

@Injectable({providedIn: 'any'})
export class AuthService {
    private token?: string;

    loginUser(payload: LoginInterface): LoginResInterface | void{
        if(payload.email !== "joecdev@gmail.com") return

        return {access_token: 'has some text', refresh_token: 'has refresh token'}
    }
}