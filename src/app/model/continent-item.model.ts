export class ContinentItem {
  public continentId: number;
  public name: string;
  public createdDate: Date | null;
  public updatedDate: Date | null;
  public expired: boolean;

  constructor(o: any = {}) {
    this.continentId = o['continentId'] ?? null;
    this.name = o['name'] ?? '';
    this.createdDate = o['createdDate'] ? new Date(o['createdDate']) : null;
    this.updatedDate = o['updatedDate'] ? new Date(o['updatedDate']) : null;
    this.expired = o['expired'] ? o['expired'] : false;
  }
}
