import * as puppeteer from 'puppeteer'
import * as functions from "firebase-functions";
import { initializeApp } from "firebase/app";
import * as admin from "firebase-admin";


var serviceAccount = require("../lib/api/lotto.json")


    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: ""
      });
      const db= admin.firestore()    ;
      let query = db.collection('TransactionsVolume');
      console.log(query);
  


( async () => {
    "ContentPlaceHolder1_GridView1"

    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://ebank.salaambank.so/')
    await navigationPromise

    await page.waitForSelector('#txtUserName')
    await page.click('#txtUserName')

    //TODO : change to your email 
    // await page.type('#txtUserName', '--USERNAME--')
    await page.type('#txtUserName', 'username put in here')

    // await browser.close()

    await navigationPromise
    await page.waitForSelector('#txtPassword')
    await page.click('#txtPassword')

    //TODO : change to your email 
    // await page.type('#txtPassword', '--PASSWORD--')
    await page.type('#txtPassword', 'password')

    await page.waitForSelector('#btnLogin')
    await page.click('#btnLogin')
    

    await navigationPromise
    // const html = await page.content();
    // console.log();
    await page.goto('https://ebank.salaambank.so/StatementAccount.aspx')
    await navigationPromise

    await page.waitForSelector('#ContentPlaceHolder1_drpTranTypes')
    await page.waitForSelector('#ContentPlaceHolder1_txtStartDate')
    await page.waitForSelector('#ContentPlaceHolder1_txtEndDate')
    await page.waitForSelector('#ContentPlaceHolder1_btnShowStatement')

    
   await page.select('#ContentPlaceHolder1_drpTranTypes', 'cr')
    // await page.type('#ContentPlaceHolder1_drpTranTypes', 'cr')
        
    // await page.select('#ContentPlaceHolder1_drpTranTypes', 'cr')
    await page.type('#ContentPlaceHolder1_txtStartDate', "1")
    await page.type('#ContentPlaceHolder1_txtStartDate', "1")
    await page.type('#ContentPlaceHolder1_txtStartDate', "1")
    await page.type('#ContentPlaceHolder1_txtStartDate', "1")
  //  await page.waitForSelector('#ContentPlaceHolder1_btnShowStatement')

// let element = await page.$('#ContentPlaceHolder1_drpTranTypes')

  await page.type('#ContentPlaceHolder1_drpTranTypes', 'cr')

    await page.click('#ContentPlaceHolder1_btnShowStatement')
    
    
    await navigationPromise

    await page.waitForSelector('#ContentPlaceHolder1_GridView1')



    let previousarraylength = 1 // number of transactions 
    const result = await page.$$eval('#ContentPlaceHolder1_GridView1 tr', rows => {
        return Array.from(rows, row => {
          const columns = row.querySelectorAll('td');
          return Array.from(columns, column => column.innerText);
        });
      });

    //   console.log(result[2][6])

      if (result.length >= previousarraylength && result[2][6] == "1.00" ){

/// now in this if stament add 

          console.log(" A new array has been added and the value of the ticket is indeed ... " , result[2][6]);
      }
   // is query the length of the array 
   // also query the 6th index of the array and see the value and the value should equal the amount of the ticket 
   // if boh conditon are satisifed than give the person with the phone number a new ticket numbe
   // then save that person information into firebase


    






})();
