import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home'
import FetchOld from './page/FetchOld'
import FetchRQ from './page/FetchRQ'
import MainLayout from './Layout/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[{
      path:"/",
      element:<Home/>
    },{
      path:"/trad",
      element:<FetchOld/>
    },{
      path:"/rq",
      element:<FetchRQ/>
    }]
  }
])


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
