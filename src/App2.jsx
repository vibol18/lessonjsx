import React from 'react'
import OnclickplusUsestate from './ls-2/OnclickplusUsestate'
import EventplusProps from './ls-2/EventplusProps'
import AddToCartEx from './ls-2/AddToCartEx'
import IsLogginExample from './ls-2/IsLogginExample'
import IslogginTwo from './ls-2/IslogginTwo'
import ShowBox from './ls-2/ShowBox'
import ShowBoxtwo from './ls-2/ShowBoxtwo'
import NavbarChangColor from './ls-2/NavbarChangColor'
import Changbackgroundweb from './ls-2/Changbackgroundweb'
import Showandhidebox from './ls-3/Showandhidebox'
import Logintwo from './ls-3/Logintwo'
import Carttwo from './ls-3/Carttwo'
import Onchangeon from './ls-4/Onchangeon'
import HandleSubmit from './ls-4/HandleSubmit'
import Canusemorefield from './ls-4/Canusemorefield'

function App2() {
    function click(){
        alert("hhahhha")
    }
  return (
    <div>
    <Changbackgroundweb/>
      <button onClick={click}>hahahaah</button>
      <OnclickplusUsestate/>
      <EventplusProps text={"i love you so much"} alert={"why u don't deserve me"}/>
      <AddToCartEx name={"coca"}/>
      <IsLogginExample/>
      <IslogginTwo/>
      <ShowBox/>
      <ShowBoxtwo/>
      <NavbarChangColor/>
      <Showandhidebox/>
      <Logintwo/>
      <Carttwo/>
      <Onchangeon/>
      <HandleSubmit/>
      <Canusemorefield/>
    </div>
  )
}

export default App2
