import { useState } from "react";
import LogDetail from './LogDetail'
import { formatColor, formatDate } from "../../util/formatting";

export const LogItem = ({ log }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <tr>
        <td>{formatDate(log.created_at)}</td>
        <td style={{ color: formatColor(log.type) }}>{log.type}</td>
        <td>{log.service}</td>
        <td className='log-message' onClick={() => setShowDetail(true)}>
          {log.message}
        </td>
        { showDetail &&
          <td className="log-detail-td" style={{ padding: 0,
          }}>
            <LogDetail log={log} handleClose={() => setShowDetail(false)}/>
          </td>
        }
      </tr>
    </>
  );
};
// 
// 
// 
