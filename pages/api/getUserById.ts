// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {User} from '../../components/types/User'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({ _id: '1234', name: 'John Doe' });
}
