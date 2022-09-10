import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../api/app';
import Treatment from '../../database/models/Treatment';

import { Response } from 'superagent';
import {
  payloadPaymentMock,
  responsePaymentCreateMock,
  responsePaymentMock,
} from '../mocks/Payment.mock';
import { token } from '../mocks/token';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota "/treatments"', () => {
  let chaiHttpResponse: Response;

  describe('create new treatment', () => {
    before(async () => {
      sinon.stub(Treatment, 'create').resolves(responsePaymentCreateMock as Treatment);
    });

    after(() => {
      (Treatment.create as sinon.SinonStub).restore();
    });

    it('payment criado com sucesso', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/treatments')
        .set('authorization', token)
        .send(payloadPaymentMock);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('title');
      expect(chaiHttpResponse.body).to.have.property('paymentMethod');
      expect(chaiHttpResponse.body).to.have.property('inCash');
      expect(chaiHttpResponse.body).to.have.property('patientId');
      expect(chaiHttpResponse.body).to.have.property('startDate');
    });
  });

  describe('busca por todos os payment', () => {
    before(async () => {
      sinon.stub(Treatment, 'findAll').resolves(responsePaymentMock as Treatment[]);
    });

    after(() => {
      (Treatment.findAll as sinon.SinonStub).restore();
    });

    it('retorno de todos os payment', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/treatments')
        .set('authorization', token);

      expect(chaiHttpResponse.status).to.be.equal(200);

      responsePaymentMock.forEach((_pay, index) => {
        expect(chaiHttpResponse.body[index]).to.have.property('id');
        expect(chaiHttpResponse.body[index]).to.have.property('title');
        expect(chaiHttpResponse.body[index]).to.have.property('paymentMethod');
        expect(chaiHttpResponse.body[index]).to.have.property('inCash');
        expect(chaiHttpResponse.body[index]).to.have.property('patientId');
        expect(chaiHttpResponse.body[index]).to.have.property('startDate');
      });
    });
  });
});
