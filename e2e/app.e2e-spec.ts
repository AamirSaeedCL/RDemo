import { AppPage }                                from './app.po';

describe('rpcdemo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('We should get "Reference Date" as Header of first Column - Our table has been rendered properly.', () => {
    page.navigateTo();
    page.setMainLimitValue('5.05');
    page.setMainRetentionValue('10.15');
    page.setExecutionTypeValue('Simple');
    page.clickFetchCalculation();
    expect(page.getCalculatedResultText()).toContain('Reference Date');
  });
});
