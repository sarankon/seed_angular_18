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

import { CreateDemoDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface DemoSwaggerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param header Custom Header
     */
    deleteSwaggerSwagger(header?: string, extraHttpRequestParams?: any): Observable<string>;

    /**
     * 
     * 
     * @param id 
     * @param header Custom Header
     */
    getSwaggerIdSwagger(id: string, header?: string, extraHttpRequestParams?: any): Observable<string>;

    /**
     * 
     * 
     * @param header Custom Header
     */
    getSwaggerIpSwagger(header?: string, extraHttpRequestParams?: any): Observable<string>;

    /**
     * 
     * 
     * @param header Custom Header
     */
    getSwaggerSwagger(header?: string, extraHttpRequestParams?: any): Observable<string>;

    /**
     * 
     * 
     * @param header Custom Header
     */
    postSwaggerSwagger(header?: string, extraHttpRequestParams?: any): Observable<CreateDemoDto>;

    /**
     * 
     * 
     * @param id 
     * @param header Custom Header
     */
    putSwaggerSwagger(id: string, header?: string, extraHttpRequestParams?: any): Observable<string>;

}
