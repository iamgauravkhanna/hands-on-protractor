// spec.ts
import { browser } from 'protractor';
describe('Browser API Demo', () => {
    it('Get current page title', () => {
        browser.get('https://material.angularjs.org')
            .then(() => (browser.getTitle()))
            .then((title) => (console.log(title)));
        browser.manage().window().maximize();
    });
});