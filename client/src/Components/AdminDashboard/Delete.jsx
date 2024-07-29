// import React from "react";

// const Delete = () => {
//   return <div>Delete</div>;
// };

// export default Delete;

// import React from "react";
// import { useMutation } from "react-query";
// import { toast } from "react-hot-toast";
// import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

// const Delete = ({ appointmentId, refetch }) => {
//   const { axiosPrivate } = useAxiosInterceptor();

//   const mutation = useMutation(
//     async () => {
//       await axiosPrivate.delete(`http://localhost:5000/api/form/delete/${appointmentId}`);
//     },
//     {
//       onSuccess: () => {
//         toast.success("Appointment deleted successfully",{
//           duration: 2000, // Set duration to 5000ms (5 seconds)
//           style: {
//             fontSize: '18px', // Increase font size
//             minWidth: '350px' // Set minimum width
//           }
//         });
//         refetch(); // Refetch the appointments list after deletion
//       },
//       onError: (error) => {
//         toast.error(`Error: ${error.response?.data?.message || error.message}`,{
//           duration: 2000, // Set duration to 5000ms (5 seconds)
//           style: {
//             fontSize: '18px', // Increase font size
//             minWidth: '350px' // Set minimum width
//           }
//         });
//       },
//     }
//   );

//   return (
//     <button onClick={() =>{if (window.confirm("Are you sure you want to delete this appointment?")){mutation.mutate()}}}>
//       Delete
//     </button>
//   );
// };

// export default Delete;


import { useMutation, useQueryClient } from 'react-query';
import useAxiosInterceptor from '../../hooks/useAxiosInterceptor';
import toast from 'react-hot-toast';
import { EditDeleteButton } from './Dashboard-styled';

const Delete = ({ appointmentId, refetch }) => {
  const { axiosPrivate } = useAxiosInterceptor();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      await axiosPrivate.delete(`http://localhost:5000/api/form/delete/${appointmentId}`);
    },
    {
      onSuccess: () => {
        toast.success("Appointment deleted successfully", {
          duration: 2000,
          style: {
            fontSize: '18px',
            minWidth: '350px'
          }
        });
        queryClient.invalidateQueries('todaysAppointments');
        queryClient.invalidateQueries('totalAppointments');
        refetch();
      },
      onError: (error) => {
        toast.error(`Error: ${error.response?.data?.message || error.message}`, {
          duration: 2000,
          style: {
            fontSize: '18px',
            minWidth: '350px'
          }
        });
      },
    }
  );

  return (
    <EditDeleteButton onClick={() => {
      if (window.confirm("Are you sure you want to delete this appointment?")) {
        mutation.mutate();
      }
    }}>
      Delete
    </EditDeleteButton>
  );
};

export default Delete
