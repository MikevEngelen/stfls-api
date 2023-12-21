"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class paginationFilter {
    constructor(_pageNumber = 1, _pageSize = 5) {
        this.pageNumber = _pageNumber;
        this.pageSize = _pageSize;
    }
}
exports.default = paginationFilter;
