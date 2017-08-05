import { ResAppPage } from './app.po';

describe('res-app App', () => {
  let page: ResAppPage;

  beforeEach(() => {
    page = new ResAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
