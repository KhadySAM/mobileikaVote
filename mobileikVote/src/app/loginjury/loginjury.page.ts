import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/login-services.service';
import { TokenStorageService } from '../Services/token-storage.service';



@Component({
  selector: 'app-loginjury',
  templateUrl: './loginjury.page.html',
  styleUrls: ['./loginjury.page.scss'],
})
export class LoginjuryPage implements OnInit {
 // ICI ON PREND LES ELEMENTS POUR LE FORMULAIRE
 form: any = {
  usernameOrEmail: null,
  password: null
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];



constructor(private route:Router,private authService:AuthService,private tokenStorage: TokenStorageService) { }

Message!:String 

ngOnInit() {
}




onSubmit(): void {
  const { usernameOrEmail, password } = this.form;

  console.log(this.form)
  this.authService.login(usernameOrEmail, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      // this.reloadPage();
      if(this.isLoggedIn == true)
         this.route.navigateByUrl("/evenements");
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}


}
