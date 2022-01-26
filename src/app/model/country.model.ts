export class CountryItem {
  public countryId: number;
  public name: string;
  public code: string;
  public continentId: number;
  public createdDate: Date | null;
  public updatedDate: Date | null;
  public expired: boolean;

  constructor(o: any = {}) {
    this.countryId = o['countryId'] ?? null;
    this.name = o['name'] ?? '';
    this.code = o['code'] ?? '';
    this.continentId = o['continentId'] ?? null;
    this.createdDate = o['createdDate'] ? new Date(o['createdDate']) : null;
    this.updatedDate = o['updatedDate'] ? new Date(o['updatedDate']) : null;
    this.expired = o['expired'] ? o['expired'] : false;
  }
}
