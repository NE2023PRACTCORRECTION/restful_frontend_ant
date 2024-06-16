/* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */
// // import React, { createContext, useContext, useState,useEffect } from "react";
// // import {
// //   closestCenter,
// //   DndContext,
// //   DragOverlay,
// //   PointerSensor,
// //   useSensor,
// //   useSensors
// // } from "@dnd-kit/core";
// // import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
// // import {
// //   arrayMove,
// //   horizontalListSortingStrategy,
// //   SortableContext,
// //   useSortable
// // } from "@dnd-kit/sortable";
// // import { Table } from "antd";
// // import axios from "axios";
// // import Modal from "../dashboard/Modal";



// // const DragIndexContext = createContext({
// //   active: 3,
// //   over: 3
// // });
// // const dragActiveStyle = (dragState, id) => {
// //   const { active, over, direction } = dragState;
// //   // drag active style
// //   let style = {};
// //   if (active && active === id) {
// //     style = {
// //       backgroundColor: "red",
// //       opacity: 0.5
// //     };
// //   }
// //   // dragover dashed style
// //   else if (over && id === over && active !== over) {
// //     style =
// //       direction === "right"
// //         ? {
// //             borderRight: "1px dashed gray"
// //           }
// //         : {
// //             borderLeft: "1px dashed gray"
// //           };
// //   }
// //   return style;
// // };
// // const TableBodyCell = (props) => {
// //   const dragState = useContext(DragIndexContext);
// //   return (
// //     <td
// //       {...props}
// //       style={{
// //         ...props.style,
// //         ...dragActiveStyle(dragState, props.id)
// //       }}
// //     />
// //   );
// // };
// // const TableHeaderCell = (props) => {
// //   const dragState = useContext(DragIndexContext);
// //   const { attributes, listeners, setNodeRef, isDragging } = useSortable({
// //     id: props.id
// //   });
// //   const style = {
// //     ...props.style,
// //     cursor: "move",
// //     ...(isDragging
// //       ? {
// //           position: "relative",
// //           zIndex: 9999,
// //           userSelect: "none"
// //         }
// //       : {}),
// //     ...dragActiveStyle(dragState, props.id)
// //   };
// //   return (
// //     <th
// //       {...props}
// //       ref={setNodeRef}
// //       style={style}
// //       {...attributes}
// //       {...listeners}
// //     />
// //   );
// // };
// // const baseColumns = [
// //   {
// //     title: "FirstName",
// //     dataIndex: "firstName"
// //   },
// //   {
// //     title: "LastName",
// //     dataIndex: "lastName"
// //   },
// //   {
// //     title: "NationalID",
// //     dataIndex: "nationalId"
// //   },
// //   {
// //     title: "Email",
// //     dataIndex: "email"
// //   },
// //   {
// //     title: "Telephone",
// //     dataIndex: "telephone"
// //   },
// //   {
// //     title: "Department",
// //     dataIndex: "department"
// //   },
// //   {
// //     title: "Position",
// //     dataIndex: "position"
// //   },
// //   {
// //     title: "Manufacturer",
// //     dataIndex: "manufacturer"
// //   },
// //   {
// //     title: "Model",
// //     dataIndex: "model"
// //   },
// //   {
// //     title: "SN",
// //     dataIndex: "SN"
// //   }
// // ];




// // const EmployeeTable = () => {
// //   const [dragIndex, setDragIndex] = useState({
// //     active: -1,
// //     over: -1,
// //   });
// //   const [columns, setColumns] = useState(() =>
// //     baseColumns.map((column, i) => ({
// //       ...column,
// //       key: `${i}`,
// //       onHeaderCell: () => ({
// //         id: `${i}`,
// //       }),
// //       onCell: () => ({
// //         id: `${i}`,
// //       }),
// //     })),
// //   );
// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
// //         distance: 1,
// //       },
// //     }),
// //   );
// //   const onDragEnd = ({ active, over }) => {
// //     if (active.id !== over?.id) {
// //       setColumns((prevState) => {
// //         const activeIndex = prevState.findIndex((i) => i.key === active?.id);
// //         const overIndex = prevState.findIndex((i) => i.key === over?.id);
// //         return arrayMove(prevState, activeIndex, overIndex);
// //       });
// //     }
// //     setDragIndex({
// //       active: -1,
// //       over: -1,
// //     });
// //   };
// //   const onDragOver = ({ active, over }) => {
// //     const activeIndex = columns.findIndex((i) => i.key === active.id);
// //     const overIndex = columns.findIndex((i) => i.key === over?.id);
// //     setDragIndex({
// //       active: active.id,
// //       over: over?.id,
// //       direction: overIndex > activeIndex ? 'right' : 'left',
// //     });
// //   };
// //    const [employees, setEmployees] = useState([]);

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/all/employees");
// //         setEmployees(response.data); // Assuming response.data is an array of employees
// //       } catch (error) {
// //         console.error("Error fetching employees:", error);
// //       }
// //     };

// //     fetchEmployees();
// //   }, []);
// //   return (
// //     <DndContext
// //       sensors={sensors}
// //       modifiers={[restrictToHorizontalAxis]}
// //       onDragEnd={onDragEnd}
// //       onDragOver={onDragOver}
// //       collisionDetection={closestCenter}
// //     >
// //       <SortableContext
// //         items={columns.map((i) => i.key)}
// //         strategy={horizontalListSortingStrategy}
// //       >
// //         <DragIndexContext.Provider value={dragIndex}>
// //           <Table
// //             rowKey="key"
// //             columns={columns}
// //             components={{
// //               header: {
// //                 cell: TableHeaderCell
// //               },
// //               body: {
// //                 cell: TableBodyCell
// //               }
// //             }}
// //             // dataSource={employees}
// //           />
// //         </DragIndexContext.Provider>
// //       </SortableContext>
// //       <DragOverlay>
// //         <th
// //           style={{
// //             backgroundColor: "gray",
// //             padding: 16
// //           }}
// //         >
// //           {columns[columns.findIndex((i) => i.key === dragIndex.active)]?.title}
// //         </th>
// //       </DragOverlay>
// //     </DndContext>
// //   );
// // };
// // export default EmployeeTable;




// /* eslint-disable no-unused-vars */
// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   closestCenter,
//   DndContext,
//   DragOverlay,
//   PointerSensor,
//   useSensor,
//   useSensors
// } from "@dnd-kit/core";
// import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
// import {
//   arrayMove,
//   horizontalListSortingStrategy,
//   SortableContext,
//   useSortable
// } from "@dnd-kit/sortable";
// import { Table } from "antd";
// import axios from "axios";

// const DragIndexContext = createContext({
//   active: 3,
//   over: 3
// });
// const dragActiveStyle = (dragState, id) => {
//   const { active, over, direction } = dragState;
//   // drag active style
//   let style = {};
//   if (active && active === id) {
//     style = {
//       backgroundColor: "red",
//       opacity: 0.5
//     };
//   }
//   // dragover dashed style
//   else if (over && id === over && active !== over) {
//     style =
//       direction === "right"
//         ? {
//             borderRight: "1px dashed gray"
//           }
//         : {
//             borderLeft: "1px dashed gray"
//           };
//   }
//   return style;
// };
// const TableBodyCell = (props) => {
//   const dragState = useContext(DragIndexContext);
//   return (
//     <td
//       {...props}
//       style={{
//         ...props.style,
//         ...dragActiveStyle(dragState, props.id)
//       }}
//     />
//   );
// };
// const TableHeaderCell = (props) => {
//   const dragState = useContext(DragIndexContext);
//   const { attributes, listeners, setNodeRef, isDragging } = useSortable({
//     id: props.id
//   });
//   const style = {
//     ...props.style,
//     cursor: "move",
//     ...(isDragging
//       ? {
//           position: "relative",
//           zIndex: 9999,
//           userSelect: "none"
//         }
//       : {}),
//     ...dragActiveStyle(dragState, props.id)
//   };
//   return (
//     <th
//       {...props}
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//     />
//   );
// };
// const baseColumns = [
//   {
//     title: "FirstName",
//     dataIndex: "firstName"
//   },
//   {
//     title: "LastName",
//     dataIndex: "lastName"
//   },
//   {
//     title: "NationalID",
//     dataIndex: "nationalId"
//   },
//   {
//     title: "Email",
//     dataIndex: "email"
//   },
//   {
//     title: "Telephone",
//     dataIndex: "telephone"
//   },
//   {
//     title: "Department",
//     dataIndex: "department"
//   },
//   {
//     title: "Position",
//     dataIndex: "position"
//   },
//   {
//     title: "Manufacturer",
//     dataIndex: "laptopManufacturer"
//   },
//   {
//     title: "Model",
//     dataIndex: "model"
//   },
//   {
//     title: "SerialNumber",
//     dataIndex: "serialNumber"
//   }
// ];

// const EmployeeTable = () => {
//   const [dragIndex, setDragIndex] = useState({
//     active: -1,
//     over: -1,
//   });
//   const [columns, setColumns] = useState(() =>
//     baseColumns.map((column, i) => ({
//       ...column,
//       key: `${i}`,
//       onHeaderCell: () => ({
//         id: `${i}`,
//       }),
//       onCell: () => ({
//         id: `${i}`,
//       }),
//     })),
//   );
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 1,
//       },
//     }),
//   );
//   const onDragEnd = ({ active, over }) => {
//     if (active.id !== over?.id) {
//       setColumns((prevState) => {
//         const activeIndex = prevState.findIndex((i) => i.key === active?.id);
//         const overIndex = prevState.findIndex((i) => i.key === over?.id);
//         return arrayMove(prevState, activeIndex, overIndex);
//       });
//     }
//     setDragIndex({
//       active: -1,
//       over: -1,
//     });
//   };
//   const onDragOver = ({ active, over }) => {
//     const activeIndex = columns.findIndex((i) => i.key === active.id);
//     const overIndex = columns.findIndex((i) => i.key === over?.id);
//     setDragIndex({
//       active: active.id,
//       over: over?.id,
//       direction: overIndex > activeIndex ? 'right' : 'left',
//     });
//   };

//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/all/employees");
//         if (Array.isArray(response.data)) {
//           setEmployees(response.data);
//         } else {
//           console.error("Expected an array but got:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <DndContext
//       sensors={sensors}
//       modifiers={[restrictToHorizontalAxis]}
//       onDragEnd={onDragEnd}
//       onDragOver={onDragOver}
//       collisionDetection={closestCenter}
//     >
//       <SortableContext
//         items={columns.map((i) => i.key)}
//         strategy={horizontalListSortingStrategy}
//       >
//         <DragIndexContext.Provider value={dragIndex}>
//           <Table
//             rowKey="id"
//             columns={columns}
//             dataSource={employees} // Set the dataSource prop here
//             components={{
//               header: {
//                 cell: TableHeaderCell
//               },
//               body: {
//                 cell: TableBodyCell
//               }
//             }}
//           />
//         </DragIndexContext.Provider>
//       </SortableContext>
//       <DragOverlay>
//         <th
//           style={{
//             backgroundColor: "gray",
//             padding: 16
//           }}
//         >
//           {columns[columns.findIndex((i) => i.key === dragIndex.active)]?.title}
//         </th>
//       </DragOverlay>
//     </DndContext>
//   );
// };

// export default EmployeeTable;



// import React, { useEffect, useState } from "react";
// import { Table, Button, Space } from "antd";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const location = useLocation();
//   const { createdEmployee } = location.state || {};

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/all/employees");
//         const allEmployees = Array.isArray(response.data) ? response.data : [];

//         if (createdEmployee) {
//           setEmployees([createdEmployee, ...allEmployees]);
//         } else {
//           setEmployees(allEmployees);
//         }
//       } catch (error) {
//         console.error("Error fetching employees", error);
//         setEmployees(createdEmployee ? [createdEmployee] : []); // handle case where fetch fails
//       }
//     };

//     fetchEmployees();
//   }, [createdEmployee]);

//  const handleEdit = async (employeeId, updatedData) => {
//    try {
//      const response = await axios.put(
//        `http://localhost:5000/employee/${employeeId}`,
//        updatedData
//      );
//      console.log("Employee updated successfully:", response.data);
//      // Update the state or handle the updated employee data as needed
//    } catch (error) {
//      console.error("Error updating employee:", error);
//    }
//  };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/employee/${id}`);
//       setEmployees((prevEmployees) =>
//         prevEmployees.filter((employee) => employee.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting employee", error);
//     }
//   };

//   const columns = [
//     { title: "First Name", dataIndex: "firstName", key: "firstName" },
//     { title: "Last Name", dataIndex: "lastName", key: "lastName" },
//     { title: "Email", dataIndex: "email", key: "email" },
//     { title: "National ID", dataIndex: "nationalId", key: "nationalId" },
//     { title: "Telephone", dataIndex: "telephone", key: "telephone" },
//     { title: "Department", dataIndex: "department", key: "department" },
//     { title: "Position", dataIndex: "position", key: "position" },
//     {
//       title: "Laptop Manufacturer",
//       dataIndex: "laptopManufacturer",
//       key: "laptopManufacturer"
//     },
//     { title: "Model", dataIndex: "model", key: "model" },
//     { title: "Serial Number", dataIndex: "serialNumber", key: "serialNumber" },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <Space size="middle">
//           <Button type="primary" onClick={() => handleEdit(record)}>
//             Edit
//           </Button>
//           <Button type="danger" onClick={() => handleDelete(record.id)} className="bg-red-500">
//             Delete
//           </Button>
//         </Space>
//       )
//     }
//   ];

//   return <Table dataSource={employees} columns={columns} rowKey="id" />;
// };

// export default EmployeeTable;



import React, { useEffect, useState } from "react";
import { Table, Button, Space, Modal, Form, Input } from "antd";
import { useLocation } from "react-router-dom";
import axios from "axios";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [form] = Form.useForm();
  const location = useLocation();
  const { createdEmployee } = location.state || {};

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all/employees");
        const allEmployees = Array.isArray(response.data) ? response.data : [];

        if (createdEmployee) {
          setEmployees([createdEmployee, ...allEmployees]);
        } else {
          setEmployees(allEmployees);
        }
      } catch (error) {
        console.error("Error fetching employees", error);
        setEmployees(createdEmployee ? [createdEmployee] : []); // handle case where fetch fails
      }
    };

    fetchEmployees();
  }, [createdEmployee]);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    form.setFieldsValue(employee);
    setIsModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const updatedData = form.getFieldsValue();
      const response = await axios.put(`http://localhost:5000/employee/update/${editingEmployee.id}`, updatedData);
      console.log("Employee updated successfully:", response.data);
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) => (emp.id === editingEmployee.id ? response.data : emp))
      );
      setIsModalVisible(false);
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employee/delete/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "National ID", dataIndex: "nationalId", key: "nationalId" },
    { title: "Telephone", dataIndex: "telephone", key: "telephone" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Position", dataIndex: "position", key: "position" },
    { title: "Laptop Manufacturer", dataIndex: "laptopManufacturer", key: "laptopManufacturer" },
    { title: "Model", dataIndex: "model", key: "model" },
    { title: "Serial Number", dataIndex: "serialNumber", key: "serialNumber" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" className="bg-red-500" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      )
    }
  ];

  return (
    <>
      <Table dataSource={employees} columns={columns} rowKey="id" />
      <Modal
        title="Edit Employee"
        open={isModalVisible} // Changed from visible to open
        onOk={handleUpdate}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="nationalId" label="National ID">
            <Input />
          </Form.Item>
          <Form.Item name="telephone" label="Telephone">
            <Input />
          </Form.Item>
          <Form.Item name="department" label="Department">
            <Input />
          </Form.Item>
          <Form.Item name="position" label="Position">
            <Input />
          </Form.Item>
          <Form.Item name="laptopManufacturer" label="Laptop Manufacturer">
            <Input />
          </Form.Item>
          <Form.Item name="model" label="Model">
            <Input />
          </Form.Item>
          <Form.Item name="serialNumber" label="Serial Number">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EmployeeTable; // Ensure this is a default export



