import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [],
      usuario: ["", Validators.required],
      contrasena: ["", Validators.required]
    });

  }

  login(){
    this.router.navigate(["/home"])
  }

  registrarse(){
    alert("Esta ventana no esta disponible aun")
  }

}
