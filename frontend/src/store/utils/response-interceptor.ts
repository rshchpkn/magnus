import { Observable, of, throwError } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

export function responseInterceptor<T = any>(...keys: string[]) {
  return (obs: Observable<{ data: any; errors: any }>) => {
    return obs.pipe(
      switchMap((response) => {
        if (response.errors) {
          return throwError(response.errors);
        }
        return of(response.data);
      }),
      pluck<any, T>(...keys),
    );
  };
}
