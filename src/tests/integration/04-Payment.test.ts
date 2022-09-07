import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../api/app';
import Payment from '../../database/models/Payment';

import { Response } from 'superagent';
import {
  payloadPaymentMock,
  responsePaymentCreateMock,
  responsePaymentMock,
} from '../mocks/Payment.mock';
import { token } from '../mocks/token';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota "/payments"', () => {
  let chaiHttpResponse: Response;

  describe('create new payment', () => {
    before(async () => {
      sinon.stub(Payment, 'create').resolves(responsePaymentCreateMock as Payment);
    });

    after(() => {
      (Payment.create as sinon.SinonStub).restore();
    });

    it('payment criado com sucesso', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/payments')
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
      sinon.stub(Payment, 'findAll').resolves(responsePaymentMock as Payment[]);
    });

    after(() => {
      (Payment.findAll as sinon.SinonStub).restore();
    });

    it('retorno de todos os payment', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/payments')
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
