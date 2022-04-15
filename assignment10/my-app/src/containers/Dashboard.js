import React from 'react';

import Header from '../header/Header';
import PageRoutes from '../pages/PageRoutes';
import './Header.css'


import './Dashboard.css';

export default function Dashboard() {

    // const [selectedState, setSelectedState] = useState(0);
    // const [fetchFlag, setFetchflag] = useState(true);


    // const changeFetchFlag = () => {
    //     setFetchflag(!fetchFlag);
    // }

    // const setSelected = (id) => {
    //     setSelectedState(id);
    // }
    // useEffect(() => {
    //     return () => {
    //         console.log("Something was unmounted");
    //     };
    // }, [fetchFlag]);




    return (
        <React.Fragment>
       
           


                <div className="header">
                    <Header />
                    
                </div>
                <div className='Posts'>
                    <PageRoutes />
                </div>
              
           
       
        </React.Fragment>
    )
}
