import React from 'react'
import './style.css';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeInfoDetail from "./components/CubeInfoDetail";


const CubeVideoScript = () => (
    <section className='content lms v-wide'>
      <CubeInfoList/>
      <CubeInfoDetail/>
    </section>
);

export default CubeVideoScript
