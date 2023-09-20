import {ChainablePromiseArray, ChainablePromiseElement, ElementArray} from "webdriverio";

export const selectOption = async(elements:ChainablePromiseArray<ElementArray>, value: string) => {
    const element = await elements;

    for (let i = 0; i < element.length; i++) {
        const elem = element[i].getText().toString().trim();
        if (elem === value) {
            await element[i].click()
            break;
        }
    }
}

export const setText = async(element: ChainablePromiseElement<WebdriverIO.Element>, text: string) => {
    await element.setValue(text)
}

export const selectVisibleText = async(element: ChainablePromiseElement<WebdriverIO.Element>, text: string) => {
    await element.selectByVisibleText(text)
}

export const clickElement = async(element: ChainablePromiseElement<WebdriverIO.Element>) => {
    await element.click()
}