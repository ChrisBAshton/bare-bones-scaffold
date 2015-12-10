define(['myApp'], function (myApp) {

    describe('A suite', function () {
        it('contains spec with an expectation', function() {
            expect(myApp).toBe('hello world');
        });
    });

});