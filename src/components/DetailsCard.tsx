import Image from 'next/image'
import React from 'react'

const DetailsCard = () => {
  return (
    <>
      <div>
        <div>
            <div>
                <h1>Rede de parecerias</h1>
                <p>Os benefícios que você procura em um só lugar!</p>
            </div>
        </div>
        <div>
            <Image src='/images/' alt='Rede de parcerias imagem' width={100} height={200}/>
            <h5 >Central de <br/><b>Benefícios</b></h5>
            <p>O nosso clube de vantagens é uma sadasd asd  asd  asdasdas  sad d s d sdasdasd sa d sa d asd asdasdasd sdsd  sad a sd  asddddddsd  sds</p>
        </div>
      </div>
    </>
  )
}

export default DetailsCard
