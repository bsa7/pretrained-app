import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TranslateIcon from '@mui/icons-material/Translate';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Anchor } from '@/types/components';
import { Link } from "react-router-dom";

interface UserMenuProps {
  anchor: Anchor
  onChoose: any
}

export default function UserMenu(userMenuProps: UserMenuProps) {
  const { anchor, onChoose } = userMenuProps

  return (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        <ListItem key='Home' disablePadding>
          <ListItemButton component={Link} to='/' onClick={onChoose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItemText primary='Модели:' sx={{ padding: '20px' }} />

        <ListItem key='Models-ObjectDetection' disablePadding>
          <ListItemButton component={Link} to='/models/image_object_detector' onClick={onChoose}>
            <ListItemIcon>
              <ViewInArIcon />
            </ListItemIcon>
            <ListItemText primary='Image object detection' />
          </ListItemButton>
        </ListItem>

        <ListItem key='Models-TextToSpeech' disablePadding>
          <ListItemButton component={Link} to='/models/text_to_speech' onClick={onChoose}>
            <ListItemIcon>
              <RecordVoiceOverIcon />
            </ListItemIcon>
            <ListItemText primary='Text to speech conversion' />
          </ListItemButton>
        </ListItem>

        <ListItem key='Models-Translator' disablePadding>
          <ListItemButton component={Link} to='/models/translator' onClick={onChoose}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText primary='Text translation' />
          </ListItemButton>
        </ListItem>

        <ListItem key='About' disablePadding>
          <ListItemButton component={Link} to='/about' onClick={onChoose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
