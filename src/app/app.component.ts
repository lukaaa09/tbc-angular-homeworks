import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-homeworks';
  formGroup = new FormGroup<any>('')
  itemInArr: any[] = []
  updateBtn: boolean = false
  userDataIndex: number = 0;


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
      confirmPassword: new FormControl('', [Validators.required]),
      Nickname: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9-]+$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+?995(\\d{9})$'  ),]),
      website: new FormControl('', [Validators.required, Validators.pattern
        ('^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$'
        ),]),
      checkbox: new FormControl('', Validators.required)

    }, { validators: passwordValidator })
  }
  public onClick(): void {
    console.log(this.formGroup)
    // console.log(this.formGroup.get('password')?.valid);
    this.itemInArr.push(this.formGroup.value)
    console.log(this.formGroup.value)
    console.log(Date.now())
    console.log(this.itemInArr)

  }
  public delete(index: number) {
    let z = confirm("Are you Sure?");
    if (z) {
      this.itemInArr.splice(index, 1);
    }
  }
  public updateForm(index: number): void {
    this.formGroup.get('email')?.setValue(this.itemInArr[index].email);
    this.formGroup.get('password')?.setValue(this.itemInArr[index].password);
    this.formGroup.get('confirmPassword')?.setValue(this.itemInArr[index].confirmPassword);
    this.formGroup.get('Nickname')?.setValue(this.itemInArr[index].Nickname);
    this.formGroup.get('phoneNumber')?.setValue(this.itemInArr[index].phoneNumber);
    this.formGroup.get('website')?.setValue(this.itemInArr[index].website);

    this.userDataIndex = index
    this.updateBtn = true
  }
  public editUser(): void {
    this.itemInArr[this.userDataIndex] = this.formGroup.value
    this.updateBtn = false

  }

}

