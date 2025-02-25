import { Router } from "express";

import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getSubscriptionDetails, getAllSubscriptions, getUserSubscription } from "../controllers/subscriptions.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:id', getSubscriptionDetails);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription'}));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription'}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals'}));

export default subscriptionRouter;