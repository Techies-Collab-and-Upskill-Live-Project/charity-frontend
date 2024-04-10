// import getUserProfile from "../../config/api";
// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import apiService from "../../services/apiServices";

// const UserProfile = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   useEffect(() => {
//     const fetchUserProfile = async (apiService) => {
//       const data = await getUserProfile();
//       console.log(data);
//       if (!data) {
//         return;
//       }
//       setUserProfile(data);
//     };
//     fetchUserProfile();
//   }, [apiService]);
//   const { user } = useContext(AuthContext);
//   return (
//     <div>
//       <h1>{user.username}</h1>
//       <h2>{user.email}</h2>
//     </div>
//   );
// };

// export default UserProfile;
