import React from 'react'
import './style.css';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeInfoDetail from "./components/CubeInfoDetail";


const CubeTest = () => (
    <section className='content lms v-wide'>
      <CubeInfoList/>
      <CubeInfoDetail/>
    </section>
);

export default CubeTest
