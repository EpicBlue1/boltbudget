import calculateAverage from './calculations';


describe("test calculation functions", () =>{

    var array = [];
    beforeAll(() => {
        array = [10, 11, 12, 11];
    })

    test("Make sure array is what we expect", () => {
        expect(array).toEqual([10, 11, 12, 11]);
    })

    test("Ensure function does not return undefined", () => {
        expect(calculateAverage(array)).not.toBeNull;
        expect(calculateAverage(array)).not.toBeUndefined;
    })

    test("Test running for calculation average function", () =>{
        expect(calculateAverage(array)).toBe(11);
    })
})