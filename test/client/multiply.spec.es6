import {multiply} from '../../src/client/scripts/multiply';
import chai from 'chai';
chai.should();

describe('multiply', _ => {
    it('return 2', () => {
        multiply(1,2).should.be.equal(2);
    });
});