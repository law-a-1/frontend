import { useState } from "react"

export const FilterForm = ({ handleSubmit }) => {
  const [level, setLevel] = useState()
  const [service, setService] = useState()
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    const filters = {
      time_start: startTime,
      time_end: endTime,
      type: level,
      service: service
    }

    handleSubmit(filters)
  }

  return (
    <form className="filter-form" onSubmit={onSubmit}>
      <div className="form-field">
        <div className="field-label">Start Time:</div>
        <input
          className="form-input"
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="form-field">
        <div className="field-label">End Time:</div>
        <input
          className="form-input"
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div className="form-field">
        <div className="field-label">Service:</div>
        <input
          className="form-input"
          type="text"
          placeholder="Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </div>
      <div className="form-field">
        <div className="field-label">Level:</div>
        <select className="form-input" name="level" onChange={(e) => {setLevel(e.target.value)}}>
          <option value="">Any</option>
          <option value="DEBUG">DEBUG</option>
          <option value="INFO">INFO</option>
          <option value="ERROR">ERROR</option>
        </select>
      </div>
      <button className="btn btn-primary button-filter">Apply</button>
    </form>
  );
};
