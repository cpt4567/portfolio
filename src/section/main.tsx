import { useScroll } from "@/hook/useScroll"
/* import styles from './page.module.css'
 */
export function MainComponent() {

    const ReturnDom = useScroll({ Documents : RenderderTag , startEvent : onStartScroll , removeEvent : onRemoveScroll })

    function RenderderTag(obj:any) {
      return (
      <div ref={obj.ref} style={ { width:"80%" , height: window.innerHeight , float:"right" } }>
          <h1 style={{}}>asdasdasadasddsa</h1>
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