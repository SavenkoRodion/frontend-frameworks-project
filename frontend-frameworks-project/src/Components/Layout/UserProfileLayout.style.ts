const ToolBar = {
  justifyContent: "space-evenly",
  backgroundColor: "#42a5f5",
  color: "#fff",
  borderRadius: "15px",
  marginBottom: "20px",
  width: "960px",
};

const ToolBarElement = {
  height: "64px",
  width: "100%",
  display: "grid",
  alignContent: "center",
  "&:hover": {
    background: "#1565c0",
  },
  "&:first-of-type": {
    borderRadius: "15px 0 0 15px",
  },
  "&:last-of-type": {
    borderRadius: "0 15px 15px 0",
  },
};

const styles = { ToolBar, ToolBarElement };

export default styles;
