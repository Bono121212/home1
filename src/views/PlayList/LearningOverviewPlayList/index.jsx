import React,{useState, useEffect} from 'react'
import CourseInfoList from "./components/CourseInfoList";
import CourseInfoDetail from "./components/CourseInfoDetail";


const LearningOverviewPlayList = () => {
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
      <CourseInfoList/>
      <CourseInfoDetail/>
    </section>
)};

export default LearningOverviewPlayList
