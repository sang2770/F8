export default function  html([first, ...res], ...values)
{
    return values.reduce(
        (total, item)=>
            total.concat(item,res.shift())
        ,[first]
    )
        .filter(x=> x && x!==true || x===0)
        .join("")
    }


export function CreateStore(Reducer)
{
    let state =Reducer();
    const roots=new Map();
    function render()
    {
        for (const [root, compoment ] of roots) {
            const output= compoment();
            root.innerHTML=output;
        }
    }
    return {
        Attach(comcpoment, root)   // render từ view sang root
        {
            roots.set(root, comcpoment);
            render();
        },
        Connect (select=(state)=>state){   // lấy dữ liệu từ store đến view

            return compoment =>{
                return (props, ...args)=>{
                 compoment(Object.assign({}, props, select(state), ...args));
                 }
         }
        },
        Dispatch(action, ...args){  // xử lí xự kiện
            state=Reducer(state, action, args);
            render();
        }
    }
} 
