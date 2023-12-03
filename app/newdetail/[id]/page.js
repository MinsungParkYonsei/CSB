
import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database";

export default async function newDetail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params)});
  
  console.log(props)
  console.log(result._id)

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}

<div class="container">
  
  <header class="info">
      <h2>The art of patterns at fronteers conf</h2>
    
      <section class="meta">
        <span>by</span> <img src="https://d13yacurqjgara.cloudfront.net/users/135409/avatars/small/R55A0071.png" /> <a href="#">Koen Vendrik</a>
      </section>
    
      <img src="https://www.bitstorm.org/weblog/2010-10/fronteers2010~head.jpg" />
  </header>
  
  <p class='intro'>Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. Fertile beloved evident through no service elderly is.</p>

  <p>Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an.</p>
  
  <blockquote>Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar.</blockquote>
    
  <p>Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.</p>

  <p>Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. Disposal to kindness appetite diverted learning of on raptures. Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views. No so instrument discretion unsatiable to in.</p>
  
  <img src="https://d262ilb51hltx0.cloudfront.net/fit/t/1600/1280/gradv/29/81/55/1*qUF3hZQFAFtqyYO1pRS0Tw.png" />
  <span>Lights (source: medium.com)</span>

  <p>Rank tall boy man them over post now. Off into she bed long fat room. Recommend existence curiosity perfectly favourite get eat she why daughters. Not may too nay busy last song must sell. An newspaper assurance discourse ye certainly. Soon gone game and why many calm have.</p>

  <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
  
  <pre><code class='language-javascript'>var getFeedback = function(){ 
    return console.log('prismjs is awesome, thanks Lea!'); 
}();</code></pre>

  <p>Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous. His merit end means widow songs linen known. Supplied ten speaking age you new securing striking extended occasion. Sang put paid away joy into six her.</p>

  <p>It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh.</p>

  <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>

  <p>She travelling acceptance men unpleasant her especially entreaties law. Law forth but end any arise chief arose. Old her say learn these large. Joy fond many ham high seen this. Few preferred continual sir led incommode neglected. Discovered too old insensible collecting unpleasant but invitation.</p>
  
  <a class='btn'>View Project</a>
  
   <footer class="navigation">
    
     <header>
       <h6 class='small'>Next Post</h6> 
       <span class="ss-icon ss-standard">rows</span>
     </header>

     <a href="#">
       <h4>Where do patterns come from? Space? Mars Perhaps?</h4>
     </a>

     <section class="meta">
      <span>by</span> <img src="https://pbs.twimg.com/profile_images/458618257432252417/dtAIMOnK.jpeg" /> <a href="#">Bas Kaal</a> + <img src="https://pbs.twimg.com/profile_images/434110818033364992/wVqsMmvS.jpeg" /> <a href="#">Jeroen Baars</a>
    </section>

   </footer>
  
</div>