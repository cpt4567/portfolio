import { useScroll } from "@/hook/useScroll"
import ThreeJS from "@/three";
import { useCallback, useEffect, useMemo, useState } from "react"
/* import styles from './page.module.css'
 */
export function MainComponent() {

    const ReturnDom = useScroll({ Documents : RenderderTag , startEvent : onStartScroll , removeEvent : onRemoveScroll })

    function RenderderTag(obj:any) {
      
      const typing = "Front End Developer"

      const [typingObject, setTypingObject] = useState({ text : '' , count : 0 , remove : false });

      useEffect(() => {
        
        console.log(typingObject.count);
        
        setTimeout(() => {

            setTypingObject((pre) => {
              
              const { text , count , remove } = pre;
  
              if(!remove){
                
                const action = {
                  false : { text: text + typing[pre.count] , count : count + 1 , remove : false },
                  true : { text: text + typing[pre.count] , count : count + 1 , remove : true } 
                }
  
                const result = count !== typing.length - 1 ? action.false : action.true
  
                return result
  
              }
             
              else if(remove){
                
                const action = {
                  false : { text: text + typing[pre.count] , count : count + 1 , remove : false },
                  true : { ...pre , text: text.substring(0, count - 1) , count : count - 1 ,remove : true }
                }
                
                const result = count !== 0 ? action.true : action.false
  
                return result
               
              }
            
              else {
                return pre
              }
  
            })
  
          }, typingObject.count === 0 || typingObject.count === typing.length  ? 2500 : 200 );

      
        return () => {
          
        };
      });

      return (
      <div ref={obj.ref} style={ { width:"80%" , height: window.innerHeight , float:"right" } }>

            <h1 style={{position:"absolute", top:"20%",right:"42%"}} >My Name is </h1>

            <div style={{position:"absolute", top:"20%",right:"30%" ,width:200 , height:60 , overflow:"hidden"}}>
              <ul className="showName">

                <li style={{width:200,height:60}}><h1>MinSub Kim</h1></li>
              </ul>
 
            </div>


          <h1 style={{position:"absolute", top:"30%",right:"30%"}}>{`Hello I'm ${typingObject.text}`}</h1>

          <div style={{position:"absolute", top:"50%",right:"5%"}}>
           <ThreeJS/>
          </div>

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