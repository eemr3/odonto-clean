import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../api/app';
import Patient from '../../database/models/Patient';

import { Response } from 'superagent';
import { payloadPatientMock, responsePatientMock } from '../mocks/Patient.mock';
import { token } from '../mocks/token';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota Patient', () => {
  let chaiHttpResponse: Response;
  describe('rota "/patients" metodo "post" create patient', () => {
    before(async () => {
      sinon.stub(Patient, 'findOne').resolves(null);
      sinon.stub(Patient, 'create').resolves(responsePatientMock as Patient);
    });

    after(() => {
      (Patient.findOne as sinon.SinonStub).restore();
      (Patient.create as sinon.SinonStub).restore();
    });

    it('create patient success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/patients')
        .set('authorization', token)
        .send(payloadPatientMock);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('email');
      expect(chaiHttpResponse.body).to.have.property('phone');
      expect(chaiHttpResponse.body).to.have.property('document');
    });
  });

  describe('rota "/patients" metodo "post" falha', () => {
    before(async () => {
      sinon.stub(Patient, 'findOne').resolves(responsePatientMock as Patient);
      sinon.stub(Patient, 'create').resolves(responsePatientMock as Patient);
    });

    after(() => {
      (Patient.findOne as sinon.SinonStub).restore();
      (Patient.create as sinon.SinonStub).restore();
    });

    it('create user faild', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/patients')
        .set('authorization', token)
        .send(payloadPatientMock);
      expect(chaiHttpResponse.status).to.be.equal(409);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.equal('Patient already exists');
    });
  });

  describe('rota "/patients/:id" metodo "get" sucesso', () => {
    before(async () => {
      sinon.stub(Patient, 'findOne').resolves(responsePatientMock as Patient);
    });

    after(() => {
      (Patient.findOne as sinon.SinonStub).restore();
    });

    it('create user faild', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/patients/1')
        .set('authorization', token)
        .send(payloadPatientMock);
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('email');
      expect(chaiHttpResponse.body).to.have.property('phone');
      expect(chaiHttpResponse.body).to.have.property('document');
    });
  });

  describe('rota "/patients/:id" metodo "get" falha', () => {
    before(async () => {
      sinon.stub(Patient, 'findOne').resolves(null);
    });

    after(() => {
      (Patient.findOne as sinon.SinonStub).restore();
    });

    it('create user faild', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/patients/10')
        .set('authorization', token)
        .send(payloadPatientMock);
      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.equal('Patient not found');
    });
  });
});
