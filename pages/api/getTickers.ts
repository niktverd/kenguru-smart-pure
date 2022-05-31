// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {Ticker} from '../../src/components/types/Ticker'

import getTickers from '../../data-templates/tickers'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ticker[]>
) {

  const tickers = getTickers();
  res.status(200).json(tickers);
}
