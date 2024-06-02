describe('Electrons', function() {
	beforeEach(function() {
		electron = new Electrons();
	});

    it('should return 6 for the first array', function() {
		expect(electron.add('[1, 2, 3, 4, 5 ]')).toEqual(6);
	});
    it('should return 4 for the second array', function() {
		expect(electron.add('[ 2, 2, 3, 3 ]')).toEqual(4);
	});
});
