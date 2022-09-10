import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../api/app';
import User from '../../database/models/User';

import { Response } from 'superagent';
import { resultLoginMock } from '../mocks/Login.mock';
import { resultFindOneUserMock } from '../mocks/User.mock';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota de Login', () => {
  let chaiHttpResponse: Response;

  describe('login case success', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(resultFindOneUserMock as User);
      sinon.stub(bcrypt, 'compareSync').resolves(true);
      sinon.stub(jwt, 'sign').callsFake(() => {
        return Promise.resolve(resultLoginMock.token);
      });
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      (jwt.sign as sinon.SinonStub).restore();
      (bcrypt.compareSync as sinon.SinonStub).restore();
    });

    it('testa se é possivel realizar login com sucesso', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'eemr3@email.com',
        password: '123456',
      });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  });

  describe('login case falha email', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
    });

    it('Testa erro da requisição com email incorreto', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'teste@teste.com',
        password: '123456',
      });

      expect(chaiHttpResponse.status).to.be.equal(403);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.equal('E-mail or password incorrect');
    });
  });

  describe('login case falha senha', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(resultFindOneUserMock as User);
      sinon.stub(bcrypt, 'compareSync').callsFake((pss, str) => false);
    });

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      (bcrypt.compareSync as sinon.SinonStub).restore();
    });
    it('Testa erro da requisição com senha inválidos', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'eemr3@email.com',
        password: 'teste22d',
      });

      expect(chaiHttpResponse.status).to.be.equal(403);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.equal('E-mail or password incorrect');
    });
  });
});
