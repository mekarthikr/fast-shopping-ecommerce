import React from "react";

const UpdatedComponent=(OriginalComponent)=>{
    function NewComponent(){
        console.log("updated called")
        return<OriginalComponent/>
    }
    return NewComponent
}

export default UpdatedComponent