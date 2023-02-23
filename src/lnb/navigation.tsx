import ThreeJS from "@/three";
import { Avatar, Button, List, ListItemButton, ListItemText } from "@mui/material";

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import DescriptionIcon from '@mui/icons-material/Description';
import CoPresentIcon from '@mui/icons-material/CoPresent';

export function NavigationComponent() {

    const style = {
        
    }

    return (
        <nav style={{position:"fixed" ,background:"white",width:"20%", height : window.innerHeight,display:"flex",  justifyContent:"start" , flexDirection: "column" }}>     
            
            <div>
                <Avatar alt="Kim Min Sub" className="loader" src="/이력서사진.jpg" />
            </div>
            
            
            <List>

            <ListItemButton component="a" href="#simple-list" >
                <HouseIcon/>

                <ListItemText primary="home" />
            </ListItemButton>

            <ListItemButton component="a" href="#simple-list" >      
                <FaceIcon/>
            <ListItemText primary="information" />
            </ListItemButton>

            <ListItemButton component="a" href="#simple-list" >
                <DescriptionIcon/>
                <ListItemText primary="profile" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list" >
                <CoPresentIcon/>
                <ListItemText primary="work" />
            </ListItemButton>

            </List>
            
        </nav>)

}