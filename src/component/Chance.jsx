import Chance from "chance";

const chance = Chance()

export const fakeUserData= ()=>{

    return chance.name({middle: true});
    // console.log(chance.name({middle: true}))
}


fakeUserData()
