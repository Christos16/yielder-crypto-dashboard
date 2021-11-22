import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import SectionTitle from '../components/Typography/SectionTitle'
import RoundIcon from '../components/RoundIcon'
import { Button } from '@windmill/react-ui'
import response from '../utils/demo/tableData'
import walletIcon from "../assets/img/wallet.png"
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData';
import { Card, CardBody } from '@windmill/react-ui'
const coinImage = "data:image/png;base64,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"

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Holdings" value="$ 0.00">
       
        </InfoCard>

        <InfoCard title="Earnings" value="$ 0.00">
       
        </InfoCard>

        <InfoCard title="Est. yearly yield" value="$ 0.00">
        
        </InfoCard>

     
      </div>

<section className="md:flex">
      <section className="card__container p-8 bg-white dark:bg-gray-800">
      <h2 className=" text-gray-700 dark:text-gray-200 text-xl font-bold">Highest APY</h2>
<div className="flex justify-between items-center flex-wrap">


        <div className="item dark:bg-white bg-gray-800">
        <img
            src={"https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/1/0x0000000000085d4780B73119b644AE5ecd22b376/logo-128.png"}
       
            className="mr-4 w-1/4 mx-auto"
          />
            <p className="mb-4 font-semibold dark:text-gray-900 text-white">TUSD</p>
            <p className="dark:text-gray-900 text-white">
            205.98%
            </p>
        </div>
        <div className="item dark:bg-white bg-gray-800">
        <img
src={coinImage}       
            className="mr-4 w-1/4 mx-auto"
          />
            <p className="mb-4 font-semibold dark:text-gray-900 text-white">TUSD</p>
            <p className="dark:text-gray-900 text-white">
            205.98%
            </p>
        </div>
        <div className="item dark:bg-white bg-gray-800">
        <img
            src={"https://raw.githack.com/yearn/yearn-assets/master/icons/multichain-tokens/1/0x0000000000085d4780B73119b644AE5ecd22b376/logo-128.png"}
       
            className="mr-4 w-1/4 mx-auto"
          />
            <p className="mb-4 font-semibold dark:text-gray-900 text-white">TUSD</p>
            <p className="dark:text-gray-900 text-white">
            205.98%
            </p>
        </div>
        </div>
      </section>

      <section className="card__container p-8 bg-white dark:bg-gray-800">
      <h2 className="text-dark text-xl font-bold  text-gray-700 dark:text-gray-200">Make better investment and save time</h2>
       
       <p className="b-4 font-semibold text-gray-700 dark:text-gray-200 mt-10">
       Yielder is a way to use technology to help manage your holdings. You choose the strategy that best suits you, deposit into that vault, and Yearn tech helps maximize yield through shifting capital, auto-compounding, and rebalancing.

Custody, and responsibility, for your holdings remains yours.

You can withdraw anytime.
       </p>
      </section>
      </section>

      <section style={{marginLeft: "auto", marginRight: "auto"}} className="card__container bg-white dark:bg-gray-800 mt-10 flex items-center justify-between ml-auto mb-10">
<img src={walletIcon} style={{width: "80px"}}/>
      <h2 className="dark:text-white text-dark text-xl font-bold">Wallet not connected</h2>
       
     
      </section>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Total Assets</TableCell>
              <TableCell>Available to deposit</TableCell>
              <TableCell></TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                  <img src={coinImage}  className="hidden mr-3 md:block w-36 h-50"  alt="Coin image" style={{width: "50px", borderRadius: "100px"}}/>
                   
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.amount}%</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.asset}</span>
                </TableCell>
                 <TableCell>
                  <Badge type="success">Available</Badge>
                </TableCell> 
             
                <TableCell>
                <Button layout="outline">Deposit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      <PageTitle>Report</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Product">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default Dashboard
