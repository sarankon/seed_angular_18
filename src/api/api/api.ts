export * from './app.service';
import { AppService } from './app.service';
export * from './app.serviceInterface';
export * from './auth.service';
import { AuthService } from './auth.service';
export * from './auth.serviceInterface';
export * from './crud.service';
import { CrudService } from './crud.service';
export * from './crud.serviceInterface';
export * from './demo-swagger.service';
import { DemoSwaggerService } from './demo-swagger.service';
export * from './demo-swagger.serviceInterface';
export * from './upload.service';
import { UploadService } from './upload.service';
export * from './upload.serviceInterface';
export * from './user.service';
import { UserService } from './user.service';
export * from './user.serviceInterface';
export const APIS = [AppService, AuthService, CrudService, DemoSwaggerService, UploadService, UserService];
