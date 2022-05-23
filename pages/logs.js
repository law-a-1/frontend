import { useEffect, useState } from 'react'
import { LogsAPI } from '../api/endpoints/logs'
import { LogItem } from '../components/LogPage/LogItem'

export const Logs = () => {
  const [logs, setLogs] = useState()

  useEffect(() => {
    async function fetchData() {
      const logs = await LogsAPI.getLogs()
      setLogs(logs)
    }
    fetchData()
  }, [])

  return (
    <div className='page-container'>
        <h1 className='page-header'>Logs</h1>
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
    </div>
  )
}

export default Logs
