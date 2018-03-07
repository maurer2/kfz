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
                    chai.expect(list).not.to.empty;
                })
                .catch(() => {
                    return false
                })
        });
    });
});