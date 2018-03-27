import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductVO } from '../../../core/shared/vo/ProductVO';
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
    selector   : 'app-admin-product',
    templateUrl: './admin-product.component.html',
    styleUrls  : ['./admin-product.component.css']
})
export class AppAdminProductComponent implements OnInit {
    search: string;
    productVOList: ProductVO[] = [];
    constructor(private _localStorageService: LocalStorageService) {

    }

    ngOnInit() {
        this._localStorageService.setItem('productVOList', this.getProductVOList());
    }
    loginFormSubmit() {

    }
    getProductVOList() {
        const productVO1 = new ProductVO();
        productVO1.name = 'Product 1';
        productVO1.CASNo = '188062-50-2';
        productVO1.molecularFormula = 'C28H38N12O6S';
        productVO1.molecularWeight = '671';
        productVO1.CATNo = 'SZ-A049001';
        this.productVOList.push(productVO1);

        const productVO2 = new ProductVO();
        productVO2.name = 'Product 2';
        productVO2.CASNo = '188062-50-2';
        productVO2.molecularFormula = 'C28H38N12O6S';
        productVO2.molecularWeight = '671';
        productVO2.CATNo = 'SZ-A049001';
        this.productVOList.push(productVO2);

        const productVO3 = new ProductVO();
        productVO3.name = 'Product 3';
        productVO3.CASNo = '188062-50-2';
        productVO3.molecularFormula = 'C28H38N12O6S';
        productVO3.molecularWeight = '671';
        productVO3.CATNo = 'SZ-A049001';
        this.productVOList.push(productVO3);

        return this.productVOList;
    }
}



