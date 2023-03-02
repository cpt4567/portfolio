import { useScroll } from "@/hook/useScroll"
import { useCallback, useEffect, useMemo, useState } from "react"
/* import styles from './page.module.css'
 */
export function MainComponent() {

    const ReturnDom = useScroll({ Documents : RenderderTag , startEvent : onStartScroll , removeEvent : onRemoveScroll })

    function RenderderTag(obj:any) {
      
      const typing = "Hello I'm Front Developer"

      const [typingObject, setTypingObject] = useState({ text : '' , count : 0  });


      useEffect(() => {
        
        const typingEvent = setTimeout(() => {
          
          setTypingObject((pre) => {

            if(pre.count !== typing.length){

              return { text: pre.text + typing[pre.count] , count : pre.count + 1 }
          
            }

            else{

              return { ...pre }

            }

            
          })

        }, 100);


        return () => {
          clearInterval(typingEvent);
        };
      });

      return (
      <div ref={obj.ref} style={ { width:"80%" , height: window.innerHeight , float:"right" } }>
           <h1 style={{position:"absolute", top:"20%",right:"30%"}}>my name is 김민섭</h1>

          <h1 style={{position:"absolute", top:"30%",right:"30%"}}>{typingObject.text}</h1>
      </div>
      )

    }

    function onStartScroll( event : IntersectionObserverEntry ) {
      
      event.target.classList.add('tada')
  
    }
  
    function onRemoveScroll( event : IntersectionObserverEntry ) {
  
      event.target.classList.remove('tada')
  
    }
    
  
    return (<>{ReturnDom}</>)
}