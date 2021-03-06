import './App.css';
import Pricecard from './components/Pricecard'
function App() {
  
    let data =[
      {
product:"FREE",
price:0,
users:"Single User",
userEnabler:true,
storage: "5GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess:"Community Access",
communityAccessEnabler:true,
privateProjects:"Unlimited Private Projects",
privateProjectsEnabler:false,
phonesupport:"Dedicated Phone Support",
phonesupportEnabler:false,
subDomain:"Free Subdomain",
subDomainEnabler:false,
reports: "Monthly Status Report",
reportsEnabler:false
      },
      
      {
product:"PLUS",
price:9,
users:"5 Users",
userEnabler:true,
storage: "5GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess:"Community Access",
communityAccessEnabler:true,
privateProjects:"Unlimited Private Projects",
privateProjectsEnabler:true,
phonesupport:"Dedicated Phone Support",
phonesupportEnabler:true,
subDomain:"Free Subdomain",
subDomainEnabler:true,
reports: "Monthly Status Report",
reportsEnabler:false},

      {
product:"PRO",
price:49,
users:"Unlimites Users",
userEnabler:true,
storage: "150GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess:"Community Access",
communityAccessEnabler:true,
privateProjects:"Unlimited Private Projects",
privateProjectsEnabler:true,
phonesupport:"Dedicated Phone Support",
phonesupportEnabler:true,
subDomain:"Unlimited Free Subdomain",
subDomainEnabler:true,
reports: "Monthly Status Report",
reportsEnabler:true
      }
    ]
return (
     <section className="pricing py-5">
      <div className="container">
     <div className="row">
      <Pricecard type={data[0]}/>
        <Pricecard type={data[1]}/>   
               <Pricecard type={data[2]}/> 
           
      
    </div>
  </div>
</section>
    
  );
}

export default App;
