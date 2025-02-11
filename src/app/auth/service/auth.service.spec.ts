import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";
import { LoginResInterface } from "../data-access/auth.model";

describe('Auth Service', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(AuthService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    })

    it('should return void if email is not valid', () => {
        const logIn = service.loginUser({email: 'offor@gmail.com', password: "hehe"})
        expect(logIn).toBeUndefined()
    })
    it('should return LoginResInterface', () => {
        const logIn = service.loginUser({email: 'joecdev@gmail.com', password: "hehe"})
        const result: LoginResInterface = {access_token: 'memas', refresh_token: 'you'}
        expect(logIn).toBeInstanceOf(Object)
    })

})