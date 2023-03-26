import { createTheme } from "@mui/material/styles";
const CustomTheme=createTheme({
    palette: {
        primary: {
            main:'#FFFFFF'
        },
        secondary: {
            main: '#000000'
        },
        orange: {
            main: '#FA4A0C'
        }
    },
    typography:{
        h1 : {
        
       },
    h2 : {
        fontFamily: 'Montserrat',
        fontStyle:"normal",
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: 0.2,
        color:'#252B42'
    },
    h3 : {
        fontFamily: 'Montserrat',
        fontStyle:"normal",
        fontWeight: 700,
        fontSize: 24,
        letterSpacing: 0.1,
        color: '#FA4A0C'
    },
    h4 : {
        fontFamily: 'Montserrat',
        fontStyle:"normal",
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: 0.2,
        color:'#737373'
       },
       h5:{
        fontFamily: 'poppins',
        fontStyle:"normal",
        fontWeight: 600,
        fontSize: 44,
        letterSpacing: 0.1,
        color:'#000000'
       },
       h6:{
        fontFamily: 'roboto',
        fontStyle:"normal",
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: 0.1,
        color:'#5c5c5c'
       },
       subtitle1:{
        fontFamily: "Poppins",
        fontStyle:'normal',
        fontWeight: 700,
        fontSize: 64,
        textAlign: 'center',
        lineHeight: 1.5,
        letterSpacing: 1.4
       },
       navLinks :{
        fontFamily: 'Montserrat',
        fontStyle:"normal",
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.2,
        color:'#252B42'
       },
       button:{
        fontFamily:"Montserrat",
        fontWeight:"600",
        fontSize:"16",
        color:"#252B42",
        textTransform:"capitalize"
       }
    }
    
})

export default CustomTheme;