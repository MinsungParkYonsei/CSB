import { connectDB } from "./util/database";

export const revalidate = 60;

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  // await fetch('/URL', {cache : 'force-cache'})
  // await fetch('/URL', {cache : 'no-store' 매번 새거 (실시간데이터))})
    // await fetch('/URL', {next : {revalidate : 60}})

  return (
    <main>
      {result[0].title}
    </main>
  )
}
