'use client'

import Link from "next/link";

///destructuring 문법

export default function ListItem({result}){

    return(
        <div>
        {
        result.map((a, i)=>
            <div className="list-item">
            <Link href={'/detail/' + result[i]._id}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={'/edit/' + result[i]._id}>✏️</Link>

            <span onClick={(e)=>{
                fetch('/api/post/delete', {method: 'POST', body : result[i]._id })
                
                .then((r)=>{
                    if(r.status == 200) {
                      return r.json()
                    } else {
                      //서버가 에러코드전송시 실행할코드
                    }
                  })
                  //Cmd Slash = 한번에 Slash
                  .then((result)=>{ 
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                    },1000)
                    //성공시 실행할코드
                  }).catch((error)=>{
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error)
                  })
                  // fetch('api/abc/kim')
            }}>🗑️</span>
            
            <p>{result[i].content}</p>
            </div>
         )
        }
        </div>
    )
}