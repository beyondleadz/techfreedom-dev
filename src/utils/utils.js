import moment from "moment";

export const createPayload = (
  payload,
  paginationValues,
  companyListingApiUrl
) => {
  const {
    selectedCountry,
    selectedState,
    selectedCity,
    selectedIndustry,
    selectedCompanytype,
    selectedEmployeecount,
    selectedRevenuerange,
    searchKeyword,
    selectedCompanyTag,
    topSearchValue
  } = payload || {};

  let url = companyListingApiUrl;
  let withPagination;
  let country;
  let state;
  let city;
  let industryId;
  let categoryId;
  let rangeId;
  let revenueId;
  let companyTagId;
  if (paginationValues) {
    withPagination = `&page=${paginationValues?.start}&size=${paginationValues?.end}`;
    url = `${url}${withPagination}`;
  }

  if(topSearchValue){
    const searchCondition = `&name.contains=${topSearchValue}`;
    url = `${url}${searchCondition}`;
  }

  if (selectedCountry?.length) {
    let ids = "";
    for (let i = 0; i < selectedCountry.length - 1; i++) {
      ids += `${selectedCountry[i].name},`;
    }
    ids += selectedCountry[selectedCountry.length - 1].name;
    country = `&country.in=${ids}`;
    url = `${url}${country}`;
  }

  if (selectedState?.length) {
    let ids = "";
    for (let i = 0; i < selectedState.length - 1; i++) {
      ids += `${selectedState[i].name},`;
    }
    ids += selectedState[selectedState.length - 1].name;
    state = `&state.in=${ids}`;
    url = `${url}${state}`;
  }

  if (selectedCity?.length) {
    let ids = "";
    for (let i = 0; i < selectedCity.length - 1; i++) {
      ids += `${selectedCity[i].name},`;
    }
    ids += selectedCity[selectedCity.length - 1].name;
    city = `&city.in=${ids}`;
    url = `${url}${city}`;
  }
  //console.log(selectedIndustry,'selectedIndustryselectedIndustry')
  if (selectedIndustry?.length) {
    let ids = "";
    for (let i = 0; i < selectedIndustry.length - 1; i++) {
      ids += `${selectedIndustry[i].id},`;
    }
    ids += selectedIndustry[selectedIndustry.length - 1]?.id;
    industryId = `&industryId.in=${ids}`;
    url = `${url}${industryId}`;
  }

  if (selectedCompanytype?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanytype.length - 1; i++) {
      ids += `${selectedCompanytype[i].id},`;
    }
    ids += selectedCompanytype[selectedCompanytype.length - 1].id;
    categoryId = `&categoryId.in=${ids}`;
    url = `${url}${categoryId}`;
  }

  if (selectedEmployeecount?.length) {
    let ids = "";
    for (let i = 0; i < selectedEmployeecount.length - 1; i++) {
      ids += `${selectedEmployeecount[i].id},`;
    }
    ids += selectedEmployeecount[selectedEmployeecount.length - 1].id;
    rangeId = `&rangeId.in=${ids}`;
    url = `${url}${rangeId}`;
  }

  if (selectedRevenuerange?.length) {
    let ids = "";
    for (let i = 0; i < selectedRevenuerange.length - 1; i++) {
      ids += `${selectedRevenuerange[i].id},`;
    }
    ids += selectedRevenuerange[selectedRevenuerange.length - 1].id;
    revenueId = `&revenueId.in=${ids}`;
    url = `${url}${revenueId}`;
  }

  if (searchKeyword) {
    let searchCondition = `&productServices.contains=${searchKeyword}`;
    url = `${url}${searchCondition}`;
  }

  if (selectedCompanyTag?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanyTag.length - 1; i++) {
      ids += `${selectedCompanyTag[i]},`;
    }
    ids += selectedCompanyTag[selectedCompanyTag.length - 1];
    companyTagId = `&tags=${ids}`;
    url = `${url}${companyTagId}`;
  }

  //   console.log(
  //     payload,
  //     "sfjsdfsfsdffdsjdklf",
  //     paginationValues,
  //     selectedIndustry
  //   );

  if (url.indexOf("&") !== -1) {
    url = url.replace(/&/, "?");
  }

  return url;

  // http://3.215.187.36:9002/api/companies?page=0&size=10&industryId.in=1,2,6,5,3,4,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,41,42,43,44,40,39,38,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102&categoryId.in=11,12,14,13&rangeId.in=11,12,17,16,15,14,13&revenueId.in=11,12,17,16,15,14,13&Id.in=11,12,16,17,27,31,33,32,34,35&sort=id,asc
};

export const createPayloadWithTopSearch = (
  payload,
  paginationValues,
  companyListingApiUrl
) => {
  let url = companyListingApiUrl;
  if (paginationValues) {
   const  withPagination = `&page=${paginationValues?.start}&size=${paginationValues?.end}`;
    url = `${url}${withPagination}`;
  }

  console.log(payload,'payloadpayload')

  if (payload) {
    const searchCondition = `&name.contains=${payload}`;
    url = `${url}${searchCondition}`;
  }

  if (url.indexOf("&") !== -1) {
    url = url.replace(/&/, "?");
  }

  return url;

  // http://3.215.187.36:9002/api/companies?page=0&size=10&industryId.in=1,2,6,5,3,4,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,41,42,43,44,40,39,38,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102&categoryId.in=11,12,14,13&rangeId.in=11,12,17,16,15,14,13&revenueId.in=11,12,17,16,15,14,13&Id.in=11,12,16,17,27,31,33,32,34,35&sort=id,asc
};

export const createExecutivePayload = (
  payload,
  paginationValues,
  companyListingApiUrl
) => {
  const {
    selectedCompany,
    selectedCountry,
    selectedState,
    selectedCity,
    selectedIndustry,
    selectedCompanytype,
    selectedEmployeecount,
    selectedRevenuerange,
    searchKeyword,
    selectedCompanyTag,
    selectedExecutiveFunction,
    selectedExecutiveLevel,
    topSearchValue
  } = payload || {};

  let url = companyListingApiUrl;
  let withPagination;
  let country;
  let state;
  let city;
  let industryId;
  let categoryId;
  let rangeId;
  let revenueId;
  let companyTagId;
  let executiveFuntion;
  let executiveLevel;
  let company;
  if (paginationValues) {
    withPagination = `&page=${paginationValues?.start}&size=${paginationValues?.end}`;
    url = `${url}${withPagination}`;
  }

  if (selectedCompany?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompany.length - 1; i++) {
      ids += `${selectedCompany[i].id},`;
    }
    ids += selectedCompany[selectedCompany.length - 1].id;
    company = `&companyId.in=${ids}`;
    url = `${url}${company}`;
  }

  if (selectedCountry?.length) {
    let ids = "";
    for (let i = 0; i < selectedCountry.length - 1; i++) {
      ids += `${selectedCountry[i].name},`;
    }
    ids += selectedCountry[selectedCountry.length - 1].name;
    country = `&country.in=${ids}`;
    url = `${url}${country}`;
  }

  if (selectedState?.length) {
    let ids = "";
    for (let i = 0; i < selectedState.length - 1; i++) {
      ids += `${selectedState[i].name},`;
    }
    ids += selectedState[selectedState.length - 1].name;
    state = `&state.in=${ids}`;
    url = `${url}${state}`;
  }

  if (selectedCity?.length) {
    let ids = "";
    for (let i = 0; i < selectedCity.length - 1; i++) {
      ids += `${selectedCity[i].name},`;
    }
    ids += selectedCity[selectedCity.length - 1].name;
    city = `&city.in=${ids}`;
    url = `${url}${city}`;
  }
  //console.log(selectedIndustry,'selectedIndustryselectedIndustry')
  if (selectedIndustry?.length) {
    let ids = "";
    for (let i = 0; i < selectedIndustry.length - 1; i++) {
      ids += `${selectedIndustry[i].id},`;
    }
    ids += selectedIndustry[selectedIndustry.length - 1]?.id;
    industryId = `&industryId.in=${ids}`;
    url = `${url}${industryId}`;
  }

  if (selectedCompanytype?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanytype.length - 1; i++) {
      ids += `${selectedCompanytype[i].id},`;
    }
    ids += selectedCompanytype[selectedCompanytype.length - 1].id;
    categoryId = `&categoryId.in=${ids}`;
    url = `${url}${categoryId}`;
  }

  if (selectedEmployeecount?.length) {
    let ids = "";
    for (let i = 0; i < selectedEmployeecount.length - 1; i++) {
      ids += `${selectedEmployeecount[i].id},`;
    }
    ids += selectedEmployeecount[selectedEmployeecount.length - 1].id;
    rangeId = `&rangeId.in=${ids}`;
    url = `${url}${rangeId}`;
  }

  if (selectedRevenuerange?.length) {
    let ids = "";
    for (let i = 0; i < selectedRevenuerange.length - 1; i++) {
      ids += `${selectedRevenuerange[i].id},`;
    }
    ids += selectedRevenuerange[selectedRevenuerange.length - 1].id;
    revenueId = `&revenueId.in=${ids}`;
    url = `${url}${revenueId}`;
  }

  if (searchKeyword) {
    let searchCondition = `&title.contains=${searchKeyword}`;
    url = `${url}${searchCondition}`;
  }

  if (selectedCompanyTag?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanyTag.length - 1; i++) {
      ids += `${selectedCompanyTag[i]},`;
    }
    ids += selectedCompanyTag[selectedCompanyTag.length - 1];
    companyTagId = `&tags=${ids}`;
    url = `${url}${companyTagId}`;
  }

  if (selectedExecutiveFunction?.length) {
    let ids = "";
    for (let i = 0; i < selectedExecutiveFunction.length - 1; i++) {
      ids += `${selectedExecutiveFunction[i].id},`;
    }
    ids += selectedExecutiveFunction[selectedExecutiveFunction.length - 1].id;
    executiveFuntion = `&exfunction.in=${ids}`;
    url = `${url}${executiveFuntion}`;
  }

  if (selectedExecutiveLevel?.length) {
    let ids = "";
    for (let i = 0; i < selectedExecutiveLevel.length - 1; i++) {
      ids += `${selectedExecutiveLevel[i].id},`;
    }
    ids += selectedExecutiveLevel[selectedExecutiveLevel.length - 1].id;
    executiveLevel = `&exlevel.in=${ids}`;
    url = `${url}${executiveLevel}`;
  }

  if(topSearchValue){
    const searchCondition = `&fullname.contains=${topSearchValue}`;
    url = `${url}${searchCondition}`;
  }

  if (url.indexOf("&") !== -1) {
    url = url.replace(/&/, "?");
  }
  return url;
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const getUserInfo = () => {
  return sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : {};
};

export const getSubscriptionUserInfo = () => {
  return sessionStorage.getItem("subscriptionuserInfo")
    ? JSON.parse(sessionStorage.getItem("subscriptionuserInfo"))
    : {};
};


export const saveExcel = async (data,columns,workBookName,Excel,saveAs) => {
  console.log("downloading excel ...");
  const workbook = new Excel.Workbook();
  const workSheetName = 'Worksheet-1';
  try {
    const fileName = workBookName;

    // creating one worksheet in workbook
    const worksheet = workbook.addWorksheet(workSheetName);

    // add worksheet columns
    // each columns contains header and its mapping key from data
    worksheet.columns = columns;

    // updated the font for first row.
    worksheet.getRow(1).font = { bold: true };

    // loop through all of the columns and set the alignment with width.
    worksheet.columns.forEach(column => {
      column.width = column.header.length + 5;
      column.alignment = { horizontal: 'center' };
    });

    // loop through data and add each one to worksheet
    data.forEach(singleData => {
      worksheet.addRow(singleData);
    });

    // loop through all of the rows and set the outline style.
    worksheet.eachRow({ includeEmpty: false }, row => {
      // store each cell to currentCell
      const currentCell = row._cells;

      // loop through currentCell to apply border only for the non-empty cell of excel
      currentCell.forEach(singleCell => {
        // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
        const cellAddress = singleCell._address;

        // apply border
        worksheet.getCell(cellAddress).border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      });
    });

    // write the content using writeBuffer
    const buf = await workbook.xlsx.writeBuffer();

    // download the processed file
    saveAs(new Blob([buf]), `${fileName}.xlsx`);
  } catch (error) {
    console.error('<<<ERRROR>>>', error);
    console.error('Something Went Wrong', error.message);
  } finally {
    // removing worksheet's instance to create new one
    workbook.removeWorksheet(workSheetName);
  }
};


export const createLeadPayload = (
  payload,
  paginationValues,
  companyListingApiUrl
) => {
  const {
    selectedPageLayout,
    selectedCompany,
    selectedCountry,
    selectedState,
    selectedCity,
    selectedIndustry,
    selectedEmployeecount,
    searchKeyword,
    selectedCompanyTag,
    topSearchValue,
    selectedLeadOwner,
selectedFirstName,
selectedLastName,
selectedCompanyName,
selectedTitle,
selectedZipCode,
selectedLeadSource,
selectedLeadStatus,
selectedLeadRating,
selectedLeadTime
  } = payload || {};

  let url = companyListingApiUrl;
  let withPagination;
  let country;
  let state;
  let city;
  let industryId;
  let rangeId;
  let revenueId;
  let companyTagId;
  let company;
  let leadStatus;
  let leadRating;
  let leadTime;
  if(selectedLeadTime?.length){
    let dates = "";
    if(selectedLeadTime[0].name==="Today"){   
      let savedDate = new Date();   
      dates = moment(savedDate).utc().format('YYYY-MM-DDT')+'00:00:00Z';
      leadTime = `&createdDate.greaterThanOrEqual=${dates}`;
    }else if(selectedLeadTime[0].name==="Yesterday"){
      let savedDate = new Date();
      savedDate.setDate(savedDate.getDate() - 1);
      dates = moment(savedDate).utc().format('YYYY-MM-DDT')+'00:00:00.569Z';
      let date1 = moment(savedDate).utc().format('YYYY-MM-DDT')+'23:59:59.569Z';
      leadTime = `&createdDate.greaterThanOrEqual=${dates}&createdDate.lessThan=${date1}`;    
    }else if(selectedLeadTime[0].name==="This Month"){
      let savedDate = new Date();
      let month = savedDate.getMonth();
      let monthFormatted =month >=10?month:'0'+month;
      let dateFormatted=savedDate.getDate() >=10?savedDate.getDate():'0'+savedDate.getDate();
      let date1=savedDate.getFullYear()+"-"+monthFormatted+"-01T00:00:00.569Z";
      let date2=savedDate.getFullYear()+"-"+monthFormatted+"-"+dateFormatted+"T23:59:59.569Z";
      leadTime = `&createdDate.greaterThanOrEqual=${date1}&createdDate.lessThan=${date2}`;       
    }else if(selectedLeadTime[0].name==="This Year"){
      let savedDate = new Date();
      let year = savedDate.getFullYear();
      let date1=savedDate.getFullYear()+"-01-01T00:00:00.569Z";
      let date2=savedDate.getFullYear()+"-12-31T23:59:59.569Z";
      leadTime = `&createdDate.greaterThanOrEqual=${date1}&createdDate.lessThan=${date2}`;    
    }else{
      let savedDate = new Date();
      let date2 = moment(savedDate).utc().format('YYYY-MM-DDT')+'00:00:00.569Z';
      savedDate.setDate(savedDate.getDate() - 7);
      let date1 = moment(savedDate).utc().format('YYYY-MM-DDT')+'23:59:59.569Z';
      leadTime = `&createdDate.greaterThanOrEqual=${date1}&createdDate.lessThan=${date2}`;
    }
    url = `${url}${leadTime}`;
  }

  if (selectedPageLayout!==2 && paginationValues) {
    withPagination = `&page=${paginationValues?.start}&size=${paginationValues?.end}`;
    url = `${url}${withPagination}`;
  }

  if (selectedCompany?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompany.length - 1; i++) {
      ids += `${selectedCompany[i].id},`;
    }
    ids += selectedCompany[selectedCompany.length - 1].id;
    company = `&companyId.in=${ids}`;
    url = `${url}${company}`;
  }

  if (selectedCountry?.length) {
    let ids = "";
    for (let i = 0; i < selectedCountry.length - 1; i++) {
      ids += `${selectedCountry[i].name},`;
    }
    ids += selectedCountry[selectedCountry.length - 1].name;
    country = `&country.in=${ids}`;
    url = `${url}${country}`;
  }

  if (selectedState?.length) {
    let ids = "";
    for (let i = 0; i < selectedState.length - 1; i++) {
      ids += `${selectedState[i].name},`;
    }
    ids += selectedState[selectedState.length - 1].name;
    state = `&state.in=${ids}`;
    url = `${url}${state}`;
  }

  if (selectedCity?.length) {
    let ids = "";
    for (let i = 0; i < selectedCity.length - 1; i++) {
      ids += `${selectedCity[i].name},`;
    }
    ids += selectedCity[selectedCity.length - 1].name;
    city = `&city.in=${ids}`;
    url = `${url}${city}`;
  }
  //console.log(selectedIndustry,'selectedIndustryselectedIndustry')
  if (selectedIndustry?.length) {
    let ids = "";
    for (let i = 0; i < selectedIndustry.length - 1; i++) {
      ids += `${selectedIndustry[i].id},`;
    }
    ids += selectedIndustry[selectedIndustry.length - 1]?.id;
    industryId = `&industryId.in=${ids}`;
    url = `${url}${industryId}`;
  }

  if (selectedEmployeecount?.length) {
    let ids = "";
    for (let i = 0; i < selectedEmployeecount.length - 1; i++) {
      ids += `${selectedEmployeecount[i].id},`;
    }
    ids += selectedEmployeecount[selectedEmployeecount.length - 1].id;
    rangeId = `&rangeId.in=${ids}`;
    url = `${url}${rangeId}`;
  }
  if (searchKeyword) {
    let searchCondition = `&title.contains=${searchKeyword}`;
    url = `${url}${searchCondition}`;
  }

  if (selectedCompanyTag?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanyTag.length - 1; i++) {
      ids += `${selectedCompanyTag[i]},`;
    }
    ids += selectedCompanyTag[selectedCompanyTag.length - 1];
    companyTagId = `&tags=${ids}`;
    url = `${url}${companyTagId}`;
  }

  if (selectedLeadStatus?.length) {
    let ids = "";
    for (let i = 0; i < selectedLeadStatus.length - 1; i++) {
      ids += `${selectedLeadStatus[i].id},`;
    }
    ids += selectedLeadStatus[selectedLeadStatus.length - 1].id;
    leadStatus = `&statusId.in=${ids}`;
    url = `${url}${leadStatus}`;
  }

  if (selectedLeadRating?.length) {
    let ids = "";
    for (let i = 0; i < selectedLeadRating.length - 1; i++) {
      ids += `${selectedLeadRating[i].ratingText},`;
    }
    ids += selectedLeadRating[selectedLeadRating.length - 1].ratingText;
    leadRating = `&rate.in=${ids}`;
    url = `${url}${leadRating}`;
  }

  if(topSearchValue){
    const searchCondition = `&fullname.contains=${topSearchValue}`;
    url = `${url}${searchCondition}`;
  }

  if(selectedLeadOwner){    
    url = `${url}&createdBy.contains=${selectedLeadOwner}`;
  }
  if(selectedFirstName){    
    url = `${url}&firstname.contains=${selectedFirstName}`;
  }
  if(selectedLastName){    
    url = `${url}&lastname.contains=${selectedLastName}`;
  }
  if(selectedCompanyName){    
    url = `${url}&companyName.contains=${selectedCompanyName}`;
  }
  if(selectedLeadSource){
    url = `${url}&leadSource.contains=${selectedLeadSource}`;
  }
  if(selectedTitle){    
    url = `${url}&title.contains=${selectedTitle}`;
  }
  if(selectedZipCode){    
    url = `${url}&zipcode.contains=${selectedZipCode}`;
  }
  if (url.indexOf("&") !== -1) {
    url = url.replace(/&/, "?");
  }
  return url;
};

export const createActivityPayload=(payload,url)=>{
  let activityTime;
  if(payload?.date?.length){    
    let sdate = new Date(payload?.date[0]);
    let edate = new Date(payload?.date[1]);
    let date1 = moment(sdate).utc().format('YYYY-MM-DDT')+'00:00:00.569Z';
    let date2 = moment(edate).utc().format('YYYY-MM-DDT')+'23:59:59.569Z';
    activityTime = `&lastUpdated.greaterThanOrEqual=${date1}&lastUpdated.lessThan=${date2}`;
    url = `${url}${activityTime}`;
  }
  if(payload?.activity){ 
    url = `${url}&note.contains=${payload?.activity}`;
  }
  return url;
}

export const createActivityPayloadForRemarks=(payload,url)=>{
  let activityTime;
  if(payload?.date?.length){    
    let sdate = new Date(payload?.date[0]);
    let edate = new Date(payload?.date[1]);
    let date1 = moment(sdate).utc().format('YYYY-MM-DDT')+'00:00:00.569Z';
    let date2 = moment(edate).utc().format('YYYY-MM-DDT')+'23:59:59.569Z';
    activityTime = `&interactionDate.greaterThanOrEqual=${date1}&interactionDate.lessThan=${date2}`;
    url = `${url}${activityTime}`;
  }
  if(payload?.activity){
    if(payload?.activity==="Contact"){
    url = `${url}&isContacted.equals=true`;
    }else if(payload?.activity==="Contact Back"){
    url = `${url}&isContactBackRequired.equals=true`;
    }else if(payload?.activity==="Display"){
    url = `${url}&isToDisplay.equals=true`;
    }else{
    url = `${url}&remarks.equals=${payload?.activity}`; 
    }    
  }
  return url;
}