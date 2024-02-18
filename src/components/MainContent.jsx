import MainIcon from "./mainIcon";

export const MainContent = () => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        width: "100vw",
        height:"100vh"
      }}
    >
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MainIcon />
        </div>

        <h1>Pocket Notes</h1>
        <p
          style={{
            fontSize: 22,
            fontWeight: 500,
            width:"50%"
          }}
        >
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </div>
  );
};
