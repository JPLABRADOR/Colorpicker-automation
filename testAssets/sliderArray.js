module.exports = [
    {
        testName: 'Test 1: Verify Red Slider Functionality With Valid Data',
        redValue: '255',
        redVauleSelector: '#red_value',
        greenValue: '0',
        greenValueSelector: '#green_value',
        blueValue: '0',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(255, 0, 0);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#FF0000',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '255',
        greenSliderValue: '0',
        blueSliderValue: '0'
    },
    {
        testName: 'Test 2: Verify Green Slider Functionality With Valid Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '255',
        greenValueSelector: '#green_value',
        blueValue: '0',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 255, 0);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00FF00',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '255',
        blueSliderValue: '0'
    },
    {
        testName: 'Test 3: Verify Blue Slider Functionality With Valid Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '0',
        greenValueSelector: '#green_value',
        blueValue: '255',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 0, 255);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#0000FF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '0',
        blueSliderValue: '255'
    },
    {
        testName: 'Test 4: Verify Red Slider functionality With Invalid Range Data',
        redValue: '500',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(255, 174, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#FFAEEF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '255',
        greenSliderValue: '174',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 5: Verify Red Slider functionality With Invalid Character Data',
        redValue: '@',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 174, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00AEEF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '174',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 6: Verify Red Slider functionality With Invalid Negative Number Data',
        redValue: '-50',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(50, 174, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#32AEEF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '50',
        greenSliderValue: '174',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 7: Verify Green Slider functionality With Invalid Range Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '500',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 255, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00FFEF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '255',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 8: Verify Green Slider functionality With Invalid Character Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '-',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 0, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#0000EF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '0',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 9: Verify Green Slider functionality With Invalid Negative Number Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '-50',
        greenValueSelector: '#green_value',
        blueValue: '239',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 50, 239);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#0032EF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '50',
        blueSliderValue: '239'
    },
    {
        testName: 'Test 10: Verify Blue Slider functionality With Invalid Range Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '500',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 174, 255);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00AEFF',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '174',
        blueSliderValue: '255'
    },
    {
        testName: 'Test 11: Verify Blue Slider functionality With Invalid Character Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '-',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 174, 0);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00AE00',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '174',
        blueSliderValue: '0'
    },
    {
        testName: 'Test 12: Verify Blue Slider functionality With Invalid Negative Number Data',
        redValue: '0',
        redVauleSelector: '#red_value',
        greenValue: '174',
        greenValueSelector: '#green_value',
        blueValue: '-50',
        blueValueSelector: '#blue_value',
        rgbValue: 'background: rgb(0, 174, 50);',
        rgbValueSelector: 'body',
        rgbValueAttribute: 'style',
        hexValue: '#00AE32',
        hexValueSelector: '#hex_value',
        redSliderValueSelector: 'div.red_bar progress',
        greenSliderValueSelector: 'div.green_bar progress',
        blueSliderValueSelector: 'div.blue_bar progress',
        sliderValueAttribute: 'value',
        redSliderValue: '0',
        greenSliderValue: '174',
        blueSliderValue: '50'
    }	
]