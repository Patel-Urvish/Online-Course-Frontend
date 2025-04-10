import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    private spinner = inject(NgxSpinnerService);
    private toastr = inject(ToastrService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.toastr.success('Request successful');
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // const errorMsg = error.status ? `Error ${error.status}: ${error.statusText}` : 'Unknown error occurred';
                this.toastr.error(`Request failed  :${error.message}`);
                return throwError(() => error);
            }),
            finalize(() => {
                this.spinner.hide();
            })
        );
    }
}
