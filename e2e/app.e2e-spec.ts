import { FitRecordsPage } from './app.po';

describe('fit-records App', function() {
  let page: FitRecordsPage;

  beforeEach(() => {
    page = new FitRecordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
