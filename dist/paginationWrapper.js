"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginationFilter_1 = require("./filters/paginationFilter");
class paginationWrapper {
    constructor(records, _paginationFilter = new paginationFilter_1.default()) {
        this.pageNumber = _paginationFilter.pageNumber;
        this.pageSize = _paginationFilter.pageSize;
        this.totalPages = Math.ceil(records.length / _paginationFilter.pageSize);
        this.totalRecords = records.length;
        this.data = records.slice((_paginationFilter.pageNumber - 1) * _paginationFilter.pageSize, _paginationFilter.pageNumber * _paginationFilter.pageSize);
    }
}
exports.default = paginationWrapper;
