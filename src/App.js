import logo from './logo.svg';
import './App.css';
import profile from  "./icon/Image.png"
import vector from  "./icon/Vector.png"
import camera from  "./icon/Group 7.png"
import send from  "./icon/Vector (1).png"

function App() {
  return (
    <div className="p-16 flex items-center justify-center ">
       <div className='w-[428px] bg-[#1B202D] h-[826px] rounded-[50px] py-[38px] px-[21px]'>
          <div className='flex items-center gap-[12px]'>
              <img src={profile} className="w-[44px] h-[44px] rounded-full"/>
              <h2 className='text-xl font-semibold text-white'>Danny Hopkins</h2>
          </div>
          <div className='mt-10'>
              <span className='text-center flex m-auto justify-center text-[#FFFFFF] text-[11px] font-normal ' style={{lineHeight:"18px",letterSpacing:"1px"}}>1 FEB 12:00</span>
              <div className='mt-3 '>
                  <div className='bg-[#373E4E] rounded-[20px] p-[11px] w-[88%] mr-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}>I commented on Figma, I want to add some fancy icons. Do you have any icon set?</p>
                  </div>
                  <div className='bg-[#7A8194] rounded-[20px] p-[11px] w-[88%] mt-3 ml-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}>I commented on Figma, I want to add some fancy icons. Do you have any icon set?</p>
                  </div>
                  <div className='bg-[#373E4E] rounded-[20px] p-[11px] w-fit mr-auto mt-3'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}>Next month?</p>
                  </div>
              </div>

              <span className='text-center flex m-auto justify-center text-[#FFFFFF] text-[11px] font-normal mt-3 ' style={{lineHeight:"18px",letterSpacing:"1px"}}>08:12</span>
              <div className='mt-3 '>
                  <div className='bg-[#7A8194] rounded-[20px] p-[11px] w-[88%] ml-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}>I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish.</p>
                  </div>
                  <div className='bg-[#7A8194] rounded-[20px] p-[11px] w-fit mt-3 ml-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}>?</p>
                  </div>
              </div>

              <span className='text-center flex m-auto justify-center text-[#FFFFFF] text-[11px] font-normal mt-3 ' style={{lineHeight:"18px",letterSpacing:"1px"}}>08:12</span>
              <div className='mt-3 '>
                  <div className='bg-[#373E4E] rounded-[20px] p-[11px] w-fit mr-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF] underline' style={{lineHeight:"21px"}}>maciej.kowalski@email.com</p>
                  </div>
                  <div className='bg-[#7A8194] rounded-[20px] p-[11px] w-fit mt-3 ml-auto'>
                     <p className='text-[14px] font-normal text-[#FFFFFF]' style={{lineHeight:"21px"}}><img src={vector}/></p>
                  </div>
              </div>
          </div>

          <div className='flex bg-[#3D4354] p-2 justify-between items-center rounded-[25px] xsm:mt-[45px] sm:mt-[75px] md:mt-[83px]'>
               <div className='flex gap-3 items-center'>
                   <div className='bg-[#9398A7] p-2 rounded-full'>
                      <img src={camera}/>
                   </div>
                    <label className='text-[14px]' style={{color:"rgba(255, 255, 255, 0.45)"}}>Messages</label>
               </div>
               <div>
                  <img src={send}/>
               </div>
          </div>
       </div>
    </div>
  );
}

export default App;
