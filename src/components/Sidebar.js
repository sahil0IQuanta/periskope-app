import React from 'react'
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { RiContactsBookFill, RiCheckboxIndeterminateFill } from "react-icons/ri";
import { IoMdPeople, IoMdSettings } from "react-icons/io";
import { MdPermMedia } from "react-icons/md";
import Link from 'next/link';
import { Drawer, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export default function Sidebar() {

  let navigations = [
    {
      name: 'Dashboard',
      icon: <AiFillHome size={18} />,
      path: '/admin/dashboard'
    }, {
      name: 'Chats',
      icon: <AiFillMessage size={18} />,
      path: '/admin/chats'
    },
    {
      name: 'Tickets',
      icon: <IoTicketSharp size={18} />,
      path: '/admin/tickets'
    },
    {
      name: 'Chat List',
      icon: <FaList size={18} />,
      path: '/admin/chatList'
    },
    {
      name: 'Bulk Message',
      icon: <HiSpeakerphone size={18} />,
      path: '/admin/bulkMessages'
    },
    {
      name: 'Contacts',
      icon: <RiContactsBookFill size={18} />,
      path: '/admin/contacts'
    },
    {
      name: 'Logs',
      icon: <IoMdPeople size={18} />,
      path: '/admin/logs'
    },
    {
      name: 'Media',
      icon: <MdPermMedia size={18} />,
      path: '/admin/media'
    },
    {
      name: 'Settings',
      icon: <IoMdSettings size={18} />,
      path: '/admin/settings'
    }

  ]
  const drawerWidth = 207;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{

          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
        }}
        open
      >


        <List

          sx={{ width: '100%', maxWidth: "100vw", bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <div className='flex border-lime-50'>
                {/* <div className='h-2 pt-3'><RiCheckboxIndeterminateFill size={20} /></div>
                <div className='m-0 p-0' >
                  <h2 className='font-bold uppercase m-0 p-0'>IQuanta</h2>
                  <p className='text-sm m-0 p-0'>xyz@iquanta.in</p>
                </div> */}
                
                <ListItemAvatar className='pt-1 ' >
                  <Avatar sizes='15px'>
                    <ImageIcon  />
                  </Avatar >
                </ListItemAvatar>
                <ListItemText className='text-sm' primary="IQuanta" secondary="xyz@iquanta.in" />

              </div>
            </ListSubheader>
          }
          disablePadding
        >



          {
            navigations?.map((value) => (
              <Link href={value.path} key={value.path} className='gray no-underline' >
                <ListItemButton  >
                  {/* <ListItemIcon  >
                  {value.icon}
                </ListItemIcon>
                <ListItemText   >
                <p className='text'>  {value.name}</p>
                </ListItemText> */}
                  <ul>
                    <li className='flex'>
                      <span className='py-1.5 text-gray-600  hover:text-green-700'>{value.icon}</span>
                      <span className='py-1.5 pl-2 text-sm font-bold text-gray-500 hover:text-green-700'>{value.name}</span>
                    </li>
                  </ul>
                </ListItemButton>
              </Link>


            ))
          }
        </List>


      </Drawer>

    </>
  )
}
