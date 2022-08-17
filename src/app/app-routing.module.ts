import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyGuard } from './core/guards/currency.guard';
import { LoginGuard } from './core/guards/login.guard';
import { LogoutGuard } from './core/guards/logout.guard';
import { CurencyConverterComponent } from './features/curency-converter/curency-converter.component';
import { HttpComponentComponent } from './features/http-component/http-component.component';
import { LoginComponent } from './features/login/login.component';
import { UserComponent } from './features/user/user.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LogoutGuard],
    component: LoginComponent
  },
  {
    path: 'users',
    canActivate: [LoginGuard],
    component: UserComponent,
  },
  {
    path: 'currency',
    canActivate: [CurrencyGuard],
    component: CurencyConverterComponent,
  },
  {
    path: 'employees',
    loadChildren: () => import('./features/http-component/employee.module').then((m) => m.EmployeeModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
