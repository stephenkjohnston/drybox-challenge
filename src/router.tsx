import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";
import ShopPage from "pages/ShopPage";
import LocationsPage from "pages/LocationsPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";

export default createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/shop',
        element: <ShopPage />,
        children: [
            {
                path: '/shop/containers/:containerType'
            }
        ]
    },
    {
        path: '/locations',
        element: <LocationsPage />,
        children: [
            {
                path: '/locations/:stateName'
            }
        ]
    },
    {
        path: '/company',
        children: [
            {
                path: '/company/about',
                element: <AboutPage />
            },
            {
                path: '/company/contact',
                element: <ContactPage />
            }
        ]
    }
])