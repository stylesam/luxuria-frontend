import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component'
import { AuthRoutingModule } from './auth-routing.module'
import { AuthComponent } from './components/auth/auth.component'
import { AuthService } from './services/auth.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [ AuthContainerComponent, AuthComponent ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }