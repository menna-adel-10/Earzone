import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data.json";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(data);
}