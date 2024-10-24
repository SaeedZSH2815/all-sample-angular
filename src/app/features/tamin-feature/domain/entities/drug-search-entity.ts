export class DrugSearchEntity {

  public DrugCode: string;
  public DrugFullName: string;

  constructor(clParam: { DrugCode: string, DrugFullName: string }) {
    this.DrugCode = clParam.DrugCode;
    this.DrugFullName = clParam.DrugFullName;

  }

}
