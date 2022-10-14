//HOOKS AND FUNCTIONS IMPORTS
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

//MUI IMPORTS
import { Box, Stack, Snackbar } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//COMPONENT IMPORTS
const Navbar = lazy(() => import("./components/Navbar/navbar.component"))
const Footer = lazy(() => import("./components/Footer/footer.component"))

//ROUTE COMPONENTS IMPORTS
const Login = lazy(() => import("./pages/Login/Login.component"))
const SignUp = lazy(() => import("./pages/SignUp/SignUp.component"))
const Discover = lazy(() => import("./pages/Discover/discover.component"))
const SocialCircle = lazy(() => import("./pages/SocialCircle/social-circle.component"))
const Settings = lazy(() => import("./pages/Settings/Settings.component"))
const Home = lazy(() => import("./pages/Home/home.component"))
const UserProfile = lazy(() => import("./pages/UserProfile/user-profile.component"))

function App() {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.theme)
  const darkTheme = createTheme({
    palette: {
      mode: themeMode.mode
    }
  })
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });
  return (
    <ThemeProvider theme={darkTheme}  >
      <Box bgcolor={'background.default'} color="text.primary" >
        <Suspense fallback={<div style={{height: '100vh'}} >LOADING...</div>} >
          <Navbar />
          <Stack direction="row" spacing={isMobile ? 0 : 2} justifyContent="space-between" >
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/kanye' element={<Discover />} />
              <Route exact path='/pop' element={<Settings />} />
              <Route exact path='/circle' element={<SocialCircle />} />
              <Route exact path='/settings' element={<Settings />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route path='/user'>
                <Route path=":id" element={<UserProfile />} />
              </Route>
              <Route path='/artist'>
                <Route path=":id" element={<Discover />} />
              </Route>
              <Route path='/playlist'>
                <Route path=":id" element={<Settings />} />
              </Route>
            </Routes>
          </Stack>
          <Footer />
        </Suspense>
      </Box>
    </ThemeProvider >
  );
}

export default App;