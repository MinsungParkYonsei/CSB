import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == 'POST'){
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').deleteOne({_id : new ObjectId(요청.body)});
    console.log(result)
    응답.status(200).json('삭제완료')
  }
}