import { testingFunction }  from '../../src/server/models/recipe';
import chai from 'chai';
chai.should();

describe('testingFunction', _ => {
  it('return 4', () => {
    testingFunction().should.be.equal(4);
  })
})