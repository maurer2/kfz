const ListProvider = require('../list.js');
const chai = require('chai');

describe('ListProvider', () => {
    describe('Constructor', () => {
        it('should be created', () => {
            const lp = new ListProvider();
            chai.expect(lp).to.exist;
        });
    });

    describe('getList', () => {
        it('should return list async', () => {
            const lp = new ListProvider();
            const list = lp.getList()
                .then(() => {
                    chai.expect(list).not.to.be.empty;
                })
                .catch(() => {
                    return false
                })
        });
    });

    describe('getEntriesWithLetter', () => {
        it('should contain B for Berlin and not SW', () => {
            const lp = new ListProvider();
            const citiesArray = lp.getEntriesWithLetter('B')
                .then(() => {
                    chai.expect(citiesArray).to.include('BBBB');
                    chai.expect(citiesArray).to.include('BLK');
                    chai.expect(citiesArray).to.not.include('S');
                })
                .catch(() => {
                    return false
                })
        });
    });
});
