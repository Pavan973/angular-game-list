import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req=req.clone({
            setHeaders:{
               'x-rapidapi-key':'fa0fcf5b9fmshe71b0a38d5e4e77p16050bjsn9fe3156c2370',
               'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com', 
            },
            setParams:{
                key: '61b7915faba945ad90dcc6ad27ee51cc',  
            }
        });
        return next.handle(req);
    }
}