// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./CategoryCard.css";
// import ModalDelete from "../../Modals/ModalDelete";

// const CategoryCardList = (props) => {
//   const [categories, setCategories] = useState([]);
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);

//   useEffect(() => {
//     if (props.newCategories !== null && props.newCategories !== undefined) {
//       setCategories((prevCategories) => [...prevCategories, props.newCategories]);
//     }
//   }, [props.newCategories]);

//   useEffect(() => {
//     fetch("/api/v1/category/categories", {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//         authorization: `bearer ${localStorage.getItem("jwt")}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || [])) 
//       .catch((err) => console.error(err));
//   }, []);

//   const handleDeleteClick = (categoryId) => {
//     setSelectedCategoryId(categoryId);
//     setOpenDeleteModal(true);
//   };

//   const handleDeleteCategory = async () => {
//     try {
//       const res = await fetch(`/api/v1/category/categoryDelete/${selectedCategoryId}`, {
//         method: "DELETE",
//         headers: {
//           "content-type": "application/json",
//           authorization: `bearer ${localStorage.getItem("jwt")}`,
//         },
//       });
//       if (!res.ok) {
//         throw new Error("Failed to delete category");
//       }
//       setCategories(categories.filter((category) => category._id !== selectedCategoryId));
//       setOpenDeleteModal(false);
//       if(props.onCategoryDeleted) props.onCategoryDeleted();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="categories-container">
//       {categories.map((category) => (
//         <div key={category._id} className="category-card">
//           <NavLink
//             className="navlink-category"
//             to={`/inventory/category/${category._id}`}
//             state={{ categoryId: category._id, categoryName: category.name }}
//           >
//             <img src={category.icon || "/default-icon.png"} alt="Category" />
//             <div>
//               <h4>{category.name}</h4>
//               <p>
//                 <b>{category.items?.length || 0} Items</b> | ${" "}
//                 {category.items?.reduce((totalPrice, currentItem) => (
//                   totalPrice + currentItem.orders?.reduce((previousPrice, currentOrder) => (
//                     previousPrice + Number(currentOrder.price || 0)
//                   ), 0)
//                 ), 0) || 0}
//               </p>
//             </div>
//           </NavLink>
//           <p>Updated At: {new Date(category.updatedAt).toLocaleDateString()}</p>
//           <div className="upddelbtn">
//             <p className="upd">{new Date(category.updatedAt).toLocaleString()}</p>
//             <button
//               onClick={() => handleDeleteClick(category._id)}
//               className="delbtn"
//             >
//               <img
//                 className="deletebtn"
//                 src={require("../../../imgs/deletebtn.png")}
//                 alt="Delete"
//                 width={20}
//                 height={20}
//               />
//             </button>
//           </div>
//         </div>
//       ))}
//       <ModalDelete
//         open={openDeleteModal}
//         onClose={() => setOpenDeleteModal(false)}
//         onDelete={handleDeleteCategory}
//         text={"Are you sure you want to delete this category?"}
//       />
//     </div>
//   );
// };

// export default CategoryCardList;