export default async function Write() {
  
    return (
      <div className="wrcontainer">
        <div className="jumbotron">
          <h1 style={{ color: 'white' }}>글 작성 페이지입니다</h1>
          <p id="subheading">기사를 양식에 맞춰 작성하세요</p>
        </div>


      <div className="p-20">
        <form action="/api/post/new" method="POST">
{/*           
          <input name="title" placeholder="text title"/>
          <input name="content" placeholder="text content"/>  */}

        <div>
      <label className="desc" id="title1" htmlFor="Field1">
        Text Title
      </label>
      <div>
        <input
          id="Field1"
          name="title"
          type="text"
          className="field text fn"
          size="8"
          tabIndex="1"
        />
      </div>
    </div>

    <div>
      <label className="desc" id="title3" htmlFor="Field3">
        Email
      </label>
      <div>
        <input
          id="Field3"
          name="email"
          type="email"
          spellCheck="false"
          tabIndex="3"
          id="Field4"
        />
      </div>
    </div>

    <div>
      <label className="desc" id="title4" htmlFor="Field4">
        Text Content
      </label>

      <div>
        <textarea
          id="Field4"
          name="content"
          spellCheck="true"
          rows="10"
          cols="50"
          tabIndex="4"
        ></textarea>
      </div>
    </div>
    <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    )
  }


  