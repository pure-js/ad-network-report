// src/mocks/handlers.js
import { rest } from 'msw';

import mockNetworks from './networks.json';

export const handlers = [
  rest.get('/networks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockNetworks));
  }),
];
