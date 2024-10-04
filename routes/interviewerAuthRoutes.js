import express from 'express';
import {createUserAccount, loginUserAccount } from "../controller/interviewerAuthController.js";

const router = express.Router();

router.post('/signup',createUserAccount)
router.post('/login',loginUserAccount)


export default router