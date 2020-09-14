export default class ContractDetails{


      contractdetailsid : string ;
       useridSeller : string;
       useridBuyer: string;
      worklocation : string;
       worktype : string;
       workperiod : string;
       workdescription : string;
       contractsummary : string;
       scale : string;
       bidstartdate = new Date ();
       bidenddate = new  Date();

constructor(
     contractdetailsid : string ,
      useridSeller : string,
      useridBuyer: string,
      worklocation : string,
      worktype : string,
      workperiod : string,
      workdescription : string,
      contractsummary : string,
      scale : string,
      bidstartdate =new Date (),
      bidenddate =new  Date()
     ) {
    this.contractdetailsid = contractdetailsid;
     this.useridSeller = useridSeller;
    this.useridBuyer = useridBuyer;
     this.worklocation  =  worklocation;
     this.worktype   =  worktype;
     this.workperiod = workperiod;
     this.workdescription = workdescription;
    this.contractsummary = contractsummary;
     this.scale = scale;
     this.bidstartdate   = bidstartdate;
     this.bidenddate     = bidenddate;
}
};