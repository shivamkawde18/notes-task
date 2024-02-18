import { useEffect, useState } from "react";
import { CgAddR } from "react-icons/cg";
import { Modal } from "antd";
export const MyGroups = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
  const [myGroups, setMyGroups] = useState();
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  console.log(myGroups, "jiii");
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // const myGroup = localStorage.getItem("mygroups");
    // console.log(JSON.parse(myGroup), "ye;p");
    // setMyGroups(JSON.parse(myGroup));
    // localStorage.setItem("mygroups", JSON.stringify(myGroups));
  }, [myGroups]);
  useEffect(() => {
    // const myGroup = localStorage.getItem("mygroups");
    // console.log(JSON.parse(myGroup), "ye;p");
    // setMyGroups(JSON.parse(myGroup));
    // if (!localStorage.getItem("mygroups")) setMyGroups([]);
    // else {
    //   setMyGroups(JSON.parse(localStorage.getItem("mygroups")));
    // }
  }, []);

  return (
    <div className="group-container">
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Create New group</h2>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <h3>Group Name</h3>
            <input
              style={{
                height: 31,
                width: 300,
                borderRadius: 50,
              }}
              onChange={(e) => {
                setGroupName(e.currentTarget.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <h3>Choose color</h3>
            <input
              style={{
                height: 31,
                width: 300,
                borderRadius: 50,
              }}
              type="color"
              onChange={(e) => {
                setGroupColor(e.currentTarget.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={() => {
                // Retrieve old data from localStorage
                console.log("hii");
                const oldGroup = JSON.parse(localStorage.getItem("mygroups"));

                // Create a new group object
                const newGroup = { groupColor, groupName };

                // Update localStorage with the new data
                if (oldGroup) {
                  localStorage.setItem(
                    "mygroups",
                    JSON.stringify([...oldGroup, newGroup])
                  );
                } else {
                  localStorage.setItem("mygroups", JSON.stringify([newGroup]));
                }

                // Update React state with the new data
                setMyGroups(oldGroup ? [...oldGroup, newGroup] : [newGroup]);
              }}
              style={{
                height: 38,
                width: 154,
              }}
            >
              create
            </button>
          </div>
        </div>
      </Modal>
      <h1
        style={{
          fontSize: 35,
          fontWeight: 500,
        }}
      >
        Pocket Notes
      </h1>
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
        }}
      >
        {myGroups?.map((group, i) => {
          return (
            <div className="grp-div" key={i + group.groupName}>
              <div className="group-name">{group.groupName}</div>
              <div className="grp-text">{group.groupName}</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 30,
          right: "80%",
        }}
      >
        <div
          onClick={() => setIsModalOpen(true)}
          style={{
            height: 70,
            width: 70,
            backgroundColor: "#16008B",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            cursor: "pointer",
          }}
        >
          {" "}
          <CgAddR
            color="white"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </div>
      </div>
    </div>
  );
};
