
import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database";

export default async function newDetail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params)});
  // Fetch a random post using aggregation
  let randomPostArray = await db.collection('post').aggregate([
    { $sample: { size: 1 } }
  ]).toArray();

  // Extract the random post from the array
  let randomPost = randomPostArray.length > 0 ? randomPostArray[0] : null;

  // Check if a random post was found and return its _id
  let randomPostId = randomPost ? randomPost._id.toString() : null;
  
  console.log(props)
  console.log(result._id)

  return (
    <div className="container">
      <header className="info">
        <h2>{result.title}</h2>

      <section class="meta">
        <span>by</span> <img src="https://avatars.githubusercontent.com/u/104015474?v=4" /> <a href="https://github.com/MinsungParkYonsei">Minsung Park</a>
      </section>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp" />
      </header>

      <p className='intro'>Abstract ~~~~~~~</p>

      <p>{result.content}</p>

<blockquote>강조할 quote</blockquote>
  
<img src="https://d262ilb51hltx0.cloudfront.net/fit/t/1600/1280/gradv/29/81/55/1*qUF3hZQFAFtqyYO1pRS0Tw.png" />
<span>Lights (source: medium.com)</span>

<p>She travelling acceptance men unpleasant her especially entreaties law. Law forth but end any arise chief arose. Old her say learn these large. Joy fond many ham high seen this. Few preferred continual sir led incommode neglected. Discovered too old insensible collecting unpleasant but invitation.</p>

<a className='btn'>View Project</a>

 <footer className="navigation">
  
   <header>
     <h6 className='small'>Random Post</h6> 
     <span className="ss-icon ss-standard">rows</span>
   </header>

   <a href={`${randomPost?._id}`}>
    <h4>{randomPost?.title}</h4>
</a>


   <section className="meta">
    <span>by</span> <img src="https://pbs.twimg.com/profile_images/458618257432252417/dtAIMOnK.jpeg" /> <a href="#">Bas Kaal</a> + <img src="https://pbs.twimg.com/profile_images/434110818033364992/wVqsMmvS.jpeg" /> <a href="#">Jeroen Baars</a>
  </section>

 </footer>

    </div>
  )
}