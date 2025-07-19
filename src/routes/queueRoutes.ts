import { Router } from 'express';
import {
  addToQueue,
  getNextQueueItem,
  acknowledgeQueueItem,
  rejectQueueItem
} from '../controllers/QueueController';

const router = Router();

/**
 * @swagger
 * /queue:
 *   post:
 *     summary: Add item to the queue
 *     tags: [Queue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item added
 */
router.post('/queue', addToQueue);

/**
 * @swagger
 * /queue/next:
 *   get:
 *     summary: Get next item in the queue
 *     tags: [Queue]
 *     responses:
 *       200:
 *         description: Next queue item
 *       404:
 *         description: No item available
 */
router.get('/queue/next', getNextQueueItem);

/**
 * @swagger
 * /queue/{id}/ack:
 *   post:
 *     summary: Acknowledge item and remove from queue
 *     tags: [Queue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item acknowledged
 *       404:
 *         description: Item not found
 */
router.post('/queue/:id/ack', acknowledgeQueueItem);

/**
 * @swagger
 * /queue/{id}/nack:
 *   post:
 *     summary: Reject item and return it to the queue
 *     tags: [Queue]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item returned to queue
 *       404:
 *         description: Item not found
 */
router.post('/queue/:id/nack', rejectQueueItem);

export default router;