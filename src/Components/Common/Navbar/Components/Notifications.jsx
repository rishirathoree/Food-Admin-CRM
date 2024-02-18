import React, { useEffect, useRef, useState } from 'react';
import { BellSimpleRinging, HouseSimple } from 'phosphor-react';
import { io } from 'socket.io-client';
import { Badge, Button } from 'keep-react';

const Notifications = () => {
  const [show, setShow] = useState(false);
  const boxRef = useRef();
  const imageRef = useRef();
  const [notificationMessageDetail, setNotificationMessageDetail] = useState([]);

  // useEffect(() => {
  //   const socketInstance = io('http://192.168.79.175:3001');

  //   // Listen for the 'newOrder' event
  //   socketInstance.on('newOrder', (orderData) => {
  //     setNotificationMessageDetail((prevMessages) => [...prevMessages, { ...orderData, read: 0 }]);
  //   });

  //   // Clean up the socket connection when the component unmounts
  //   return () => {
  //     socketInstance.off();
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && show && !boxRef.current.contains(e.target) && !imageRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  const readedNotification = (index) => {
    setNotificationMessageDetail((prevMessages) =>
      prevMessages.map((message, idx) =>
        idx === index ? { ...message, read: 1 } : message
      )
    );
  };

  return (
    <div className='block'>
      <div className='relative'>
        <button ref={imageRef} onClick={() => setShow((prevShow) => !prevShow)} className=''>
          <BellSimpleRinging className='text-slate-700' size={20} weight={!show ? 'bold' : 'duotone'} />
          <span className='text-[10px] font-semibold text-red-500 absolute -top-2 -right-1'>
            {notificationMessageDetail.length > 0 && notificationMessageDetail.filter(item=>item.read === 0).length}
          </span>
        </button>
        <div
          ref={boxRef}
          className={`w-80 max-h-80 overflow-hidden overflow-y-auto top-12 right-0 bg-white ring-1 ring-black/5 shadow-xl animate-keep-react custom-scroll rounded-lg shadow-black/5 absolute duration-200 ${
            show ? 'visible opacity-100  translate-y-0' : '-translate-y-4 invisible opacity-0'
          }`}
        >
            <div className='bg-white flex items-center justify-between p-4 border-b-[1px] border-black/10 sticky top-0 left-0'>
                <p className='font-semibold text-[10px]'>Notifications</p>
                {/* <button 
                onClick={()=>{
                    const filterArr = notificationMessageDetail.slice(0,10).map((item,idx)=>{
                        return {...item,read:1}
                    })
                    setNotificationMessageDetail(filterArr)
                }}
                className='text-white font-medium px-6 py-2 rounded-sm bg-orange-400 focus:bg-orange-400/50 text-[8px]'>Mark all as read</button> */}
            </div>
          <ul>
          {Array.from({length :10}).map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:bg-gray-200 items-center duration-200 cursor-pointer text-[12px] flex items-center justify-between gap-4 font-light p-2`}
              >
                <span className='flex items-center gap-2 space-y-2'>
                <HouseSimple size={20} className='' weight={show ? 'bold' : 'duotone'} />
                <p className='font-semibold text-[10px]'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ipsam.
                </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

// {notificationMessageDetail.reverse().map((item, idx) => (
//   <li
//     key={idx}
//     onClick={() => readedNotification(idx)}
//     className={`cursor-pointerduration-500 cursor-pointer text-[12px] flex items-center justify-between gap-4 font-light p-2`}
//   >
//     <span className=' space-y-2'>
//     <HouseSimple size={20} className='' weight={show ? 'bold' : 'duotone'} />
//     <p className='font-semibold text-[10px]'>
//       {item.customerName}, {item.msg}
//     </p>
//     </span>
//   </li>
// ))}

// import express from 'express';
// import http from 'http';
// import { Server as SocketIOServer } from 'socket.io';
// import cors from 'cors';
// import cron from 'node-cron';

// const app = express();
// const server = http.createServer(app);
// const io = new SocketIOServer(server);

// app.use(cors());

// let socketInstance; // Define a reference to the socket instance

// // Listen for socket connections
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);
//   socketInstance = socket;

//   // Listen for orders
//   socket.on('order', (order) => {
//     console.log('Received order:', order);
    
//     io.emit('newOrder', order);
//   });

//   // Listen for messages
//   socket.on('messageToRestaurant', (message) => {
//     console.log('Received message:', message);
//     // Handle the message as needed, e.g., display it to restaurant staff
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// // Simple GET API at the root route
// app.get('/', (req, res) => {
//   res.send('Hey, server is running!');
// });

// cron.schedule('*/5 * * * * *', () => {
//   if (socketInstance) {
//     const names = [
//       'Alice',
//       'Bob',
//       'Charlie',
//       'David',
//       'Emma',
//       'Frank',
//       'Grace',
//       'Henry',
//       'Ivy',
//       'Jack'
//     ];
//     const hotelMessages = [
//       "Booking my hotel, will be there soon!",
//       "Just booked a room, heading to the hotel!",
//       "Excited for the stay! On my way to the hotel.",
//       "Hotel reservation confirmed, see you shortly!",
//       "Checked in! Arriving at the hotel shortly."
//     ];
    
//     const randomMsgs = hotelMessages[Math.floor(Math.random() * hotelMessages.length)];
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     console.log('cron running');
//     socketInstance.emit('newOrder', {
//       msg: randomMsgs,
//       customerName: randomName
//     });
//   }
// });

// const PORT = 3001;
// const IP_ADDRESS = '192.168.79.175';
// server.listen(PORT, IP_ADDRESS, () => {
//   console.log(`Server is running on http://${IP_ADDRESS}:${PORT}`);
// });
