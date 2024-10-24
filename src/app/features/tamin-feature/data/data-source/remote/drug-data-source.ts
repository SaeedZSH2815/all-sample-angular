import { HttpClient, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import  * as RxJS from '../../../../../../core/resources/rxjs-operators';
import AUtils from "../../../../../../core/utilitys/autils";
import { environment } from "../../../../../../environments/environment";



@Injectable({providedIn:"root"})

export class TaminDataSource{

  constructor(private _http:HttpClient){

  }

  fechDrugSearchNameList(clParam: { drugSearchName : string;
    maxResultCount : number;
    skipCount : number; }): RxJS.Observable<any>{

    return this._http.get<any>(environment.TaminBaseData.GetAll_api,
                         {params:{"Keyword":"ws-services?serviceType=2",
                                  "MaxResultCount":clParam.maxResultCount>0?clParam.maxResultCount:1,
                                  "SkipCount":clParam.skipCount,
                                  "NameForSearch":clParam.drugSearchName
                                 }
                         }).pipe(

                          // RxJS.tap((res)=>{
                          //           if(!environment.production)
                          //            console.log("Log Before  ",res['result']['items'][0]['responseDataDto'])}
                          //         ),
                          RxJS.map( (res) => JSON.parse(res['result']['items'][0]['responseDataDto']) as Array<any>

                                  ),

                          // RxJS.mergeMap(((res)=>RxJS.of(...res))),

                          // RxJS.map(((res)=>res['srvName'] as string)),
                          // toArray()
                        );
  }

}
