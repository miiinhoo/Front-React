

import * as express from 'express';
import { db } from '../firebase';
import { collection,addDoc,getDocs } from 'firebase/firestore';

const router = express.Router();

router.post