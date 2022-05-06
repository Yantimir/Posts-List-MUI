import React from 'react';
import { Skeleton, Stack, Box } from '@mui/material';


export const SceletonLoading = () => {
  return (

    <Stack spacing={1}>
      <Box sx={{ display: "flex", justifyContent: "end", mr: 4 }}>
        <Skeleton variant="text" width={150} height={70} />
      </Box>
      <Box sx={{ pt: 1 }}>
        <Skeleton variant="text" sx={{ mb: 2, maxWidth: 250 }} />
        <Skeleton variant="text" width={200} sx={{ mb: 2 }} />
      </Box>

      <Box sx={{ display: "flex", mt: "150px", justifyContent: "center" }}>

        <Box sx={{ mr: "40px" }}>
          <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={345} height={194} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={80} height={40} sx={{ mb: 2, borderRadius: "30px" }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
        </Box>

        <Box sx={{ mr: "40px" }}>
          <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={345} height={194} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={80} height={40} sx={{ mb: 2, borderRadius: "30px" }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
        </Box>

        <Box sx={{ mr: "40px" }}>
          <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={345} height={194} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width={80} height={40} sx={{ mb: 2, borderRadius: "30px" }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
          <Skeleton variant="text" width={345} sx={{ mb: 2 }} />
        </Box>
      </Box>
    </Stack>
  );
}