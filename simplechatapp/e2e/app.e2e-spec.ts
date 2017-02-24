import { SimplechatappPage } from './app.po';

describe('simplechatapp App', () => {
  let page: SimplechatappPage;

  beforeEach(() => {
    page = new SimplechatappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
