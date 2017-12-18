# Angular 2/4 Http Module with Interceptors

This package provides major missing feature in angular2: Http Interceptors.

Note: Package is given in completely 100% pure TypeScript

```
npm install ng4-http --save
```

## Http Interceptors

Http Interceptors provides you ability to intercept all requests and modify then, if necessary or retry them again.

> For purposes of global error handling, authentication, or any kind of synchronous or asynchronous pre-processing of request or postprocessing of responses, it is desirable to be able to intercept requests before they are handed to the server and responses before they are handed over to the application code that initiated these requests. The interceptors leverage the promise APIs to fulfill this need for both synchronous and asynchronous pre-processing.
> There are two kinds of interceptors (and two kinds of rejection interceptors):
> * **request**: interceptors get called with a http config object. The function is free to modify the config object or create a new one. The function needs to return the config object directly, or a promise containing the config or a new config object.
> * **requestError**: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.
> * **response**: interceptors get called with http response object. The function is free to modify the response object or create a new one. The function needs to return the  response object directly, or as a promise containing the response or a new response object.
> * **responseError**: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.

#### Usage

1. Import ```Interceptor``` interface from the package and create and provide your own Interceptor, e.g.:

```typescript
import { Interceptor } from 'ng4-http';

@Injectable()
export class CustomInterceptor implements Interceptor {

  public request({ url, options }: RequestInterceptorOptions): RequestInterceptorOptions {
    const urlString = url instanceof Request ? (<Request>url).url : url;

    console.log('Request:', urlString);

    return { url, options };
  }

  public responseError({ url, options, response }: ResponseInterceptorOptions): RequestInterceptorOptions {
    const urlString = url instanceof Request ? (<Request>url).url : url;
    console.log('Response:', urlString);

    return { url, options, response };
  }
}
```

2. Register your custom interceptor by injecting ```InterceptorStore``` into your module, e.g.:

```typescript
import { InterceptorStore } from 'ng4-http';

@NgModule({
  providers: [ CustomInterceptor ]
})
export class AuthModule {
  constructor(interceptorStore: InterceptorStore, customInterceptor: CustomInterceptor) {
    interceptorStore.register(customInterceptor);
  }
}
```

3. Use ```HttpModule``` and ```Http``` service from the package instead of native ones, e.g.:

```typescript
import { HttpModule } from 'ng4-http';

@NgModule({
  imports: [ HttpModule ]
})
export class AuthModule {}
```
