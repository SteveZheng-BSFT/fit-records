import { InMemoryDbService, RequestInfo, ResponseInterceptor } from 'angular-in-memory-web-api';
import { RequestMethod, ResponseOptions } from '@angular/http';

export class MockBackendService implements InMemoryDbService {
  createDb() {
    let records = [
      {id: '1111', title: 'g', content: 'ggg', color: 'lightblue'},
      {id: '1323', title: 'h', content: 'hhh', color: 'pink'},
      {id: '1666', title: 'k', content: 'kkk', color: 'green'}
    ];

    return {records};
  }

  responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo) {
    // custom response
    if (RequestMethod[requestInfo.req.method] === 'Delete') {
      let fakeBody = {
        id: requestInfo.id,
        title: 'fake',
        content: 'fake2',
        color: 'fake3'
      };
      responseOptions.body = fakeBody;
    }
    return responseOptions;
  }
}
