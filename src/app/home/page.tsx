'use client';

import Button from "../../component/button";


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


