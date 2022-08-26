import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import app from '../../api/app';
import User from '../../database/models/User';

import { Response } from 'superagent';
import { paylodUserMock, resultCreateUserMock } from '../mocks/User.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota User', () => {
  let chaiHttpResponse: Response;
  describe('rota "/user" metdo "post" create user', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(resultCreateUserMock as User);
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      (User.create as sinon.SinonStub).restore();
    });

    it('create user success', async () => {
      chaiHttpResponse = await chai.request(app).post('/users').send(paylodUserMock);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('email');
      expect(chaiHttpResponse.body).to.have.property('password');
    });
  });

  describe('rota "/user" metdo "post" not create user', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(resultCreateUserMock as User);
      sinon.stub(User, 'create').resolves(resultCreateUserMock as User);
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      (User.create as sinon.SinonStub).restore();
    });

    it('create user faild', async () => {
      chaiHttpResponse = await chai.request(app).post('/users').send(paylodUserMock);
      expect(chaiHttpResponse.status).to.be.equal(409);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.equal('User already exists');
    });
  });
});
