import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const notify_times_diff = () => {
    toast.error('Incorrect time set!', {
        position: "top-right",
        autoClose: 1500,
        progress: undefined,
        theme: "light",
        });
};

export const notify_done = () => {
    toast.success('Time is up! Change your position!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
  };

export default function Notification() {
  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
        <ToastContainer />
    </>
  )
}
