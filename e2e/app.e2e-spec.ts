import { ElearningServiceUiPage } from './app.po';

describe('elearning-service-ui App', function() {
  let page: ElearningServiceUiPage;

  beforeEach(() => {
    page = new ElearningServiceUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
