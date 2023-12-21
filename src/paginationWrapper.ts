import paginationFilter from "./filters/paginationFilter";

export default class paginationWrapper {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
    data: any[];

    constructor(records: any[], _paginationFilter: paginationFilter = new paginationFilter()) {
        this.pageNumber = _paginationFilter.pageNumber;
        this.pageSize = _paginationFilter.pageSize;
        this.totalPages = Math.ceil(records.length / _paginationFilter.pageSize);
        this.totalRecords = records.length;
        this.data = records.slice((_paginationFilter.pageNumber - 1) * _paginationFilter.pageSize, _paginationFilter.pageNumber * _paginationFilter.pageSize);
    }
}