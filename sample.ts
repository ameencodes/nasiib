import * as puppeteer from 'puppeteer'

( async () => {

    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://ebank.salaambank.so/')
    await navigationPromise

    await page.waitForSelector('#txtUserName')
    await page.click('#txtUserName')

    //TODO : change to your email 
    await page.type('#txtUserName', '--USERNAME--')
    // await browser.close()

    await navigationPromise
    await page.waitForSelector('#txtPassword')
    await page.click('#txtPassword')

    //TODO : change to your email 
    await page.type('#txtPassword', '--PASSWORD--')

    await page.waitForSelector('#btnLogin')
    await page.click('#btnLogin')

    await navigationPromise

    await page.goto('https://ebank.salaambank.so/StatementAccount.aspx')
    await navigationPromise

    await page.waitForSelector('#ContentPlaceHolder1_drpTranTypes')
    await page.click('#ContentPlaceHolder1_drpTranTypes')

    await page.type('#ContentPlaceHolder1_drpTranTypes', 'cr')

    await page.waitForSelector('#ContentPlaceHolder1_btnShowStatement')
    await page.click('#ContentPlaceHolder1_btnShowStatement')

    await navigationPromise


})();
