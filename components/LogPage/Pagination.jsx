import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Pagination = ({ page, pages, changePage }) => {
  return (
    <div className="pagination">
      <FaChevronLeft
        size={15}
        onClick={() => changePage(page - 1)}
        style={{
          visibility: page > 1 ? "visible" : "hidden",
          cursor: "pointer",
        }}
      />
      <span>{`Page ${page} of ${pages}`}</span>
      <FaChevronRight
        size={15}
        onClick={() => changePage(page + 1)}
        style={{
          visibility: page < pages ? "visible" : "hidden",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
