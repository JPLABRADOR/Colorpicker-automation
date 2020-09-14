var sliderPage = function () {

    this.setApp = function(app) {
        this.app = app
    }

    this.setTitle = function(title) {
        this.tile = title
    }	

    this.verifySliderFunctionality = function(testData) {
        if (this.tile) {
            console.log(testData.testName)
            return this.app.client
                .setValue(testData.redVauleSelector, testData.redValue)
                .setValue(testData.greenValueSelector, testData.greenValue)
                .setValue(testData.blueValueSelector, testData.blueValue)
        } else {
            const message = 'ERROR: Verifying Window Title'
            throw new Error(message)
        }
    }
}

module.exports = sliderPage;