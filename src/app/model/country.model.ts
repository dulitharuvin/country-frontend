import { Continent } from "./continent.model";

export class CountryItem {
  public countryId: number;
  public name: string;
  public code: string;
  public continent: Continent;
  public createdDate: Date | null;
  public updatedDate: Date | null;
  public expired: boolean;

  constructor(o: any = {}) {
    this.countryId = o['countryId'] ?? null;
    this.name = o['name'] ?? '';
    this.code = o['code'] ?? '';
    this.continent = o['continent'] ? new Continent(o['continent']) : new Continent();
    this.createdDate = o['createdDate'] ? new Date(o['createdDate']) : null;
    this.updatedDate = o['updatedDate'] ? new Date(o['updatedDate']) : null;
    this.expired = o['expired'] ? o['expired'] : false;
  }
}
