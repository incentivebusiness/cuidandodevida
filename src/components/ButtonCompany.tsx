import React from 'react'

const ButtonCompany = () => {
  return (
    <div>
      <button onClick={() => window.location.href = '/company'} className="text-white bg-[#01184a] p-4 rounded-xl absolute top-10 right-14">Empresa</button>
    </div>
  )
}

export default ButtonCompany
