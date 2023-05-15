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
    let searchCondition = `&shortIntro.contains=${searchKeyword}`;
    url = `${url}${searchCondition}`;
  }

  if (selectedCompanyTag?.length) {
    let ids = "";
    for (let i = 0; i < selectedCompanyTag.length - 1; i++) {
      ids += `${selectedCompanyTag[i].company.id},`;
    }
    ids += selectedCompanyTag[selectedCompanyTag.length - 1].company.id;
    companyTagId = `&id.in=${ids}`;
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


export const createExecutivePayload = (
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
      ids += `${selectedCompanyTag[i].company.id},`;
    }
    ids += selectedCompanyTag[selectedCompanyTag.length - 1].company.id;
    companyTagId = `&id.in=${ids}`;
    url = `${url}${companyTagId}`;
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
