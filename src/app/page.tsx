"use client"

import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect } from 'react'
import { useScroll } from '@/hook/useScroll'
import { NavigationComponent } from '@/lnb/navigation'
import { MainComponent } from '@/section/main'
import { InformationComponent } from '@/section/info'
import { ProfileComponent } from '@/section/profile'
import { WorkExperienceComponent } from '@/section/work'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main className={styles.main} style={{ height : window.innerHeight * 4 }} >

        <NavigationComponent/>
        
        <MainComponent/>

        <InformationComponent/>

        <ProfileComponent/>

        <WorkExperienceComponent/>

    </main>
  )
}
