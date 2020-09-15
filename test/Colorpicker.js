var Application = require('spectron').Application
var assert = require('assert')
var slider = require('../pageObjects/sliderPage')
var sliderData = require('../testAssets/sliderArray')
var page = {}
var titleExists

describe('Colorpicker Slider Tests', function () {
    this.timeout(10000)

    beforeEach(function () {
        this.app = new Application({
            path: 'C:\\Program Files\\Colorpicker\\Colorpicker.exe'
        })
        page = new slider()
        page.setApp(this.app)
        page.setTitle(titleExists)
        return this.app.start()
    })

    afterEach(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    })

    it('The Window Title Was Found', function () {
        const expectedTitle = 'Colorpicker'
        this.app.client.title().then(function (actual) {
            titleExists = expectedTitle == actual.value
            assert.strictEqual(actual, expectedTitle)
        })
    })	

    sliderData.forEach(function (test) { 
        it('Slider Should Function Correctly', function () {
            return page
                .verifySliderFunctionality(test)
                .getAttribute(test.redSliderValueSelector, test.sliderValueAttribute)
                .then(function (actual) {
                    assert.strictEqual(actual, test.redSliderValue)
                })
                .getAttribute(test.greenSliderValueSelector, test.sliderValueAttribute)
                .then(function (actual) {
                    assert.strictEqual(actual, test.greenSliderValue)
                })
                .getAttribute(test.blueSliderValueSelector, test.sliderValueAttribute)
                .then(function (actual) {
                    assert.strictEqual(actual, test.blueSliderValue)
                })			
                .getAttribute(test.rgbValueSelector, test.rgbValueAttribute)
                .then(function (actual) {
                    assert.strictEqual(actual, test.rgbValue)
                })
                .getValue(test.hexValueSelector)
                .then(function (actual) {
                    assert.strictEqual(actual, test.hexValue)
                })
        })
    })
})