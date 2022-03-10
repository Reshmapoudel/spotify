import "../styles.css";
const datas=[
    {
        items: <ul>
        <li>legal</li>
        <li>privacy center</li>
        <li>privacy policy</li>
        <li>cookies</li>
        <li>about ads</li>
    </ul>
    }
]
function Secfooter(){
    const datasUI = datas.map(function(data){
        return(
            <div>
                   <div className="footer-items">
                   {data.items}
               </div>
            </div>
        );
    });
    return(
        <div className="secfooter">
            {datasUI}
        </div>
    )
};
export default Secfooter;