import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Success');
          this.loginForm.reset();
          this.router.navigate(['welcome']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('something went wrong!');
      }
    );
  }
}





// import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { FormBuilder,FormGroup } from '@angular/forms';
// import { LoginService } from 'src/app/services/login.service';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   loginData = {
//     username: '',
//     password: '',
//   };
  //  public loginForm!: FormGroup;

  // constructor(
  //   private snack: MatSnackBar,
  //   private login: LoginService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {}

  // formSubmit() {
  //   console.log('login btn clicked');

    // if (
    //   this.loginData.username.trim() == '' ||
    //   this.loginData.username == null
    // ) {
    //   this.snack.open('Username is required !! ', '', {
    //     duration: 3000,
    //   });
    //   return;
    // }

    // if (
    //   this.loginData.password.trim() == '' ||
    //   this.loginData.password == null
    // ) {
    //   this.snack.open('Password is required !! ', '', {
    //     duration: 3000,
    //   });
    //   return;
    // }

    // //request to server to generate token
    // this.login.generateToken(this.loginData).subscribe(
    //   (data: any) => {
    //     console.log('success');
    //     console.log(data);

    //     //login...
    //     this.login.loginUser(data.token);

    //     this.login.getCurrentUser().subscribe((user: any) => {
    //       this.login.setUser(user);
    //       console.log(user);
    //       //redirect ...ADMIN: admin-dashboard
    //       //redirect ...NORMAL:normal-dashboard
    //       if (this.login.getUserRole() == 'ADMIN') {
    //         //admin dashboard
    //         // window.location.href = '/admin';
    //         this.router.navigate(['admin']);
    //         this.login.loginStatusSubject.next(true);
    //       } else if (this.login.getUserRole() == 'NORMAL') {
    //         //normal user dashbaord
    //         // window.location.href = '/user-dashboard';
    //         this.router.navigate(['user-dashboard/0']);
    //         this.login.loginStatusSubject.next(true);
    //       } else {
    //         this.login.logout();
    //       }
    //     });
    //   },
    //   (error) => {
    //     console.log('Error !');
    //     console.log(error);
    //     this.snack.open('Invalid Details !! Try again', '', {
    //       duration: 3000,
    //     });
    //   }
    // );
  //   public loginForm!: FormGroup;
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private http: HttpClient,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     email: [''],
  //     password: [''],
  //   });
  // }
  // login() {
  //   this.http.get<any>('http://localhost:3000/users').subscribe(
  //     (res) => {
  //       const user = res.find((a: any) => {
  //         return (
  //           a.email === this.loginForm.value.email &&
  //           a.password === this.loginForm.value.password
  //         );
  //       });
  //       if (user) {
  //         alert('Login Success');
  //         this.loginForm.reset();
  //         this.router.navigate(['welcome']);
  //       } else {
  //         alert('user not found');
  //       }
  //     },
  //     (err) => {
  //       alert('something went wrong!');
  //     }
  //   );}}


