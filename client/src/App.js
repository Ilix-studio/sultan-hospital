import { Route, Routes } from 'react-router-dom'

import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import ViewAppointment from './Components/AdminDashboard/ViewAppointment'

import NoMatch from './Components/NoMatch'
import TodaysTotalAppointments from './Components/AdminDashboard/TodaysTotalAppointments'
import AllAppointmentsCount from './Components/AdminDashboard/AllAppointmentsCount'
import Update from './Components/AdminDashboard/Update'
import Delete from './Components/AdminDashboard/Delete'
import LoginPage from './Components/LoginPage/LoginPage'
import GlobalStyles from './Components/Styles/GLobal'
import Home from './Components/Home'

import AppointmentForm from './Components/FormAppointment/AppointmentForm'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route path="create" element={<AppointmentForm />} />

          <Route index element={<TodaysTotalAppointments />} />
          <Route path="totalapps" element={<TodaysTotalAppointments />} />
          <Route index element={<TodaysTotalAppointments />} />

          <Route path="allAppoint" element={<AllAppointmentsCount />} />

          <Route path="viewTodays" element={<ViewAppointment />}>
            <Route path="update" element={<Update />} />
            <Route path="delete" element={<Delete />} />
          </Route>
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
