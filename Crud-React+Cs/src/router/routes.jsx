import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Tasks from './Tasks'
import TaskForm from './TaskForm'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/new" element={<TaskForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}