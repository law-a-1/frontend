import { useEffect, useState } from 'react'
import { LogsAPI } from '../api/endpoints/logs'
import { LogItem } from '../components/LogPage/LogItem'
import { Pagination } from '../components/LogPage/Pagination'
import { FilterForm } from '../components/LogPage/FilterForm'
import { getJWt } from '../util/localStorage'
import SignIn from './signin'

export const Logs = () => {
  const [logs, setLogs] = useState()
  const [query, setQuery] = useState({
    page: 1,
    page_size: 10
  })
  const [token, _setToken] = useState(getJWt())

  const changePage = (pageNumber) => {
    setQuery({...query, page: pageNumber})
  }

  useEffect(() => {
    async function fetchData() {
      const logs = await LogsAPI.getLogs(token, query)
      setLogs(logs)
    }
    if (token) {
      fetchData()
    }
  }, [token, query])

  const handleSubmit = (filters) => {
    setQuery({...query, ...filters})
  }

  return (token && logs) ? (
    <div className='page-container'>
        <h1 className='page-header'>Logs</h1>
        <FilterForm handleSubmit={handleSubmit}/>
        <table className='log-table'>
            <thead className='table-header'>
                <tr>
                    <td>TIME</td>
                    <td>LEVEL</td>
                    <td>SERVICE</td>
                    <td>MESSAGE</td>
                </tr>
            </thead>
            <tbody>
                {logs && logs.data.map((log) => (
                  <LogItem key={log.id} log={log}/>
                ))}
            </tbody>
        </table>
        <div className='pagination-container'>
          <Pagination page={query.page} pages={logs.pages} changePage={changePage}/>
        </div>
    </div>
  ) : (
    <SignIn/>
  )
}

export default Logs
