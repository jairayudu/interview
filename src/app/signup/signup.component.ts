import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    });
  }
  signUp() {
    this.http
      .post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('signup successfull');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { UserService } from 'src/app/services/user.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent implements OnInit {
//   constructor(private userService: UserService, private snack: MatSnackBar) {}

//   public user = {
//     username: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//   };

//   ngOnInit(): void {}

//   formSubmit() {
//     console.log(this.user);
//     if (this.user.username == '' || this.user.username == null) {
//       // alert('User is required !!');
//       this.snack.open('Username is required !! ', '', {
//         duration: 3000,
//       });
//       return;
//     }

//     if (this.user.password == '' || this.user.password == null) {
//       // alert('User is required !!');
//       this.snack.open('Password is required !! ', '', {
//         duration: 3000,
//       });
//       return;
//     }

//     //validate

//     //addUser: userservice
//     this.userService.addUser(this.user).subscribe(
//       (data: any) => {
//         //success
//         console.log(data);
//         //alert('success');
//         Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
//       },
//       (error: { error: { text: string } }) => {
//         //error
//         console.log(error);
//         // alert('something went wrong');
//         this.snack.open(error.error.text, '', {
//           duration: 3000,
//         });
//       }
//     );
//   }

//   //this.user
// }
