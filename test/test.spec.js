// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai's expect().to.exist style makes default jshint unhappy.
// jshint expr:true

describe('no protractor at all', function() {
    it('C1 should still do normal tests', function() {
        expect(true).to.equal(true);
    });
});

describe('protractor library', function() {
    it.skip('should be able to skip tests', function() {
        expect(true).to.equal(false);
    });

    it('should expose the correct global variables', function() {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
    });

});