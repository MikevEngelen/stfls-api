export default class paginationFilter {
    pageNumber: number;
    pageSize: number;

    constructor(_pageNumber: number = 1, _pageSize: number = 5) {
        this.pageNumber = _pageNumber;
        this.pageSize = _pageSize;
    }
}