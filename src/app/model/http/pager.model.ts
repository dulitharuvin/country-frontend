export class Pager{
    public currentPage: number;
    public itemsPerPage: number;
    public sortProp: string = '';

    constructor(itemsPerPage: number = 100){
        this.currentPage = 1;
        this.itemsPerPage = itemsPerPage;
    }
}