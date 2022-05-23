import React from 'react'

function formatDate(datestring) {
    return new Date(datestring).toLocaleString()
}

const LogLevelColors = {
    DEBUG: '#53BD97',
    INFO: '#31B4D1',
    ERROR: '#F87575',
}

function formatColor(level) {
    return LogLevelColors[level] || '#000000'
}

export const LogItem = ({ log }) => {
  return (
    <tr>
        <td>{formatDate(log.created_at)}</td>
        <td style={{ color: formatColor(log.type)}}>{log.type}</td>
        <td>{log.service}</td>
        <td className='log-message'>{log.message}</td>
    </tr>
  )
}
