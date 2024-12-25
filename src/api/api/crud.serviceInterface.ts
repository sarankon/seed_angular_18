/**
 * Seed Nest 10 (Example)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateCrudDto } from '../model/models';
import { UpdateCrudDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface CrudServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param createCrudDto 
     */
    createCrud(createCrudDto: CreateCrudDto, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    findAllCrud(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    findOneCrud(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    removeCrud(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     * @param updateCrudDto 
     */
    updateCrud(id: string, updateCrudDto: UpdateCrudDto, extraHttpRequestParams?: any): Observable<object>;

}