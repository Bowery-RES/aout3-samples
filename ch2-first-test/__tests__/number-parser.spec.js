const { NumberParser } = require('../number-parser');

describe("number-parser" , () => {
    it('should start with a total of 0', () => {
        // arrange
        const sut = new NumberParser();

        // act
        const result = sut.total;

        // assert
        expect(result).toBe(0);
    });

    // Return Value Exit Point
    describe("sum", () => {
        it("should add 2 numbers", () => {
            // arrange
            const inputData = '5,5';
            const sut = new NumberParser();

            // act 
            const result = sut.sum(inputData);

            // assert
            expect(result).toBe(10);
        });

        // State Change Exit Point
        it("should increase the value of total", () => {
            // arrange
            const inputData1 = '5,5';
            const inputData2 = '2,4';
            const sut = new NumberParser();

            // act
            sut.sum(inputData1);
            sut.sum(inputData2);
            const result = sut.total;

            // assert
            expect(result).toBe(16);
        });
    });
});