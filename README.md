# Colorpicker-automation
Automation testing for the Colorpicker application built with the Electron framework. Automation created using Spectron and Mocha.

Colorpicker application website: https://github.com/Toinane/colorpicker

#### Tested using:
* System: Windows 10
* Colorpicker: 2.0.3
* Node.js: 14.10.1
* Spectron(Uses ChromeDriver and WebdriverIO): Version 9.0.0
* Mocha: 8.1.3

#### Section of the application being tested:
1) The color sliders and their number inputs

NOTE: For given versions of Electron you must depend on a very specific version range of Spectron. Colorpicker 2.0.3 was created using Electron version 7.1.7, so Spectron 9.0.0 must be used to test this version of the application. For more info, see the version mapping table between Spectron versions and Electron versions: https://github.com/electron-userland/spectron#version-map


#### Instructions:
Install the Colorpicker application (version 2.0.3): https://github.com/Toinane/colorpicker/releases \
Direct Link: https://github.com/Toinane/colorpicker/releases/download/2.0.3/colorpicker_setup_2.0.3.exe

Install NodeJS (includes npm): https://nodejs.org/en/download/

Open a terminal or command line and navigate to your local project folder. Clone the following repository:
```
git clone https://github.com/JPLABRADOR/Colorpicker-automation.git
```
Navigate to the newly cloned directory:
```
cd Colorpicker-automation
```
Install Spectron version 9 as a dev dependency:
```
npm install --save-dev spectron@9.0.0
```
And install Mocha, also as a dev dependency
```
npm install --save-dev mocha
```
From the "Colorpicker-automation" directory, Execute the "Colorpicker-automation" automation tests:
```
npm test
```
