import { Router } from "express";

const authRouter = Router();

authRouter.post('sign-up', () => res.send({
    title: 'Sign up'
}));

authRouter.post('sign-in', () => res.send({
    title: 'Sign in'
}));

authRouter.post('logout', () => res.send({
    title: 'Log out'
}));

export default authRouter;