// import React from "react";
// import { Box, Paper, Link, Typography } from "@mui/material";
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// const _Pagination = ({ setCurrentPage, currentPage, postsPerPage, totalPosts, prevPage, nextPage }) => {

//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     const stylePaper = {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center"
//     }

//     return (
//         <Box sx={{
//             display: "flex",
//             marginBottom: "40px",
//             justifyContent: "center",
//             alignItems: "center"
//         }}>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     '& > :not(style)': {
//                         m: 1,
//                         width: 40,
//                         height: 40,
//                     },
//                 }}
//             >
//                 <Paper
//                     sx={stylePaper}>
//                     <Link
//                         href={`/?page=${currentPage}`}
//                         underline="hover"
//                         onClick={prevPage}
//                     >
//                         <KeyboardArrowLeft sx={{ pt: "4px" }} />
//                     </Link>
//                 </Paper>
//                 {pageNumbers.map((number, index) => (
//                     <Paper
//                         key={`${number}_${index}`}
//                         sx={stylePaper}
//                     >
//                         <Link
//                             href={`/?page=${number}`}
//                             underline="hover"
//                             onClick={() => setCurrentPage(number)}
//                         >
//                             <Typography color="text.secondary">
//                                 {number}
//                             </Typography>
//                         </Link>
//                     </Paper>
//                 ))}
//                 <Paper
//                     sx={stylePaper}>
//                     <Link
//                         href={`/?page=${currentPage}`}
//                         underline="hover"
//                         onClick={nextPage}
//                     >
//                         <KeyboardArrowRight sx={{ pt: "4px" }} />
//                     </Link>
//                 </Paper>
//             </Box>
//         </Box >
//     );
// };
// export default _Pagination;