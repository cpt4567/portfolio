import React, { useEffect, useRef, useState } from "react"

/** 
 * @interface type
 *  document -> 스크롤 이벤트 요소의 dom 요소들
 *  startEvent -> 화면에서 해당 dom이 보여지면 실행됳 이벤트  
 *  removeEvent -> 화면애서 해당 dom이 사라지면 실행될 이벤트
 *  **/

interface Props  {
    Documents : any
    startEvent : any
    removeEvent : any
}
 
export const useScroll = ( { Documents , startEvent , removeEvent }: Props ) => {

    const dom = useRef<HTMLDivElement | any >(null)

    useEffect(() => {
                
        const onScroll = ( obj : IntersectionObserverEntry[] )=> {

            for (const event of obj ) {

                // NOTE :: 해당요소가 보여질때
                if(event.isIntersecting){

                    startEvent(event);

                } else {

                    removeEvent(event)
                }
                
                
            }

        }

        const observer = new IntersectionObserver(onScroll)

        if(dom.current){

            observer.observe(dom.current)

        }        

    }, [removeEvent, startEvent])
    


    return ( Documents({ref:dom,style:{}} )
        
    )
}