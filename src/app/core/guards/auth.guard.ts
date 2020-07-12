import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild, CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const url = segments.map(s => `/${s}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect: string): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      tap(isAuthenticated => {
        // if the user is not authenticated, throw him back to the login screen, adding a query param so that after login, he is redirected back to where he was.
        if (!isAuthenticated) {
          this.router.navigate(['/login'], {
            queryParams: { redirect }
          })
        }
      })
    );
  }

}
