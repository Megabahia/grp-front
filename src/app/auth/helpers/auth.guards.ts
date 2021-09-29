import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/auth/service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService) { }

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;
    if (currentUser) {
      // check if route is restricted by role
      let rolEncontrado = false;

      currentUser.roles.map(rol => {
        if (route.data.roles && route.data.roles.indexOf(rol.nombre) != -1) {
          rolEncontrado = true;
        }
      });
  
      // switch (Number(currentUser.estado)) {
      //   case 1: {
      //     this._router.navigate(['/personas/bienvenido']);
      //     break;
      //   }
      //   case 2: {
      //     this._router.navigate(['/grp/login'], { queryParams: { returnUrl: state.url } });
      //     break;
      //   }
      //   case 3: {
      //     this._router.navigate(['/grp/login'], { queryParams: { returnUrl: state.url } });
      //     break;
      //   }
      //   case 4: {
      //     this._router.navigate(['/grp/login'], { queryParams: { returnUrl: state.url } });
      //     break;
      //   }
      //   default: {
          if (route.data.roles && !rolEncontrado) {
            // role not authorised so redirect to not-authorized page
            this._router.navigate(['/pages/miscellaneous/not-authorized']);
            return false;
          }
      //   }

      // }
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/grp/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}