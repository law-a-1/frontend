import { FaTimes } from "react-icons/fa";
import { formatColor, formatDate } from "../../util/formatting";

const LogDetail = ({ log, handleClose }) => {
  return (
    <div className='modalBox' >
      <div className='log-detail'>
        <div className='log-detail-header'>
          <h4>Log Detail</h4>
          <FaTimes onClick={handleClose} size={20} style={{ color: "#333", cursor: "pointer" }}/>
        </div>
        <table className='log-detail-table'>
          <tbody>
            <tr>
              <td>Created At:</td>
              <td>{formatDate(log.created_at)}</td>
            </tr>
            <tr>
              <td>Level:</td>
              <td style={{ color: formatColor(log.type) }}>{log.type}</td>
            </tr>
            <tr>
              <td>Service:</td>
              <td>{log.service}</td>
            </tr>
            <tr>
              <td>Message:</td>
              <td>
                <div className='log-detail-message'>
                  <code>{log.message}</code>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LogDetail