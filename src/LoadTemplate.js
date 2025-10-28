import { useEffect, useState } from "react";

const LoadTemplate = ({path, data,  ...props})=>{
    const [Template, setTemplate] = useState(null);
    useEffect(()=>{
        async function load(){
            try{
            const module = await import(`./templates/${path}`);
            const element = <module.default data={data} {...props}/>;
            setTemplate(element);
            }catch(e){
                console.log(e)
            }
        }
        load();
    },[data]);
    if(!Template) return null;
    return Template;
}
export default LoadTemplate;