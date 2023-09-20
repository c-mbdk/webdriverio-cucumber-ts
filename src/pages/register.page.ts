import Page from "../../src/pages/page";
import { setText, clickElement, selectVisibleText, selectOption } from "../utils/commands"

class WebFormRegister extends Page {

    public get url() {
        return "/form"
    }

    private get fname() {
        return $('#first-name');
    }

    private get lname() {
        return $('#last-name');
    }

    private get jobtitle() {
        return $('#job-title');
    }

    private get maxeducationlevel() {
        return $$('aria/Radio button');
    }

    private get personsex() {
        return $$('aria/checkbox');
    }

    private get yearsofwork() {
        return $('#select-menu');
    }

    private get dateoftoday() {
        return $('#datepicker');
    }

    private get submitButton() {
        return $('aria/Submit');
    }

    async enterFirstName(firstname: string) {
        await setText(this.fname, firstname);
    }

    async enterLastName(lastname: string) {
        await setText(this.lname, lastname);
    }

    async enterJobTitle(jobtitle: string) {
        await setText(this.jobtitle, jobtitle);
    }

    async selectEducationLevel(educationlevel: string) {
        await selectOption(this.maxeducationlevel, educationlevel);
    }

    async selectSex(sex: string) {
        await selectOption(this.personsex, sex);
    }

    async enterTodayDate(datetoday: string) {
        await setText(this.dateoftoday, datetoday);
    }

    async selectExperienceYears(yearsofexp: string) {
        await selectVisibleText(this.yearsofwork, yearsofexp);
    }

    async clickSubmitButton() {
        await clickElement(this.submitButton);
    }

}

export default new WebFormRegister()