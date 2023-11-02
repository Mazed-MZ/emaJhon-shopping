import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StadiumIcon from '@mui/icons-material/Stadium';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './Match.css';

export default function MatchData(props) {


    const { strTeam, strTeamBadge, strAlternate, strLeague, idTeam } = props.match;

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <div>
            <Card sx={{ maxWidth: 345, }}>
                <CardHeader
                    title={strTeam}
                    subheader={strLeague}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={strTeamBadge}
                    alt={strAlternate}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <BottomNavigation sx={{ width: 300 }} value={value} onChange={handleChange}>
                            <BottomNavigationAction
                                label="Team Info"
                                value="recents"
                                icon={<Diversity3Icon />}
                            />
                            <BottomNavigationAction
                                label="Stadium"
                                value="favorites"
                                icon={<StadiumIcon />}
                            />
                            <BottomNavigationAction
                                label="Buy Tickets"
                                value="nearby"
                                icon={<BookOnlineIcon />}
                            />
                        </BottomNavigation>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
