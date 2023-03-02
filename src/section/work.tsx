import { useScroll } from "@/hook/useScroll"

export function WorkExperienceComponent() {
    const ReturnDom = useScroll({ Documents : RenderderTag , startEvent : onStartScroll , removeEvent : onRemoveScroll })

    function RenderderTag(obj:any) {
      return (
      <div ref={obj.ref} style={ { width:"80%" , height: window.innerHeight , float:"right" } }>
          <h1 style={{}}>work</h1>
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