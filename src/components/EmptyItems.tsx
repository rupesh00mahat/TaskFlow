import { DoNotDisturb } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { fontSizes } from "../constants/theme";

type Props = {
    placeholder: string
}

const EmptyItems: React.FC<Props> = ({ placeholder }) => {
    return (<Container sx={{height: '500px'}}>
        <Box height={'100%'} sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign:
                'center'
        }}>
            <DoNotDisturb sx={{ fontSize: fontSizes.xl }} />
            <Typography fontSize={fontSizes.xl} variant="h6">No {placeholder} to Display.</Typography>
        </Box>
    </Container>);
}

export default EmptyItems;