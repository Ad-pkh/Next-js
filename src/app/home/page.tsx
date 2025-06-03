'use client';

import Button from "../component/buttton/page";


function home() {
    return <>

        <div >
            <Button
                color='danger'
                margin={12}
                text="test Button"
                onclick={() => { console.log("test"); }}
                padding={2}
                height={40}
                width={100}
            />
            
        </div>

    </>
}
export default home;



// button ma color hunuparyo(success,danger...) ,varient hnuparyo ,onclick option hun paryo etc
// eutai component ma different props use garera change hunu paryo