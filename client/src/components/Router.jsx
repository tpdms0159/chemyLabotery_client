import React, { createContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signup';
import HomePage from '../pages/home';
import Home from '../pages/main/Mainpage';
import StartPage from '../pages/main/Startpage/StartPage';
import BalancePage from '../pages/main/Balancepage/BalancePage';
import FinishMy from '../pages/main/FinishMy';
import ValuePage from '../pages/main/Valuepage/ValuePage';
import PersonPage from '../pages/main/Personpage/PersonPage';
import MentToPage from '../pages/main/MentToPage';
import ResultPage from '../pages/result';
import FinalResult from './FinalResult';
import MovePage from './MovePage';
import MentFinish from './MentFinish';
import ScrollToTop from './SrollToTop';
import { isMobile } from 'react-device-detect';
import BorderImg from './BorderImg';

const Router = () => {
  return (
    <>
    <ScrollToTop />
   
    <Routes >
        {/* 기본 화면 & 로그인 & 회원가입 */}
        <Route path='/' element ={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>

        <Route path='/main/:name' element={<Home />}/>
        <Route path='/start' element={<StartPage/>}/>
        {/* 테스트 화면 */}
        <Route path='/balance/:id/' element={<BalancePage />}/>
        <Route path='/value' element={<ValuePage />}/>
        <Route path='/value/finish' element={<FinishMy />}/>
        <Route path='/person' element={<PersonPage />}/>
        <Route path='/ment' element={<MentToPage/>}/>
        {/* 결과 입력 및 출력 화면 */}
        <Route path='/result' element={<ResultPage/>}/>
        <Route path='/final' element={<FinalResult/>}/>

        {/* 로딩 화면 */}
        <Route path='/start/loading' element={<MovePage index={0} link="/balance/1"/>}/>
        <Route path='/balance/loading' element={<MovePage index={1} link="/value"/>}/>
        <Route path='/value/loading' element={<MovePage index={2} link="/person"/>}/>
        <Route path='/ment/loading' element={<MentFinish/>}/>

        <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>

    </>
  )
}

export default Router
