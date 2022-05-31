// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {User} from '../../src/components/types/User'

import getUsers from '../../data-templates/users'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {

  const users = getUsers();
  res.status(200).json(users);
}
