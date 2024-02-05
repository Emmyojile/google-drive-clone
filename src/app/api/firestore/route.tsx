import { storage, app, database } from "@/firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
  return new NextResponse(JSON.stringify({ text: "Hey Firebase Api Route!!" }));
};
