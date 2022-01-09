// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {User} from '../../components/types/User'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    { _id: '1234', name: 'John Doe 1' },
    { _id: '124', name: 'John Doe 2' },
    { _id: '123', name: 'John Doe 3' },
    { _id: '134', name: 'John Doe 4' },
  ]);
}
