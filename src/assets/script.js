import { useEffect, useState } from "react";

import DataProject from "../data/project";

const Script = () => {

    // Show / Hide Sidebar
    const [showHideSidebar, setShowHideSidebar] = useState(false)
    const showHideSidebarHandler = () => {
        if (showHideSidebar) {
            setShowHideSidebar(false)
        }else {
            setShowHideSidebar(true)
        }
    }

    // Check window size
    const [widthSize, setWidthSize] = useState(window.innerWidth)
    const [heightSize, setHeightSize] = useState(window.innerHeight)
    useEffect(() => {
        const realtimeSize = () => {
            setWidthSize(window.innerWidth)
            setHeightSize(window.innerHeight)
        }
        window.addEventListener('resize', realtimeSize)
        return () => {
            window.addEventListener('resize', realtimeSize)
        }
    }, [])

    // OnScroll Handler
    const [ scrolled, setScrolled ] = useState()
    useEffect(_ => {
      const handleScroll = _ => { 
        if (window.pageYOffset > 100) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    // Load More
    const data              = DataProject.sort((asc, desc) => desc.no - asc.no);
    const limit             = 6;
    const [listProject, setListProject] = useState(limit)
    const slice             = data.slice(0, listProject).sort((asc, desc) => desc.no - asc.no)
    const maxItemProject    = data.length == slice.length;

    const handleLoadMore = () => {
        setListProject(listProject + limit)
    }

    return {
        showHideSidebar, showHideSidebarHandler,
        widthSize, heightSize,
        scrolled,
        slice, maxItemProject, handleLoadMore
    }
}

export default Script;