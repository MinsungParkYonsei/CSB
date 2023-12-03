export default async function Write() {
  
    return (
      <div className="p-20">
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="text title"/>
          <input name="content" placeholder="text content"/> 
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }