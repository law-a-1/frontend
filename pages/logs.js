import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LogsAPI } from '../api/endpoints/logs'
import { LogItem } from '../components/LogPage/LogItem'

export const Logs = () => {
  const [logs, setLogs] = useState()
  const [query, setQuery] = useState({
    page: 1,
    page_size: 10
  })

  const changePage = (pageNumber) => {
    setQuery({...query, page: pageNumber})
  }

  useEffect(() => {
    async function fetchData() {
      const logs = await LogsAPI.getLogs(query)
      setLogs(logs)
    }
    fetchData()
  }, [query])

  return logs && (
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
        <div className='pagination-container'>
          <div className="pagination">
            <FaChevronLeft 
              size={15}
              onClick={() => changePage(query.page - 1)} 
              style={{ 
                visibility: (query.page > 1) ? 'visible' : 'hidden', 
                cursor: 'pointer'
              }} 
            />
            <span>{`Page ${query.page} of ${logs.pages}`}</span>
            <FaChevronRight 
              size={15} 
              onClick={() => changePage(query.page + 1)} 
              style={{ 
                visibility: (query.page < logs.pages) ? 'visible' : 'hidden',
                cursor: 'pointer'
              }}
            /> 
          </div>        
        </div>
    </div>
  )
}

export default Logs
