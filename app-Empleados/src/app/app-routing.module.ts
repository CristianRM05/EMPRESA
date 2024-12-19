import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ListarcomponentComponent} from './listarcomponent/listarcomponent.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ActualizaComponentComponent} from './actualiza-component/actualiza-component.component';
import {ContactoComponentComponent} from './contacto-component/contacto-component.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'lista', component: ListarcomponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: 'contacto', component: ContactoComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
