import { Given, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';

Given('I visit the homepage', () => {
  
});

Then('I should see the title {string}', (title: string) => {
    var actualTitle = 'Page Title';
    assert.equal(actualTitle, title, `Expected title to be "${title}", but found "${actualTitle}"`);
});