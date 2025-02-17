/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'
import {
  CurrencyCircleDollar,
  HouseSimple,
  ListBullets,
  SignOut
} from '@phosphor-icons/react'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 234)
  }, [])

  return (
    <Loading loading={loading}>
      <div className="bg-gray-100 flex justify-start items-start gap-2">
        <div
          id="sidebar"
          className="flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-[200px] bg-white p-4 transition-all duration-200 ease-in-out -translate-x-64 shadow-xs"
        >
          <div className="flex justify-center items-center">
            <img src="logo.webp" className="w-[60px] h-[60px]" />
          </div>

          <div className="bg-gray-300 h-[1px] w-full" />

          <div className="pr-2 pl-2">
            <div className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-green-100 rounded-md p-2 flex justify-start items-center gap-2 bg-green-50">
              <HouseSimple size={20} />
              Dashboard
            </div>

            <div
              className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('cotas', '/', { shallow: true })
                }, 1244)
              }}
            >
              <ListBullets size={20} />
              Cotas
            </div>

            <div
              className="w-[160px] text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('pagamentos', '/', { shallow: true })
                }, 1244)
              }}
            >
              <CurrencyCircleDollar size={20} />
              Pagamentos
            </div>

            <div
              className="text-sm font-medium mt-1 mb-1 active:scale-95 duration-150 text-start cursor-pointer hover:bg-gray-100 rounded-md p-2 flex justify-start items-center gap-2 absolute bottom-5 w-[160px]"
              onClick={() => {
                setLoading(true)

                setTimeout(() => {
                  router.push('/', '/', { shallow: true })
                }, 1244)
              }}
            >
              <SignOut size={20} />
              Sair
            </div>
          </div>
        </div>

        <div className="bg-white p-4 w-[80%] mt-2 rounded-md">
          <h2 className="mb-5 text-start text-xl font-bold text-[#045B77] uppercase">
            <span>DASHBOARD</span>
            <div className="border-b-2 border-[#14B2C1] w-[30px] pt-1"></div>
          </h2>
        </div>
      </div>
    </Loading>
  )
}
