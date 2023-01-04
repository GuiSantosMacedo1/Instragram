import { Post } from '../Post'
import { Story } from '../story'
import { Suggestion } from '../Suggestion'
import './style.css'

export function Layout(){
    return(
        <>

        <div className='MainGrid'>

        <div className='first-column' style={{gridArea: "firstColumn"}}>
            <div className="box" >
                <Story />
            </div>
            <div className="box" style={{margin:'30px 0px '}} >
                <Post />
            </div>
        </div>

        <div className="suggestionbox" style={{gridArea: "secondColumn"}} >
            <Suggestion />
        </div>

        </div>


        </>
    )

    
}