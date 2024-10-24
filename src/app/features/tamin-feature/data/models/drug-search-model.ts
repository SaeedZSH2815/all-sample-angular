import { DrugSearchEntity } from "../../domain/entities/drug-search-entity";

export class DrugSearchModel  extends DrugSearchEntity  {
  public wsSrvCode: string;
  public srvName  : string;

  constructor(clParam: { wsSrvCode: string, srvName: string }
    ) {
    super({DrugCode:clParam.wsSrvCode,DrugFullName:clParam.srvName});

    this.wsSrvCode= clParam.wsSrvCode;
    this.srvName  = clParam.srvName;

  }


  EntityClone():DrugSearchEntity{
    return new DrugSearchEntity({DrugCode:this.DrugCode,DrugFullName:this.DrugFullName});
  }

}
