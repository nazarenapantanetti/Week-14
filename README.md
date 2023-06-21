# Swag Labs automation tests #

Automated tests were performed for the saucedemo page: https://www.saucedemo.com/. 
For this, we start by installing WebdriverIo and all the necessary dependencies such as Jasmine in Visual Studio Code.
These tools provide a friendly framework for the development of automated tests.

The task was divided into two stages. The creation of object pages, where elements that will carry selectors of the page are created. You must go to the page in question, open "inspect" area and search for de ID or class of your desired object. Then we use those objects that we were selecting with the creation of spec's files.

The development of tests in the specs consists of going through the usual route of a user through the web page, reflecting the test cases made during the previous analysis of the app and its business rules.

In other words, the manual test is coded in programming language in order to it can be run automatically with the command 
"npm run wdio" or "npx wdio" in Visual Studio Code terminal, every time you need it.
In addition, records of the results are obtained that are useful to evaluate the App's performance, find bugs and also identify the necessary improvements to meet customer requirements.