import Express from 'express';
import { getPropertyDetails } from '../handlers';
import { authenticateRequest } from '../middleware';

const PropertyRouter = Express.Router();

PropertyRouter.get('/details/:propid', authenticateRequest,getPropertyDetails);
PropertyRouter.get('/getlist',() => {})
PropertyRouter.post('/paymentrequest',() => {})
PropertyRouter.get('/status',() => {})
PropertyRouter.put('/search',() => {})
PropertyRouter.delete('/myproperty',() => {})

export default PropertyRouter;  