import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between  mt-5  leading-4 p-5'>
        <div>
            <img src={require('/Users/shreyasmac/Desktop/detox/detox/src/assets/detoxlogo.png')} 
            width={55} />
        </div>
        <div>
            <img src={require('/Users/shreyasmac/Desktop/detox/detox/src/assets/userprofile.png')}
            width={70} />
        </div>
    </div>
  )
}

export default Navbar