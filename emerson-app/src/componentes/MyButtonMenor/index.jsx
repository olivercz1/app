import { Button } from "@mui/material"

export default function MyButtondois(props) {
    return (
        <div style={{ margin: '10px' }}>
            <Button
                type={props.type}
                variant={props.variant}
                size={props.size}
                endIcon={props.icon}
                sx={{
                    width: '200px',
                    height: '50px',

                    backgroundColor: `${props.color}`,
                    borderRadius: 2,
                    '&:hover': {
                        backgroundColor: '#FFFFFF',
                        color: '#3c52b2',
                    }
                }}
            >
                {props.text}
            </Button>
        </div>
    );
}

