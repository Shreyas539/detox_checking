import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex justify-center flex-col align-middle text-center'>
        <div>
            <p className='text-[19.5px] mt-10'>Your mind is filled with information</p>
        </div>
        
        <div>
            <p className='text-[39.3px] mt-7'>Let’s put informationthat your mind and life wants</p>
        </div>

        <div className='mt-10'>
            <button className='pt-5 pb-5 pl-5 pr-5 bg-[#a17d60] text-white rounded-3xl text-[20px]'>click to detox</button>
            {/* <a href="https://www.youtube.com/results?search_query=react+js" target="_blank" rel="noopener noreferrer">
                <button>Go to YouTube</button>
            </a> */}
        </div>

        <div className='examplesContainer grid grid-cols-3  justify-center gap-[50px]  text-center mt-[70px]'>
            <div className='individulaExampleContainer border-slate-600 border-[2px] p-5'>
                <a href="https://www.youtube.com/results?search_query= ReactJs" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p>Learn ReactJs</p>
                    </div>
                    <div className=' ml-[100px]'>
                        <img src={require('/Users/shreyasmac/Desktop/detox/detox/src/assets/reactjs_logo.png')} className='mt-7' width={150} />
                    </div>
                </a>
            </div>
            <div className='individulaExampleContainer  border-slate-600 border-[2px] p-5'>
                <a href="https://www.youtube.com/results?search_query=java" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p>Learn Java</p>
                    </div>
                    <div className=' ml-[60px]'>
                        <img src={require('/Users/shreyasmac/Desktop/detox/detox/src/assets/java_logo.jpeg')} width={240}    />
                    </div>
                </a>
            </div>
            <div className='individulaExampleContainer  border-slate-600 border-[2px] p-5'>
                <a href="https://www.youtube.com/results?search_query=tailwind css" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p>Learn Tailwind CSS</p>
                    </div>
                    <div className=' ml-[80px]'>
                        <img src={require('/Users/shreyasmac/Desktop/detox/detox/src/assets/Tailwind_CSS_Logo.png')} className='mt-10' width={200} />
                    </div>
                </a>
            </div>
        </div>

    </div>
  )
}

export default LandingPage

// make hover text to display on image as "Learn ReactJs"