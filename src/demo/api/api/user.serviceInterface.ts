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

import { CreateUserDto } from '../model/models';
import { UpdateUserDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface UserServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param createUserDto 
     */
    createUser(createUserDto: CreateUserDto, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    findAllUser(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    findOneUser(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    removeUser(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     * @param updateUserDto 
     */
    updateUser(id: string, updateUserDto: UpdateUserDto, extraHttpRequestParams?: any): Observable<object>;

}
