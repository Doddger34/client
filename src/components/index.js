import React from 'react';
import {Link} from "react-router-dom";
//import NCard from "../component/Nt_Card"



const index = () => {
    
    return (
        <div>
            <div className="container">
                
                <div className="row">
                    <h4 style={{margin:"0 auto"}} className="mt-3">İlginizi çekebilecek bazı ders notları</h4>
                    <div className="col-md-12">
                        
                    </div>
                </div>
               <div className="row">
                    <div className="col-md-5 I_text mt-5 ml-3 ">
                        <p>
                            Bu sitede istediğiniz dersin notuna ulaşabileceğiniz tek adres. 
                            Bizimle <Link to='/Iletısım' className="I_text-link">iletişime</Link> geçerek site
                            veya not hakkında soru veya şikayetinizi belirtebilirsiniz. Ayrıca bize e-posta atarak
                            kendi notlarınızı site üzerinde görebilirsiniz.
                        </p>
                    </div>
                    <div className="col-md-5 I_text mt-5 ml-3 mr-5">
                        <p>
                            Sitemizde size en iyi bir şekilde notları paylaşmak için elimizden geleni yapıyoruz.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;