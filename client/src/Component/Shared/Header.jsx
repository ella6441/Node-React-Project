import {NavLink, useNavigate} from "react-router-dom"
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';


 const Header = () => {
    const navigate = useNavigate()
    const items = [
        {
            style:{ marginLeft: '0.5rem' },
            label: 'בית',
            icon: 'pi pi-home',
            command: () => {
                navigate('/all/home');
            }
        },
        {
            label: '       מוצרים ',
            icon: 'pi pi-star',
               command: () => {
                navigate('/all/product');
            }
        },
        {
            label: 'To enter',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Login',
                    icon: 'pi pi-user',
                        command: () => {
                            navigate('/all/login');
                        }
                },
                {
                    label: 'Register',
                    icon: 'pi pi-server',
                        command: () => {
                            navigate('/all/register');
                        }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-pencil',
                        command: () => {
                            navigate('/all/logout');
                        }
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {disabled: true },{disabled: true },{disabled: true },{disabled: true },{disabled: true },{disabled: true },{disabled: true },{disabled: true },{disabled: true },
        {
            label:(
                <div className="card flex justify-content-center">
                    <Image src="/logoD.jpg" alt="Image" width="100" />
                </div>
            ),
             disabled: true 

        },{disabled: true},{disabled: true},{disabled: true},{disabled: true},{disabled: true},{disabled: true},{disabled: true},
        {
            label: 'My shopping',
            icon: 'pi pi-shopping-cart',
               command: () => {
                navigate('/all/mybasket');
            }
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
                        command: () => {
                            navigate('/all/contact');
                        }
            
        },
        {
            label: 'מנהל',
            icon: 'pi pi-envelope',
                        command: () => {
                            navigate('/all/manager');
                        }
            
        }
    ];

    return (
        // <div className="card">
            <Menubar  model={items} />
        // </div>
    )


//   return (
//     <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/all/login">Login</NavLink>
//         <NavLink to="/all/product">Product</NavLink>
//         <NavLink to="/all/register">Register</NavLink>
//     </nav>
// )
}

export default Header