import React,{useState, useEffect} from 'react'
import './style.css';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeInfoDetail from "./components/CubeInfoDetail";


const CubeCommentNew = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollValue(window.scrollY);
    window.addEventListener('scroll', onScroll);
    onScroll();

  return () => window.removeEventListener('scroll', onScroll);
  },[]);

  return(
    // <section className='content lms lms-lnb-fixed v-wide'>
    <section className={scrollValue > 113 ? 'content lms v-wide lms-lnb-fixed' : 'content lms v-wide' }>
      <CubeInfoList/>
      <CubeInfoDetail/>
    </section>
)};

export default CubeCommentNew
