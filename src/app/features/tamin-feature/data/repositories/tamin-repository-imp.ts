import { Injectable } from "@angular/core";
import { IDrugRepository } from "../../domain/repositories/drug-repository";

import { DrugSearchEntity } from "../../domain/entities/drug-search-entity";

import  * as RxJS from '../../../../../core/resources/rxjs-operators';
import AUtils from "../../../../../core/utilitys/autils";
import { TaminDataSource } from "../data-source/remote/drug-data-source";
import { DataFailed, DataState, DataSuccess } from "../../../../../core/resources/data-state";





@Injectable({providedIn:"root"})

export  class TaminRepositoryImp implements IDrugRepository{



  constructor(private _taminDataSource : TaminDataSource){

  }

   SearchDrugListTamin( clParam: { drugSearchName : string;
                                   maxResultCount : number;
                                   skipCount : number; }):

   RxJS.Observable<DataState<DrugSearchEntity[]>> {

      return this._taminDataSource.fechDrugSearchNameList(clParam).pipe(

        RxJS.map((v)=>{if(Array.isArray(v)) return v;else return [v];}),

        RxJS.map( (v:any[])=>
          {
            let Res = v.map((item)=><DrugSearchEntity>{DrugCode:item['srvCode'],DrugFullName:item['srvName']});
            return Res;
          }

          ),


        //RxJS.tap((v)=>console.log("v",v)),
        RxJS.map((value:DrugSearchEntity[])=>{

          const Ldata  : DataSuccess<DrugSearchEntity[]> = new DataSuccess<DrugSearchEntity[]>;
                Ldata.data = value;
                Ldata.error = null;

                return Ldata;
        }),
        RxJS.catchError((error)=>{
          const Ldata  : DataFailed<any> = new DataFailed<any>;
                Ldata.data = [];
                Ldata.error = error;
          return RxJS.of(Ldata);

        })

      );


  }











 }
