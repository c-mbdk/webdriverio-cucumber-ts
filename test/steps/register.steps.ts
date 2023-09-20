import { Given, When, Then } from "@cucumber/cucumber";
import webFormPage from "../../src/pages/register.page";
import successPage from "../../src/pages/register.success.page"

Given(/^I am on the web form page$/, async () => {
    await browser.url(webFormPage.url)
});


When(/^I enter firstname (.+) and lastname (.+)$/, async (firstname: string, lastname: string) => {

    await webFormPage.enterFirstName(firstname);
    await webFormPage.enterLastName(lastname);
});


When(/^I enter my job title (.+)$/, async (jobtitle: string) => {

    await webFormPage.enterJobTitle(jobtitle);
});


When(/^I select my highest level of education (.+)$/, async (educationlevel: string) => {

   await webFormPage.selectEducationLevel(educationlevel);

});


When(/^I select my sex (.+)$/, async (sex: string) => {

    await webFormPage.selectSex(sex);
});


When(/^I select my years of experience (.+)$/, async (yearsofexp: string) => {

    await webFormPage.selectExperienceYears(yearsofexp);
});


When(/^I enter today's date (.+)$/, async (datetoday: string) => {
    await webFormPage.enterTodayDate(datetoday);
});


When(/^I click the submit button$/, async () => {

    await webFormPage.clickSubmitButton();
});


Then(/^I will see the page header \"([^\"]*)\"$/, async (headertext) => {

    await expect(successPage.getHeader()).toHaveText(headertext);
});