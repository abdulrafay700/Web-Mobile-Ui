import IphoneCardCarousel from "../../src/components/phonecardCarousel.jsx"

function MobileStockSection(){
return(
    <>
    <section className=" mobileSection container-fluid">
            <div className="container d-flex flex-column  justify-content-center align-items-center mt-3">
                <h3>Mobile <span>Stock</span></h3>
                <p className="mt-5">We Stay upto date with latest technology trends and offer innovative solutions. that help you stay ahead in competetin</p>
            </div>  

            <div className="container phone-card-carousel">
                <IphoneCardCarousel/>
            </div>

    </section>
    
    </>
)
}

export default MobileStockSection