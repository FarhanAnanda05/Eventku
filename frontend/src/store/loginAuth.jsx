import {create} from 'zustand'


const loginAuth = create((set)=>({
    condition : false,
    admin : null,
    login : () => set(() => ({condition : true})),
    logout : () => set(() => ({admin : null,condition : false})),
    author : () => set(() => ({admin : "admin"}))
}))

export default loginAuth


