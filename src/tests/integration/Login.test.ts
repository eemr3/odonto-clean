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
        name: 'Emerson Moreira',
        email: 'eemr3@email.com',
      });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  });

  describe('login case faild email', () => {
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

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.equal('E-mail or password incorrect');
    });
  });

  // it('Testa erro da requisição com senha inválidos', async () => {
  //   const response = await chai.request(app).post('/login').send({
  //     email: 'zebirita@email.com',
  //     password: 'teste22',
  //   });

  //   expect(response.status).to.be.equal(404);
  //   expect(response.body).to.have.property('message');
  //   expect(response.body.message).to.equal('E-mail or password incorrect');
  // });

  // it('Testa erro da requisição sem a propriedade email', async () => {
  //   const response = await chai.request(app).post('/login').send({
  //     password: 'teste',
  //   });

  //   expect(response.status).to.be.equal(400);
  //   expect(response.body).to.have.property('message');
  //   expect(response.body.message).to.equal('"email" is required');
  // });

  // it('Testa erro da requisição com propriedade email sendo um número', async () => {
  //   const response = await chai.request(app).post('/login').send({
  //     email: 1000,
  //     password: 'alllll@jjjjjj.com',
  //   });

  //   expect(response.status).to.be.equal(400);
  //   expect(response.body).to.have.property('message');
  //   expect(response.body.message).to.equal('"email" must be a string');
  // });

  // it('Testa erro da requisição com email no padrão inválido', async () => {
  //   const response = await chai.request(app).post('/login').send({
  //     email: 'johndotest.com',
  //     password: '123456',
  //   });
  //   expect(response.status).to.be.equal(400);
  //   expect(response.body).to.have.property('message');
  //   expect(response.body.message).to.equal('"email" must be a valid email');
  // });

  // it('Testa erro da requisição sem a propriedade password', async () => {
  //   const response = await chai.request(app).post('/login').send({
  //     email: 'teste@teste.com',
  //   });
  //   expect(response.status).to.be.equal(400);
  //   expect(response.body).to.have.property('message');
  //   expect(response.body.message).to.equal('"password" is required');
  // });
});
