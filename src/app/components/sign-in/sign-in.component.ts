
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule,NoopAnimationsModule} from "@angular/platform-browser/animations";
import { Usuario } from '../../interfaces/usuario';
import { UserSrvService } from '../../services/user-srv.service';
import { SpinnerComponent } from '../../compShared/spinner/spinner.component';
import {NgIf} from '@angular/common';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,SpinnerComponent,NgIf ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  nombreUsr= new FormControl ('',[Validators.required,Validators.minLength(2)]);
  psw= new FormControl ('',Validators.required,);
  confirmpsw= new FormControl ('',Validators.required,);
  loading: boolean=false;

  /*nombreUsr: string=''
  psw: string=''
  confirmpsw: string=''*/
 
  constructor(
    private toastr: ToastrService,
    private _usuarioSrv: UserSrvService,
    private route: Router
  
  ) {}

  ngOnInit(): void {
    
  }
  agregar(){
    //validar valores
    if (this.nombreUsr.value == '' || this.psw.value =='' || this.nombreUsr.value == undefined || this.psw.value == null ) {
      //alert('Veriricar, campos obligatorios');
      this.toastr.error('Favor de llenar los valores requeridos')
      return;
    } 
    //validar password igual
    if (this.psw.value != this.confirmpsw.value) {
      this.toastr.error('Contraseñas diferentes')
      return;
    } 
    
    
    const usuarioI: Usuario={
      nombreUsr: this.nombreUsr.value,
      psw: this.psw.value,
    }
    
    this.loading=true;
    //consumir el srv 
    this._usuarioSrv.singIn(usuarioI).subscribe({
      next:(v) =>{
        this.loading=false;
        alert('Usuario registrado con exito')
        //this.toastr.success('Usuario registrado!','Exito!')
        this.route.navigate(['/login'])
      },
      error:(e:HttpErrorResponse) => {
        this.loading=false;
        if (e.error.msg) {
          this.toastr.error(e.error.msg,'Error!')
          //alert(e.error.msg)
          
        } else {
          this.toastr.error('Ups Error comuniquese con Yess xd!')
          //alert('Ups Error comuniquese con Yess xd!')

        }
        alert(e.error.msg)
        //this.route.navigate(['/signIn'])
      },
      complete:() => console.info('completado')

    })
  }
}
