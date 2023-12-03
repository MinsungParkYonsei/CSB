import { connectDB } from "@/app/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  if (session) {
    req.body.author = session.user.email
  }

    if (req.method == 'POST'){
        if (req.body.title == '') {
            return res.status(500).json('write the title')
        }
        if (req.body.content == '') {
            return res.status(500).json('write the content')
        }
        
      let db = (await connectDB).db('forum')
      let result = db.collection('post').insertOne(req.body)
      res.redirect(302, '/list')
    }
  }