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



import { Configuration }                                     from '../configuration';



export interface UploadServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     */
    findAllDocumentUpload(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    findAllImageUpload(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     */
    findAllUpload(extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    findDocumentUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    findFileUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    findImageUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    removeDocumentUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    removeFileUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param id 
     */
    removeImageUpload(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param file 
     */
    uploadDocumentUpload(file?: Blob, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param file 
     */
    uploadFileUpload(file?: Blob, extraHttpRequestParams?: any): Observable<object>;

    /**
     * 
     * 
     * @param file 
     */
    uploadImageUpload(file?: Blob, extraHttpRequestParams?: any): Observable<object>;

}
